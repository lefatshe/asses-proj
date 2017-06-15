import {Route} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {ContactsDetailsComponent} from "./contacts-details/contacts-details.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {AuthGuard} from "./shared/auth/auth.guard";

export const routerConfig: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contacts',
    children: [
      {
        path: ":id",
        component: ContactsDetailsComponent
      },
      {
        path: "",
        component: ContactsComponent
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]


