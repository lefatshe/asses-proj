export class Contacts {

  constructor(
    public $key:string,

    public company:string,
    public email:string,
    public linkedIn:string,
    public name:string,
    public phone:string,
    public position:string,
    public surname:string

  ){

  }

  static fromJson ({$key, company, email, linkedln, name, phone, position, surname}) {
      return new Contacts($key, company, email, linkedln, name, phone, position, surname);
  }

  static fromJsonArray(json: any[]): Contacts[]{
      return json.map(Contacts.fromJson)
  }



}
