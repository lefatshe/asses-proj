import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../shared/model/contacts.service";
import {Observable} from "rxjs/Observable";
import {Contacts} from "../shared/model/contacts";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<Contacts[]>;

  allContacts: Observable<Contacts[]>;
  filteredContacts: Contacts[];

  contactListStatus: boolean;
  private searchTerms = new Subject<string>();

  constructor(private contactsService: ContactsService, private router: ActivatedRoute) {
  }

  // ngOnInit() {
  //   this.contacts$ = this.contactsService.findAllContacts()
  // }

  ngOnInit() {
    // this.hashKey();
    this.contactListStatus = false;

    this.allContacts = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.contactsService.findAllContacts(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Contacts[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Contacts[]>([]);
      });
  }

  // hashKey() {
  //   this.contactsService.findAllContacts()
  //     .do(console.log)
  //     .subscribe(
  //       tags => this.allContacts = this.filteredContacts = tags
  //     )
  // }

  // FreeTextSearch(search) {
  //
  // }
  //
  // searchValue(search: string) {
  //   let searchValue = search;
  //   this.filteredContacts = this.allContacts.filter(contact => contact.name.includes(searchValue))
  // }


  search(search: string): void {
    console.log(search);

    this.searchTerms.next(search);


    // if (search === '#') {
    //   this.contactListStatus = true;
    // } else {
    //   this.searchValue(search)
    //   this.contactListStatus = true;
    // }
    //
    // if (search === '') {
    //   this.contactListStatus = false;
    // }

  }

}
