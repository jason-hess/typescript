"use strict";
// Iterators
// An object is deemed iterable if it has an implementation for the Symbol.iterator property.  Some built-in 
// types like Array, Map, Set, String, Int32Array, Uint32Array, etc.have their Symbol.iterator property 
// already implemented.Symbol.iterator function on an object is responsible for returning the list of values 
// to iterate on.
// for..of loops iterate over an iterable object, invoking the Symbol.iterator property on the object
var someArray = [1, "thing", true];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var element = someArray_1[_i];
}
// for..in loops iterate over the list of keys in the object being iterated:
var theXList = [4, 5, 6];
for (var i_1 in theXList) {
    console.log(i_1); // "0", "1", "2",
}
for (var _a = 0, theXList_1 = theXList; _a < theXList_1.length; _a++) {
    var i_2 = theXList_1[_a];
    console.log(i_2); // "4", "5", "6"
}
// Another distinction is that for..in operates on any object; it serves as a way to inspect properties
// on this object.for..of on the other hand, is mainly interested in values of iterable objects
var pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (var pet in pets) {
    console.log(pet); // "species"
}
for (var _b = 0, pets_1 = pets; _b < pets_1.length; _b++) {
    var pet = pets_1[_b];
    console.log(pet); // "Cat", "Dog", "Hamster"
}
