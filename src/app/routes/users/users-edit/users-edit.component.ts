import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'users-edit',
  templateUrl: './users-edit.component.html',
  encapsulation: ViewEncapsulation.None
})
export class UsersEditComponent {
  title = 'Edit';

  constructor() { }
}
