import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../shared/model/contacts.service";
import {Observable} from "rxjs/Observable";
import {Contacts} from "../shared/model/contacts";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<Contacts[]>;


  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contacts$ = this.contactsService.findAllContacts()
  }

}
