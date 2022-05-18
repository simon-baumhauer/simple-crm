export class User {
  firstName: string;
  lastName: string;
  brithDate: number;
  street: string;
  zipCode: number;
  city: string;

  constructor(obj?: any) {
    this.firstName = obj.fristName ? obj.firstName : '';
    this.lastName = obj.lastName ? obj.lastName : '';
    this.brithDate = obj.brithDate ? obj.brithDate : '';
    this.street = obj.street ? obj.street : '';
    this.zipCode = obj.zipCode ? obj.zipCode : '';
    this.city = obj.city ? obj.city : '';
  }
}
