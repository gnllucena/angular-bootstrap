import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public myself: String = "gnllucena";
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  logged(): boolean {
    return this.authenticationService.jwt() != null;
  }

  logout(): void {
    sessionStorage.removeItem("user");

    this.router.navigate(['/']);
  }
}
