import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService {
  public loading = new BehaviorSubject<Boolean>(false);
}
