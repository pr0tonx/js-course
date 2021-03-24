'use strict';

/**
 * What is Object-Oriented Programming
 */
/*
=> Object-oriented programming (OOP) is a programming paradigm based on the concept of objects;
=> We use objects to model (describe) real-world or abstract features;
=> Objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding
behaviour into one block;
=> in OOP, objects are blocks of applications, and interact with one another;
=> Interactions happen through a public interface (API): methods that the code outside of the object can access and use
to communicate with the object;
=> OOP was develop with the goal of organizing code, to make it more flexible and easier to maintain.

Principles to creating a class: Abstraction, Encapsulation, Inheritance, Polymorphism

Abstraction: Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're
implementing, instead of messing with details that don't really matter to our implementation;

Encapsulation: Keeping properties and methods private inside the class, so they are not accessible from outside the
class. Some methods can be exposed as a public interface (API);

Inheritance: Making all properties and methods of a certain class available to a child class, forming a hierarchical
relationship between classes. This allow us to reuse common logic and to model real-world relationships;

Polymorphism: A child class can overwrite a method it inherited from a parent class (simplified);
 */

/**
 * OOP in JavaScript
 */
/*
----- "Classical OOP": Classes -----
CLASS -> instantiation -> INSTANCE

=> Objects (instances) are instantiated from a class, which functions like a blueprint;
=> Behaviour (methods) is copied from class to all instances.

----- OOP in JS: Prototypes -----
PROTOTYPE (contains methods) <- prototypal inheritance/delegation <- OBJECT (can access methods);

=> Objects are linked to a prototype object;
=> Prototypal inheritance: The prototype contains methods (behaviour) that are accessible to all objects linked to that
prototype;
=> Behaviour is delegated to the linked prototyped object.

----- How do we actually create prototypes? And how do we link objects to prototypes? How can we create new objects,
without having classes?

1. Constructor functions:
=> Technique to create objects from a function;
=> This is how built-in object like Arrays, Maps or Sets are actually implemented.

2. ES6 Classes:
=> Modern alternative to constructor function syntax;
=> "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor functions;
=> ES6 classes do not behave like classes in "classical OOP".

3. Object.create():
=> The easiest and most straightforward way of linking an object to a prototype object.
 */

/**
 * Constructor Functions and the new Operator
 */
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // }
};

const felipe = new Person('Felipe', 1997);
console.log(felipe);

// 1. New {} is created;
// 2. Function is called, this = {};
// 3. {} linked to prototype;
// 4. function automatically returns {}.

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(felipe instanceof Person);
*/

/**
 * Prototypes
 */
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const felipe = new Person('Felipe', 1997);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(felipe, matilda, jack);

console.log(felipe instanceof Person);
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

felipe.calcAge();
matilda.calcAge();

console.log(felipe.__proto__);
console.log(felipe.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(felipe));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// More honest name to the method
// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(felipe.species, matilda.species);

console.log(felipe.hasOwnProperty('firstName'));
console.log(felipe.hasOwnProperty('species'));
 */

/**
 * Prototypal Inheritance and the Prototype Chain
 */
/*
// Nice diagrams contained in the videos which i will not represent here
console.log(Object.prototype);
 */

/**
 * Prototypal Inheritance on Built-in Objects
 */

/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const felipe = new Person('Felipe', 1997);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

felipe.calcAge();
matilda.calcAge();

Person.prototype.species = 'Homo Sapiens';

console.log(felipe.__proto__);
// Object.prototype (top of prototype chain)
console.log(felipe.__proto__.__proto__);
console.log(felipe.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3, 6, 3]; // new Array === []
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
 */

/**
 * ES6 Classes
 */
/*
// class expression:
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  };

  greet() {
    console.log(`Hey ${this.firstName}`);
  };
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted, i.e., cannot be used before declaration;
// 2. Class are first-class citizens;
// 3. Classes are executed in strict mode.
 */

/**
 * Setters and Getters
 */
/*
const account = {
  owner: 'felipe',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  };

  calcAge() {
    console.log(2037 - this.birthYear);
  };

  get age() {
    return 2037 - this.birthYear;
  };

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  };

  get fullName() {
    return this._fullName;
  };
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

const walter = new PersonCl('Walter White', 1965);
 */

/**
 * Static Methods
 */
/*
// 1.
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const felipe = new Person('Felipe', 1997);
console.log(felipe);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(felipe instanceof Person);

Person.hey = function () {
  console.log('Hey there! ✌');
  console.log(this);
};

Person.hey();

// 2.
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Instance methods, i.e., it will be inherited is a new Person is created
  calcAge() {
    console.log(2037 - this.birthYear);
  };

  // Static method, which will not be inherited to te next new Person created
  static hey() {
    console.log('Hey there! ✌');
    console.log(this);
  }
}

const felipe2 = new PersonCl('Felipe', 1997);

felipe2.calcAge('Felipe', 1997);
PersonCl.hey();
 */

/**
 * Object.create
 */
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Felipe';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
 */

/**
 * Inheritance Between "Classes": Constructor Functions
 */

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`)
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
 */

/**
 * Inheritance Between "Classes": ES6 Classes
 */
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  };

  greet() {
    console.log(`Hey ${this.fullName}`);
  };

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  };

  get fullName() {
    return this._fullName;
  };

  static hey() {
    console.log('Hey there! ✌');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always have to happen first!
    super(fullName, birthYear);
    this.course = course;
  };

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  };

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old, but as a student I fell more like ${2037 - this.birthYear + 10}`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
 */

/**
 * Inheritance Between "Classes": Object.create()
 */

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
 */

/**
 * Another Class Example
 */

/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan() {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan()) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Felipe', 'BRL', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1);
console.log(acc1.pin);
 */

/**
 * Encapsulation: Protected Properties and Methods
 */

/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // protected property
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan() {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan()) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Felipe', 'BRL', 1111);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1._pin);
 */

/**
 * Encapsulation: Private Class Fields and Methods
 */

/*
// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// (there is also the 4 static versions)

class Account {
  // 1. Public fields (instances)
  locale = navigator.language;

  // 2. Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface ( 3. public methods)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this._approveLoan()) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4. Private methods - not working on any browser at the time at the time (March, 2021);
  // #approveLoan() {
  _approveLoan() {
    return true;
  }
}

const acc1 = new Account('Felipe', 'BRL', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
// console.log(acc1.#movements);

Account.helper();
*/

/**
 * Chaining Methods
 */

/*
class Account {
  locale = navigator.language;

  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan()) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  _approveLoan() {
    return true;
  }
}

const acc1 = new Account('Felipe', 'BRL', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

// Chaining
acc1.deposit(300).deposit(600).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovements());
*/

/**
 * ES6 Classes Summary
 */
/*
// More details in the video, but here an example os class containing everything that is possible in simples
// implementations

class Student extends Person {
  university = 'University of Lisbon';
  #studyHours = 8;
  #course;
  static numSubjects = 10;

  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear);
    this.startYear = startYear;
    this.#course = course;
  }

  introduce() {
    console.log(`I study ${this.#course} at ${this.university}`);
  }

  study(h) {
    this.#makeCoffee();
    this.#studyHours += h;
  }

  #makeCoffee() {
    return 'Here is a coffee for you (⌐■_■)';
  }

  get testScore() {
    return this._testScore;
  }

  set testScore(score) {
    this._testScore = score < 20 ? score : 0;
  }

  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}

const student = new Student('Felipe', 2021, 2037, 'Physics');
 */
