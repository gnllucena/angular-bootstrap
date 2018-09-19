import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Jwt } from '../../domain/jwt';

@Injectable()
export class HttpBackendInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/identity') || 
        req.url.endsWith('/users') || 
        req.url.endsWith('/error')) {

      return of(null).pipe(mergeMap(() => {
        if (req.url.endsWith('/identity') && req.method === 'POST') {
          var data = new Date();
          data.setDate(data.getDate() + 1);
          
          let jwt: Jwt = {
            Token: "eaea23424asdfaefwr52asdfasdf32s",
            Timeout: data,
            Username: req.body.Email.split("@")[0],
            Name: req.body.Email.split("@")[0],
            Email: req.body.Email
          };
    
          return of(new HttpResponse({ status: 200, body: jwt }));
        }
  
        if (req.url.endsWith('/users') && req.method === 'GET') {
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
  
        if (req.url.endsWith('/error') && req.method === 'GET') {
          return throwError({ error: { message: 'Error thrown.' } });
        }
          
        return next.handle(req);      
      }))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
    }
  }
}