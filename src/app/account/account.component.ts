import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'bm-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
  }
  
  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
