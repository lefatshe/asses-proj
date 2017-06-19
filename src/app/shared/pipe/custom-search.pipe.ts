import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customSearch'
})
export class CustomSearchPipe implements PipeTransform {

  transform(contacts: any, term: any): any {

    // Checck to see if undefined
    if (term === undefined) return contacts;

    // Return updated array
    return contacts.filter(function (contact) {
      return contact.name.toLowerCase().includes(term.toLowerCase())
    })
  }

}
