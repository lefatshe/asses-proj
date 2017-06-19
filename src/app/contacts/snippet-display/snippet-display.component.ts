import {Component, Input, OnInit} from '@angular/core';
import {Contacts} from "../../shared/model/contacts";

@Component({
  selector: 'snippet-display',
  templateUrl: './snippet-display.component.html',
  styleUrls: ['./snippet-display.component.scss']
})
export class SnippetDisplayComponent implements OnInit {

  @Input()
  contact: Contacts;

  constructor() { }

  ngOnInit() {
  }

}
