import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ListAnimation } from './../../../modules/animations/list.animation';
import { User } from '../../../domain/user';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/domain/pagination';
import { FormGroup } from '@angular/forms';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ ListAnimation ],
})

export class UsersListComponent {
  @Output() editEvent: EventEmitter<User> = new EventEmitter<User>();
  @Output() deleteEvent: EventEmitter<User> = new EventEmitter<User>();

  public faTrash: IconDefinition = faTrash;
  public faEdit: IconDefinition = faEdit;
  public pagination: Observable<Pagination<User>>;

  constructor(public httpService: HttpService<User>) { }

  edit(user: User): void {
    this.editEvent.emit(user);
  }

  delete(user: User): void {
    this.deleteEvent.emit(user);
  }

  list(offset: Number, limit: Number, filters: FormGroup): Observable<Pagination<User>> {
    this.pagination = this.httpService.list('users', offset, limit, filters);
    
    return this.pagination;
  }
}
