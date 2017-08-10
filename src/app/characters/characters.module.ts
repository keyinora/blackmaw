import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { AppComponent } from "../app.component";

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  declarations: [
    CharacterListComponent
  ]
})
export class CharactersModule { }
