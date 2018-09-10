import { NgModule, LOCALE_ID, ErrorHandler, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';

import { AuthenticationGuardComponent } from './authentication-guard.component';

@NgModule({})
export class SharedModule {
  constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
        throw new Error('Shared module is already loaded. Import it only in app.module.ts');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      // CUIDADO COM O QUE O SENHOR COLOCA NESSE ARRAY DE PROVIDERS.
      // O SISTEMA VAI CARREGAR ISSO TUDO. EM TODOS OS MODULOS.
      providers: [
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        AuthenticationGuardComponent,
      ]
    }
  }
}
