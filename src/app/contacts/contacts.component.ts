import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../shared/model/contacts.service";
import {Observable} from "rxjs/Observable";
import {Contacts} from "../shared/model/contacts";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<Contacts[]>;

  allContacts: Contacts[];
  filteredContacts: Contacts[];


  constructor(private contactsService: ContactsService, private router: ActivatedRoute) {
  }

  // ngOnInit() {
  //   this.contacts$ = this.contactsService.findAllContacts()
  // }

  ngOnInit() {
    this.contactsService.findAllContacts()
      .do(console.log)
      .subscribe(
        tags => this.allContacts = this.filteredContacts = tags
      )
  }


  search(search: string) {
    let searchValue = search;
    this.filteredContacts = this.allContacts.filter(contact => contact.name.includes(searchValue))
  }

}
