import Bugsnag from '@bugsnag/js'
import { BugsnagErrorHandler } from '@bugsnag/plugin-angular'
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';

Bugsnag.start({
  apiKey: '1a3504806211ce1c12360653d390d0ee'
})

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LottoDrawComponent } from './lotto-draw/lotto-draw.component';
import { ClientFormComponent } from './client-form/client-form.component';

const oktaConfig = {
  issuer: 'https://auth.obeyi.com/',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oagddo26UkgxRp0L5d5'
};

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'lotto', component: LottoDrawComponent },
    { path: 'implicit/callback', component: OktaCallbackComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LottoDrawComponent,
    ClientFormComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      OktaAuthModule.initAuth(oktaConfig)
  ],
  providers: [ { provide: ErrorHandler, useFactory: errorHandlerFactory } ],
  bootstrap: [AppComponent]
})
export function errorHandlerFactory() {
  return new BugsnagErrorHandler()
}
export class AppModule { }
