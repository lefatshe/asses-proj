import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {authConfiqurations, firebaseConfig} from "../environments/firebase.config";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { HomeComponent } from './home/home.component';
import {ContactsService} from "./shared/model/contacts.service";
import {TagsService} from "./shared/model/tags.service";
import { TagsListComponent } from './tags-list/tags-list.component';
import {RouterModule} from "@angular/router";
import {routerConfig} from "./router.config";
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { NewTagComponent } from './new-tag/new-tag.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {AuthServiceService} from "./shared/auth/auth-service.service";
import {AuthGuard} from "./shared/auth/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TagsListComponent,
    NavMenuComponent,
    ContactsComponent,
    ContactsComponent,
    ContactsDetailsComponent,
    NewTagComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfiqurations),
    RouterModule.forRoot(routerConfig)
  ],
  providers: [ContactsService, TagsService, AuthServiceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
