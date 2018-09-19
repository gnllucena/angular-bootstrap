import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'users-index-page',
  templateUrl: './users-index-page.component.html',
  encapsulation: ViewEncapsulation.None
})

export class UsersIndexPageComponent {
  title = 'Index';

  constructor() { }
}
