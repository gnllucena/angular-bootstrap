export class Pagination<T>  {
  public constructor(init?:Partial<Pagination<T>>) {
    Object.assign(this, init);
  }

  Items: Array<T>;
  Offset: number;
  Limit: number;
  Total: number;
}