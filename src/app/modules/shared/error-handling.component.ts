// import { Router } from '@angular/router';
// import { ErrorHandler, Injectable, Injector, Inject } from '@angular/core';

// import { ToastrService } from 'ngx-toastr';
// import { HttpErrorResponse } from '@angular/common/http';
// import { LoadingService } from 'app/services/loading.service';

// import * as _ from 'lodash';

// @Injectable()
// export class ErrorsHandler implements ErrorHandler {

//   constructor(
//     @Inject(Injector) private injector: Injector,
//     private loadingService: LoadingService,
//   ) {}

//   private get toastr(): ToastrService {
//     return this.injector.get(ToastrService);
//   }

//   private get router(): Router {
//     return this.injector.get(Router);
//   }

//   public handleError(error: any): void {
//     console.error(error);
//     this.loadingService.onLoadingFinished.emit();

//     if (_.has(error, 'error.erros')) {
//       error.error.erros.forEach((errorItem) => {
//         this.toastr.error(errorItem.mensagem.split('\n')[0]);
//       });

//       return;
//     }

//     if (error instanceof HttpErrorResponse) {
//       if (error.status === 0 || error.status === 409 || error.status === 400 || error.status === 422) {
//         this.toastr.error('Algo deu errado, tente novamente e se ainda não funcionar, avise-nos!');
//       }

//       if (error.status === 401) {
//         this.router.navigateByUrl('/login');
//       }

//       if (error.status === 403) {
//         this.toastr.warning('Você não está autorizado a fazer essa ação');
//       }

//       if (error.status === 500 || error.status === 502) {
//         this.toastr.error('Algo deu errado, tente novamente e se ainda não funcionar, avise-nos!');
//       }

//       return this.loadingService.onLoadingFinished.emit();
//     }
//   }
// }
