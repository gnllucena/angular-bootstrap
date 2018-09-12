import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    encapsulation: ViewEncapsulation.None
})

export class LoginPageComponent {
    title = 'Login';

    constructor(private viewContainerRef: ViewContainerRef) { }
}
