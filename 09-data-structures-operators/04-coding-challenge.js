/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a text area inserted into the DOM (see code below to insert the elements), and conversion will
happen when the button is pressed.

Test data (pasted to textarea, including spaces):

underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):

underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the text area �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
 */

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function (...underscoreWords) {
  const text = document.querySelector('textarea').value;
  const wordsToFix = text.split('\n');
  const fixed = [];

  for(let i = 0; i < wordsToFix.length; i++) {
    let trimmed = wordsToFix[i].trim().toLowerCase().split('_');
    fixed.push(trimmed[0] + trimmed[1].replace(trimmed[1][0], trimmed [1][0].toUpperCase()));

    console.log(`${fixed[i]}, ${'✅'.repeat(i + 1)}`);
  }
});
