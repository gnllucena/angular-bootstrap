import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';
import { Jwt } from './../../../../domain/Jwt';

@Component({
  selector: 'dot-myself-page',
  templateUrl: './dot-myself-page.component.html',
  encapsulation: ViewEncapsulation.None
})

export class DotMyselfPageComponent {
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
