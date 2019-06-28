"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// the compiler checks that objects passed to this function
// at least have a property called label of type string
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printAnotherLabel(lablledObj) {
    console.log(lablledObj.label);
}
function someBlahFunction(obj) {
    console.log(obj.firstProperty);
    if (obj.secondProperty) {
        console.log(obj.secondProperty);
    }
}
// someBlahFunction({ firstProperty: 1 }); // error TS2322: Type 'number' is not assignable to type 'string'
someBlahFunction({ firstProperty: "1" });
someBlahFunction({ firstProperty: "1", secondProperty: 2 });
// The advantage of optional properties is that you can describe these possibly available
// properties while still also preventing use of properties that are not part of the interface
function someBlahBlahFunction(obj) {
    // console.log(obj.thirdProperty); // error TS2339: Property 'thirdProperty' does not exist on type 'IAnotherInterface'
}
// Object literals get special treatment and undergo excess property checking when assigning
// them to other variables, or passing them as arguments.If an object literal has any properties
// that the “target type” doesn’t have, you’ll get an error.
function excessPropertyChecking(obj) {
    console.log(obj.label);
}
var obj = { jason: 10, label: "hello" };
excessPropertyChecking(obj); // no error because check is less strict - additional properties are OK
// this lets us describe the shape of a variable
// note the parameter name isn't enforced to be the
// same, just the type
var theFunction = function (j) {
    console.log(j++);
    return "finished";
};
// the parameter can be type inferred
var theOtherFunction = function (j) {
    console.log(j++);
    return "finished";
};
// return types can also be inferred
// let anotherFunction: IFunction = function(j) { // error TS2322: Type '(j: number) => boolean' is not assignable to type 'IFunction'
//   return true; // this is an error since the return type is inferred to be a string
// };
// inferrence can also go the other way
// here inferredFunction is known to take a number and return a boolean
var inferredFunction = function (j) {
    return true;
};
var Indexable = /** @class */ (function () {
    function Indexable() {
    }
    return Indexable;
}());
var indexable = new Indexable();
indexable["key"] = 10;
indexable[10] = 10;
var Thing = /** @class */ (function () {
    function Thing() {
    }
    return Thing;
}());
var SubThing = /** @class */ (function (_super) {
    __extends(SubThing, _super);
    function SubThing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SubThing;
}(Thing));
var Dog = /** @class */ (function () {
    function Dog() {
        this.type = "Dog";
    }
    Dog.prototype.growOlder = function () {
        this.age++;
    };
    return Dog;
}());
var childInstance = { label: "one", label2: 2 };
var hybridInstance = function () {
    var counter = function (value) {
        return true;
    };
    counter[10] = true;
    counter.value = true;
    counter.setValue = function (v) { };
    return counter;
};
// Interfaces describe the public side of the class, rather than both the public
// and private side.This prohibits you from using them to check that a class also
// has particular types for the private side of the class instance.
// todo: come back to this one later
