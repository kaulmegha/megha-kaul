import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProfileModule} from './profile/profile.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {RedirectGuard} from './router-guard/router-guard.component';
import {environment} from '../environments/environment';
import {BuildInformationToken} from './services/build-information';
import { SavethedateComponent } from './savethedate/savethedate.component';

@NgModule({
  declarations: [
    AppComponent,
    SavethedateComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    HttpClientModule
  ],
  providers: [RedirectGuard,
    {provide: BuildInformationToken, useValue: environment.build},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
