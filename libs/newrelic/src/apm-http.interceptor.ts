import {
    CallHandler,
    NestInterceptor,
} from '@nestjs/common/interfaces/features/nest-interceptor.interface';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { NewrelicService } from './newrelic.service';

@Injectable()
export class ApmHttpInterceptor implements NestInterceptor {

    constructor(private readonly newrelicService: NewrelicService) { }

    public intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> {
        const httpArgumentsHost = context.switchToHttp();
        const request = httpArgumentsHost.getRequest();

        this.newrelicService.startWebTransaction(request.uri, () => {
            const tx = this.newrelicService.getTransaction()
            const response = httpArgumentsHost.getResponse();
            response.on('finish', () => {
                tx.end()
            })
        });

        return next.handle();
    }
}