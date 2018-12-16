export class Jwt {
  public constructor(init?: Partial<Jwt>) {
    Object.assign(this, init);
  }

  Token: string;
  Timeout: Date;
  Username: string;
  Name: string;
  Email: string;
}
