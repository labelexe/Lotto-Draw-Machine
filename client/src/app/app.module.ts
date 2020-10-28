import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LottoGameComponent } from './lotto-game/lotto-game.component';
import { ClientFormComponent } from './client-form/client-form.component';

const oktaConfig = {
  issuer: 'https://dev-354685.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oagk0vssioRGOgqI0h7'
};

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'lotto', component: LottoGameComponent },
    { path: 'implicit/callback', component: OktaCallbackComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LottoGameComponent,
    ClientFormComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot(routes),
      OktaAuthModule.initAuth(oktaConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
