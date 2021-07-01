import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import * as newrelic from "newrelic";
import { TcpContext } from "@nestjs/microservices";

@Injectable()
export class RcpInterceptor implements NestInterceptor {
  intercept(
    executionContext: ExecutionContext,
    next: CallHandler
  ): Observable<any> {
    if (executionContext.getType() !== "rpc") {
      return next.handle();
    }

    const context = executionContext.getArgByIndex(1);
    const pattern = context.getPattern() || context.getTopic();

    if (context instanceof TcpContext) {
      const tracer = (newrelic as any).agent.tracer;

      return tracer.transactionNestProxy("tcp", function startTcpSegment() {
        const tx = tracer.getTransaction();

        newrelic.addCustomAttributes({
          name: `TcpTransaction/Nestjs/${pattern}`,
          transactionSubType: "Nestjs"
        });

        return next.handle().pipe(
          catchError((err) => {
            newrelic.noticeError(err);
            return throwError(err);
          }),
          finalize(() => tx.end())
        );
      })();
    }

    const transaction = newrelic.getTransaction();
    newrelic.setTransactionName(pattern);

    return next.handle().pipe(
      catchError((err) => {
        newrelic.noticeError(err);
        return throwError(err);
      }),
      finalize(() => transaction && transaction.end())
    );
  }
}
