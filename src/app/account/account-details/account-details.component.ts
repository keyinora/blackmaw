import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "angularfire2/auth";
import { AuthService } from "../../providers/auth.service";

@Component({
  selector: 'bm-account-details',
  templateUrl: './account-details.component.html'
})
export class AccountDetailsComponent implements OnInit {
  provider: firebase.auth.GoogleAuthProvider;
  user: Observable<firebase.User>;

  constructor(public afAuthService: AuthService) {
  }

  ngOnInit() {
  }
  
  login() {
    this.afAuthService.login(new firebase.auth.GoogleAuthProvider())
      .catch(console.log);
    console.log(this.user);
  }

  logout() {
    this.afAuthService.logout();
  }
}