import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'index-page',
    templateUrl: './index-page.component.html',
    encapsulation: ViewEncapsulation.None
})

export class IndexPageComponent {
    title = 'Index';

    constructor(private viewContainerRef: ViewContainerRef) { }
}
