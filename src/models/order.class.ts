export class Order {
  Handschuhe: string;
  Desinfektionsmittel: string;
  Masken: string;

  constructor(obj?: any) {
    this.Handschuhe = obj ? obj.Handschuhe : '';
    this.Desinfektionsmittel = obj ? obj.Desinfektionsmittel : '';
    this.Masken = obj ? obj.Masken : '';
  }

  public toJson() {
    return {
      Handschuhe: this.Handschuhe,
      Desinfektionsmittel: this.Desinfektionsmittel,
      Masken: this.Masken,
    };
  }
}
