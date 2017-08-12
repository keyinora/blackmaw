import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
  }

  getAuthState(provider: firebase.auth.AuthProvider): Observable<firebase.User> {
    var user = this.afAuth.authState;
    if(user == null)
      {
        this.afAuth.auth.signInWithPopup(provider);
      }
      else{
        return user;
      }
    
  }

  logout(): Observable<firebase.User> {
    this.afAuth.auth.signOut();
    return this.afAuth.authState;;
  }

}
