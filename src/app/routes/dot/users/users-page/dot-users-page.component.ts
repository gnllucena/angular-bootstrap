import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';
import { Jwt } from '../../../../domain/jwt';

@Component({
  selector: 'dot-users-page',
  templateUrl: './dot-users-page.component.html',
  encapsulation: ViewEncapsulation.None
})

export class DotUsersPageComponent {
  title = '';

  constructor(private authenticationService: AuthenticationService) { 
    let jwt = authenticationService.token() as Jwt;
    
    this.title = "./" + jwt.Username;
  }
}
