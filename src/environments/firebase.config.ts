
import {AuthMethods, AuthProviders} from "angularfire2";
export const firebaseConfig = {
    apiKey: "AIzaSyAhf6QigXyixeRJRn_iBg5Iva8ZpmXTFmc",
    authDomain: "contact-fe4b3.firebaseapp.com",
    databaseURL: "https://contact-fe4b3.firebaseio.com",
    projectId: 'contact-fe4b3',
    storageBucket: "contact-fe4b3.appspot.com",
    messagingSenderId: "464283363237"
};

export const authConfiqurations = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}
