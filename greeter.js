class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullname = firstName + " " + lastName;
    }
}
/**
 *
 * @param person The Person
 */
function greet(person) {
    return "Hello " + person.firstName + "!";
}
greet({ firstName: "Jason", lastName: "Hess" });
let user = { firstName: "Jason", lastName: "Hess" };
let student = new Student("Jason", "Hess");
document.body.innerHTML = greet(student);
