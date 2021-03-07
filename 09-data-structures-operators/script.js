'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order Received!: ${this.starterMenu} ${starterIndex} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

/**
 * Destructuring Arrays
 */
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */

/**
 * Destructuring Objects
 */
/*
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);
console.log(a, b);

// Nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1
});
 */

/**
 * The Spread Operator (...)
 */
/*
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Felipe';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Engler`);

// Real world example
// const ingredients = [prompt('Let\'s make pasta! Ingredient 1: '), prompt('Ingredient 2:'), prompt('Ingredient 3: ')];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Restorante Rome';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/**
 * Rest Patterns and Parameters
 */
/*
// 1) Destructuring
// SPREAD because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const {sat, ...weekDays} = restaurant.openingHours;
console.log(weekDays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
 */

/**
 * Short Circuiting (&& and ||)
 */
/*
console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Felipe');
console.log('' || 'Felipe');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Felipe');
console.log(7 && 'Felipe');

console.log('Hello' && 23 && null && 'Felipe');

// Practical example
if(restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
 */

/**
 * The Nullish Coalescing Operator (??)
 */
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
 */

/**
 * Looping Arrays: The for-of loop
 */
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
 */

/**
 * Enhanced Object Literals
 */
/*
console.log(restaurant);
 */

/**
 * Optional Chaining (?)
 */
/*
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH option chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`)
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist.');

// Arrays
const users = [
  {
    name: 'Felipe',
    email: 'fake@hotmail.com'
  }
];

console.log(users[0]?.name ?? 'User array empty');

if(users.length > 0) console.log(users[0].name);
else console.log('User array empty');
 */

/**
 * Looping Objects: Object Keys, Values and Entries
 */
/*
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for(const day of Object.keys(openingHours)) {
  openStr += `${day}, `
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for(const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
 */

/**
 * Sets
 */
/*
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);

console.log(new Set('Felipe'));

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for(const order of ordersSet) {
  console.log(order);
}

// Example: main use of sets it is to remove duplicate values from an array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);
console.log(new Set('felipeengler').size);
 */

/**
 * Maps: Fundamental
 */
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('Categories', ['Italian', 'Pizzeria', 'Vegeratian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('Categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(document.querySelector('h1'), 'Heading');
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
 */

/**
 * Maps: Iteration
 */
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct (⌐■_■)'],
  [false, 'Try Again!']
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
 */

/**
 * Summary: Which Data Structure to Use?
 */
/*
Collection of data => Data structure
  => simple list? => Arrays or Sets < = > We have the values without any description
  => key/value pairs? => Objects or Maps < = > Keys allow us to describe values

  ARRAYS:
  => Use when you need ordered list of values (might contain duplicates)
  => Use when you need to manipulate data

  SETS:
  => Use when you need to work with unique values
  => Use when high-performance is really important (up to 10x faster in searching methods than arrays)
  => Use to remove duplicates from arrays

  OBJECTS:
  => More traditional key/value store
  => Easier to write and access values with . and []
  => Use when you need to include function (methods)
  => Use when working with JSON (can convert to map)

  MAPS:
  => Better performance
  => Keys can have any data type
  => Easy to iterate
  => Easy to compute size
  => Use when you simply need to map key to values
  => Use when you need keys that are not string
 */

/**
 * Working With Strings - Part 1
 */
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));

// Starts after the first parameter and ends before the end parameter
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat (ˉ﹃ˉ)');
  } else {
    console.log('You got lucky!');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('felipe'));
console.log(typeof new String('felipe'));
console.log(typeof new String('felipe').slice(1));
 */

/**
 * Working With Strings - Part 2
 */
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'fEliPE'; // Felipe
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = 'hello@felipe.io';
const loginEmail = '  Hello@Felipe.IO \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// the one below might work in the future
// console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

//Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if(baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board.');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
 */

/**
 * Working With Strings - Part 3
 */
/*
// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Felipe Engler'.split(' '));

const [firstName, lastname] = 'Felipe Engler'.split(' ');
console.log(firstName, lastname);

const newName = ['Mr.', firstName, lastname.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('felipe engler');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Felipe'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(31232132));
console.log(maskCreditCard('32736236293232'));

// Repeat
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line. `.repeat(3));
};

planesInLine(5);
planesInLine(12);
 */

/**
 * String Methods Practice
 */
/*
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//           Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(45, ' ');

  console.log(output);
}
 */
