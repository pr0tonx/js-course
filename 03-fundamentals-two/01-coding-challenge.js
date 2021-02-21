/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works
differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
 */

const calcAverage = (dScore1, dScore2, dScore3, kScore1, kScore2, kScore3) => {
  const avrDolphins = (dScore1 + dScore2 + dScore3) / 3;
  const avrKoalas = (kScore1 + kScore2 + kScore3) / 3;

  return checkWinner(avrDolphins, avrKoalas);
};

function checkWinner(avrDolphins, avrKoalas) {
  if(avrDolphins >= 2 * avrKoalas) {
    return `Dolphin's won with an average of ${avrDolphins} vs. ${avrKoalas}`;
  } else if (avrKoalas >= 2 * avrDolphins) {
    return `Koalas's won with an average of ${avrKoalas} vs. ${avrDolphins}`;
  } else {
    return 'Nobody won the game :/';
  }
}

console.log(calcAverage(85, 54, 41, 23, 34, 27));
