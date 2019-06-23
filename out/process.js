"use strict";
function greeter(name) {
    return "Hello " + name + "!";
}
var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Teacher;
}());
var aTeacher = new Teacher("Jason", "Hess");
console.log(aTeacher.fullName);
