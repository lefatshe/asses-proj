import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Tags} from "../../../shared/model/tags";
import {ContactsService} from "../../../shared/model/contacts.service";
import {Message} from 'primeng/primeng';

@Component({
  selector: 'tag-on-contact',
  templateUrl: './tag-on-contact.component.html',
  styleUrls: ['./tag-on-contact.component.scss']
})
export class TagOnContactComponent implements OnInit {

  @Input()
  tagId: string;

  tagsOnContact: Tags[];
  msgs: Message[];
  checked: boolean = false;

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsService.tagOn(this.tagId)
      .do(console.log)
      .subscribe(
        tagsOnContact => this.tagsOnContact = tagsOnContact
      )
  }

  tagOut(tagId, element){
    console.log(tagId);
    console.log(element);
    event.stopPropagation();
    // console.log('c', tagId);

    // if (tagId !== true) {
    //   console.log('a', tagId);
    // } else {
    //   console.log('r', tagId);
    // }
  }

  removeTag(tag){
    event.stopPropagation();
    this.contactsService.removeTag(tag.$key)
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Tag removed', detail:tag.description});

  }

}
