import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Jwt } from '../../domain/jwt';
import { Card } from './../../domain/card';
import { User } from '../../domain/user';
import { Pagination } from '../../domain/pagination';
import { Country } from '../../domain/country';

@Injectable()
export class HttpBackendInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(mergeMap(() => {
      if (req.url.includes('identity') && req.method === 'POST') {
        var data = new Date();
        data.setDate(data.getDate() + 1);
        
        let jwt = new Jwt({
          Token: "eaea23424asdfaefwr52asdfasdf32s",
          Timeout: data,
          Username: req.body.Email.split("@")[0],
          Name: req.body.Email.split("@")[0],
          Email: req.body.Email
        });
  
        return of(new HttpResponse({ status: 200, body: jwt }));
      }

      if (req.url.includes('cards') && req.method === 'GET') {
        let cards: Card[] = [];
        
        for (let i = 0; i < 9; i++) {
          cards.push(new Card({
            Title: 'Card title',
            Description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            Link: 'Dapibus ac facilisis in'
          }));
        }
  
        return of(new HttpResponse({ status: 200, body: cards }));
      }

      if (req.url.includes('users') && req.method === 'POST') {
        return of(new HttpResponse({ status: 201, body: 99999  }));
      }

      if (req.url.includes('users') && req.method === 'PUT') {      
        let response = {  
          message: 'Something is not right',
          erros: [  
            {  
              code: '115',
              error: 'Duplicated email',
              property: 'Email',
              value: 'gnllucena@gmail.com'
            },
            {  
              code: '116',
              error: 'Duplicated document',
              property: 'Documento',
              value: '023.437.673-27'
            }
          ]
        };

        throw new HttpErrorResponse({ status: 400, error: response });
      }

      if (req.url.includes('users') && req.method === 'DELETE') {      
        return of(new HttpResponse({ status: 204 }));
      }

      if (req.url.includes('users?') && req.method === 'GET') {
        let users: User[] = [];
        
        var data = new Date();
        
        let found = true;
        let limit = 0;
        let offset = 0
        let total = 0;

        if (req.urlWithParams.includes('Kanto')) {
          found = false;
        }

        if (found) {
          users.push(new User({ Id: 1, Name: 'Pikachu', Email: 'pikachu@gmail.com', Document: '02343767327', Birthdate: new Date('1991-04-28T12:00:00'), Country: 'Kanto', Profile: 'Administrator', Active: true }));
          users.push(new User({ Id: 2, Name: 'Charmander', Email: 'charmander@gmail.com', Document: '02343767327', Birthdate: new Date('1991-04-28T12:00:00'), Country: 'Kanto', Profile: 'Regular', Active: false }));
          users.push(new User({ Id: 3, Name: 'Squirtle', Email: 'squirtle@gmail.com', Document: '02343767327', Birthdate: new Date('1991-04-28T12:00:00'), Country: 'Kanto', Profile: 'Administrator', Active: true }));
          users.push(new User({ Id: 4, Name: 'Bulbasaur', Email: 'bulbasaur@gmail.com', Document: '02343767327', Birthdate: new Date('1991-04-28T12:00:00'), Country: 'Kanto', Profile: 'Administrator', Active: true }));
          users.push(new User({ Id: 5, Name: 'Mew', Email: 'mew@gmail.com', Document: '02343767327', Birthdate: new Date('1991-04-28T12:00:00'), Country: 'Kanto', Profile: 'Administrator', Active: false }));
          users.push(new User({ Id: 6, Name: 'Chansey', Email: 'chansey@gmail.com', Document: '02343767327', Birthdate: new Date('1991-04-28T12:00:00'), Country: 'Kanto', Profile: 'Administrator', Active: true }));
          users.push(new User({ Id: 7, Name: 'Blaziken', Email: 'blaziken@gmail.com', Document: '02343767327', Birthdate: new Date('1991-04-28T12:00:00'), Country: 'Hoenn', Profile: 'Regular', Active: true }));
          users.push(new User({ Id: 8, Name: 'Feraligart', Email: 'feraligart@gmail.com', Document: '02343767327', Birthdate: new Date('1991-04-28T12:00:00'), Country: 'Johto', Profile: 'Administrator', Active: true }));
          users.push(new User({ Id: 9, Name: 'Chikorita', Email: 'chikorita@gmail.com', Document: '02343767327', Birthdate: new Date('1991-04-28T12:00:00'), Country: 'Johto', Profile: 'Regular', Active: false }));
          users.push(new User({ Id: 10, Name: 'Torchic', Email: 'torchic@gmail.com', Document: '02343767327', Birthdate: new Date('1991-04-28T12:00:00'), Country: 'Hoenn', Profile: 'Regular', Active: true }));

          limit = Number((req.url.split('limit=')[1]).split('&')[0]),
          offset = Number((req.url.split('offset=')[1]).split('&')[0]),
          total = 192
        }
        
        let pagination: Pagination<User> = {
          Items: users,
          Limit: limit,
          Offset:  offset,
          Total: total
        };
  
        return of(new HttpResponse({ status: 200, body: pagination }));
      }

      if (req.url.includes('users/') && req.method === 'GET') {
        var user = new User({
          Id: 666,
          Name: 'Mewtwo',
          Email: 'mewtwo@gmail.com',
          Document: '02343767327',
          Birthdate:  new Date('1991-04-28T12:00:00'),
          Country: 'Kanto',
          Profile: 'Administrator',
          Active: true
        })

        return of(new HttpResponse({ status: 200, body: user }));
      }

      if (req.url.includes('countries') && req.method === 'GET') {
        let countries: Country[] = [];

        countries.push(new Country({ Id: 1, Name: 'Kanto' }));
        countries.push(new Country({ Id: 2, Name: 'Johto' }));
        countries.push(new Country({ Id: 3, Name: 'Hoenn' }));
        countries.push(new Country({ Id: 4, Name: 'Sinnoh' }));
        countries.push(new Country({ Id: 5, Name: 'Unova' }));
        countries.push(new Country({ Id: 6, Name: 'Kalos' }));
        countries.push(new Country({ Id: 7, Name: 'Alola' }));

        return of(new HttpResponse({ status: 200, body: countries }));
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