export class Card {
  public constructor(init?:Partial<Card>) {
    Object.assign(this, init);
  }

  Title: String;
  Description: String;
  Link: String;
}
