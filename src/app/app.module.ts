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
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule, MdCardModule, MdCheckboxModule, MdInputModule, MdListModule} from "@angular/material";
import { ContactListComponent } from './contact-list/contact-list.component';
import {GrowlModule, CheckboxModule, ConfirmationService, ConfirmDialogModule, MessagesModule} from 'primeng/primeng';
import { CustomSearchPipe } from './shared/pipe/custom-search.pipe';
import { TagOnContactComponent } from './tags-list/search/tag-on-contact/tag-on-contact.component';
import { OnContactSearchComponent } from './new-tag/on-contact-search/on-contact-search.component';
import { SnippetDisplayComponent } from './contacts/snippet-display/snippet-display.component';

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
    LoginPageComponent,
    ContactListComponent,
    CustomSearchPipe,
    TagOnContactComponent,
    OnContactSearchComponent,
    SnippetDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdInputModule, MdListModule, MdCardModule,
    GrowlModule, CheckboxModule, ConfirmDialogModule, MessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfiqurations),
    RouterModule.forRoot(routerConfig)
  ],
  providers: [ContactsService, TagsService, AuthServiceService, AuthGuard, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }

