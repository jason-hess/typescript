function greeter(name: string) {
  return "Hello " + name + "!";
}

interface Person {
  firstName: string;
  lastName: string;
}

class Teacher {
  fullName: string;
  constructor(private firstName: string, private lastName: string) {
    this.fullName = firstName + " " + lastName;
  }
}

let aTeacher = new Teacher("Jason", "Hess");

console.log(aTeacher.fullName);
