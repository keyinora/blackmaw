import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersModule } from "./characters/characters.module";
import { CalendarComponent } from "./calendar/calendar/calendar.component";

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
