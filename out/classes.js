"use strict";
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
        this.greeting = message;
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
        _this.age = age;
        return _this;
    }
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
;
;
var point3D = { x: 1, y: 2, z: 3 };
var notValidPoint = new IPoint3D();
