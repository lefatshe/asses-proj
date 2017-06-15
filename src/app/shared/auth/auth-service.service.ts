import {Injectable} from '@angular/core';
import {FirebaseAuth} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {AuthInfo} from "./token-bearer";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class AuthServiceService {

  static UNKNOWN_USER = new AuthInfo(null);
  token$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthServiceService.UNKNOWN_USER);

  constructor(private auth: FirebaseAuth) {
  }

  loginUser(email, password): Observable<any> {
    return this.fireBaseAuth(this.auth.login({email, password}))
  }

  signUp(email, password) {
    return this.fireBaseAuth(this.auth.createUser({email, password}))
  }

  logout(){
    this.auth.logout();
    this.token$.next(AuthServiceService.UNKNOWN_USER)
  }

  fireBaseAuth(promise): Observable<any> {

    const subject = new Subject<any>();

    promise
      .then(res => {
          const authInfo = new AuthInfo(this.auth.getAuth().uid);
          this.token$.next(authInfo);
          subject.next(res);
          subject.complete()
        },
        err => {
          this.token$.error(err);
          subject.error(err);
          subject.complete()
        }
      )

    return subject.asObservable()
  }

}
