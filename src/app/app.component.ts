import {Component} from '@angular/core';
import {initializeApp, database} from 'firebase';
import {firebaseConfig} from "../environments/firebase.config";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello App Works!';

  contacts$: FirebaseListObservable<any>;
  tags$: FirebaseListObservable<any>;

  firstContact: any;

  constructor(private af: AngularFire) {
    this.contacts$ = af.database.list('contacts');
    this.contacts$.subscribe(console.log);

    this.tags$ = af.database.list('tags/-KmXTbHj0tmoRD65ckZq');
    this.tags$.subscribe(console.log);

    this.contacts$.map(contacts => contacts[0])
      .subscribe(
        contact => this.firstContact = contact
      )
  }


  listPush() {
    this.contacts$.push({name: 'Fanta'})
      .then(
        () => console.log("Success adding Contact"),
        console.error
      )
  }


  listRemove() {
    this.contacts$.remove(this.firstContact);
  }

  listUpdate(){
    this.contacts$.update(this.firstContact, {name: 'Juice'})
  }

  objUpdate(){
    this.tags$.update(this.firstContact, {description: "Ruby"});
  }

  objSet(){
    this.tags$.update(this.firstContact, {description: "Ruby"});
  }



}
