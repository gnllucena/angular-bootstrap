import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Jwt } from '../../domain/Jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  public username(): String {
    var jwt = this.authenticationService.token() as Jwt;

    if (jwt) {
      return jwt.Username;
    }

    return '';
  }

  logout(): void {
    this.authenticationService.revoke();

    this.router.navigate(['/']);
  }
}
