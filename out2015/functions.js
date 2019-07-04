"use strict";
// TypeScript has both named and anonymous functions
function namedFunction(x) {
    return x;
}
let unamedFunction = function (x) { return x; };
// Which is the same as the lambda
let lambda = (x) => x;
// Functions can *capture* variables outside of their scope:
let capturedVariable = 10;
function capturingFunction(x) {
    return x + capturedVariable;
}
// TypeScript can infer the return type:
function inferredReturnType(x) {
    return x;
}
let inverredReturnValue = inferredReturnType(10);
// TypeScript enforces that every parameter is used:
function multipleParameterFunction(x, y) {
}
multipleParameterFunction(10); // invalid
multipleParameterFunction(1, 2);
// TypeScript supports optional parameters:
function optionalParameter(x) {
    if (x) {
        // do the stuff
    }
    else {
        // x = undefined here
    }
}
optionalParameter();
optionalParameter(1);
// TypeScript supports default parameters:
function defaultParameters(x = 1) {
}
defaultParameters();
defaultParameters(1);
// Note: Unlike optional parameters which must come at the end of the parameter
// list, default parameters can be anywhere in the parameter list
// TypeScript supports variable parameter lists
function doStuffWithTheseThings(name, ...everythingElse) {
    return name + " " + everythingElse.join(" ");
}
doStuffWithTheseThings("Jason");
doStuffWithTheseThings("Jason", "Hess");
doStuffWithTheseThings("Jason", "Emil", "Hess");
function myFunction(x) {
    if (typeof x == "number") {
    }
    else if (typeof x == "string") {
    }
}
// another option is to use type unions for parameters:
function myTypeUnionParameterFunction(x) {
    if (typeof x == "number") {
    }
    else if (typeof x == "string") {
    }
}
