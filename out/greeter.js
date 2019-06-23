"use strict";
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullname = firstName + " " + lastName;
    }
    return Student;
}());
/**
 *
 * @param person The Person
 */
function greet(person) {
    return "Hello " + person.firstName + "!";
}
greet({ firstName: "Jason", lastName: "Hess" });
var user = { firstName: "Jason", lastName: "Hess" };
var student = new Student("Jason", "Hess");
//let worker = new Walker("Jason", "Hess");
document.body.innerHTML = greet(student);
