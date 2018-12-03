import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pagination } from 'src/app/domain/pagination';
import { FormGroup } from '@angular/forms';

@Injectable()
export class HttpService<T> {
  constructor(private http: HttpClient) { }
  
  post(route: string, form: FormGroup): Observable<T> { 
    return this.http.post<T>(environment.server + '/' + route, form.getRawValue());
  }

  put(route: string, id: number, form: FormGroup): Observable<T> { 
    return this.http.put<T>(environment.server + '/' + route + '/' + id, form.getRawValue());
  }

  delete(route: string, id: number): Observable<T> { 
    return this.http.delete<T>(environment.server + '/' + route + '/' + id);
  }

  get(route: string, id: number): Observable<T> {
    return this.http.get<T>(environment.server + '/' + route + '/' + id);
  }

  list(route: string): Observable<T[]>{
    return this.http.get<T[]>(environment.server + '/' + route);
  }

  paginate(route: string, offset: number, limit: number, filters: FormGroup): Observable<Pagination<T>> {
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
