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
  tagChain = [];
  contactID = [];

  editEnabled:boolean = true;

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsService.tagOn(this.tagId)
      .do(console.log)
      .subscribe(
        tagsOnContact => this.tagsOnContact = tagsOnContact
      )
  }

  edit(){
    event.stopPropagation();
    this.editEnabled = !this.editEnabled;
    console.log(this.editEnabled)
  }

  delete(){
    event.stopPropagation();
    if(this.tagChain.length > 0){
      console.log('delete tags', this.tagChain);
      console.log('delete tags per contact target ', this.contactID);
      this.contactsService.removeTagArr(this.tagChain, this.contactID);
    }else {
      console.log('nothing to delete')
    }

  }

  tagOut(tagChain, element, contactId){
    event.stopPropagation();

    // console.log(element);
    console.log('tag chain', tagChain);
    console.log('contact chain', contactId);

    this.tagChain = tagChain;
    this.contactID = contactId;

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
