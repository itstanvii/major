export class User {
  constructor(
    public id?: string,
    public name?: string,
    public email?: string,
    public age?: string,
    public password?: string,
    public imageUrl?: string,
    public category?: string,
    public height?: string,
    public weight?: string,
    public dietPlan?: string,
    public workoutPlan?: string
  ) {}
}
