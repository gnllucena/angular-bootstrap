import { NgModule, LOCALE_ID, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthenticationGuardComponent } from './authentication-guard.component';
import { HttpBackendInterceptorComponent } from './http-backend-interceptor.component';
import { HttpBearerInterceptorComponent } from './http-bearer-interceptor.component';
import { HttpLoaderInterceptorComponent } from './http-loader-interceptor.component';

@NgModule({})
export class SharedModule {
  constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
      throw new Error('Shared module is already loaded. Import it only in app.module.ts!');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      // CUIDADO COM O QUE O SENHOR COLOCA NESSE ARRAY DE PROVIDERS.
      // O SISTEMA VAI CARREGAR ISSO TUDO. EM TODOS OS MODULOS.
      providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: HTTP_INTERCEPTORS, useClass: HttpLoaderInterceptorComponent, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpBearerInterceptorComponent, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpBackendInterceptorComponent, multi: true },
        AuthenticationGuardComponent,
      ]
    }
  }
}