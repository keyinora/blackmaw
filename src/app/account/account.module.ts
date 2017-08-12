import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { LoginComponent } from './login/login.component';
import { MdCardModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    MdCardModule
  ],
  declarations: [
    AccountDetailsComponent,
    LoginComponent
  ],
  providers: [
  ]
})
export class AccountModule { }
