import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./src/environments/firebase.config";
import {dbData} from "./db-data";


initializeApp(firebaseConfig);


const contactsRef = database().ref('contacts');
const tagsRef = database().ref('tags');



dbData.contacts.forEach( contact => {

  console.log('Adding contact', contact.name);

  const contactRef = contactsRef.push({
    name: contact.name,
    surname: contact.surname,
    phone: contact.phone,
    email: contact.email,
    linkedIn: contact.linkedIn,
    company: contact.company,
    position: contact.position,
  });

  let tagKeysPerContact = [];

  contact.tags.forEach((tag:any) =>  {

    console.log('Adding tag ', tag.description);

    tagKeysPerContact.push(tagsRef.push({
        description: tag.description,
        courseId: contactRef.key
      }).key);

  });


  const association = database().ref('tagsPerContact');

  const tagsPerContact = association.child(contactRef.key);

  tagKeysPerContact.forEach(tagKey => {
    console.log('adding tag to contact ');

    const tagContactAssociation = tagsPerContact.child(tagKey);

    tagContactAssociation.set(true);
  });


});




