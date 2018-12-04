import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CoreModule } from './modules/core/.core.module';
import { UIModule } from './modules/ui/.ui.module';
import { ToastrModule } from 'ngx-toastr';

import { AuthenticationService } from './services/authentication.service';
import { LoadingService } from './services/loading.service';
import { NotFoundComponent } from './modules/ui/not-found.component';
import { HomePageComponent } from './routes/home/home-page.component';
import { ToastComponent } from './modules/ui/toast.component';

export const appRoutes: Routes = [
  {
    path: 'identity',
    loadChildren: './routes/identity/identity.module#IdentityModule',
    data: { state: 'identity' }
  },
  {
    path: 'dot',
    loadChildren: './routes/dot/dot.module#DotModule',
    data: { state: 'dot' }
  },
  {
    path: 'users',
    loadChildren: './routes/users/users.module#UsersModule',
    data: { state: 'users' }
  },
  { path: '', component: HomePageComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UIModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot({
      toastComponent: ToastComponent
    }),
  ],
  entryComponents: [
    ToastComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    AuthenticationService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
