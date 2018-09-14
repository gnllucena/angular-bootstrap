import { Component, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../domain/User';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    encapsulation: ViewEncapsulation.None
})

export class LoginPageComponent {
    title = 'Login';

    public form: FormGroup;
    public submitted = false;

    @Input() user: User;

    constructor(
        private formBuilder: FormBuilder, 
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        if (!this.user) {
            this.user = new User();
        }

        this.form = this.formBuilder.group({
            Email: this.formBuilder.control({
                value: this.user.Email || null,
                disabled: false
            }, [Validators.required, Validators.email]),
            Password: this.formBuilder.control({
                value: this.user.Password || null,
                disabled: false
            }, [Validators.required, Validators.minLength(6)]),
        });
    }

    submit() {
        this.submitted = true;

        if (!this.form.valid) {
            return;
        }
        
        var user = this.form.getRawValue() as User;

        var data = new Date();
        data.setDate(data.getDate() + 1);

        let jwt = {
            token: "token",
            timeout: data,
            email: user.Email,
        }

        sessionStorage.setItem('user', JSON.stringify(jwt));

        let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/user';

        this.router.navigateByUrl(returnUrl);
    }
}