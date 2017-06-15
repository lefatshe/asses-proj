import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../shared/model/contacts.service";
import {TagsService} from "../shared/model/tags.service";
import {Tags} from "../shared/model/tags";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allTags: Tags[];
  filteredTags: Tags[];

  constructor(private contactsService: ContactsService,
              private tagsService: TagsService) {
  }

  ngOnInit() {
      this.tagsService.findAllTags()
        .do(console.log)
        .subscribe(
          tags => this.allTags = this.filteredTags = tags
        )
  }

  search(search:string){
      let searchValue = search.toUpperCase();
      this.filteredTags = this.allTags.filter(tag => tag.description.includes(searchValue))
  }

}
