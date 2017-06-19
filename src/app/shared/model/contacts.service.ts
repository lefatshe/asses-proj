import {Injectable} from '@angular/core';
import {AngularFire, AngularFireDatabase} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Contacts} from "./contacts";
import {Tags} from "./tags";
import {switchMap} from "rxjs/operator/switchMap";

@Injectable()
export class ContactsService {

  constructor(private db: AngularFireDatabase, private af: AngularFire, ) {
  }

  // findAllContacts(): Observable<Contacts[]> {
  //   return this.db.list('contacts').map(Contacts.fromJsonArray);
  // }

  findAllContacts(): Observable<Contacts[]> {
    return this.af.database.list('contacts');
  }

  findContactsByName(contactName: string): Observable<Contacts> {
    return this.db.list('contacts', {
      query: {
        orderByChild: 'name',
        equalTo: contactName
      }
    }).map(results => results[0]);
  }

  findTagKeysPerContactName(contactName: string): Observable<string[]> {
    return this.findContactsByName(contactName)
      .switchMap(contact => this.db.list(`tagsPerContact/${contact.$key}`))
      .map(tagsInContact => tagsInContact.map(tagsInContact => tagsInContact.$key))
  }

  findAllTagsForContact(contactName: string): Observable<Tags[]> {
    return this.findTagKeysPerContactName(contactName)
      .map(tagsInContact => tagsInContact.map(tagsKey => this.db.object('tags/' + tagsKey)))
      .flatMap(firebaseObservables => Observable.combineLatest(firebaseObservables))
  }

  tagOn(contactName: string): Observable<Tags[]> {
    return this.tagOnContact(contactName)
      .map(tagsInContact => tagsInContact.map(tagsKey => this.db.object('tags/' + tagsKey)))
      .flatMap(firebaseObservables => Observable.combineLatest(firebaseObservables))
  }

  tagOnContact(contactName: string): Observable<string[]> {
    return this.findContactsByName(contactName)
      .switchMap(contact => this.db.list(`tagsPerContact/${contactName}`))
      .map(tagsInContact => tagsInContact.map(tagsInContact => tagsInContact.$key))
  }

  removeTag(key){
      this.af.database.object('tags/' + key).remove();
  }

}


