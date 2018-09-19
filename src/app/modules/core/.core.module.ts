import { NgModule, LOCALE_ID, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpBackendInterceptor } from './http-backend.interceptor';
import { HttpBearerInterceptor } from './http-bearer.interceptor';
import { HttpLoaderInterceptor } from './http-loader.interceptor';

import { AuthenticationGuard } from './authentication.guard';

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
      // CUIDADO COM O QUE O SENHOR COLOCA NESSE ARRAY DE PROVIDERS.
      // O SISTEMA VAI CARREGAR ISSO TUDO. EM TODOS OS MODULOS.
      providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: HTTP_INTERCEPTORS, useClass: HttpLoaderInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpBearerInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpBackendInterceptor, multi: true },
        AuthenticationGuard
      ]
    }
  }
}