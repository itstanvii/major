export class Wishlist {
  constructor(
    public id?: number,
    public itemName?: string,
    public category?: string,
    public description?: string,
    public src?: string,
    public price?: string,
    public userId?: string,
  ) {}
}
