/**
 * LECTURE: Values and Variables
 */
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Felipe');
console.log(23);

let firstName = 'Felipe';
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_felipe = 'JF';
let $function = 27;

let person = 'felipe';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
*/

/**
 * LECTURE: Data Types
 */
/*
let jsIsFun = true;
console.log(jsIsFun);

console.log(typeof true);
console.log(typeof jsIsFun);
console.log(typeof 23);
console.log(typeof 'Felipe');

jsIsFun = 'yes';
console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(typeof year);

console.log(typeof null);
*/

/**
 * LECTURE: let, const and var
 */
/*
let age = 30;
age = 31;

const birthYear = 1997;
// birthYear = 1990;
// const job;

var job = 'coder';
job = 'teacher';

lastName = 'Engler';
console.log(lastName);
*/

/**
 * LECTURE: Basic Operators
 */
/*
// Math operator
const now = 2037;
const ageFelipe = now - 1997;
const ageSarah = now - 2018;
console.log(ageFelipe, ageSarah);

console.log(ageFelipe * 2, ageFelipe / 10, 2 ** 3);
// 2 ** 3 means 2 to the the power of 3 = 2 * 2 * 2

const firstName = 'Felipe';
const lastName = 'Engler';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageFelipe > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/

/**
 * LECTURE: Operator Precedence
 */
/*
const now = 2037;
const ageFelipe = now - 1997;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageFelipe + ageSarah) / 2;
console.log(ageFelipe, ageSarah, averageAge);
*/

/**
 * LECTURE: Strings and Template Literals
 */
/*
const firstName = 'Felipe';
const job = 'coder';
const birthYear = 1997;
const year = 2037;

const felipe = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(felipe);

const felipeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(felipeNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
*/

/**
 * LECTURE: Taking Decisions: if / else Statements
 */
/*
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license (⌐■_■)');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2021;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/**
 * LECTURE: Type Conversion and Coercion
 */
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Felipe'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old.');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/**
 * LECTURE: Truthy and Falsy Values
 */
/*
// 5 falsy values: 0, '', undefined, null, NaN;
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Felipe'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all (⌐■_■)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
*/

/**
 * LECTURE: Equality Operators: == vs ===
 */
/*
const age = 18;
if (age === 18) console.log('You just became an adult D: (strict)');

if (age == 18) console.log('You just became an adult D: (loose)');

const favorite = Number(prompt('What is your favorite number'));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
  console.log('7 is also a cool number');
} else if (favorite === 9) {
  console.log('yes thats it');
} else {
  console.log('Number is not 23 nor 7');
}

if (favorite !== 23) console.log('Why not the 23?');
*/

/**
 * LECTURE: Boolean Logic
 */

/**
 * LECTURE: Logical Operators
 */
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

/**
 * LECTURE: The switch Statement
 */
/*
const day = 'monday';

switch (day) {
  case 'monday':
    console.log('Play course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend (⌐■_■)');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Play course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend (⌐■_■)');
} else {
  console.log('Not a valid day!');
}
*/

/**
 * LECTURE: Statement and Expressions
 */
/*
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Felipe';
console.log(`I'm ${2037 - 1997} years old ${me}.`);
*/

/**
 * LECTURE: The Conditional (Ternary) Operator
 */
/*
const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I do like do drink wine as well');

const drink = age >= 18 ? '🍷' : '♟';
console.log(drink);

let drink2;

if (age >= 18) {
  drink2 = '🍷';
} else {
  drink2 = '♟';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? '🍷' : '♟'}`);
*/
