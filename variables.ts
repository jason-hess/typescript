// one problem with JavaScript is that variables by default don't have
// limited scope.
function f(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10;
  }
  return x;
}
// the above function will return 10 if passed true

// all declarations are accessible anywhere within their containing function,
// module, namespace, or global scope - regardless of the containing block

// in the following function all of the i variables are the same thing
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

// let has different scoping to var
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100 * i);
}
for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100 * i);
}
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
  // Error: 'bbb' doesn't exist here
  return bbb;
}

// With var declarations, we mentioned that it didn’t matter how many times you declared your variables; you just got one
function theCityThatAlwaysSleeps() {
  let getCity;

  if (true) {
    let city = "Seattle";
    getCity = function() {
      return city;
    };
  }

  return getCity();
}

// constants
const theConst = 10;
// const is like let except the value of the variable cannot be changed once it is bound
// const and let have similar scoping semantics
theConst = 11;

// array destructuring
let theArray: number[] = [1, 2];
let [fisrtValue, secondValue] = theArray;
// swap the values
[fisrtValue, secondValue] = [secondValue, fisrtValue];

// object destruct
let o = {
  a: "1",
  b: 2
};

let { a, b } = o;

// property renaming
//let {a: newName1, b: newName2} = o;
//// is the same as
//let newName1 = o.a;
//let newName2 = o.b;

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

function jason(x: string, ...theRest) {}

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
