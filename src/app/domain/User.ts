export class User {
  public constructor(init?:Partial<User>) {
    Object.assign(this, init);
  }

  Id: number;
  Name: string;
  Email: string;
  Document: string;
  Birthdate: Date;
  Country: string;
  Profile: string;
  Active: boolean;
}
