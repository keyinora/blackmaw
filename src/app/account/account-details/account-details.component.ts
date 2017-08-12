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
  user: Observable<firebase.User>;
  provider: firebase.auth.GoogleAuthProvider;

  constructor(public sfAuthService: AuthService) {
  }

  ngOnInit() {    
  }
  
  login() {
    this.user = this.sfAuthService
      .getAuthState(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.user = this.sfAuthService.logout();
  }
}
