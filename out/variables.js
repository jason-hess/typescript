"use strict";
var _a, _b;
// one problem with JavaScript is that variables by default don't have
// limited scope.
function f(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
// the above function will return 10 if passed true
// all declarations are accessible anywhere within their containing function,
// module, namespace, or global scope - regardless of the containing block
// in the following function all of the i variables are the same thing
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
// let has different scoping to var
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 100 * i_1);
};
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
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
    // Error: 'bbb' doesn't exist here
    return bbb;
}
// With var declarations, we mentioned that it didn’t matter how many times you declared your variables; you just got one
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
// constants
var theConst = 10;
// const is like let except the value of the variable cannot be changed once it is bound
// const and let have similar scoping semantics
theConst = 11;
// array destructuring
var theArray = [1, 2];
var fisrtValue = theArray[0], secondValue = theArray[1];
// swap the values
_a = [secondValue, fisrtValue], fisrtValue = _a[0], secondValue = _a[1];
// object destruct
var o = {
    a: "1",
    b: 2
};
var a = o.a, b = o.b;
// property renaming
//let {a: newName1, b: newName2} = o;
//// is the same as
//let newName1 = o.a;
//let newName2 = o.b;
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
function jason(x) {
    var theRest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        theRest[_i - 1] = arguments[_i];
    }
}
// TypeScript also support union types to specify a variable can be one
// of several types:
var x = 10;
x = "10";
