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
var AnotherEnum;
(function (AnotherEnum) {
    AnotherEnum[AnotherEnum["ValueOne"] = 10] = "ValueOne";
    AnotherEnum[AnotherEnum["ValueTwo"] = 13] = "ValueTwo";
})(AnotherEnum || (AnotherEnum = {}));
var yetAnotherEnumValue = AnotherEnum.ValueOne; // valid but falls out of the valid range.
console.log(yetAnotherEnumValue);
console.log(AnotherEnum[yetAnotherEnumValue]);
