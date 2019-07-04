"use strict";
// Traditional JavaScript uses functions and prototype-based inheritance to build up
// reusable components, but this may feel a bit awkward to programmers more comfortable
// with an object-oriented approach, where classes inherit functionality and objects
// are built from these classes. Starting with ECMAScript 2015, also known as ECMAScript 6,
// JavaScript programmers will be able to build their applications using this object-oriented
// class-based approach.
// Classes
class Greeter {
    constructor(message) {
        this.greeting = message; // member access is done with the `this` operator
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
let greeter = new Greeter("Jason2");
// Inheritance
class ChildGreeter extends Greeter {
    constructor(age) {
        super("Jason"); // super must be called if a constructor is defined
        this.age = age; // super() must be called before accessing `this`
    }
    sayAge() {
        return `I'm ${this.age} years old`;
    }
}
let agedPerson = new ChildGreeter(92);
agedPerson.greet(); // defined on parent class
agedPerson.sayAge(); // defied on child class
let anotherPerson = agedPerson; // variable of type parent can hold child instances
// Overriding Methods
class OverridingGreeter extends Greeter {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    // this implementation overrides the Greeter.greet() implementation
    greet() {
        return `You're ${this.age}!`;
    }
}
// Member Visibility
class MemberVisibility {
    constructor() {
        this.age = 10; // Members are public by default
        this.name = ""; // protected properties can be accessed by child classes
        this.count = 1; // private properties are not accessible outside the class (including child classes)
        this.fullName = "";
    }
    getName() {
        return this.name;
    }
}
let aMemberVisibility = new MemberVisibility();
aMemberVisibility.age = 11;
// aMemberVisibility.count = 13; // error TS2341: Property 'count' is private and only accessible within class 'MemberVisibility'
// Parameter Properties
// Properties can be declared in the constructor of the class
// to save you the time of having to create a parameter for the
// constructor and a property on the class
class AnotherClass {
    constructor(myName, age, colour) {
        this.myName = myName;
        this.age = age;
        this.colour = colour;
    }
    greet() {
        return `Hello, ${this.myName}!`;
    }
}
let anotherClass = new AnotherClass("", 10, "blue");
console.log(anotherClass.colour);
// Accessors can be specified on classes
// Note: Accessors require you to set the compiler to output ECMAScript 5 or higher. Downleveling to ECMAScript 3 is not supported.
// Note: Accessors with a get and no set are automatically inferred to be readonly. This is helpful when generating a .d.ts
// file from your code, because users of your property can see that they can’t change it.
class ClassWithGetter {
    constructor() {
        this._age = 10; // note: this needs to have a different name to the properties
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (age < 0)
            throw new Error("Invalid Operation");
        this._age = value;
    }
}
let aClassWithGetter = new ClassWithGetter();
aClassWithGetter.age = 11;
console.log(aClassWithGetter.age);
// Static Members
// those that are visible on the class itself rather than on the instances
// to access the static property, you prepend it with the name of the class
class TheClassWithStaticProperty {
}
TheClassWithStaticProperty.className = "";
console.log(TheClassWithStaticProperty.className);
// Abstract Classes are classes that cannot be instantiated
class AbstractConcept {
}
// let anAbstractConcept = new AbstractConcept(); // error TS2511: Cannot create an instance of an abstract class.
class ConcreteConcept extends AbstractConcept {
    // abstract aMethod(): number; // error TS1244: Abstract methods can only appear within an abstract class.
    anAbstractMethod() {
        throw new Error("Method not implemented.");
    }
}
let aConcreteConcept = new ConcreteConcept();
// Type equivalence
// TypeScript is a structural type system. When we compare two different types,
// regardless of where they came from, if the types of all members are compatible,
// then we say the types themselves are compatible.
class Employee {
    constructor() {
        this.name = "";
    }
}
class Animal {
    constructor() {
        this.name = "";
    }
}
let anEmployee = new Employee();
let anAnimal = new Animal();
anEmployee = anAnimal; // this is fine.
// However, when comparing types that have *private* or *protected* members,
// we treat these types differently. For two types to be considered compatible,
// if one of them has a private member, then the other must have a private member
// that originated in the same declaration. The same applies to protected members.
class EmployeeEx {
    constructor() {
        this.name = "";
    }
}
class AnimalEx {
    constructor() {
        this.name = "";
    }
}
let anEmployeeEx = new EmployeeEx();
let anAnimalEx = new AnimalEx();
// because each of these classes has a private property that don't originate from the same
// declaration, they are not compatible
// anEmployeeEx = anAnimalEx; // error TS2322: Type 'AnimalEx' is not assignable to type 'EmployeeEx'
class Person {
}
class AgedPerson extends Person {
    // constructors can also be protected so they can't be called except by base classes
    constructor() {
        super();
        // readonly properties must be initialised and can never be changed
        this.heightInCentimetres = 10;
        this.age = 10;
    }
    getAge() {
        // this.heightInCentimetres++; // error TS2540: Cannot assign to 'heightInCentimetres' because it is a read-only property.
        return this.age.toString();
    }
}
