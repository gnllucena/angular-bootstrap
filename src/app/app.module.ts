import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { SharedModule } from './modules/shared/shared.module';
import { UserInterfaceModule } from './modules/user-interface/user-interface.module';

export const appRoutes: Routes = [
  {
    path: 'user',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'login',
    loadChildren: './modules/authentication/authentication.module#AuthenticationModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UserInterfaceModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
