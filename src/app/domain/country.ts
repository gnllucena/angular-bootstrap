export class Country {
  public constructor(init?:Partial<Country>) {
    Object.assign(this, init);
  }

  Id: Number;
  Name: String;    
}
  