import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../shared/model/contacts.service";
import {Observable} from "rxjs/Observable";
import {Contacts} from "../shared/model/contacts";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomSearchPipe} from '../shared/pipe/custom-search.pipe';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<Contacts[]>;

  allContacts: Contacts[];
  filteredContacts: Contacts[];

  contactListStatus: boolean;

  term: string = "";

  constructor(private contactsService: ContactsService, private router: ActivatedRoute) {
  }

  // ngOnInit() {
  //   this.contacts$ = this.contactsService.findAllContacts()
  // }

  ngOnInit() {
    this.hashKey();
    this.contactListStatus = false;
  }

  hashKey() {
    this.contactsService.findAllContacts()
      .do(console.log)
      .subscribe(
        tags => this.allContacts = this.filteredContacts = tags
      )
  }

  FreeTextSearch(search) {

  }

  searchValue(search: string) {
    let searchValue = search;
    this.filteredContacts = this.allContacts.filter(contact => contact.name.includes(searchValue))
  }


  search(search: string) {
    if (search === '#') {
      this.contactListStatus = true;
    } else {
      this.searchValue(search)
      this.contactListStatus = true;
    }

    if (search === '') {
      this.contactListStatus = false;
    }

  }

}
