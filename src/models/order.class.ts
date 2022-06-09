export class Order {
  handschuhe: Array<any>;
  desinfektionsmittel: Array<any>;
  masken: Array<any>;
  price: number;

  constructor(obj?: any) {
    this.handschuhe = obj ? obj.Handschuhe : [];
    this.desinfektionsmittel = obj ? obj.desinfektionsmittel : [];
    this.masken = obj ? obj.masken : [];
    this.price = obj ? obj.price : '';
  }

  public toJson() {
    return {
      handschuhe: this.handschuhe,
      desinfektionsmittel: this.desinfektionsmittel,
      price: this.price,
    };
  }
}
