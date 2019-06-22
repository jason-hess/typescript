function greeter(name) {
    return "Hello " + name + "!";
}
class Teacher {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
}
let aTeacher = new Teacher("Jason", "Hess");
console.log(aTeacher.fullName);
//# sourceMappingURL=process.js.map