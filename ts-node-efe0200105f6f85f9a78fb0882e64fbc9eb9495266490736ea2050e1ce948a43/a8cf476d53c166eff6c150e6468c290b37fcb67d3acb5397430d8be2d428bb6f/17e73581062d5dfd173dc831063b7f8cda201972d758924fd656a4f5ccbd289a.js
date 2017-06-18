import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import { database, initializeApp } from "firebase";
import { firebaseConfig } from "./src/environments/firebase.config";
import { dbData } from "./db-data";
initializeApp(firebaseConfig);
var contactsRef = database().ref('contacts');
var tagsRef = database().ref('tags');
dbData.contacts.forEach(function (contact) {
    console.log('Adding contact', contact.name);
    var contactRef = contactsRef.push({
        name: contact.name,
        surname: contact.surname,
        phone: contact.phone,
        email: contact.email,
        linkedIn: contact.linkedIn,
        company: contact.company,
        position: contact.position,
    });
    var tagKeysPerContact = [];
    contact.tags.forEach(function (tag) {
        console.log('Adding tag ', tag.description);
        tagKeysPerContact.push(tagsRef.push({
            description: tag.description,
            courseId: contactRef.key
        }).key);
    });
    var association = database().ref('tagsPerContact');
    var tagsPerContact = association.child(contactRef.key);
    tagKeysPerContact.forEach(function (tagKey) {
        console.log('adding tag to contact ');
        var tagContactAssociation = tagsPerContact.child(tagKey);
        tagContactAssociation.set(true);
    });
});
//# sourceMappingURL=/Users/dev-man/asses-proj//Users/dev-man/asses-proj/ts-node-efe0200105f6f85f9a78fb0882e64fbc9eb9495266490736ea2050e1ce948a43/a8cf476d53c166eff6c150e6468c290b37fcb67d3acb5397430d8be2d428bb6f/17e73581062d5dfd173dc831063b7f8cda201972d758924fd656a4f5ccbd289a.js.map