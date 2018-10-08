import { environment } from './../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Card } from './../../domain/card';

@Injectable()
export class DotService {
  constructor(private http: HttpClient) { }
  
  get(): Observable<Card[]> {
    return this.http.get<Card[]>(environment.server + '/cards');
  }
}
