export class User {
  public constructor(init?:Partial<User>) {
    Object.assign(this, init);
  }

  Id: Number;
  Name: String;
  Email: String;
  Document: String;
  Birthdate: Date;
  Country: String;
  Profile: String;
  Active: Boolean;
}
