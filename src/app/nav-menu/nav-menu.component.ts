import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../shared/auth/auth-service.service";
import * as firebase from "firebase/app";
import Auth = firebase.auth.Auth;
import {AuthInfo} from "../shared/auth/token-bearer";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  authInfo: AuthInfo;
  navPosition;

  constructor(private route: ActivatedRoute, private authService: AuthServiceService) { }

  ngOnInit() {
      this.authService.token$.subscribe(authInfo => this.authInfo = authInfo);
    this.navPosition = this.route.snapshot.params['id'];
    console.log(this.navPosition);
  }

  logOut(){
      this.authService.logout();
  }

}
