import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }

  login(provider: firebase.auth.AuthProvider): firebase.Promise<any> {    
    return this.afAuth.auth.signInWithPopup(provider);
  }

  logout(): Observable<firebase.User> {
    this.afAuth.auth.signOut();
    return this.afAuth.authState;
  }

}
