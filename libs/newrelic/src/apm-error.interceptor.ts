import {
    CallHandler,
    NestInterceptor,
} from '@nestjs/common/interfaces/features/nest-interceptor.interface';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { noticeError } from 'newrelic';

@Injectable()
export class ApmErrorInterceptor implements NestInterceptor {

    constructor() {}

    public intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> {
        return next.handle().pipe(
            catchError((err) => {
                noticeError(err);
                return throwError(err);
            }),
        );
    }
}