import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
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
  
  public faTrash = faTrash;
  public faEdit = faEdit;
  public pagination: Observable<Pagination<User>>;

  constructor(
    public userService: UsersService) { }

  ngOnInit(): void {
    this.list(0, 10);
  }

  filter(filters: FormGroup) {
    this.filters = filters;

    this.list(0, 10);
  }

  list(offset: Number, limit: Number): void {
    this.pagination = this.userService.get(offset, limit, this.filters);
  }
}
