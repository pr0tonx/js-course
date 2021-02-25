/*
Use the BMI example from Challenge #1, and the code you already wrote, andimprove it.

  1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher
  than John's!" or "John's BMI is higher than Mark's!"
  2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than
  John's (23.9)!"
 */

let markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI;

markMass = 78;
markHeight = 1.69;
johnMass = 78;
johnHeight = 1.69;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

if(markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's BMI (${johnBMI.toFixed(2)})`);
} else if(johnBMI > markBMI) {
 console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's BMI (${markBMI.toFixed(2)})`);
} else {
  console.log(`Both John's and Mark have the same BMI (${markBMI.toFixed(2)})`);
}
