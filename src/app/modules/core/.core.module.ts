import { NgModule, LOCALE_ID, Optional, SkipSelf, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpBackendInterceptor } from './http-backend.interceptor';
import { HttpBearerInterceptor } from './http-bearer.interceptor';
import { HttpLoaderInterceptor } from './http-loader.interceptor';
import { HttpErrorHandlingInterceptor } from './http-error-handling.interceptor';
import { ErrorHandling } from './error-handling';

import { AuthenticationGuard } from './authentication.guard';
import { ToastService } from '../../services/toast.service';

@NgModule({})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Core module is already loaded. Import it only in app.module.ts!');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorHandlingInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpLoaderInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpBearerInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpBackendInterceptor, multi: true },
        { provide: ErrorHandler, useClass: ErrorHandling },
        AuthenticationGuard,
        ToastService
      ]
    }
  }
}