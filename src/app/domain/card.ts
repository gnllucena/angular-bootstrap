export class Card {
  public constructor(init?: Partial<Card>) {
    Object.assign(this, init);
  }

  Title: string;
  Description: string;
  Link: string;
}
