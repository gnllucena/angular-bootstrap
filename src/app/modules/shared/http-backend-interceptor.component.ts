import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class HttpBackendInterceptorComponent implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/fake/login') || 
        req.url.endsWith('/fake/users') || 
        req.url.endsWith('/fake/error')) {

      return of(null).pipe(mergeMap(() => {
        this.handleLogin(req);
  
        this.handleUsers(req);
  
        this.handleError(req);
          
        return next.handle(req);      
      }))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
    }
  }

  handleLogin(req: HttpRequest<any>) {
    if (req.url.endsWith('/fake/login') && req.method === 'POST') {
      var data = new Date();
      data.setDate(data.getDate() + 1);

      let body = {
        token: "eaea23424asdfaefwr523324sdf",
        timeout: data,
        email: "gnllucena@gmail.com",
        name: "Gabriel Lucena"
      };

      return of(new HttpResponse({ status: 200, body }));
    }
  }

  handleUsers(req: HttpRequest<any>) {
    if (req.url.endsWith('/fake/users') && req.method === 'GET') {
      let users = [
        {
          id: 1,
          email: "cecilharvey@gmail.com",
          name: "Cecil Harvey"
        },
        {
          id: 2,
          email: "tidusjecht@gmail.com",
          name: "Tidus Jecht"
        },
        {
          id: 3,
          email: "squall.leonhart@gmail.com",
          name: "Squall Leonhart"
        },
        {
          id: 4,
          email: "cloudstrife@gmail.com",
          name: "Cloud Strife"
        },
        {
          id: 5,
          email: "kaindragon@gmail.com",
          name: "Kain Dragon"
        }
      ];

      return of(new HttpResponse({ status: 200, body: users }));
    }
  }  

  handleError(req: HttpRequest<any>) {
    if (req.url.endsWith('/fake/error') && req.method === 'GET') {
      return throwError({ error: { message: 'Error thrown.' } });
    }
  }
}