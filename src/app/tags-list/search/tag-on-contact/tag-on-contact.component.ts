import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Tags} from "../../../shared/model/tags";
import {ContactsService} from "../../../shared/model/contacts.service";
import {ConfirmationService, Message} from 'primeng/primeng';

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

  constructor(private contactsService: ContactsService,
              private confirmationService: ConfirmationService) {
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

  verifyDelete() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        console.log('delete tags', this.tagChain);
        console.log('delete tags per contact target ', this.contactID);
        this.contactsService.removeTagArr(this.tagChain, this.contactID);
      }
    });
  }

  delete(){
    if(this.tagChain.length > 0){
      this.msgs = [];
      this.msgs.push({severity:'warn', summary:'Tag/s Removed', detail:''});
      this.contactsService.removeTagArr(this.tagChain, this.contactID);
      event.stopPropagation();
    }else {
      console.log('nothing to delete');
    }
  }

  tagOut(tagChain, element, contactId){
    event.stopPropagation();
    // console.log(element);
    console.log('tag chain', tagChain);
    console.log('contact chain', contactId);

    this.tagChain = tagChain;
    this.contactID = contactId;


  }

  removeTag(tag){
    event.stopPropagation();
    this.contactsService.removeTag(tag.$key)
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Tag removed', detail:tag.description});

  }

}
