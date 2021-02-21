/**
 * LECTURE: Functions
 */

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const firstSet = describeCountry('Brazil', 210, 'Brasília');
const secondSet = describeCountry('China', 1400, 'Beijing');
const thirdSet = describeCountry('Canada', 38, 'Ottawa');

console.log(firstSet);
console.log(secondSet);
console.log(thirdSet);

/**
 * LECTURE: Function Declarations vs Expressions
 */

function percentageOfWorld1(population) {
  return (population * 100) / 7900;
}

const percentageBrazil1 = percentageOfWorld1(210);
const percentageChina1 = percentageOfWorld1(1400);
const percentageCanada1 = percentageOfWorld1(38);

console.log(percentageBrazil1.toFixed(2), '|', percentageChina1.toFixed(2), '|', percentageCanada1.toFixed(2));

const percentageOfWorld2 = function(population) {
  return (population * 100) / 7900;
};

const percentageBrazil2 = percentageOfWorld2(210);
const percentageChina2 = percentageOfWorld2(1400);
const percentageCanada2 = percentageOfWorld2(38);

console.log(percentageBrazil2.toFixed(2), '|', percentageChina2.toFixed(2), '|', percentageCanada2.toFixed(2));

/**
 * LECTURE: Arrow Function
 */

const percetageOfWorld3 = population => (population * 100) / 7900;

const percentageBrazil3 = percetageOfWorld3(210);
const percentageChina3 = percetageOfWorld3(1400);
const percentageCanada3 = percetageOfWorld3(38);

console.log(percentageBrazil3.toFixed(2), '|', percentageChina3.toFixed(2), '|', percentageCanada3.toFixed(2));

/**
 * LECTURE: Functions Calling Other Functions
 */

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(population).toFixed(2)} of the world.`;
}

console.log(describePopulation('Brazil', 210));
console.log(describePopulation('China', 1400));
console.log(describePopulation('Canada', 38));

/**
 * LECTURE: Introduction to Arrays
 */

const populations = [210, 1400, 38, 1];
console.log(populations.length === 4);

const percentages = [percetageOfWorld3(populations[0]), percetageOfWorld3(populations[1]), percetageOfWorld3(populations[2]), percetageOfWorld3(populations[3])];
console.log(percentages);

/**
 * LECTURE: Basic Array Operations (Methods)
 */

const neighbours = ['Brasilis', 'Yuno', 'Morroc'];
neighbours.push('Utopia');
neighbours.pop();

if(!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}

neighbours[0] = 'Republic of Brasilis';
console.log(neighbours);

/**
 * LECTURE: Introduction to Objects
 */

const myCountry = {
  country: 'Brazil',
  capital: 'Brasília',
  language: 'portuguese',
  population: '210',
  neighbours: ['Brasilis', 'Yuno', 'Morroc']
};

console.log(myCountry);

/**
 * LECTURE: Dot vs. Bracket Notation
 */
console.log(`${myCountry.country} has ${myCountry.population} millions of ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population = '212';
myCountry['population'] = '210';

/**
 * LECTURE: Object Methods
 */
myCountry.describe = function() {
  console.log('hi there');
};

myCountry.describe();

myCountry.checkIsland = function() {
  this.neighbours.length >= 1 ? myCountry.isIsland = false : myCountry.isIsland = true;
};

myCountry.checkIsland();
console.log(myCountry);

/**
 * LECTURE: The For Loop
 */
for(let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

/**
 * LECTURE: Looping Arrays, Breaking and Continuing
 */

const percentages2 = [];

for(let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]).toFixed(2));
}

console.log(percentages2);

/**
 * LECTURE: Looping Backwards and Loops in Loops
 */
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i = 0; i < listOfNeighbours.length; i++) {
  let neighbours = listOfNeighbours[i];

  for(let j = 0; j < neighbours.length; j++) {
    console.log(`Neighbour: ${neighbours[j]}`)
  }
}

/**
 * LECTURE: The While Loop
 */

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]).toFixed(2));
  i++
}

console.log(percentages3);


