import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';
import { Jwt } from '../../../../domain/Jwt';

@Component({
  selector: 'users-myself-page',
  templateUrl: './users-myself-page.component.html',
  encapsulation: ViewEncapsulation.None
})

export class UsersMyselfPageComponent {
  title = 'Myself';

  constructor(
    public authenticationService: AuthenticationService) { }

    public email(): String {
      var jwt = this.authenticationService.token() as Jwt;
  
      if (jwt) {
        return jwt.Email;
      }
  
      return '';
    }
}
