import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { faAngleRight, faAngleLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Pagination } from 'src/app/domain/pagination';
import { FadeAnimation } from '../animations/fade.animation';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'pagination',
  template: `
    <nav *ngIf="total > 0" [@fade-transition]="(visible | async) ? 'visible' : 'hidden'">
      <ul class="pagination justify-content-end">
        <li [ngClass]="{'disabled' : isFirstPage }" class="page-item">
          <a (click)="paginate(currentPage - 1)" class="page-link" href="javascript:void(0);">
            <fa-icon [icon]="faAngleLeft"></fa-icon>
          </a>
        </li>

        <li *ngFor="let page of pages" [ngClass]="{'active' : currentPage == page }" class="page-item">
          <a (click)="paginate(page)" class="page-link" href="javascript:void(0);">{{ page }}</a>
        </li>
        
        <li [ngClass]="{'disabled' : isLastPage }" class="page-item">
          <a (click)="paginate(currentPage + 1)" class="page-link" href="javascript:void(0);">
            <fa-icon [icon]="faAngleRight"></fa-icon>
          </a>
        </li>
      </ul>
    </nav>
  `,
  encapsulation: ViewEncapsulation.None,
  animations: [ FadeAnimation ]
})
export class PaginationComponent {
  @Output() paginateEvent: EventEmitter<number> = new EventEmitter<number>();
  
  @Input() set pagination(data: Pagination<object>) {
    if (!data)
      return;

    this.isFirstPage = false;
    this.isLastPage = false;
    
    if (data.Offset < data.Limit) {
      this.isFirstPage = true;
    }

    if (data.Offset >= data.Total - data.Limit) {
      this.isLastPage = true;
    }

    this.pages = new Array<string>();
    this.limit = data.Limit;
    this.total = data.Total;
    this.currentPage = Math.ceil(data.Offset / data.Limit + 1);
    this.lastPage = Math.ceil(data.Total / data.Limit);
        
    let delta = 2;
    let range = [];
    let aux;

    range.push(1);

    for (let i = this.currentPage - delta; i <= this.currentPage + delta; i++) {
      if (i < this.lastPage && i > 1) {
        range.push(i);
      }
    }
    
    range.push(this.lastPage);

    for (let i of range) {
      if (aux) {
        if (i - aux === 2) {
          this.pages.push(aux + 1);
        } else if (i - aux !== 1) {
          this.pages.push('...');
        }
      }

      this.pages.push(i);

      aux = i;
    }
  }

  paginate(number: any): void {
    let page = Number(number);

    if (page) {
      this.paginateEvent.emit((page - 1) * this.limit);
    }
  }

  public visible = new BehaviorSubject<Boolean>(false);
  public faAngleLeft: IconDefinition = faAngleLeft;
  public faAngleRight: IconDefinition = faAngleRight;

  public pages: Array<string> = new Array<string>();
  public currentPage: number;
  public lastPage: number;
  public limit: number;
  public total: number;
  public isLastPage: boolean;
  public isFirstPage: boolean;
}
