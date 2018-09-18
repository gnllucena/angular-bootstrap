import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../domain/User';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  encapsulation: ViewEncapsulation.None
})

export class LoginPageComponent implements OnInit {
  title = 'Login';

  public form: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    let user = new User();

    user.Email = "gnllucena@gmail.com";
    user.Password = "asdfas";

    this.form = this.formBuilder.group({
      Email: this.formBuilder.control({
        value: user.Email || null,
        disabled: false,
      }, [Validators.required, Validators.email]),
      Password: this.formBuilder.control({
        value: user.Password || null,
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

    this.authenticationService.login(user)
      .subscribe(() => {
        let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/user';

        this.router.navigateByUrl(returnUrl);
      });
  }
}