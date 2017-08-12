import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-login',
  template: `
    <md-card>
      <md-card-content>
        <button md-button (click)="login1()">Login 1</button>
      </md-card-content>
    </md-card>
    <md-card>
      <md-card-content>
        <button md-button (click)="login2()">Login 2</button>
      </md-card-content>
    </md-card>
    <md-card>
      <md-card-content>
        <button md-button (click)="login3()">Login 3</button>
      </md-card-content>
    </md-card>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login1(){
    alert(1);
  }

  login2(){
    alert(2);
  }

  login3(){
    alert(3);
  }

}
