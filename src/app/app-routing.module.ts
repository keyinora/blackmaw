import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from "./calendar/calendar.component";
import { CharactersModule } from "./characters/characters.module";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'characters', component: CharactersModule }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CharactersModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
