/**
 * LECTURE: Activating strict mode
 */
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive (⌐■_■)');

// const interface = 'Audio';
// const private = 534;
*/

/**
 * LECTURE: Functions
 */
/*
function logger() {
  console.log('My name is Felipe');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

/**
 * LECTURE: Function Declarations vs Expressions
 */
/*
// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1997);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1997);
console.log(age1, age2);
 */

/**
 * LECTURE: Arrow Function
 */
/*
// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1997, 'Felipe'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/**
 * LECTURE: Function Calling Other Functions
 */
/*
function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  return `Juice with ${applePieces} pieces of apple and ${orangePieces} piece of oranges.`;
}

console.log(fruitProcessor(2, 3));
*/

/**
 * LECTURE: Function Calling Other Functions
 */
/*
const calcAge = function(birthYear) {
  return 2037 - birthYear;

};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired (⌐■_■)`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1997, 'Felipe'));
console.log(yearsUntilRetirement(1950, 'Mike'));

console.log();
*/

/**
 * LECTURE: Introduction to Arrays
 */
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function(birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
 */

/**
 * LECTURE: Basic Array Operations
 */
/*
// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

/**
 * LECTURE: Introduction to Objects
 */
/*
const felipeArray = [
  'Felipe',
  'Engler',
  2037 - 1997,
  'Programmer',
  ['Michael', 'Steven', 'Peter']
];

const felipe = {
  firstName: 'Felipe',
  lastName: 'Engler',
  age: 2037 - 1997,
  job: 'Programmer',
  friends: ['Michael', 'Steven', 'Peter']
};
*/

/**
 * LECTURE: Dot vs. Bracket Notation
 */
/*
const felipe = {
  firstName: 'Felipe',
  lastName: 'Engler',
  age: 2037 - 1997,
  job: 'Programmer',
  friends: ['Michael', 'Steven', 'Peter']
};
console.log(felipe);

console.log(felipe.lastName);
console.log(felipe['lastName']);

const nameKey = 'Name';
console.log(felipe['first' + nameKey]);
console.log(felipe['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Felipe? Choose between firstName, lastName, age, job and friend');
console.log(felipe[interestedIn]);

if(felipe[interestedIn]) {
  console.log(felipe[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job and friend.');
}

felipe.location = 'Brazil';
felipe['twitter'] = '@notFound';

console.log(felipe);

// Challenge
// "Felipe has 3 friends and his best friend is called Michael"

console.log(`${felipe.firstName} has ${felipe.friends.length} friends and his best friend is called ${felipe.friends[0]}`);
 */

/**
 * LECTURE: Object Methods
 */
/*
const felipe = {
  firstName: 'Felipe',
  lastName: 'Engler',
  birthYear: 1997,
  job: 'coder',
  friends: ['Michael', 'Steven', 'Peter'],
  hasDriversLicense: false,

  // calcAge: function(birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function(birthYear) {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function() {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSumary: function() {
    const driversLicense = this.hasDriversLicense === true ? `a` : `no`;

    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and he has ${driversLicense} driver's license`;
  }
};

console.log(felipe.calcAge());

console.log(felipe.age);
console.log(felipe.age);
console.log(felipe.age);

console.log(felipe.getSumary());
 */

/**
 * LECTURE: The For Loop
 */
/*
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
 */

/**
 * LECTURE: Looping Arrays, Breaking and Continuing
 */
/*
const felipe = [
  'Felipe',
  'Engler',
  2037 - 1997,
  'programmer',
  ['Michael', 'Steven', 'Peter'],
  true
];

const types = [];

for (let i = 0; i < felipe.length; i++) {
  console.log(felipe[i], typeof felipe[i]);

  // types[i] = typeof felipe[i];
  types.push(typeof felipe[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('---- ONLY STRINGS ----');
for (let i = 0; i < felipe.length; i++) {
  if(typeof felipe[i] !== 'string') continue;

  console.log(felipe[i], typeof felipe[i]);
}


console.log('---- BREAK WITH NUMBER ----');
for (let i = 0; i < felipe.length; i++) {
  if(typeof felipe[i] !== 'number') break;

  console.log(felipe[i], typeof felipe[i]);
}
 */

/**
 * LECTURE: Looping Backwards and Loops in Loops
 */
/*
const felipe = [
  'Felipe',
  'Engler',
  2037 - 1997,
  'programmer',
  ['Michael', 'Steven', 'Peter'],
  true
];

for(let i = felipe.length - 1; i >= 0; i--) {
  console.log(i, felipe[i]);
}

for(let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------ Starting exercise ${exercise}`);

  for(let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lift weight repetition ${rep} (⌐■_■)`)
  }
}
 */

/**
 * LECTURE: The While Loop
 */

// for(let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while(rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a dice ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if(dice === 6) console.log('Loop is about to end...');
}
