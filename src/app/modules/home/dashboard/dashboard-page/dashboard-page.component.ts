import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'dashboard-page',
    templateUrl: './dashboard-page.component.html',
    encapsulation: ViewEncapsulation.None
})

export class DashboardPageComponent {
    title = 'Dashboard';

    constructor(private viewContainerRef: ViewContainerRef) { }
}
