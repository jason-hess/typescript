export class Walker {
  fullname: string;

  constructor(public firstName: string, public lastName: string) {
    this.fullname = firstName + " " + lastName;
  }
}
