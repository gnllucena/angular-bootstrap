import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SharedModule } from './modules/shared/shared.module';
import { UserInterfaceModule } from './modules/user-interface/user-interface.module';

import { AuthenticationService } from './services/authentication.service';
import { LoadingService } from './services/loading.service';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './modules/index/index.module#IndexModule'
  },
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: 'users',
    loadChildren: './modules/users/users.module#UsersModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserInterfaceModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [
    AuthenticationService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
