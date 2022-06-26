export class Order {
  handschuhe: Array<any>;
  desinfektionsmittel: Array<any>;
  masken: Array<any>;
  price: number;
  user: string;
  status: boolean;

  constructor(obj?: any) {
    this.handschuhe = obj ? obj.handschuhe : [];
    this.desinfektionsmittel = obj ? obj.desinfektionsmittel : [];
    this.masken = obj ? obj.masken : [];
    this.price = obj ? obj.price : '';
    this.user = obj ? obj.user : '';
    this.status = obj ? obj.status : false;
  }

  public toJson() {
    return {
      handschuhe: this.handschuhe,
      desinfektionsmittel: this.desinfektionsmittel,
      masken: this.masken,
      price: this.price,
      user: this.user,
      status: this.status,
    };
  }
}
