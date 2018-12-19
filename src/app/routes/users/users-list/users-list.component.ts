import { Component, ViewEncapsulation, Output, EventEmitter, Inject, LOCALE_ID, ViewChild } from '@angular/core';
import { faTrash, faEdit, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ListAnimation } from './../../../modules/animations/list.animation';
import { User } from '../../../domain/user';
import { Observable, of } from 'rxjs';
import { Pagination } from 'src/app/domain/pagination';
import { FormGroup } from '@angular/forms';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { HttpService } from 'src/app/services/http.service';
import { PaginationComponent } from 'src/app/modules/ui/pagination.component';
import { PaginationInformationComponent } from 'src/app/modules/ui/pagination-information.component';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ ListAnimation ],
})

export class UsersListComponent {
  @ViewChild('pages') pages: PaginationComponent;
  @ViewChild('information') information: PaginationInformationComponent;

  @Output() editEvent: EventEmitter<User> = new EventEmitter<User>();
  @Output() deleteEvent: EventEmitter<User> = new EventEmitter<User>();

  public faTrash: IconDefinition = faTrash;
  public faEdit: IconDefinition = faEdit;
  public faEllipsisV: IconDefinition = faEllipsisV;
  public pagination: Observable<Pagination<User>>;
  public limit: number = 10;
  public offset: number;
  public filters: FormGroup;

  constructor(
    public userService: HttpService<User>,
    @Inject(LOCALE_ID) public locale: string) { }

  edit(user: User): void {
    this.editEvent.emit(user);
  }

  delete(user: User): void {
    this.deleteEvent.emit(user);
  }
  
  show(event): void {
    if (event.fromState == "void") {
      this.pages.visible.next(true);
      this.information.visible.next(true);
    }
  }

  hide(event): void {
    if (event.toState == "void") {
      this.pages.visible.next(false);
      this.information.visible.next(false);
    }
  }

  list(offset: number, filters: FormGroup): Observable<Pagination<User>> {
    if (!filters) {
      filters = this.filters;
    } else {
      this.filters = filters;
    }

    if (offset === null || offset === undefined) {
      offset = this.offset;
    } else {
      this.offset = offset;
    }

    this.pagination = this.userService.paginate('users', offset, this.limit, filters);
    
    return this.pagination;
  }
}
