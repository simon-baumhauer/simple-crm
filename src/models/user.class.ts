export class User {
  firstName: string;
  lastName: string;
  brithDate: number;
  street: string;
  zipCode: number;
  city: string;
  email: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.email = obj ? obj.email : '';
    this.brithDate = obj ? obj.brithDate : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
  }

  public toJson() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      brithDate: this.brithDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
    };
  }
}
