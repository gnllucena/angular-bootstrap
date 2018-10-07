import { Component, ViewEncapsulation } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  encapsulation: ViewEncapsulation.None
})

export class UsersListComponent {
  public faTrash = faTrash;
  public faEdit = faEdit;
  
  constructor() { }
}
