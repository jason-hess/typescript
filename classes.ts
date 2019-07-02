// Traditional JavaScript uses functions and prototype-based inheritance to build up
// reusable components, but this may feel a bit awkward to programmers more comfortable
// with an object-oriented approach, where classes inherit functionality and objects
// are built from these classes. Starting with ECMAScript 2015, also known as ECMAScript 6,
// JavaScript programmers will be able to build their applications using this object-oriented
// class-based approach.

// TypeScript supports classes
class Greeter {
  greeting: string; // properties are public by default
  constructor(message: string) {
    this.greeting = message; // member access is done with the `this` operator
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
  public year: number = 10; // you can explictly declare a property as `public`

  constructor(name: string, age: number) {
    super(name); // super() must be called in the derived constructor - if it exists
    this.age = age; // super() must be called before member access with `this`
  }

  // this implementation overrides the base class implementation
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
  constructor(private myName: string) {}

  greet(): string {
    return `Hello, ${this.myName}!`;
  }
}

// Accessors can be specified on classes
class YetAnotherClass {
  constructor(private myName: string) {}

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
}

interface IPoint3D extends JasonPoint {
  z: number;
}

let point3D: IPoint3D = { x: 1, y: 2, z: 3 };
let notValidPoint = new IPoint3D();

// TypeScript is a structural type system. When we compare two different types,
// regardless of where they came from, if the types of all members are compatible,
// then we say the types themselves are compatible.

class Employee {
  name: string = "";
}

class Animal {
  name: string = "";
}

let anEmployee = new Employee();
let anAnimal = new Animal();
anEmployee = anAnimal; // this is fine.

// However, when comparing types that have private and protected members,
// we treat these types differently. For two types to be considered compatible,
// if one of them has a private member, then the other must have a private member
// that originated in the same declaration. The same applies to protected members.

class EmployeeEx {
  private name: string = "";
}

class AnimalEx {
  private name: string = "";
}

var anEmployeeEx = new EmployeeEx();
var anAnimalEx: AnimalEx = new AnimalEx();
// because each of these classes has a private property that don't originate from the same
// declaration, they are not compatible
// anEmployeeEx = anAnimalEx; // error TS2322: Type 'AnimalEx' is not assignable to type 'EmployeeEx'

// protected members can be accessed from derived classes

class Person {
  protected name: string = "";

  protected getName(): string {
    return this.name;
  }
}

class AgedPerson extends Person {
  private age: number;
  // readonly properties must be initialised and can never be changed
  readonly heightInCentimetres: number = 10;

  // constructors can also be protected so they can't be called except by base classes
  protected constructor() {
    super();
    this.age = 10;
  }

  getAge(): string {
    // this.heightInCentimetres++; // error TS2540: Cannot assign to 'heightInCentimetres' because it is a read-only property.
    return this.name + " is " + this.age + " years old";
  }
}

// parameter properties are declared and initialised in one place
class Octopus {
  constructor(
    private readonly name: string,
    protected age: number,
    public readonly colour: string
  ) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

// accessors
// TypeScript supports getters/setters as a way of intercepting accesses to a member of an object

class ClassWithGetter {
  private _age: number = 10; // note: this needs to have a different name to the properties

  get age() {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}

let aClassWithGetter = new ClassWithGetter();
aClassWithGetter.age = 11;
console.log(aClassWithGetter.age);

//First, accessors require you to set the compiler to output ECMAScript 5 or higher. Downleveling to ECMAScript 3 is not supported.
// Second, accessors with a get and no set are automatically inferred to be readonly.
// This is helpful when generating a .d.ts file from your code, because users of your property can see that they can’t change it.

// static properties
// those that are visible on the class itself rather than on the instances
// to access the static property, you prepend it with the name of the class
class TheClassWithStaticProperty2 {
  static className: string = "";
}

console.log(TheClassWithStaticProperty2.className);

// abstract classes are classes that cannot be instantiated
abstract class AbstractConcept {
  abstract anAbstractMethod(): void; // abstract methods can be defined in an abstract class.  child classes must define an implementation
}
// let anAbstractConcept = new AbstractConcept(); // error TS2511: Cannot create an instance of an abstract class.

class ConcreteConcept extends AbstractConcept {
  // abstract aMethod(): number; // error TS1244: Abstract methods can only appear within an abstract class.

  anAbstractMethod(): void {
    throw new Error("Method not implemented.");
  }
}
let aConcreteConcept = new ConcreteConcept();

// Methods within an abstract class that are marked as abstract do not contain an implementation and must be implemented in derived classes.
// Abstract methods share a similar syntax to interface methods. Both define the signature of a method without including a method body.
// However, abstract methods must include the abstract keyword and may optionally include access modifiers.
