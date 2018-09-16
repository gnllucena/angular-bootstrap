import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../domain/user';
import { Jwt } from '../domain/jwt';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  jwt(): Jwt {
    return JSON.parse(sessionStorage.getItem('user')) as Jwt;
  }

  login(user: User): Observable<Jwt> {
    return this.http.post<Jwt>(environment.server + '/login', user)
      .pipe(map(jwt => {
        sessionStorage.setItem('user', JSON.stringify(jwt));

        return jwt;
      }));
  }

  refresh(user: User): Jwt {
    throw Error('Not implemented.');
  }

  revoke(): void {
    throw Error('Not implemented.');
  }
}
