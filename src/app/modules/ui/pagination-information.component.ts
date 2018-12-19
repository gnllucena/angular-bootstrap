import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Pagination } from 'src/app/domain/pagination';
import { FadeAnimation } from '../animations/fade.animation';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'pagination-information',
  template: `
    <div [@fade-transition]="(visible | async) ? 'visible' : 'hidden'" class="small text-right mb-2">
      {{ listed }} out of {{ total }} {{ entity }}
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  animations: [ FadeAnimation ]
})
export class PaginationInformationComponent {
  @Output() paginateEvent: EventEmitter<number> = new EventEmitter<number>();
  @Input() entity: string;
  @Input() set pagination(data: Pagination<object>) {
    if (!data)
      return;

    this.listed = data.Items.length;
    this.total = data.Total;
  }

  public visible = new BehaviorSubject<Boolean>(false);
  public listed: number;
  public total: number;
}
