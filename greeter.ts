interface Person {
  firstName: string;
  lastName: string;
}

function greet(person: Person) {
  return "Hello " + person.firstName + "!";
}

greet({ firstName: "Jason", lastName: "Hess" });

let user = { firstName: "Jason", lastName: "Hess" };

document.body.innerHTML = greet(user);
