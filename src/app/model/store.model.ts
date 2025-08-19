
export class Store {
  constructor(
    public id?: number, //same
    public itemName?: string, //recipename  //actual name
    public category?: string, //cuisine
    public description?: string, //same
    public src?: string, // public src?: string // <-- Add this line   //same
    public price?: string
  ) {}
}
