export class Orders {
  constructor(
    public orderId: string,
    public id?: string,
    public name?: string,
    public email?: string,
    public address?: string,
    public cart?: { productId: string; quantity: number }[]
  ) {}
}
