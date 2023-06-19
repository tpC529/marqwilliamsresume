/*
    Prompt the user for their name.

Next, prompt the user if they would like to play 3 or 6 holes of mini golf.

Finally, prompt the user either 3 times or 6 times (depending on their input for the second prompt) for each "hole of golf" asking for the number of putts for that specific hole.

Keep track of their cumulative score (total number of putts) and at the end, compare that to the total course par (9 if they chose 3 holes, 18 if they chose 6 — par is 3 for every hole) to calculate the golfer’s total par for the round.

After the last hole, one of three messages is logged to the console depending on if the user was over, under or on par for the round:

If over par, the message should read "Nice try, (name)... Your total par was: +(par)." [be sure to include the plus symbol here to denote over par].

If under par, the message should read "Great job, (name)! Your total par was: -(par)." [include the minus symbol]

If even with par, the message should read "Good game, (name). Your total par was: 0."


*/


let golfScore = prompt("Welcome to tpC mini golf! What is your name?");
let holes = prompt("How many holes do you want to play?");
let par = i; // Initialize par to 0
let totalScore = 0; // Initialize totalScore to 0

if (holes === '3') {
  par = 9;
  for (let i = 1; i <= 3; i++) {
    let score = Number(prompt(`Enter score for hole ${i}`));
    totalScore += score;
  }
} else {
  par = 18;
  for (let i = 1; i <= 6; i++) {
    let score = Number(prompt(`Enter score for hole ${i}`));
    totalScore += score;
  }
}

console.log('Player:', golfScore);
console.log('Total holes:', holes);
console.log('Par:', par);
console.log('Total score:', totalScore);

// Using ternary operator to show the user their score
let scoreMessage =
  totalScore > par
    ? `Nice try, ${golfScore}... Your total par was: +${totalScore - par}.`
    : totalScore < par
    ? `Great job, ${golfScore}! Your total par was: -${par - totalScore}.`
    : `Good game, ${golfScore}. Your total par was: 0.`;

console.log(scoreMessage);


