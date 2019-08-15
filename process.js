"use strict";
let aNumber = 10;
function addOne(aNumber) {
    return aNumber + 1;
}
console.log(addOne(aNumber));
let one = ["one", 1];
let two = ["two", 2];
let numberMap = [one, two, ["three", 3], ["four", 4]];
console.log(one[0]);
console.log(two[1]);
var CarMake;
(function (CarMake) {
    CarMake[CarMake["Kia"] = 0] = "Kia";
    CarMake[CarMake["Toyota"] = 1] = "Toyota";
})(CarMake || (CarMake = {}));
let aCarMake = CarMake.Kia;
if (aCarMake == CarMake.Kia) {
    console.log("KIA!");
}
switch (aCarMake) {
    case CarMake.Kia:
        console.log("KIA");
        break;
    default:
        break;
}
function aVoidFunction() {
    let aNumber = 10;
    let aString = aNumber;
}
