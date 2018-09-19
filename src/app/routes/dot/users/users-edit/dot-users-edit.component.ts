import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dot-users-edit',
  templateUrl: './dot-users-edit.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DotUsersEditComponent {
  title = 'Edit';

  constructor() { }
}
