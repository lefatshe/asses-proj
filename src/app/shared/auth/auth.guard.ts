import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {AuthServiceService} from "./auth-service.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthServiceService, private router: Router) {

  }


  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.token$
      .map(authInfo => authInfo.isLoggedIn())
      .take(1)
      .do(allowed => {
        if(!allowed) {
          this.router.navigate([ 'login'])
        }
      });

    //return undefined;
  }
}
