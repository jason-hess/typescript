"use strict";
function doSomething(aString) {
    var length = aString.replace("1", "").length;
    return length;
}
var lengthOfDoSomething = doSomething("10");
console.log(lengthOfDoSomething);
