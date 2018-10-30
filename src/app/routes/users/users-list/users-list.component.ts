import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ListAnimation } from './../../../modules/animations/list.animation';
import { User } from './../../../domain/user';
import { Observable } from 'rxjs';
import { UsersService } from './../users.service';
import { Pagination } from 'src/app/domain/pagination';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ ListAnimation ],
})

export class UsersListComponent implements OnInit {
  @Input() filters: FormGroup;
  @Output() editEvent: EventEmitter<User> = new EventEmitter<User>();
  @Output() deleteEvent: EventEmitter<User> = new EventEmitter<User>();

  public faTrash = faTrash;
  public faEdit = faEdit;
  public pagination: Observable<Pagination<User>>;

  constructor(
    public userService: UsersService) { }

  ngOnInit(): void {
    this.list(0, 10);
  }

  filter(filters: FormGroup): void {
    this.filters = filters;

    this.list(0, 10);
  }

  edit(user: User): void {
    this.editEvent.emit(user);
  }

  delete(user: User): void {
    this.deleteEvent.emit(user);
  }

  list(offset: Number, limit: Number): void {
    this.pagination = this.userService.get(offset, limit, this.filters);
  }
}
