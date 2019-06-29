// Iterators
// An object is deemed iterable if it has an implementation for the Symbol.iterator property.  Some built-in 
// types like Array, Map, Set, String, Int32Array, Uint32Array, etc.have their Symbol.iterator property 
// already implemented.Symbol.iterator function on an object is responsible for returning the list of values 
// to iterate on.

// for..of loops iterate over an iterable object, invoking the Symbol.iterator property on the object
let someArray = [1, "thing", true];
for (var element of someArray) {
    
}

// for..in loops iterate over the list of keys in the object being iterated:
let theXList = [4, 5, 6];
for (let i in theXList) {
    console.log(i); // "0", "1", "2",
}
for (let i of theXList) {
    console.log(i); // "4", "5", "6"
}

// Another distinction is that for..in operates on any object; it serves as a way to inspect properties
// on this object.for..of on the other hand, is mainly interested in values of iterable objects

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
    console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}