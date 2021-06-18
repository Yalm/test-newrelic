import { DynamicModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ApmErrorInterceptor } from './apm-error.interceptor';

@Module({})
export class NewrelicModule {
  static forRoot(
    options?: { global?: boolean }
  ): DynamicModule {
    return {
      global: options?.global ?? true,
      module: NewrelicModule,
      providers: [
        {
          provide: APP_INTERCEPTOR,
          useClass: ApmErrorInterceptor,
        }
      ],
      exports: [],
    };
  }
}
