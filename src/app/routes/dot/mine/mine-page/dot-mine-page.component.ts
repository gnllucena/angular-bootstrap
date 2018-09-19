import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';
import { Jwt } from '../../../../domain/jwt';

@Component({
  selector: 'dot-mine-page',
  templateUrl: './dot-mine-page.component.html',
  encapsulation: ViewEncapsulation.None
})

export class DotMinePageComponent {
  title = '';

  constructor(private authenticationService: AuthenticationService) { 
    let jwt = authenticationService.token() as Jwt;
    
    this.title = "./" + jwt.Username;
  }
}
