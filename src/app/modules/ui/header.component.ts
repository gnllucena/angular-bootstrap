import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Jwt } from './../../domain/Jwt';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <a class="navbar-brand" routerLink="/">Application Bootstrap</a>

      <div id="navbarNavDropdown" class="navbar-collapse collapse">
        <ul class="navbar-nav mr-auto">
          <ng-container *ngIf="logged">
            <a class="nav-item nav-link" routerLink="/dot/{{ username }}" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">~/{{ username }}</a>
            <a class="nav-item nav-link" routerLink="/users" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">users</a>
          </ng-container>
        </ul>
        <ul class="navbar-nav">
          <ng-container *ngIf="!logged">
            <a class="nav-item nav-link" routerLink="/identity" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Log In</a>
          </ng-container>
          <ng-container *ngIf="logged">
            <a class="nav-item nav-link" (click)="logout()" href="javascript:void(0)">Log Off</a>
          </ng-container>
        </ul>
      </div>
    </nav>    
  `,
  styles: []
})
export class HeaderComponent {  
  public logged: Boolean = false;
  public username: String = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { 

      this.authenticationService.jwt
        .subscribe((jwt: Jwt) => {
          if (jwt) {
            this.logged = true;
            this.username = jwt.Username;
          } else {
            this.logged = false;
            this.username = '';
          }
        });
  }

  logout(): void {
    this.authenticationService.revoke();

    this.router.navigate(['/']);
  }
}
