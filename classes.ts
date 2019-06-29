// TypeScript supports classes
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet(): string {
        return `Hello, ${this.greeting}`;
    }
}

let greeter = new Greeter("Jason2");

// TypeScript supports inheritance
class ChildGreeter extends Greeter {
    private age: number;

    constructor(age: number) {
        super("Jason");
        this.age = age;
    }

    sayAge(): string {
        return `I'm ${this.age} years old`;
    }
}

let agedPerson = new ChildGreeter(92);
agedPerson.greet();
agedPerson.sayAge();
let anotherPerson: Greeter = agedPerson;

// overriding methods
class OverridingGreeter extends Greeter {
    private age: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }

    greet() {
        return `You're ${this.age}!`;
    }
}

// Member visibility
// Members are public by default
greeter.greeting = "123";

// Parameter Properties
// Properties can be declared in the constructor of the class
// to save you the time of having to create a parameter for the 
// constructor and a property on the class
class AnotherClass {
    constructor(private myName: string) { }

    greet(): string {
        return `Hello, ${this.myName}!`;
    }
}

// Accessors can be specified on classes
class YetAnotherClass {
    constructor(private myName: string) {

    }

    get name() {
        return this.myName;
    }
}

let theName = new YetAnotherClass("Jason").name;

// Static Members - Similarly to prepending a variable name with *this*, you
// can prepend it with the class name to access Class static members
class StaticMembersClass {
    static theMember: number = 10;
    x: number;
    constructor() {
        this.x = StaticMembersClass.theMember;
    }
}

// Abstract classes are classes that can be derived from but cannot be 
// instantiated
abstract class NotInstantiatable {
    // abstract methods must be implemented by derived classes
    abstract print(): string;
}

let instance: NotInstantiatable = new NotInstantiatable();

// Interfaces can also extend classes to define constraints on types
class JasonPoint {
    x: number;
    y: number;
};

interface IPoint3D extends JasonPoint {
    z: number
};

let point3D: IPoint3D = { x: 1, y: 2, z: 3 };
let notValidPoint = new IPoint3D();