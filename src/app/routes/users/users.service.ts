import { environment } from './../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../../domain/user';
import { Pagination } from 'src/app/domain/pagination';
import { FormGroup } from '@angular/forms';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }
  
  get(offset: Number, limit: Number, filters: FormGroup): Observable<Pagination<User>> {
    let query = '';

    if (filters) {
      Object.keys(filters.controls).forEach(element => {
        if (filters.controls[element].value) {
          query += '&' + element + '=' + filters.controls[element].value;
        }
      });
    } 

    return this.http.get<Pagination<User>>(
      environment.server + 
      '/users?offset=' + offset + '&limit=' + limit + query);
  }
}
