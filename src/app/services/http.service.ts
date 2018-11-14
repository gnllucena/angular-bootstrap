import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pagination } from 'src/app/domain/pagination';
import { FormGroup } from '@angular/forms';

@Injectable()
export class HttpService<T> {
  constructor(private http: HttpClient) { }
  
  post(): void { }

  put(): void { }

  delete(): void { }

  get(route: String, id: Number): Observable<T> {
    return this.http.get<T>(environment.server + '/' + route + '/' + id);
  }

  list(route: String, offset: Number, limit: Number, filters: FormGroup): Observable<Pagination<T>> {
    let query = '';

    if (filters) {
      Object.keys(filters.controls).forEach(element => {
        if (filters.controls[element].value) {
          query += '&' + element + '=' + filters.controls[element].value;
        }
      });
    } 

    return this.http.get<Pagination<T>>(environment.server +  '/' + route + '?offset=' + offset + '&limit=' + limit + query);
  }
}
