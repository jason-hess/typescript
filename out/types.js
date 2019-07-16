"use strict";
// TypeScript is a typed superset of JavaScript that compiles to plain JavaScript
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
// Types
// boolean
var isBoolean = false;
var implicitIsBoolean = false;
// number
// As in JavaScript, all numbers in TypeScript are floating point values.
// These floating point numbers get the type `number`. In addition to hexadecimal and decimal literals,
// TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// string
var color = "blue";
// can use single quotes like: `let color: string = 'red';`
var age = 10;
// template strings can be multi-line and\or substitute variables
var theString = "This a template string\n" + color + ": " + (age + 1);
// array
var theList = [1, 2, 3]; // or: 
var anotherList = [1, 2, 3];
// because arrays are JavaScript arrays, you can add elements to them and create holes in them
theList[3] = 4;
theList.push(5);
theList[100] = 101;
var hole = theList[99]; // sets `hole` to undefined
// Tuple types allow you to express an array where the type of a fixed number of elements is known,
// but need not be the same and lets you specify type assertions on the elements.
var firstTuple = ["key", 1];
firstTuple[0] = "newKey";
firstTuple[1] = 13;
firstTuple = ["anotherKey", 22];
// firstTuple[2] = undefined; // error TS2493: Tuple type '[string, number]' of length '2' has no element at index '2'.
// firstTuple = [true, "jason"]; // error TS2322: Type 'string' is not assignable to type 'number'.
var anArrayOfTypeUnion = [1, "key"]; // this is not a Tuple, it's an array
// enum
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 0] = "Red";
    Colour[Colour["Blue"] = 1] = "Blue";
    Colour[Colour["Green"] = 2] = "Green";
})(Colour || (Colour = {}));
var y = Colour.Red;
// enums normally start with the value 0, but we can change this
// to start at the value one:
var Speed;
(function (Speed) {
    Speed[Speed["Slow"] = 1] = "Slow";
    Speed[Speed["Fast"] = 2] = "Fast";
})(Speed || (Speed = {})); // Speed.Fast = 2
// or we can specify the numeric value of each enum value
var AnotherEnum;
(function (AnotherEnum) {
    AnotherEnum[AnotherEnum["ValueOne"] = 10] = "ValueOne";
    AnotherEnum[AnotherEnum["ValueTwo"] = 13] = "ValueTwo";
})(AnotherEnum || (AnotherEnum = {}));
// we can convert from numeric to string value and back again
var enumValue = AnotherEnum[13]; // enumValue = "ValueTwo"
var enumNumberValue = AnotherEnum["ValueTwo"];
var anotherEnumValue = 13;
// be careful
var yetAnotherEnumValue = 12; // valid but falls out of the valid range.
// the any type lets you opt-in and out-out of type checking as needed
var z = "string";
z = 10;
z = true;
var untypedList = ["string", 10];
// null and undefined are two different values (and there is a type null and a type undefined)
z = undefined;
z = null;
// The --strictNullChecks compile flag removes null from the domain of every type
// void is the absence of any type.  A variable of type void can only be undefined.
var t;
var u = undefined;
// void is only really useful for functions:
function voidFunction() {
    // i don't return a value
}
// type inference
// TypeScript will infer types for you
var isAlsoDone = true;
// isAlsoDone = 100; // error TS2322: Type '100' is not assignable to type 'boolean'
// type assertions
// A type assertion is like a type cast in other languages, but performs no special
// checking or restructuring of data. It has no runtime impact, and is used purely
// by the compiler. TypeScript assumes that you, the programmer, have performed any
// special checks that you need.
var aValue = "jason";
var anotherLength = aValue.length;
var aLength = aValue.length;
// when using TypeScript with JSX, only as-style assertions are allowed
// use let instead of var whenever possible to prevent scope issues
var tz = "value";
// A union type describes a value that can be one of several types
// If we have a value that has a union type, we can only access members that are common to all types in the union.
var unionType = "true";
unionType = true;
// unionType = 10; // error TS2322: Type '10' is not assignable to type 'string | boolean'
var anotherUnionType; // parens are optional
var arrayUnionType; // or a required for precedence
var unionOfNumberOrStringArray;
// used in functions
function unionTypeParameter(value, suffixOrPadding) {
    if (typeof suffixOrPadding == "boolean") {
        var y_1 = suffixOrPadding; // TypeScript infers the type of y as boolean here
    }
    if (typeof suffixOrPadding == "string") {
    }
    return "";
}
// in most cases (assigning default values to variables and parameters, and setting
// function return values) type inferenece is straightforward
var typeInferred = true;
// a best-possible-type algorithm is used to determine the type of more complex types:
var typeInferredArray = [1, 2, null]; // number[]
var typeInferredArray2 = ["1", 2]; // (string | number)[]
// sometimes you'll still need to explicitly state the type you're after
var AnAnimal = /** @class */ (function () {
    function AnAnimal() {
    }
    return AnAnimal;
}());
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bear.prototype.growl = function () { };
    return Bear;
}(AnAnimal));
var Cheetah = /** @class */ (function (_super) {
    __extends(Cheetah, _super);
    function Cheetah() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cheetah;
}(AnAnimal));
var typeInferredArray3 = [new Bear(), new Cheetah()]; // Bear[] ??
var typeNotInferredArray = [new Bear(), new Cheetah()];
// When no best common type is found, the resulting inference is the empty object type, {}.
// Because this type has no members, attempting to use any properties of it will cause an error.
// This result allows you to still use the object in a type- agnostic manner, while providing type
// safety in cases where the type of the object can’t be implicitly determined.
// TypeScript can also do contextual typing which is where TypeScript can infer a type based on the context
// in which it is used.
// For instance, in the following onmousedown is an event of type MouseEvent which means we can infer
// mouseEvent is of type MouseEvent, which means buton does not exist
window.onmousedown = function (mouseEvent) {
    // console.log(mouseEvent.buton); // error TS2551: Property 'buton' does not exist on type 'MouseEvent'. Did you mean 'button'?
};
// Contextual typing applies in many cases. Common cases include arguments to function calls, right hand
// sides of assignments, type assertions, members of object and array literals, and return statements.
// The contextual type also acts as a candidate type in best common type.For example:
// type guard
// A type guard is some expression that performs a runtime check that
// asserts the type in some scope.To define a type guard, we simply
// need to define a function whose return type is a type predicate:
function isBear(pet) {
    return pet.growl !== undefined;
}
// generics lets us capture the type of an argument or denote a return type
function genericFunction(param) {
    // the type T has been captured so we can use it as a return type
    // TypeScript still enforces typing here, so it doesn't know much about T
    // so it won't let you do much to it:
    // let x = param.length; // error TS2339: Property 'length' does not exist on type 'T'
    return param;
}
var explicitGeneric = genericFunction(true);
// the compiler can sometimes infer the type
var genericValue = genericFunction("hello"); // returns string
var genericValue2 = genericFunction(10); // returns number
// null and undefinied are two different types
var nullValue;
nullValue = null;
// nullValue = 10; // error TS2322: Type '10' is not assignable to type 'null'
var undefinedValue;
undefinedValue = undefined;
// undefinedValue = 11; // error TS2322: Type '11' is not assignable to type 'undefined'
// In strict null checking mode, the null and undefined values are not in the domain of
// every type and are only assignable to themselves and any (the one exception being that
// undefined is also assignable to void).So, whereas T and T | undefined are considered synonymous in
// regular type checking mode (because undefined is considered a subtype of any T), they are different
// types in strict type checking mode, and only T | undefined permits undefined values.The same is
// true for the relationship of T to T | null.
var notNullable;
notNullable = 13;
var aFullName = "Jason";
var aLastName = aFullName;
// The `never` type represents the type of values that never occur
// For example, functions that never return or always throws an exception
// The never type is a subtype type to every type and no type is a subtype or assignable to never.
function infiniteLoop() {
    while (true) { }
}
// The `object` type is a type that represents a non-primitive type
function operateOnObject(o) {
    return;
}
// operateOnObject(10); // error TS2345: Argument of type '10' is not assignable to parameter of type 'object'.
operateOnObject(new Object());
// Type assertions
// A type assertion is like a type cast in other languages, but performs
// no special checking or restructuring of data. It has no runtime impact,
// and is used purely by the compiler.
// Type assertions have two forms. One is the “angle-bracket” syntax:
var aString = "10".length;
// And the other is the as-syntax:
var anotherString = "10".length;
