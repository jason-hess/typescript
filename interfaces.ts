// the compiler checks that objects passed to this function
// at least have a property called label of type string
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// this can also be expressed using an interface
interface IMyThing {
  label: string;
}
function printAnotherLabel(lablledObj: IMyThing) {
  console.log(lablledObj.label);
}
// the interface represents the requirement of the object
// having the properties as defined on the interface
// so an interface is like a set of requirements on an instance

// the type checker only cares that the object has those
// properties and that their types match

// you can define optional (not required) properties on interfaces
interface IAnotherInterface {
  firstProperty: string;
  secondProperty?: number;
}
function someBlahFunction(obj: IAnotherInterface): void {
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
function someBlahBlahFunction(obj: IAnotherInterface) {
  // console.log(obj.thirdProperty); // error TS2339: Property 'thirdProperty' does not exist on type 'IAnotherInterface'
}

// Object literals get special treatment and undergo excess property checking when assigning
// them to other variables, or passing them as arguments.If an object literal has any properties
// that the “target type” doesn’t have, you’ll get an error.
function excessPropertyChecking(obj: { label: string }) {
  console.log(obj.label);
}

var obj = { jason: 10, label: "hello" };
excessPropertyChecking(obj); // no error because check is less strict - additional properties are OK
// excessPropertyChecking({ jason: 10, label: "hello" });
// error TS2345: Argument of type '{ jason: number; label: string; }' is not assignable to parameter of type '{ label: string; }'.
// Object literal may only specify known properties, and 'jason' does not exist in type '{ label: string; }'.

// interfaces can describe functions (functions are objects in JavaScript)
interface IFunction {
  (x: number): string;
}
// this lets us describe the shape of a variable
// note the parameter name isn't enforced to be the
// same, just the type
let theFunction: IFunction = function(j: number) {
  console.log(j++);
  return "finished";
};
// the parameter can be type inferred
let theOtherFunction: IFunction = function(j) {
  console.log(j++);
  return "finished";
};
// return types can also be inferred
// let anotherFunction: IFunction = function(j) { // error TS2322: Type '(j: number) => boolean' is not assignable to type 'IFunction'
//   return true; // this is an error since the return type is inferred to be a string
// };

// inferrence can also go the other way
// here inferredFunction is known to take a number and return a boolean
let inferredFunction = function(j: number): boolean {
  return true;
};
// let returnValue: string = inferredFunction("hello"); // error TS2345: Argument of type '"hello"' is not assignable to parameter of type 'number'

// interfaces can also describe indexable types (types that we can index into like
// a[10] or a["key"])
interface IIndexable {
  [index: string]: number;
}

class Indexable implements IIndexable {
  [index: string]: number;
}

let indexable: IIndexable = new Indexable();
indexable["key"] = 10;
indexable[10] = 10;
// There are two types of supported index signatures: string and number
interface IAnotherIndexable {
  [index: string]: number;
}
// interface IYesyAnotherIndexable {
//   [index: boolean]: number; // error TS1023: An index signature parameter type must be 'string' or 'number'
// }
// It is possible to support both types of indexers, but the type returned from a numeric indexer
// must be a subtype of the type returned from the string indexer.This is because when indexing
// with a number, JavaScript will actually convert that to a string before indexing into an object.
// That means that indexing with 100 (a number) is the same thing as indexing with "100" (a string),
// so the two need to be consistent.
// All types returned from the indexer must be the same or a subtype of the type returned from the numeric
// indexer.  This includes other properties on the interface -- they must be the same type.
interface IYetAnotherIndexable {
  // [index: number]: string; // error TS2413: Numeric index type 'string' is not assignable to string index type 'number'
  [index: string]: number; // not valid
}
class Thing {
  someProperty: number;
}
class SubThing extends Thing {
  someProperty: number;
}
interface IYetAnotherIndexable2 {
  [index: number]: Thing;
  [index: string]: Thing;
}
interface IYetAnotherIndexable3 {
  [index: number]: Thing;
  [index: string]: SubThing; // not valid
}
// because the indexer is a property bag, all properties must return the same type
interface IAllPropertiesMustBeTheSameTime {
  [index: string]: number;
  length: number;
  anotherProperty: string; // this is not ok
}
interface IAllPropertiesMustBeTheSameType {
  [i: number]: number;
  anotherProperty: number;
}

// interfaces can be implmented by a class (and can define functions that
// must be implemented)
interface IAnimal {
  type: string;
  age: number;
  growOlder(): void;
}
class Dog implements IAnimal {
  type: string;
  constructor() {
    this.type = "Dog";
    this.age = 10;
  }

  growOlder() {
    this.age++;
  }

  age: number;
}

// interface can extend interfaces
interface IParentInterface {
  label: string;
}
interface IChildInterface extends IParentInterface {
  label2: number;
}
let childInstance: IChildInterface = { label: "one", label2: 2 };

// interfaces can describe hybrid types
interface IHybridInterface {
  (value: number): boolean;
  [index: number]: boolean;
  setValue(value: number);
  value: boolean;
}
let hybridInstance = function(): IHybridInterface {
  const counter = <IHybridInterface>function(value: number) {
    return true;
  };
  counter[10] = true;
  counter.value = true;
  counter.setValue = v => {};
  return counter;
};

// Interfaces describe the public side of the class, rather than both the public
// and private side.This prohibits you from using them to check that a class also
// has particular types for the private side of the class instance.
// todo: come back to this one later
