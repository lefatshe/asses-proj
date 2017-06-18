import {Inject, Injectable} from '@angular/core';
import {Tags} from "./tags";
import {AngularFire, FirebaseRef} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class TagsService {
  sdkDb: any;

  constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {

    this.sdkDb = fb.database().ref();
  }

  findAllTags(): Observable<Tags[]> {
    return this.af.database.list('tags');
  }

  createNewtagForContact(contactId: string, tagValue: string): Observable<any> {

    const tagToSave = Object.assign({}, {description:tagValue}, {contactId});

    const newTagKey = this.sdkDb.child('tags').push().key;

    let dataToSave = {};

    dataToSave['tags/' + newTagKey] = tagToSave;
    dataToSave [`tagsPerContact/${contactId}/${newTagKey}`] = true;

    return this.firebaseUpdate(dataToSave);
  }

  firebaseUpdate(dataToSave){
    const subject = new Subject();

    this.sdkDb.update(dataToSave)
      .then(
        val => {
          subject.next(val);
          subject.complete()
        },
        err => {
          subject.error(err);
          subject.complete()
        }
      )

    return subject.asObservable();
  }




}
