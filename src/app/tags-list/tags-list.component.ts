import {Component, Input, OnInit} from '@angular/core';
import {Tags} from "../shared/model/tags";

@Component({
  selector: 'tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css']
})
export class TagsListComponent implements OnInit {

  @Input()
  tags: Tags[];

  constructor() { }

  ngOnInit() {
  }

}
