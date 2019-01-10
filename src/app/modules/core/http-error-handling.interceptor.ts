import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Inject, Injector } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
 
 export class HttpErrorHandlingInterceptor implements HttpInterceptor {
  private toastService: ToastService;
  private router: Router;

  constructor(
    @Inject(Injector) private injector: Injector,
  ) {
    this.toastService = this.injector.get(ToastService);
    this.router = this.injector.get(Router);
  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.router.navigateByUrl('/identity');
      
              return;
            }
      
            if (error.status === 403) {
              this.toastService.error('You are not authorized to do this action.', 'Nope!');
      
              return;
            }
      
            if (error.status >= 400 && error.status <= 499) {
              error.error.erros.forEach((item) => {
                this.toastService.alert(item.error, error.error.message);
              });
            }
      
            if (error.status === 0 || 
                error.status >= 500 && error.status === 599) {
              this.toastService.error('Something has happened, please try again in a few moments.');
      
              return;
            }
          } else {
            this.toastService.error('Something went terribly wrong, please call one of our monkeys.');
          }

          return throwError(error);
        })
      )
  }
}