// TypeScript is a typed superset of JavaScript that compiles to plain JavaScript
// boolean
let isDone = false;
let implicitIsDone = false;
// number
// As in JavaScript, all numbers in TypeScript are floating point values.
// These floating point numbers get the type `number`. In addition to hexadecimal and decimal literals,
// TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// string
let color = "blue";
// can use single quotes like: `let color: string = 'red';`
let age = 10;
// template strings can be multi-line and\or substitute variables
let theString = `This a template string
${color}: ${age + 1}`;
// array
let theList = [1, 2, 3]; // or: let anotherList: Array<number> = [1, 2, 3];
// because arrays are JavaScript arrays, you can add elements to them and create holes in them
theList[3] = 4;
theList.push(5);
theList[100] = 101;
let hole = theList[99]; // sets hole to undefined
// Tuple types allow you to express an array where the type of a fixed number of elements is known,
// but need not be the same and lets you specify type assertions on the elements.
let firstTuple = ["key", 1];
firstTuple[0] = "newKey";
firstTuple[1] = 13;
firstTuple = ["anotherKey", 22];
// firstTuple = [true, "jason"]; // error TS2322: Type 'string' is not assignable to type 'number'.
let anArrayOfTypeUnion = [1, "key"];
// can access an index outside of the legal range
anArrayOfTypeUnion[3] = "true";
// enum
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 0] = "Red";
    Colour[Colour["Blue"] = 1] = "Blue";
    Colour[Colour["Green"] = 2] = "Green";
})(Colour || (Colour = {}));
let y = Colour.Red;
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
let enumValue = AnotherEnum[13]; // enumValue = "ValueTwo"
let enumNumberValue = AnotherEnum["ValueTwo"];
let anotherEnumValue = 13;
// be careful
let yetAnotherEnumValue = 12; // valid but falls out of the valid range.
// untyped lets you opt-in and out-out of type checking as needed
let z = "string";
z = 10;
z = true;
let untypedList = ["string", 10];
// null and undefined are two different values
z = undefined;
z = null;
// void
let t;
let u = undefined;
// void is only really useful for functions:
function voidFunction() {
    // i don't return a value
}
// type inference
let isAlsoDone = true;
isAlsoDone = 100;
// type assertions
// A type assertion is like a type cast in other languages, but performs no special
// checking or restructuring of data. It has no runtime impact, and is used purely
// by the compiler. TypeScript assumes that you, the programmer, have performed any
// special checks that you need.
let aValue = "jason";
let anotherLength = aValue.length;
let aLength = aValue.length;
// when using TypeScript with JSX, only as-style assertions are allowed
// use let instead of var whenever possible to prevent scope issues
var tz = null;
// A union type describes a value that can be one of several types
// If we have a value that has a union type, we can only access members that are common to all types in the union.
let unionType = "true";
unionType = true;
unionType = 10; // error
let anotherUnionType; // parens are optional
let arrayUnionType; // or a required for precedence
let unionOfNumberOrStringArray;
// used in functions
function unionTypeParameter(value, suffixOrPadding) {
    if (typeof suffixOrPadding == "boolean") {
        let y = suffixOrPadding; // TypeScript infers the type of y as boolean here
    }
    if (typeof suffixOrPadding == "string") {
    }
    return "";
}
// in most cases (assigning default values to variables and paramaters, and setting
// function return values) type inferenece is straightforward
let typeInferred = true;
// a best-possible-type algorithm is used to determine the type of more complex types:
let typeInferredArray = [1, 2, null]; // number[]
let typeInferredArray2 = ["1", 2]; // (string | number)[]
// sometimes you'll still need to explicitly state the type you're after
class AnAnimal {
}
class Bear extends AnAnimal {
    growl() { }
}
class Cheetah extends AnAnimal {
}
let typeInferredArray3 = [new Bear(), new Cheetah()]; // Bear[] ??
let typeNotInferredArray = [new Bear(), new Cheetah()];
// When no best common type is found, the resulting inference is the empty object type, {}.
// Because this type has no members, attempting to use any properties of it will cause an error.
// This result allows you to still use the object in a type- agnostic manner, while providing type
// safety in cases where the type of the object can’t be implicitly determined.
// TypeScript can also do contextual typing which is where TypeScript can infer a type based on the context
// in which it is used.
// For instance, in the following onmousedown is an event of type MouseEvent which means we can infer
// mouseEvent is of type MouseEvent, which means buton does not exist
window.onmousedown = mouseEvent => {
    console.log(mouseEvent.buton); //<- Error
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
    let x = param.length; // error
    return param;
}
let explicitGeneric = genericFunction(true);
// the compiler can sometimes infer the type
let genericValue = genericFunction("hello"); // returns string
let genericValue2 = genericFunction(10); // returns number
// null and undefinied are two different types
let nullValue;
nullValue = null;
nullValue = 10;
let undefinedValue;
undefinedValue = undefined;
undefinedValue = 11;
// In strict null checking mode, the null and undefined values are not in the domain of
// every type and are only assignable to themselves and any (the one exception being that
// undefined is also assignable to void).So, whereas T and T | undefined are considered synonymous in
// regular type checking mode (because undefined is considered a subtype of any T), they are different
// types in strict type checking mode, and only T | undefined permits undefined values.The same is
// true for the relationship of T to T | null.
let notNullable;
notNullable = 13;
notNullable = null;
let aFullName = "Jason";
let aLastName = aFullName;
//# sourceMappingURL=types.js.map