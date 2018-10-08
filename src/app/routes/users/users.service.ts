import { environment } from './../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from './../../domain/User';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }
  
  get(): Observable<User[]> {
    return this.http.get<User[]>(environment.server + '/users');
  }
}
