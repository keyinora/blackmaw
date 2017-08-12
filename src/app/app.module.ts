import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdButtonModule } from '@angular/material';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CharactersRoutingModule } from './characters/characters-routing.module';
import { AccountRoutingModule } from './account/account-routing.module';
import { CalendarRoutingModule } from './calendar/calendar-routing.module';
import { AccountDetailsComponent } from "./account/account-details/account-details.component";
import { CalendarComponent } from "./calendar/calendar/calendar.component";
import { AuthService } from "./providers/auth.service";
import { AccountModule } from "./account/account.module";
import { LoginComponent } from "./account/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    AccountDetailsComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    // App Code
    CharactersRoutingModule,
    AccountRoutingModule,
    CalendarRoutingModule
  ],
  providers: [
    AngularFireAuth,
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
