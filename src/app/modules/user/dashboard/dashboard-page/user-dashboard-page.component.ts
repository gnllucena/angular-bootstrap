import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'user-dashboard-page',
  templateUrl: './user-dashboard-page.component.html',
  encapsulation: ViewEncapsulation.None
})

export class UserDashboardPageComponent {
  title = 'Dashboard';

  constructor() { }
}
