import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthenticationGuardComponent implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user = JSON.parse(sessionStorage.getItem('user'));
        
        if (user && user.token) {
            if (user.timeout - Date.now() > 0) {
                return true;
            }
        }

        location.href = '/login';

        return false;
    }
}
