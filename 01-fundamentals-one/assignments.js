/**
 * LECTURE: Values and Variables
 */
const country = 'Brazil';
const continent = 'South America';
let population = 210;

console.log(country, '|', continent, '|', population);

/**
 * LECTURE: Data Types
 */
const isIsland = false;
let language;
console.log(typeof isIsland, '|', typeof population, '|', typeof country, '|', typeof language);

/**
 * LECTURE: let, const and var
 */
language = 'portuguese';

/**
 * LECTURE: Basic Operators
 */
const pop = (population / 2) + 1;
const description = 'Brazil is in South America and its 210 million people speak portuguese';
console.log(pop, '|', pop > 6,  '|', pop < 33,  '|', description);

/**
 * LECTURE: Strings and Template Literals
 */
const descriptionTemplateLiteral = `${country} is in ${continent} and its ${population} million people speak ${language}.`;
console.log(descriptionTemplateLiteral);

/**
 * LECTURE: Taking Decisions: if / else Statements
 */

if(population > 33) console.log(`${country} population is far above the average`);
else console.log(`${country} population of ${population} is below average`);

/**
 * LECTURE: Type Conversion and Coercion
 */
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // true
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

/**
 * LECTURE: Equality Operators: == vs ===
 */
let numNeighbours;
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if(numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}

/**
 * LECTURE: Logical Operators
 */
if(language === 'english' && population < 50 && !isIsland) {
  console.log('You should live in Brazil');
} else {
  console.log('Brazil does not meet your criteria');
}

/**
 * LECTURE: The switch Statement
 */

switch (language) {
  case 'chinese':
  case 'mandarim':
    console.log('MOST number of native speakers');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too tho!');
}

/**
 * LECTURE: The Conditional (Ternary) Operator
 */
pop > 33 ? console.log(`${country}'s population is above the average`) : console.log(`${country}'s population is below average`);
