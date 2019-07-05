"use strict";
// Traditional JavaScript uses functions and prototype-based inheritance to build up
// reusable components, but this may feel a bit awkward to programmers more comfortable
// with an object-oriented approach, where classes inherit functionality and objects
// are built from these classes. Starting with ECMAScript 2015, also known as ECMAScript 6,
// JavaScript programmers will be able to build their applications using this object-oriented
// class-based approach.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classes
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message; // member access is done with the `this` operator
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("Jason2");
// Inheritance
var ChildGreeter = /** @class */ (function (_super) {
    __extends(ChildGreeter, _super);
    function ChildGreeter(age) {
        var _this = _super.call(this, "Jason") || this;
        _this.age = age; // super() must be called before accessing `this`
        return _this;
    }
    ChildGreeter.prototype.sayAge = function () {
        return "I'm " + this.age + " years old";
    };
    return ChildGreeter;
}(Greeter));
var agedPerson = new ChildGreeter(92);
agedPerson.greet(); // defined on parent class
agedPerson.sayAge(); // defied on child class
var anotherPerson = agedPerson; // variable of type parent can hold child instances
// Overriding Methods
var OverridingGreeter = /** @class */ (function (_super) {
    __extends(OverridingGreeter, _super);
    function OverridingGreeter(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    // this implementation overrides the Greeter.greet() implementation
    OverridingGreeter.prototype.greet = function () {
        return "You're " + this.age + "!";
    };
    return OverridingGreeter;
}(Greeter));
// Member Visibility
var MemberVisibility = /** @class */ (function () {
    function MemberVisibility() {
        this.age = 10; // Members are public by default
        this.name = ""; // protected properties can be accessed by child classes
        this.count = 1; // private properties are not accessible outside the class (including child classes)
        this.fullName = "";
    } // constructors can have access modifiers
    MemberVisibility.prototype.getName = function () {
        return this.name;
    };
    return MemberVisibility;
}());
var aMemberVisibility = new MemberVisibility();
aMemberVisibility.age = 11;
// aMemberVisibility.count = 13; // error TS2341: Property 'count' is private and only accessible within class 'MemberVisibility'
// Parameter Properties
// Properties can be declared in the constructor of the class
// to save you the time of having to create a parameter for the
// constructor and a property on the class
var AnotherClass = /** @class */ (function () {
    function AnotherClass(myName, age, colour) {
        this.myName = myName;
        this.age = age;
        this.colour = colour;
    }
    AnotherClass.prototype.greet = function () {
        return "Hello, " + this.myName + "!";
    };
    return AnotherClass;
}());
var anotherClass = new AnotherClass("", 10, "blue");
console.log(anotherClass.colour);
// Accessors can be specified on classes
// Note: Accessors require you to set the compiler to output ECMAScript 5 or higher. Downleveling to ECMAScript 3 is not supported.
// Note: Accessors with a get and no set are automatically inferred to be readonly. This is helpful when generating a .d.ts
// file from your code, because users of your property can see that they can’t change it.
var ClassWithGetter = /** @class */ (function () {
    function ClassWithGetter() {
        this._age = 10; // note: this needs to have a different name to the properties
    }
    Object.defineProperty(ClassWithGetter.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (age < 0)
                throw new Error("Invalid Operation");
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    return ClassWithGetter;
}());
var aClassWithGetter = new ClassWithGetter();
aClassWithGetter.age = 11;
console.log(aClassWithGetter.age);
// Static Members
// those that are visible on the class itself rather than on the instances
// to access the static property, you prepend it with the name of the class
var TheClassWithStaticProperty = /** @class */ (function () {
    function TheClassWithStaticProperty() {
    }
    TheClassWithStaticProperty.className = "";
    return TheClassWithStaticProperty;
}());
console.log(TheClassWithStaticProperty.className);
// Abstract Classes are classes that cannot be instantiated
var AbstractConcept = /** @class */ (function () {
    function AbstractConcept() {
    }
    return AbstractConcept;
}());
// let anAbstractConcept = new AbstractConcept(); // error TS2511: Cannot create an instance of an abstract class.
var ConcreteConcept = /** @class */ (function (_super) {
    __extends(ConcreteConcept, _super);
    function ConcreteConcept() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // abstract aMethod(): number; // error TS1244: Abstract methods can only appear within an abstract class.
    ConcreteConcept.prototype.anAbstractMethod = function () {
        throw new Error("Method not implemented.");
    };
    return ConcreteConcept;
}(AbstractConcept));
var aConcreteConcept = new ConcreteConcept();
// Type equivalence
// TypeScript is a structural type system. When we compare two different types,
// regardless of where they came from, if the types of all members are compatible,
// then we say the types themselves are compatible.
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = "";
    }
    return Employee;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "";
    }
    return Animal;
}());
var anEmployee = new Employee();
var anAnimal = new Animal();
anEmployee = anAnimal; // because they both take the shape {name: string}
// However, when comparing types that have *private* or *protected* members,
// we treat these types differently. For two types to be considered compatible,
// if one of them has a private member, then the other must have a private member
// that originated in the same declaration. The same applies to protected members.
var EmployeeEx = /** @class */ (function () {
    function EmployeeEx() {
        this.name = "";
    }
    return EmployeeEx;
}());
var AnimalEx = /** @class */ (function () {
    function AnimalEx() {
        this.name = "";
    }
    return AnimalEx;
}());
var anEmployeeEx = new EmployeeEx();
var anAnimalEx = new AnimalEx();
// because each of these classes has a private property that don't originate from the same
// declaration, they are not compatible:
// anEmployeeEx = anAnimalEx; // error TS2322: Type 'AnimalEx' is not assignable to type 'EmployeeEx'
// Read-Only Properties
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var AgedPerson = /** @class */ (function (_super) {
    __extends(AgedPerson, _super);
    function AgedPerson() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // readonly properties must be initialised and can never be changed
        _this.heightInCentimetres = 10;
        _this.age = 10;
        return _this;
    }
    AgedPerson.prototype.getAge = function () {
        // this.heightInCentimetres++; // error TS2540: Cannot assign to 'heightInCentimetres' because it is a read-only property.
        return this.age.toString();
    };
    return AgedPerson;
}(Person));
