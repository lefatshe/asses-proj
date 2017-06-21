import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../shared/model/contacts.service";
import {Observable} from "rxjs/Observable";
import {Contacts} from "../shared/model/contacts";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomSearchPipe} from '../shared/pipe/custom-search.pipe';
import {Tags} from "../shared/model/tags";
import {TagsService} from "../shared/model/tags.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<Contacts[]>;
  tags$: Observable<Tags[]>;


  allContacts: Contacts[];
  filteredContacts: Contacts[];

  allTags: Tags[];
  filteredTags: Tags[];

  contactListStatus: boolean;

  term: string = "";
  selected: Contacts;

  constructor(private contactsService: ContactsService,
              private router: ActivatedRoute,
              private tagsService: TagsService) {
  }


  ngOnInit() {
    this.startService();
    this.contactListStatus = false;
  }

  startService() {
    this.contactsService.findAllContacts()
      .do(console.log)
      .subscribe(
        contacts => this.allContacts = this.filteredContacts = contacts
      )

    this.tagsService.findAllTags()
      .do(console.log)
      .subscribe(
        tags => this.allTags = this.filteredTags = tags
      )
  }

  onSelect(contact): void {
    this.selected = contact;
    console.log('contact selected',contact)
  }

  searchValue(search: string) {
    let searchValue = search;
    this.filteredContacts = this.allContacts.filter(contact => contact.name.includes(searchValue))
  }


}
