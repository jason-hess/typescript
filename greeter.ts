interface Person {
  firstName: string;
  lastName: string;
}

class Student {
  fullname: string;

  constructor(public firstName: string, public lastName: string) {
    this.fullname = firstName + " " + lastName;
  }
}

/**
 *
 * @param person The Person
 */
function greet(person: Person) {
  return "Hello " + person.firstName + "!";
}

greet({ firstName: "Jason", lastName: "Hess" });

let user = { firstName: "Jason", lastName: "Hess" };
let student = new Student("Jason", "Hess");

document.body.innerHTML = greet(student);
