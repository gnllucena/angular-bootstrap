export class Jwt {
  public constructor(init?:Partial<Jwt>) {
    Object.assign(this, init);
  }

  Token: String;
  Timeout: Date;
  Username: String;
  Name: String;
  Email: String;
}
