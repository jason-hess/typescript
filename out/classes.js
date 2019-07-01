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
// TypeScript supports classes
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
// TypeScript supports inheritance
var ChildGreeter = /** @class */ (function (_super) {
    __extends(ChildGreeter, _super);
    function ChildGreeter(age) {
        var _this = _super.call(this, "Jason") || this;
        _this.age = age;
        return _this;
    }
    ChildGreeter.prototype.sayAge = function () {
        return "I'm " + this.age + " years old";
    };
    return ChildGreeter;
}(Greeter));
var agedPerson = new ChildGreeter(92);
agedPerson.greet();
agedPerson.sayAge();
var anotherPerson = agedPerson;
// overriding methods
var OverridingGreeter = /** @class */ (function (_super) {
    __extends(OverridingGreeter, _super);
    function OverridingGreeter(name, age) {
        var _this = _super.call(this, name) || this;
        _this.year = 10; // you can explictly declare a property as `public`
        _this.age = age; // super() must be called before member access with `this`
        return _this;
    }
    // this implementation overrides the base class implementation
    OverridingGreeter.prototype.greet = function () {
        return "You're " + this.age + "!";
    };
    return OverridingGreeter;
}(Greeter));
// Member visibility
// Members are public by default
greeter.greeting = "123";
// Parameter Properties
// Properties can be declared in the constructor of the class
// to save you the time of having to create a parameter for the
// constructor and a property on the class
var AnotherClass = /** @class */ (function () {
    function AnotherClass(myName) {
        this.myName = myName;
    }
    AnotherClass.prototype.greet = function () {
        return "Hello, " + this.myName + "!";
    };
    return AnotherClass;
}());
// Accessors can be specified on classes
var YetAnotherClass = /** @class */ (function () {
    function YetAnotherClass(myName) {
        this.myName = myName;
    }
    Object.defineProperty(YetAnotherClass.prototype, "name", {
        get: function () {
            return this.myName;
        },
        enumerable: true,
        configurable: true
    });
    return YetAnotherClass;
}());
var theName = new YetAnotherClass("Jason").name;
// Static Members - Similarly to prepending a variable name with *this*, you
// can prepend it with the class name to access Class static members
var StaticMembersClass = /** @class */ (function () {
    function StaticMembersClass() {
        this.x = StaticMembersClass.theMember;
    }
    StaticMembersClass.theMember = 10;
    return StaticMembersClass;
}());
// Abstract classes are classes that can be derived from but cannot be
// instantiated
var NotInstantiatable = /** @class */ (function () {
    function NotInstantiatable() {
    }
    return NotInstantiatable;
}());
var instance = new NotInstantiatable();
// Interfaces can also extend classes to define constraints on types
var JasonPoint = /** @class */ (function () {
    function JasonPoint() {
    }
    return JasonPoint;
}());
var point3D = { x: 1, y: 2, z: 3 };
var notValidPoint = new IPoint3D();
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
anEmployee = anAnimal; // this is fine.
// However, when comparing types that have private and protected members,
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
// declaration, they are not compatible
// anEmployeeEx = anAnimalEx; // error TS2322: Type 'AnimalEx' is not assignable to type 'EmployeeEx'
// protected members can be accessed from derived classes
var Person = /** @class */ (function () {
    function Person() {
        this.name = "";
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var AgedPerson = /** @class */ (function (_super) {
    __extends(AgedPerson, _super);
    // constructors can also be protected so they can't be called except by base classes
    function AgedPerson() {
        var _this = _super.call(this) || this;
        // readonly properties must be initialised and can never be changed
        _this.heightInCentimetres = 10;
        _this.age = 10;
        return _this;
    }
    AgedPerson.prototype.getAge = function () {
        // this.heightInCentimetres++; // error TS2540: Cannot assign to 'heightInCentimetres' because it is a read-only property.
        return this.name + " is " + this.age + " years old";
    };
    return AgedPerson;
}(Person));
// parameter properties are declared and initialised in one place
var Octopus = /** @class */ (function () {
    function Octopus(name, age, colour) {
        this.name = name;
        this.age = age;
        this.colour = colour;
        this.name = name;
    }
    Octopus.prototype.getName = function () {
        return this.name;
    };
    return Octopus;
}());
// accessors
// TypeScript supports getters/setters as a way of intercepting accesses to a member of an object
var ClassWithGetter = /** @class */ (function () {
    function ClassWithGetter() {
        this._age = 10;
    }
    Object.defineProperty(ClassWithGetter.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
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
//First, accessors require you to set the compiler to output ECMAScript 5 or higher. Downleveling to ECMAScript 3 is not supported. Second, accessors with a get and no set are automatically inferred to be readonly. This is helpful when generating a .d.ts file from your code, because users of your property can see that they can’t change it.
