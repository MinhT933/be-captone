import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export interface ResponseData<T> {
    result: T;
    statusCode: number;
}
export declare class TransformInterceptor<T> implements NestInterceptor<T, ResponseData<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseData<T>>;
}
