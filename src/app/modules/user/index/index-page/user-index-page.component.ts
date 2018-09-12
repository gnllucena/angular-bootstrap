import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'user-index-page',
    templateUrl: './user-index-page.component.html',
    encapsulation: ViewEncapsulation.None
})

export class UserIndexPageComponent {
    title = 'Index';

    constructor(private viewContainerRef: ViewContainerRef) { }
}
