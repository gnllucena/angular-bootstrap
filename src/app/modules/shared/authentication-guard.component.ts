import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Injectable()
export class AuthenticationGuardComponent implements CanActivate {
  
  constructor(private router: Router, 
              private authenticationService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let jwt = this.authenticationService.jwt();
    
    if (jwt && jwt.Token && jwt.Timeout) {
      let timeout = new Date(jwt.Timeout);
      let now = new Date(Date.now());

      if (timeout > now) {
        return true;
      }
    }

    this.router.navigate(['/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });

    return false;
  }
}
