import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../shared/auth/auth-service.service";
import * as firebase from "firebase/app";
import Auth = firebase.auth.Auth;
import {AuthInfo} from "../shared/auth/token-bearer";

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  authInfo: AuthInfo;

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
      this.authService.token$.subscribe(authInfo => this.authInfo = authInfo)
    console.log(this.authInfo)
  }

  logOut(){
      this.authService.logout();
  }

}
