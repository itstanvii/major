export class User {
  constructor(
    public id?: string,
    public name?: string,
    public email?: string,
    public age?: string,
    public imageUrl?: string,
    public password?: string,
    public category?: string,
    public height?: string,
    public weight?: string,
    public dietPlan?: string,
    public workoutPlan?: string,
    public membership?: string,
    public membershipExpireDate?: string,
    public cart?: { productId: string; quantity: number }[]
  ) {}
}
