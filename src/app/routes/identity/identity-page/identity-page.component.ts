import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../services/authentication.service';
import { Jwt } from './../../../domain/Jwt';

@Component({
  selector: 'identity-page',
  templateUrl: './identity-page.component.html',
  encapsulation: ViewEncapsulation.None
})

export class IdentityPageComponent {
  title = 'identity';

  public form: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService) { 

    this.form = this.formBuilder.group({
      Email: this.formBuilder.control({
        value: null,
        disabled: false,
      }, [Validators.required, Validators.email]),
      Password: this.formBuilder.control({
        value: null,
        disabled: false
      }, [Validators.required, Validators.minLength(6)]),
    });
  }

  submit(): void {
    this.submitted = true;

    if (!this.form.valid) {
      return;
    }
    
    var user = this.form.getRawValue();

    this.authenticationService.login(user)
      .subscribe((jwt: Jwt) => {
        let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dot/' + jwt.Username;

        this.router.navigateByUrl(returnUrl);
      });
  }
}