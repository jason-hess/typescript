// Traditional JavaScript uses functions and prototype-based inheritance to build up
// reusable components, but this may feel a bit awkward to programmers more comfortable
// with an object-oriented approach, where classes inherit functionality and objects
// are built from these classes. Starting with ECMAScript 2015, also known as ECMAScript 6,
// JavaScript programmers will be able to build their applications using this object-oriented
// class-based approach.

// Classes
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

// Inheritance
class ChildGreeter extends Greeter {
  private age: number;

  constructor(age: number) {
    super("Jason"); // super must be called if a constructor is defined
    this.age = age; // super() must be called before accessing `this`
  }

  public sayAge(): string {
    return `I'm ${this.age} years old`;
  }
}

let agedPerson = new ChildGreeter(92);
agedPerson.greet(); // defined on parent class
agedPerson.sayAge(); // defied on child class
let anotherPerson: Greeter = agedPerson; // variable of type parent can hold child instances

// Overriding Methods
class OverridingGreeter extends Greeter {
  private age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  // this implementation overrides the Greeter.greet() implementation
  public greet() {
    return `You're ${this.age}!`;
  }
}

// Member Visibility
class MemberVisibility {
  age: number = 10; // Members are public by default
  protected name: string = ""; // protected properties can be accessed by child classes
  private count: number = 1; // private properties are not accessible outside the class (including child classes)
  public fullName: string = "";
  public constructor() {} // constructors can have access modifiers
  protected getName(): string {
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
  constructor(
    private myName: string,
    protected age: number,
    public readonly colour: string
  ) {}

  public greet(): string {
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
  private _age: number = 10; // note: this needs to have a different name to the properties

  get age() {
    return this._age;
  }

  set age(value: number) {
    if (age < 0) throw new Error("Invalid Operation");
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
  public static className: string = "";
}

console.log(TheClassWithStaticProperty.className);

// Abstract Classes are classes that cannot be instantiated
abstract class AbstractConcept {
  public abstract anAbstractMethod(): void; // abstract methods can be defined in an abstract class.  child classes must define an implementation
  // unlike interface methods, abstract methods can define access modifier
}
// let anAbstractConcept = new AbstractConcept(); // error TS2511: Cannot create an instance of an abstract class.

class ConcreteConcept extends AbstractConcept {
  // abstract aMethod(): number; // error TS1244: Abstract methods can only appear within an abstract class.

  public anAbstractMethod(): void {
    throw new Error("Method not implemented.");
  }
}
let aConcreteConcept = new ConcreteConcept();

// Type equivalence

// TypeScript is a structural type system. When we compare two different types,
// regardless of where they came from, if the types of all members are compatible,
// then we say the types themselves are compatible.

class Employee {
  public name: string = "";
}

class Animal {
  public name: string = "";
}

let anEmployee = new Employee();
let anAnimal = new Animal();
anEmployee = anAnimal; // because they both take the shape {name: string}

// However, when comparing types that have *private* or *protected* members,
// we treat these types differently. For two types to be considered compatible,
// if one of them has a private member, then the other must have a private member
// that originated in the same declaration. The same applies to protected members.

class EmployeeEx {
  private name: string = "";
}

class AnimalEx {
  private name: string = "";
}

let anEmployeeEx = new EmployeeEx();
let anAnimalEx: AnimalEx = new AnimalEx();
// because each of these classes has a private property that don't originate from the same
// declaration, they are not compatible:
// anEmployeeEx = anAnimalEx; // error TS2322: Type 'AnimalEx' is not assignable to type 'EmployeeEx'

// Read-Only Properties
class Person {}
class AgedPerson extends Person {
  // readonly properties must be initialised and can never be changed
  public readonly heightInCentimetres: number = 10;
  private age: number = 10;

  public getAge(): string {
    // this.heightInCentimetres++; // error TS2540: Cannot assign to 'heightInCentimetres' because it is a read-only property.
    return this.age.toString();
  }
}
