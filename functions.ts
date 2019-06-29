// TypeScript has both named and anonymous functions
function namedFunction(x: number): number {
    return x;
}
let unamedFunction = function (x: number) { return x; }
// Which is the same as the lambda
let lambda = (x: number) => x;

// Functions can *capture* variables outside of their scope:
let capturedVariable = 10;
function capturingFunction(x: number): number {
    return x + capturedVariable;
}
// TypeScript can infer the return type:
function inferredReturnType(x: number) {
    return x;
}
let inverredReturnValue: number = inferredReturnType(10);

// TypeScript enforces that every parameter is used:
function multipleParameterFunction(x: number, y: number) {

}
multipleParameterFunction(10); // invalid
multipleParameterFunction(1, 2);

// TypeScript supports optional parameters:
function optionalParameter(x?: number) {
    if (x) {
        // do the stuff
    } else {
        // x = undefined here
    }
}
optionalParameter();
optionalParameter(1);

// TypeScript supports default parameters:
function defaultParameters(x: number = 1) {

}
defaultParameters();
defaultParameters(1);
// Note: Unlike optional parameters which must come at the end of the parameter
// list, default parameters can be anywhere in the parameter list

// TypeScript supports variable parameter lists
function doStuffWithTheseThings(name: string, ...everythingElse: string[]) {
    return name + " " + everythingElse.join(" ");
}

doStuffWithTheseThings("Jason");
doStuffWithTheseThings("Jason", "Hess");
doStuffWithTheseThings("Jason", "Emil", "Hess");

// Functions and this
// todo: re-read and put your notes here

// It is not uncommon for JavaScript functions to return different types
// of objects depending upon the parameters passed in.  
// TypeScript instead provides function overloading.   This is the form:
function myFunction(x: number);
function myFunction(x: string);
function myFunction(x): void {
    if (typeof x == "number") {

    } else if (typeof x == "string") {

    }
}

// type unions are another way of doing this:
function myUnionTypeParamFunction(x: number | string)

// another option is to use type unions for parameters:
function myTypeUnionParameterFunction(x: number | string) {
    if (typeof x == "number") {

    } else if (typeof x == "string") {

    }
}