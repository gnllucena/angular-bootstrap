import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { UIModule } from './ui/ui.module';

import { AuthenticationService } from './services/authentication.service';
import { LoadingService } from './services/loading.service';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './routes/index/index.module#IndexModule'
  },
  {
    path: 'login',
    loadChildren: './routes/login/login.module#LoginModule'
  },
  {
    path: 'users',
    loadChildren: './routes/users/users.module#UsersModule'
  },
  {
    path: 'not-found',
    loadChildren: './routes/not-found/not-found.module#NotFoundModule'
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UIModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [
    AuthenticationService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
