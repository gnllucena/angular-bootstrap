import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

import { LoadingService } from '../../services/loading.service';

@Injectable()
export class HttpLoaderInterceptorComponent implements HttpInterceptor {
  private requests = 0;

  constructor(private loadingService: LoadingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.requests++;
    
    this.loadingService.loading = true;

    return next.handle(request)
      .pipe(tap(res => {
        if (res instanceof HttpResponse) {
          this.finishing();
        }
      }),
      catchError(err => {
        this.finishing();

        throw err;
      })
    );
  }

  private finishing() {
    this.requests--;

    if (this.requests === 0) {
      this.loadingService.loading = false;
    }
  }
}