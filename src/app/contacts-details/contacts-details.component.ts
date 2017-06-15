import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../shared/model/contacts.service";
import {Observable} from "rxjs/Observable";
import {Tags} from "../shared/model/tags";
import {ActivatedRoute} from "@angular/router";
import {Contacts} from "../shared/model/contacts";

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css']
})
export class ContactsDetailsComponent implements OnInit {

  contact$: Observable<Contacts>;
  tags$: Observable<Tags[]>;

  constructor(private route: ActivatedRoute,
              private contactsService: ContactsService) {
  }

  ngOnInit() {
    const contactsName = this.route.snapshot.params['id'];
    // Observables
    this.contact$ = this.contactsService.findContactsByName(contactsName);
    this.tags$ = this.contactsService.findAllTagsForContact(contactsName)
  }


}
