import { Component, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pagination } from 'src/app/domain/pagination';
import { FadeAnimation } from '../animations/fade.animation';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ FadeAnimation ]
})
export class PaginationComponent {
  @Input() set pagination(data: Pagination<object>) {
    if (data.Offset <= data.Limit) {
      this.firstPage = true;
    }

    if (data.Offset >= data.Total - data.Limit) {
      this.lastPage = true;
    }

    let pages = Math.ceil(data.Total / data.Limit);

    this.pages = Array.from(Array(10).keys(), n => n + 1)
  }

  public visible = new BehaviorSubject<Boolean>(false);
  public pages: Array<number> = new Array<number>();
  public currentPage: number;
  public firstPage: boolean;
  public lastPage: boolean;
}
