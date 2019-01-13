import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';

import { LoadingService } from '../../services/loading.service';

@Injectable()
export class HttpLoaderInterceptor implements HttpInterceptor {
  private requests = 0;

  constructor(private loadingService: LoadingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.loadingService.loading.next(true);

    return next.handle(request)
      .pipe(tap(response => {
        this.requests++;

        this.finishing(request);
      }), catchError(err => {
        this.requests++;
        
        this.finishing(request);

        throw err;
      })
    );
  }

  private finishing(request: HttpRequest<any>) {
    this.requests--;

    if (this.requests == 0) {
      this.loadingService.loading.next(false);

      this.requests = 0;
    }
  }
}