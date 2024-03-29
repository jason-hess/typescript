﻿// TypeScript is a typed superset of JavaScript that compiles to plain JavaScript

// Types

// boolean
let isBoolean: boolean = false;
let implicitIsBoolean = false;

// number
// As in JavaScript, all numbers in TypeScript are floating point values.
// These floating point numbers get the type `number`. In addition to hexadecimal and decimal literals,
// TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = "blue";
// can use single quotes like: `let color: string = 'red';`
let age: number = 10;
// template strings can be multi-line and\or substitute variables
let theString: string = `This a template string
${color}: ${age + 1}`;

// array
let theList: number[] = [1, 2, 3]; // or:
let anotherList: Array<number> = [1, 2, 3];
// because arrays are JavaScript arrays, you can add elements to them and create holes in them
theList[3] = 4;
theList.push(5);
theList[100] = 101;
let hole: number = theList[99]; // sets `hole` to undefined

// Tuple types allow you to express an array where the type of a fixed number of elements is known,
// but need not be the same and lets you specify type assertions on the elements.
let firstTuple: [string, number] = ["key", 1];
firstTuple[0] = "newKey";
firstTuple[1] = 13;
firstTuple = ["anotherKey", 22];
// firstTuple[2] = undefined; // error TS2493: Tuple type '[string, number]' of length '2' has no element at index '2'.
// firstTuple = [true, "jason"]; // error TS2322: Type 'string' is not assignable to type 'number'.
let anArrayOfTypeUnion = [1, "key"]; // this is not a Tuple, it's an array

// enum
enum Colour {
  Red,
  Blue,
  Green
}
let y = Colour.Red;
// enums normally start with the value 0, but we can change this
// to start at the value one:
enum Speed {
  Slow = 1,
  Fast
} // Speed.Fast = 2
// or we can specify the numeric value of each enum value
enum AnotherEnum {
  ValueOne = 10,
  ValueTwo = 13
}
// we can convert from numeric to string value and back again
let enumValue: string = AnotherEnum[13]; // enumValue = "ValueTwo"
let enumNumberValue: number = AnotherEnum["ValueTwo"];
let anotherEnumValue: AnotherEnum = 13;
let redAsNumber: number = Colour.Red; // 0
let redAsString = Colour[Colour.Red]; // "Red"
let redAsNumberAgain = Colour["Red"]; // 0
// be careful
let yetAnotherEnumValue: AnotherEnum = 12; // valid but falls out of the valid range.

// the any type lets you opt-in and out-out of type checking as needed
let z: any = "string";
z = 10;
z = true;
let untypedList: any[] = ["string", 10];

// unknown
// Anything is assignable to unknown, but unknown isn't assignable to anything but itself and any
// without a type assertion or a control flow based narrowing.
// Likewise, no operations are permitted on an unknown without first asserting or narrowing to
// a more specific type.
// It looks like this was added in TypeScript 3 and seems a lot more useful than `any`
let someAnyValue: any = 10; // any value can be assigned to an any variable
let someNumberValue: number = someAnyValue;
let someUnknownValue: unknown = "10"; // any value can be assigned to an unknown variable
someUnknownValue = 10;
// someNumberValue = someUnknownValue; // error TS2322: Type 'unknown' is not assignable to type 'number'
someNumberValue = someUnknownValue as number;
// The unknown value is only assignable to variables of type any or unknown (without a type assertion)
// We can narrow the unknown type to a more specific type in different ways,
// including the typeof operator, the instanceof operator, and custom type guard functions.
function operateOnAnUnknownValue(anUnknownValue: unknown): void {
  if (typeof anUnknownValue == "number") {
    let aNumber: number = anUnknownValue; // the compiler now knows that anUnknownValue is a number
  }
}

// null and undefined are two different values (and there is a type null and an undefined type)
z = undefined;
z = null;

// void is the absence of any type.  A variable of type void can only be undefined.
let t: void;
let u: void = undefined;
// let v: void = 10; // error TS2322: Type '10' is not assignable to type 'void'

// void is only really useful for functions:
function voidFunction(): void {
  // i don't return a value
  // return 10; // error TS2322: Type '10' is not assignable to type 'void'
}

// type inference
// TypeScript will infer types for you
let isAlsoDone = true;
// isAlsoDone = 100; // error TS2322: Type '100' is not assignable to type 'boolean'

// type assertions
// A type assertion is like a type cast in other languages, but performs no special
// checking or restructuring of data. It has no runtime impact, and is used purely
// by the compiler. TypeScript assumes that you, the programmer, have performed any
// special checks that you need.
let aValue: any = "jason";
// Type assertions have two forms. One is the “angle-bracket” syntax:
let aLength: number = (<string>aValue).length;
// the other is the `as` statement
let anotherLength: number = (aValue as string).length;
// when using TypeScript with JSX, only as-style assertions are allowed

// use let instead of var whenever possible to prevent scope issues
var tz: string = "value";

// A union type describes a value that can be one of several types
// If we have a value that has a union type, we can only access members that are common to all types in the union.
let unionType: boolean | string = "true";
unionType = true;
// unionType = 10; // error TS2322: Type '10' is not assignable to type 'string | boolean'
let anotherUnionType: number | string; // parens can be used (number | string)
let arrayUnionType: (number | string)[]; // or are required for precedence
let unionOfNumberOrStringArray: number | string[];
// used in functions
function unionTypeParameter(
  value: string,
  suffixOrPadding: boolean | string
): string {
  if (typeof suffixOrPadding == "boolean") {
    let y = suffixOrPadding; // TypeScript infers the type of y as boolean here
  }
  if (typeof suffixOrPadding == "string") {
  }
  return "";
}

// in most cases (assigning default values to variables and parameters, and setting
// function return values) type inferenece is straightforward
let typeInferred = true;

// a best-possible-type algorithm is used to determine the type of more complex types:
let typeInferredArray = [1, 2, null]; // number[]
let typeInferredArray2 = ["1", 2]; // (string | number)[]

// sometimes you'll still need to explicitly state the type you're after
class AnAnimal {}
class Bear extends AnAnimal {
  growl() {}
}
class Cheetah extends AnAnimal {}
let typeInferredArray3 = [new Bear(), new Cheetah()]; // (Bear | Cheetah)[]
let typeNotInferredArray: AnAnimal[] = [new Bear(), new Cheetah()]; // AnAnimal[]
// When no best common type is found, the resulting inference is the empty object type, {}.
// Because this type has no members, attempting to use any properties of it will cause an error.
// This result allows you to still use the object in a type- agnostic manner, while providing type
// safety in cases where the type of the object can’t be implicitly determined.

// TypeScript can also do contextual typing which is where TypeScript can infer a type based on the context
// in which it is used.
// For instance, in the following onmousedown is an event of type MouseEvent which means we can infer
// mouseEvent is of type MouseEvent, which means buton does not exist
window.onmousedown = mouseEvent => {
  // console.log(mouseEvent.buton); // error TS2551: Property 'buton' does not exist on type 'MouseEvent'. Did you mean 'button'?
};
// Contextual typing applies in many cases. Common cases include arguments to function calls, right hand
// sides of assignments, type assertions, members of object and array literals, and return statements.
// The contextual type also acts as a candidate type in best common type.For example:

// type guard
// A type guard is some expression that performs a runtime check that
// asserts the type in some scope.  To define a user-defined type guard, we simply
// need to define a function whose return type is a type predicate:
function isBear(pet: Bear | Cheetah): pet is Bear {
  return (pet as Bear).growl !== undefined;
}

// todo: this needs more investigation

// instanceof
// In order to check if an instance of a class is an instance of a particular class, you use
// the `instanceof` operator:
var aCheetah = new Cheetah();
if (aCheetah instanceof Cheetah) {
}

// generics lets us capture the type of an argument or denote a return type
function genericFunction<T>(param: T): T {
  // the type T has been captured so we can use it as a return type
  // TypeScript still enforces typing here, so it doesn't know much about T
  // so it won't let you do much to it:
  // let x = param.length; // error TS2339: Property 'length' does not exist on type 'T'
  return param;
}
let explicitGeneric = genericFunction<boolean>(true);
// the compiler can sometimes infer the type
let genericValue = genericFunction("hello"); // returns string
let genericValue2 = genericFunction(10); // returns number

// null and undefined are two different types
let nullValue: null;
// nullValue = undefined; // error TS2322: Type 'undefined' is not assignable to type 'null'
nullValue = null;
// nullValue = 10; // error TS2322: Type '10' is not assignable to type 'null'

let undefinedValue: undefined;
undefinedValue = undefined;
// undefinedValue = null; // error TS2322: Type 'null' is not assignable to type 'undefined'
// undefinedValue = 11; // error TS2322: Type '11' is not assignable to type 'undefined'

// The --strictNullChecks compile flag removes null from the domain of every type

// In strict null checking mode, the null and undefined values are not in the domain of
// every type and are only assignable to themselves and any (the one exception being that
// undefined is also assignable to void).  So, whereas T and T | undefined are considered synonymous in
// regular type checking mode (because undefined is considered a subtype of any T), they are different
// types in strict type checking mode, and only T | undefined permits undefined values.The same is
// true for the relationship of T to T | null.

let notNullable: number;
notNullable = 13;
// notNullable = null; // error TS2322: Type 'null' is not assignable to type 'number'

// type aliases
type FullName = string;
let aFullName: FullName = "Jason";
type LastName = string;
let aLastName = aFullName;

// The `never` type represents the type of values that never occur
// For example, functions that never return or always throws an exception
// The never type is a subtype type to every type and no type is a subtype or assignable to never.
function infiniteLoop(): never {
  while (true) {}
}

let neverEver: never;

// The `object` type is a type that represents a non-primitive type
function operateOnObject(o: object) {
  return;
}
// operateOnObject(10); // error TS2345: Argument of type '10' is not assignable to parameter of type 'object'.
operateOnObject(new Object());
