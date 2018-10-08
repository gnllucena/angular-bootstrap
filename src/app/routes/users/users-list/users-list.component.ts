import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ListAnimation } from './../../../modules/animations/list.animation';
import { User } from './../../../domain/User';
import { Observable } from 'rxjs';
import { UsersService } from './../users.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ ListAnimation ],
})

export class UsersListComponent implements OnInit {
  public users: Observable<User[]>;
  public faTrash = faTrash;
  public faEdit = faEdit;
  
  constructor(
    public userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.get();
  }
}
