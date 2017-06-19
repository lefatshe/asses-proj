import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {TagsService} from "../shared/model/tags.service";
import {Contacts} from "../shared/model/contacts";
import {Observable} from "rxjs/Observable";
import {ContactsService} from "../shared/model/contacts.service";

import {Message} from 'primeng/primeng';

@Component({
  selector: 'new-tag',
  templateUrl: './new-tag.component.html',
  styleUrls: ['./new-tag.component.css']
})
export class NewTagComponent implements OnInit {

  form: FormGroup;
  contactId: string;
  msgs: Message[] = [];

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private tagService: TagsService,
              private contactsService: ContactsService) {

  }

  ngOnInit() {
    this.contactId = this.route.snapshot.queryParams['contactId'];
    console.log('Contact Push-Key is ', this.contactId);

    this.form = this.fb.group({
      description: ['', Validators.required]
    })
  }

  saveTag(tag) {
    console.log('Adding Tag', tag);
    console.log('Under Contact', this.contactId);

    this.tagService.createNewtagForContact(this.contactId, tag)
      .subscribe(
        () => {
          this.msgs = [];
          this.msgs.push({severity:'info', summary:'New Tag Added', detail:tag});
          tag = '';
        },
        err => alert(`err ${err}`)
      );
  }

  isError(field: string, error: string) {
    return this.form.controls[field].dirty
      && this.form.controls[field].errors &&
      this.form.controls[field].errors[error]
  }

  reset() {
    this.form.reset()
  }

  get valid() {
    return this.form.valid
  }


}
