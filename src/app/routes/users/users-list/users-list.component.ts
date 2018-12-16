import { Component, ViewEncapsulation, Output, EventEmitter, Inject, LOCALE_ID, ViewChild } from '@angular/core';
import { faTrash, faEdit, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ListAnimation } from './../../../modules/animations/list.animation';
import { User } from '../../../domain/user';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/domain/pagination';
import { FormGroup } from '@angular/forms';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { HttpService } from 'src/app/services/http.service';
import { PaginationComponent } from 'src/app/modules/ui/pagination.component';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ ListAnimation ],
})

export class UsersListComponent {
  @ViewChild('pages') pages: PaginationComponent;

  @Output() editEvent: EventEmitter<User> = new EventEmitter<User>();
  @Output() deleteEvent: EventEmitter<User> = new EventEmitter<User>();

  public faTrash: IconDefinition = faTrash;
  public faEdit: IconDefinition = faEdit;
  public faEllipsisV: IconDefinition = faEllipsisV;
  public pagination: Observable<Pagination<User>>;

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
    }
  }

  hide(event): void {
    if (event.toState == "void") {
      this.pages.visible.next(false);
    }
  }

  list(offset: number, limit: number, filters: FormGroup): Observable<Pagination<User>> {
    this.pagination = this.userService.paginate('users', offset, limit, filters);
    
    return this.pagination;
  }
}
