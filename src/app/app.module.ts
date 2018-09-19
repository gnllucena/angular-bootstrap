import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CoreModule } from './modules/core/.core.module';
import { UIModule } from './modules/ui/.ui.module';

import { AuthenticationService } from './services/authentication.service';
import { LoadingService } from './services/loading.service';
import { NotFoundComponent } from './modules/ui/not-found.component';
import { HomePageComponent } from './routes/home/home-page.component';

export const appRoutes: Routes = [
  {
    path: 'identity',
    loadChildren: './routes/identity/identity.module#IdentityModule'
  },
  {
    path: 'dot',
    loadChildren: './routes/dot/dot.module#DotModule'
  },
  { path: '', component: HomePageComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
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
