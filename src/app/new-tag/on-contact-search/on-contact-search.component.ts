import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {TagsService} from "../../shared/model/tags.service";
import {Contacts} from "../../shared/model/contacts";
import {Observable} from "rxjs/Observable";
import {ContactsService} from "../../shared/model/contacts.service";

import {Message} from 'primeng/primeng';

@Component({
  selector: 'on-contact-add-tag',
  templateUrl: './on-contact-search.component.html',
  styleUrls: ['./on-contact-search.component.scss']
})
export class OnContactSearchComponent implements OnInit {

  @Input()
  tagId: string;

  form: FormGroup;
  contactId: string;
  msgs: Message[] = [];

  term;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private tagService: TagsService,
              private contactsService: ContactsService) {

  }

  ngOnInit() {
    // this.contactId = this.route.snapshot.queryParams['contactId'];


    console.log('Contact Push-Key is ', this.tagId);

    this.form = this.fb.group({
      description: ['', Validators.required]
    })
  }



  saveTag(tag) {
    event.stopPropagation();

    console.log('Adding Tag', tag);
    console.log('Under Contact', this.tagId);

    this.term = '';
    console.log("term is now", this.term);

    this.tagService.createNewtagForContact(this.tagId, tag)
      .subscribe(
        () => {
          this.msgs = [];
          this.msgs.push({severity:'success', summary:'Tag Added', detail:tag});
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
