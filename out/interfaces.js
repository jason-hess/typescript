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
printLabel(myObj);
var myOtherObj = myObj;
printLabel(myOtherObj);
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
var WithLabel = /** @class */ (function () {
    function WithLabel() {
        this.label = "10";
        this.otherProperty = 10;
    }
    return WithLabel;
}());
excessPropertyChecking(new WithLabel());
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
        this.someProperty = 0;
    }
    return Thing;
}());
var SubThing = /** @class */ (function (_super) {
    __extends(SubThing, _super);
    function SubThing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.someProperty = 0;
        return _this;
    }
    return SubThing;
}(Thing));
var Dog = /** @class */ (function () {
    function Dog() {
        this.species = "Dog";
        this.age = 10;
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
// let somethingWithReadOnly: IWithReadOnly = { name: "Jason", age: 55 }; // error TS2322: Type '{ name: string; age: number; }' is not assignable to type 'IWithReadOnly'. Object literal may only specify known properties, and 'age' does not exist in type 'IWithReadOnly'
var somethingWithReadOnly = { name: "Jason" };
// somethingWithReadOnly.name = "Frank"; // error TS2540: Cannot assign to 'name' because it is a read-only property
var WithReadOnly = /** @class */ (function () {
    function WithReadOnly() {
        this.name = "10";
    }
    WithReadOnly.prototype.setName = function () {
        this.name = "14";
    };
    return WithReadOnly;
}());
var withReadOnly = new WithReadOnly();
withReadOnly.name = "16";
var withReadOnly2 = new WithReadOnly();
// withReadOnly2.name = "15"; // error TS2540: Cannot assign to 'name' because it is a read-only property
// TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed, so you can make sure you don’t change your arrays after creation:
var aWriteableArray = [1, 2, 3, 4];
var aReadOnlyArray = aWriteableArray;
console.log(aReadOnlyArray[10]);
aReadOnlyArray[0] = 12; // error!
aReadOnlyArray.push(5); // error!
aReadOnlyArray.length = 100; // error!
a = aReadOnlyArray; // error!
// On the last line of the snippet you can see that even assigning the entire ReadonlyArray back to a normal array is illegal. You can still override it with a type assertion, though:
a = aReadOnlyArray;
