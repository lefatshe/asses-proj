import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {TagsService} from "../shared/model/tags.service";

@Component({
  selector: 'new-tag',
  templateUrl: './new-tag.component.html',
  styleUrls: ['./new-tag.component.css']
})
export class NewTagComponent implements OnInit {

  form: FormGroup;
  tagContact: string;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private tagService: TagsService) {

  }

  ngOnInit() {
    const contactsName = this.route.snapshot.params['id'];
    this.tagContact = contactsName;


    this.form = this.fb.group({
      description: ['', Validators.required]
    })
  }

  saveTag(tag, form) {
    console.log('Adding Tag', tag);
    console.log('Under Contact', this.tagContact);

    // this.tagService.createNewtagForContact(this.tagContact, tag)
    //   .subscribe(
    //     () => {
    //       alert("Tag created");
    //       form.reset()
    //     },
    //     err => alert(`err ${err}`)
    //   );
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
