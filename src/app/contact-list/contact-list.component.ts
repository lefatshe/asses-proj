import {Component, Input, OnInit} from '@angular/core';
import {Contacts} from "../shared/model/contacts";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input()
  contacts: Contacts[];

  constructor() { }

  ngOnInit() {
  }

}
