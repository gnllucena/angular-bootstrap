import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jwt } from '../domain/jwt';
import { User } from '../domain/user';

@Injectable()
export class AuthenticationService {
  public jwt = new BehaviorSubject<Jwt>(null);
  public username = new BehaviorSubject<String>('');

  constructor(private http: HttpClient) { 
    let jwt = JSON.parse(localStorage.getItem('user')) as Jwt;

    if (jwt) {
      this.jwt.next(jwt);
      this.username.next(jwt.Username);
    }
  }

  token(): Jwt {
    return this.jwt.value;
  }

  login(user: User): Observable<Jwt> {
    return this.http.post<Jwt>(environment.server + '/identity', user)
      .pipe(map(jwt => {
        localStorage.setItem('user', JSON.stringify(jwt));

        this.jwt.next(jwt);
        this.username.next(jwt.Username);

        return jwt;
      }));
  }

  refresh(user: User): Jwt {
    throw Error('Not implemented.');
  }

  revoke(): void {
    localStorage.removeItem("user");
    
    this.jwt.next(null);
    this.username.next(null);

    //todo: revoke token from identity server
  }
}
