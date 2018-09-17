import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'users-dashboard-page',
  templateUrl: './users-dashboard-page.component.html',
  encapsulation: ViewEncapsulation.None
})

export class UsersDashboardPageComponent {
  title = 'Dashboard';

  constructor() { }
}
