export class Order {
  handschuhe: Array<any>;
  desinfektionsmittel: Array<any>;
  masken: Array<any>;

  constructor(obj?: any) {
    this.handschuhe = obj ? obj.Handschuhe : [];
    this.desinfektionsmittel = obj ? obj.desinfektionsmittel : [];
    this.masken = obj ? obj.masken : [];
  }

  public toJson() {
    return {
      handschuhe: this.handschuhe,
      desinfektionsmittel: this.desinfektionsmittel,
      masken: this.masken,
    };
  }
}
