import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Jwt } from '../../domain/jwt';
import { Card } from './../../domain/card';
import { User } from '../../domain/user';
import { Pagination } from 'src/app/domain/pagination';

@Injectable()
export class HttpBackendInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(mergeMap(() => {
      if (req.url.includes('identity') && req.method === 'POST') {
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

      if (req.url.includes('cards') && req.method === 'GET') {
        let cards: Card[] = [];
        
        var card: Card = {
          Title: 'Card title',
          Description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
          Link: 'Dapibus ac facilisis in'
        }

        for (let i = 0; i < 9; i++) {
          cards.push(card);
        }
  
        return of(new HttpResponse({ status: 200, body: cards }));
      }

      if (req.url.includes('users?') && req.method === 'GET') {
        let users: User[] = [];
        
        var data = new Date();

        var user: User = {
          Id: 1,
          Name: 'Gabriel Lucena',
          Email: 'gnllucena@gmail.com',
          Document: '023.437.673-27',
          Birthdate:  new Date('1991-04-28T12:00:00'),
          Country: 'Brasil',
          Profile: 'Administrator',
          Active: true
        }

        for (let i = 0; i < 10; i++) {
          users.push(user);
        }

        let pagination: Pagination<User> = {
          Items: users,
          Limit: 10,
          Offset: 0,
          Total: 192
        };
  
        return of(new HttpResponse({ status: 200, body: pagination }));
      }

      if (req.url.includes('users/') && req.method === 'GET') {
        var user: User = {
          Id: 1,
          Name: 'Gabriel Lucena',
          Email: 'gnllucena@gmail.com',
          Document: '023.437.673-27',
          Birthdate:  new Date('1991-04-28T12:00:00'),
          Country: 'Brasil',
          Profile: 'Administrator',
          Active: true
        }

        return of(new HttpResponse({ status: 200, body: user }));
      }

      if (req.url.includes('error') && req.method === 'GET') {
        return throwError({ error: { message: 'Error thrown.' } });
      }
        
      return next.handle(req);      
    }))
    .pipe(materialize())
    .pipe(delay(500))
    .pipe(dematerialize());
  }
}