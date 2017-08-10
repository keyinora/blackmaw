import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-navbar',
  template: `
    <nav>
      <a md-button routerLink="/calendar">Calendar</a>
      <a md-button routerLink="/characters">Characters</a>
    </nav>
  `,
  styles: [``]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
