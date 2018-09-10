import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    encapsulation: ViewEncapsulation.None
})

export class LoginPageComponent {
    title = 'Login';

    constructor(private viewContainerRef: ViewContainerRef) { }
}
