export class Country {
  public constructor(init?:Partial<Country>) {
    Object.assign(this, init);
  }

  Id: number;
  Name: string;    
}
  