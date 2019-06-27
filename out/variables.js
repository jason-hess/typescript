"use strict";
// one problem with JavaScript is that variables by default don't have
// limited scope.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a, _b;
// function f(shouldInitialize: boolean) {
//   x = 11; // JS lets you access variables declared in the function
//   if (shouldInitialize) {
//     var x = 10;
//   }
//   return x;
// }
// function f(x) {
//   var x;
//   var x;
//   if (true) {
//       var x;
//   }
// }
// the above function will return 10 if passed true
// all declarations are accessible anywhere within their containing function,
// module, namespace, or global scope - regardless of the containing block
// in the following function all of the i variables are the same thing and variable declarations in
// JavaScript are hoisted to the top of the function
// With var declarations, it doesn't matter how many times you declared your variables; you just got one
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 100 * i_1);
};
// in the following JavaScript example the function() will refer to the same i variable.
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
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
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}
// the `let` variable declaration
// When a variable is declared using let, it uses what some call lexical- scoping or block- scoping.
// Unlike variables declared with var whose scopes leak out to their containing function, block-scoped
// variables are not visible outside of their nearest containing block or for-loop
function f2(input) {
    var aaa = 100;
    if (input) {
        // Still okay to reference 'aaa'
        var bbb = aaa + 1;
        return bbb;
    }
    // return bbb; // error TS2304: Cannot find name 'bbb'
}
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
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
var a33 = 10;
// in TypeScript a variable of the same name can be in different blocks as different variables.  This is called shadowing.
function sameVariableName() {
    var x = 10;
    if (x > 9) {
        var x_1 = 11;
        return x_1;
    }
    return x;
}
var _loop_2 = function (i_2) {
    setTimeout(function () {
        console.log(i_2);
    }, 100 * i_2);
};
// let declarations have drastically different behavior when declared as part of a loop. Rather than just introducing
// a new environment to the loop itself, these declarations sort of create a new scope per iteration.
// Since this is what we were doing anyway with our IIFE, we can change our old setTimeout example to just use a let declaration.
for (var i_2 = 0; i_2 < 10; i_2++) {
    _loop_2(i_2);
}
// constants
var theConst = 10;
// const is like let except the value of the variable cannot be changed once it is bound
// const and let have similar scoping semantics
// theConst = 11; //  error TS2588: Cannot assign to 'theConst' because it is a constant.
// the object the const refers to can still change
// array destructuring
var theArray = [1, 2];
var firstValue = theArray[0], secondValue = theArray[1];
// this is the same as:
// first = input[0];
// second = input[1];
// swap the values
_a = [secondValue, firstValue], firstValue = _a[0], secondValue = _a[1];
console.log(firstValue);
console.log(secondValue);
// array destructuring as part of a function parameter
function breakArrayApart(_a) {
    var first = _a[0], second = _a[1];
    return first;
}
// can create a variable for the remainder of the array:
var largeArray = [0, 1, 2, 3, 4];
var firstElement = largeArray[0], secondElement = largeArray[1], remainingElements = largeArray.slice(2);
// remainingElements is a number[] with [2,3,4]
console.log(remainingElements.length);
// or ignore remaining elements
var theFirstElement = [1, 2, 3, 4][0];
// or pick and choose
var _c = [1, 2, 3, 4], theSecondElement = _c[1], fourthElement = _c[3];
// Tuples can also be destructured
var aTuple = ["10", 10];
var asString = aTuple[0], asNumber = aTuple[1];
var theStringAsConstant = asString;
// You can also generate a new tuple with the remainder of the tuple:
var aLargeTuple = [
    "10",
    "ten",
    "Ten",
    "TEN",
    10
];
var tenAsString = aLargeTuple[0], remainderTuple = aLargeTuple.slice(1);
var tenAsNumber = remainderTuple[3];
// or ignore elements
var firstTupleElement = aLargeTuple[0];
var secondTupleELement = aLargeTuple[1];
// object destructuring
var o = {
    a: "1",
    b: 2,
    c: true
};
// notice you can skip c if you don't need it
// notice: the names of the variables must match the name of the properties
var a = o.a, b = o.b;
a = "1";
// you can assign new variable names with a more complex syntax:
var newName1 = o.a, newName2 = o.b;
//// is the same as
//let newName1 = o.a;
//let newName2 = o.b;
// assignment without declaration
(_b = { a: "baz", b: 101 }, a = _b.a, b = _b.b);
// object destructuring with default values
function someFunction(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 100 : _a;
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
function yetAnotherFunction(_a) {
    var _b = _a === void 0 ? { a: "", b: 2 } : _a, a = _b.a, b = _b.b;
    console.log(a);
    console.log(b);
}
yetAnotherFunction();
// Typescript also supports the opposite of destructuring: spread:
var firstArray = [1, 2];
var secondArray = [3, 4];
var union = firstArray.concat(secondArray);
var additionalElements = [0].concat(firstArray, secondArray, [5]);
// you can also spread objects:
var someObject = { flavour: "bitter", temperature: "warm" };
var anotherObject = __assign({ colour: "blue" }, someObject);
anotherObject.flavour = "sweet";
anotherObject.colour = "red";
// be careful though because in the spread above that creates
// `anotherObject`, the variables on the right will overwrite variables on the left
// for example:
anotherObject = __assign({ flavour: "sour" }, anotherObject);
// at this point anotherObject.flavour is now sweet.
// object spread will only support enumerable properties (i.e. not functions)
// of an object
// for example:
var C = /** @class */ (function () {
    function C() {
        this.p = 12;
    }
    C.prototype.m = function () { };
    return C;
}());
var c = new C();
var clone = __assign({}, c);
clone.p; // ok
// clone.m(); // error TS2339: Property 'm' does not exist on type '{ p: number; }'.
var D = /** @class */ (function () {
    function D() {
        this.p = 12;
        this.m = function () {
            return 12;
        };
    }
    return D;
}());
var d = new D();
var dClone = __assign({}, d);
dClone.p; // ok
dClone.m(); //
dClone.m = function () {
    return 10;
};
console.log(dClone.m());
// Second, the Typescript compiler doesn’t allow spreads of type parameters from generic functions. That feature is expected in future versions of the language.
// TypeScript also support union types to specify a variable can be one
// of several types:
var x = 10;
x = "10";
function sumMatrix2(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
var first = [1, 2];
var second = [3, 4];
var bothPlus = [0].concat(first, second, [5]);
var Restaurant = /** @class */ (function () {
    function Restaurant() {
        this.call = function () { };
        this.food = "";
        this.price = "";
        this.ambience = "";
    }
    return Restaurant;
}());
var defaults = {
    food: "spicy",
    price: "$$",
    ambiance: "noisy"
};
var defaults2 = new Restaurant();
defaults2.call();
var search = __assign({ food: "rich" }, defaults2, { size: 10 });
search.size = 50;
search.call();
