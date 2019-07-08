// one problem with JavaScript is that variables by default don't have
// limited scope.

// function f(shouldInitialize: boolean) {
//   x = 11; // JS lets you access variables declared in the function
//   if (shouldInitialize) {
//     var x = 10;
//   }
//   return x;
// }
// the above function will return 10 if passed true

// function f(x) {
//   var x;
//   var x;

//   if (true) {
//       var x;
//   }
// }

// all declarations are accessible anywhere within their containing function,
// module, namespace, or global scope - regardless of the containing block

// in the following function all of the i variables are the same thing and variable declarations in
// JavaScript are hoisted to the top of the function
// With var declarations, it doesn't matter how many times you declared your variables; you just get one
function sumMatrix(matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }

  return sum;
}

// in the following JavaScript example the function() will refer to the same i variable.
for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100 * i);
}
// this means the output of the above will be:
// 10
// 10
// 10
// Let’s take a minute to consider that in this context.setTimeout will run a function
// after some number of milliseconds, and also after the for loop has stopped executing.
// By the time the for loop has stopped executing, the value of i is 10. So each time the
// given function gets called, it will print out 10!

// A common work around is to use an IIFE - an Immediately Invoked Function Expression - to capture i at each iteration:
for (var i = 0; i < 10; i++) {
  // capture the current state of 'i'
  // by invoking a function with its current value
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, 100 * i);
  })(i);
}

// the `let` variable declaration

// When a variable is declared using let, it uses what some call lexical- scoping or block- scoping.
// Unlike variables declared with var whose scopes leak out to their containing function, block-scoped
// variables are not visible outside of their nearest containing block or for-loop
function f2(input: boolean) {
  let aaa = 100;

  if (input) {
    // Still okay to reference 'aaa'
    let bbb = aaa + 1;
    return bbb;
  }
  // return bbb; // error TS2304: Cannot find name 'bbb'
}

function theCityThatAlwaysSleeps() {
  let getCity;
  let city = "";

  if (true) {
    let city = "Seattle";
    getCity = function() {
      return city;
    };
  }

  return getCity();
}

// note that TypeScript allows you to access a variable before it is declared.

function foo() {
  // okay to capture 'a'
  return a33;
}

// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
foo();

let a33 = 10;

// in TypeScript a variable of the same name can be in different blocks as different variables.  This is called shadowing.
function sameVariableName() {
  let x = 10;
  if (x > 9) {
    let x = 11;
    return x;
  }
  return x;
}

// let declarations have drastically different behavior when declared as part of a loop. Rather than just introducing
// a new environment to the loop itself, these declarations sort of create a new scope per iteration.
// Since this is what we were doing anyway with our IIFE, we can change our old setTimeout example to just use a let declaration.
for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100 * i);
}

// constants
const theConst = 10;
// const is like let except the value of the variable cannot be changed once it is bound
// *const and let have similar scoping semantics*
// theConst = 11; //  error TS2588: Cannot assign to 'theConst' because it is a constant.
// the object the const refers to can still change

// array destructuring
let theArray: number[] = [1, 2];
let [firstValue, secondValue] = theArray;
// this is the same as:
// first = input[0];
// second = input[1];

// swap the values
[firstValue, secondValue] = [secondValue, firstValue];
console.log(firstValue);
console.log(secondValue);

// array destructuring as part of a function parameter
function breakArrayApart([first, second]: [number, number]) {
  return first;
}

// can create a variable for the remainder of the array:
let largeArray = [0, 1, 2, 3, 4];
let [firstElement, secondElement, ...remainingElements] = largeArray;
// remainingElements is a number[] with [2,3,4]
console.log(remainingElements.length);

// or ignore remaining elements
let [theFirstElement] = [1, 2, 3, 4];

// or pick and choose
let [, theSecondElement, , fourthElement] = [1, 2, 3, 4];

// Tuples can also be destructured
let aTuple: [string, number] = ["10", 10];
let [asString, asNumber] = aTuple;
const theStringAsConstant: string = asString;

// You can also generate a new tuple with the remainder of the tuple:
let aLargeTuple: [string, string, string, string, number] = [
  "10",
  "ten",
  "Ten",
  "TEN",
  10
];
let [tenAsString, ...remainderTuple] = aLargeTuple;
let tenAsNumber: number = remainderTuple[3];

// or ignore elements
let [firstTupleElement] = aLargeTuple;
let [, secondTupleELement] = aLargeTuple;

// object destructuring
let o = {
  a: "1",
  b: 2,
  c: true
};

// notice you can skip c if you don't need it
// notice: the names of the variables must match the name of the properties
let { a, b } = o;
a = "1";

// you can assign new variable names with a more complex syntax:
let { a: newName1, b: newName2 } = o;
//// is the same as
//let newName1 = o.a;
//let newName2 = o.b;

// assignment without declaration
({ a, b } = { a: "baz", b: 101 });

// object destructuring with default values
function someFunction(wholeObject: { a: string; b?: number }): void {
  let { a, b = 100 } = wholeObject;
  console.log(a);
  console.log(b);
}

// you can also destruct in function declarations
//type C = { a: string, b?: string };
//function anotherFunction({ a, b } : C) {
//    console.log(a);
//    console.log(b);
//}

// you can use destruct to set default values
function yetAnotherFunction({ a, b } = { a: "", b: 2 }) {
  console.log(a);
  console.log(b);
}
yetAnotherFunction();

// Typescript also supports the opposite of destructuring: spread:
let firstArray = [1, 2];
let secondArray = [3, 4];
let union = [...firstArray, ...secondArray];
let additionalElements = [0, ...firstArray, ...secondArray, 5];

// you can also spread objects:

let someObject = { flavour: "bitter", temperature: "warm" };
let anotherObject = { colour: "blue", ...someObject };
anotherObject.flavour = "sweet";
anotherObject.colour = "red";
// be careful though because in the spread above that creates
// `anotherObject`, the variables on the right will overwrite variables on the left
// for example:
anotherObject = { flavour: "sour", ...anotherObject };
// at this point anotherObject.flavour is now sweet.

// object spread will only support enumerable properties (i.e. not functions)
// of an object
// for example:

class C {
  p = 12;
  m() {}
}
let c = new C();
let clone = { ...c };
clone.p; // ok
// clone.m(); // error TS2339: Property 'm' does not exist on type '{ p: number; }'.

class D {
  p = 12;
  m = function() {
    return 12;
  };
}
let d = new D();
let dClone = { ...d };
dClone.p; // ok
dClone.m(); //
dClone.m = function() {
  return 10;
};
console.log(dClone.m());

// Second, the Typescript compiler doesn’t allow spreads of type parameters from generic functions. That feature is expected in future versions of the language.

// TypeScript also support union types to specify a variable can be one
// of several types:
let x: number | string = 10;
x = "10";

function sumMatrix2(matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }

  return sum;
}

let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];

class Restaurant {
  food: string;
  price: string;
  ambience: string;

  constructor() {
    this.food = "";
    this.price = "";
    this.ambience = "";
  }

  call = function() {};
}

let defaults = {
  food: "spicy",
  price: "$$",
  ambiance: "noisy"
};
let defaults2 = new Restaurant();
defaults2.call();
let search = { food: "rich", ...defaults2, size: 10 };
search.size = 50;
search.call();
