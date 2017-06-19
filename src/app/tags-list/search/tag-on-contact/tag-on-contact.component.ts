import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tag-on-contact',
  templateUrl: './tag-on-contact.component.html',
  styleUrls: ['./tag-on-contact.component.scss']
})
export class TagOnContactComponent implements OnInit {

  @Input()
  tagId: string;

  constructor() { }

  ngOnInit() {
  }

}
