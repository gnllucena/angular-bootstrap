import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../domain/User';
import { Jwt } from '../domain/Jwt';

@Injectable()
export class AuthenticationService {
  public jwt = new BehaviorSubject<Jwt>(null);

  constructor(private http: HttpClient) { 
    var token = JSON.parse(localStorage.getItem('user')) as Jwt;

    this.jwt.next(token);
  }

  token(): Jwt {
    return this.jwt.value;
  }

  login(user: User): Observable<Jwt> {
    return this.http.post<Jwt>(environment.server + '/login', user)
      .pipe(map(jwt => {
        localStorage.setItem('user', JSON.stringify(jwt));

        this.jwt.next(jwt);

        return jwt;
      }));
  }

  refresh(user: User): Jwt {
    throw Error('Not implemented.');
  }

  revoke(): void {
    localStorage.removeItem("user");
    
    this.jwt.next(null);

    //todo: revoke token from identity server
  }
}
