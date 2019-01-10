import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpBearerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.Token) {
      let authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`
        }
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
