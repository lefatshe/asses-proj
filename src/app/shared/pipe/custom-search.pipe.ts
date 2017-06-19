import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customSearch'
})
export class CustomSearchPipe implements PipeTransform {

  transform(contacts: any, term: string): any {

    // Checck to see if #tag input
    var hashInput = "#";
    if (term === hashInput) return contacts;

    // Return updated array
    if (term) return contacts.filter(function (contact) {
      return contact.name.toLowerCase().includes(term.toLowerCase()) || contact.company.toLowerCase().includes(term.toLowerCase())
    })

  }

}


