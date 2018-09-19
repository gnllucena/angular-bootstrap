import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dot-users-add',
  templateUrl: './dot-users-add.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DotUsersAddComponent {
  title = 'Add';

  constructor() { }
}
