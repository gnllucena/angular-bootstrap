import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpBearerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user = JSON.parse(sessionStorage.getItem('user'));
    
    if (user && user.token) {
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
