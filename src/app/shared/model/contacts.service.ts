import {Injectable} from '@angular/core';
import {AngularFire, AngularFireDatabase} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Contacts} from "./contacts";
import {Tags} from "./tags";
import {switchMap} from "rxjs/operator/switchMap";

@Injectable()
export class ContactsService {

  constructor(private db: AngularFireDatabase) {
  }

  findAllContacts(): Observable<Contacts[]> {
    return this.db.list('contacts').map(Contacts.fromJsonArray);
  }

  findContactsByName(contactName: string): Observable<Contacts> {
    return this.db.list('contacts', {
      query: {
        orderByChild: 'name',
        equalTo: contactName
      }
    }).map(results => results[0]);
  }

  findAllTagsForContact(contactName: string): Observable<Tags[]> {
      const contact$ = this.findContactsByName(contactName);

      const tagsPerContact$ = contact$
        .switchMap(contact => this.db.list(`tagsPerContact/${contact.$key}`));

      return tagsPerContact$
        .map(lspc => lspc.map(lspc => this.db.object('tags/' + lspc.$key)) )
        .flatMap(fbObj => Observable.combineLatest(fbObj) )
  }

}


