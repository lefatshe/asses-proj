import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Tags} from "../../../shared/model/tags";
import {ContactsService} from "../../../shared/model/contacts.service";

@Component({
  selector: 'tag-on-contact',
  templateUrl: './tag-on-contact.component.html',
  styleUrls: ['./tag-on-contact.component.scss']
})
export class TagOnContactComponent implements OnInit {

  @Input()
  tagId: string;

  tagsOnContact: Tags[];

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsService.tagOn(this.tagId)
      .do(console.log)
      .subscribe(
        tagsOnContact => this.tagsOnContact = tagsOnContact
      )
  }

}
