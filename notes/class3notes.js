// What is a function? A block of reusable code.
// A function defintion may also be referred to as a function declaration or a function
// function invoking is used to execute the code within the function
// CSS Positions: static, absolute, fixed, sticky, relative, etc

// Demo of Question 6 and 7

// answer = 8;
// let number = prompt("guess a number between 1-10");

// if (number > answer) {
//   alert("That was too high");
// } else if (number < answer) {
//   alert("Too low!");
// }

// checking if too high or low
//code block is between curly brackets

//for loop

// (creating variable, checking condition and then increasing value)
// for(initilisation; condition; increment)
//(checked once; checks condition to continue; increment until i = 4)

// answer = 8;
// let number = prompt("guess a number between 1-10");

// if (number > answer) {
//   alert("That was too high");
// } else if (number < answer) {
//   alert("Too low!");
// }
//gives four attempts

// for(let i = 1; i <= 4; i++) {
//   console.log(i);
//  if (number > answer) {
//   alert("That was too high");
//   number = prompt("Guess again!");
// } else if (number < answer) {
//   alert("Too low!");
//   number = prompt("Guess again!");
// } else if (parseInt(number) === answer) {
//   alert("Well done! It was 8.");
//   break;
// }

// parseInt(number) = turns a string into a number data type ?

// "7" === 7 -> false
// "7" == 7 -> true

// avoid using two equals bc best practice

let answer = 7; // declare answer
let number = prompt("Guess a number between 1-10"); //initiate prompt
let attempts = 4; // define attempts

while (attempts > 1) {
  // if the attempts are higher than one, run this
  attempts--; // decreasing number of attempts
  if (number > answer) {
    // if your number is higher than answer
    alert("That was too high"); //alert
    number = prompt("Guess again! You have  " + attempts + " left."); //prompt another try
  } else if (number < answer) {
    // if it's lower
    alert("Too low!"); // alert
    number = prompt("Guess again! You have  " + attempts + " left."); //and prompt again
  } else if (parseInt(number) === answer) {
    // if it's equal, and the string is converted to a number
    alert("Well done! It was 8."); // congratulate
    break; // breaking the code is necessary bc it stops the loop . if i remove it then the loop continues despite the correct answer
  }

  if (parseInt(number) !== answer) {
    // if the prompted number is not the answer in the end
    alert("The answer was __"); // tell the user the answer
  }
}

/// Question 7

let answers = ["daisy", "rose", "rich", "lily"];

let plantGuess = prompt("What is one of my favourite plants?");

// let example = answers.indexOf("daisy") // answer is 0 bc it's the position within the array

// let example = answers.length // answer is 4 bc there are 4 items

// answers.push("baobab") // adds something to the end of the array

//to check index of the guess

let idx = answers.indexOf(guess); // checking the index of the prompt

console.log(idx); // answer is 2 if rich, etc

if (answers.indexOf(guess) !== -1)
  [alert("That's correct, I really like " + plantGuess)];

// answer is within question 6

/// ____going back to lab 04____
//CSS Positioning

// we can move elements by declaring their top, right, bottom or left positioning
// but css postitioning properties such as static, relative, absolute or fixed will determine how the rules are interpreted

// making a section
// default of section tage is "position: static"
//

// relative - doesn't obvs move anything, but giving a top 10px and increasing it allows it to move around the page. Relative means it can move however many pixels on the page (most rules of any of them) from the top, it moves... from the right it will move ... px ....

// absolute is removing it from the order of things - fixed will move up and in front of as though it's not there - setting "top: 4rem;" moves it all the way up to 4 rem. Can say - top: 100px and it will move 100px FROM the top. Modals can be moved into the centre of the screen through absolute

// fixed is floating and unmoving on the screen, can cover things unless margin and padding account for it

//
// margin: 5rem auto 0 auto -> top, right bottom, left (clockwise) - right and left are auto and etc

//NOTE: changing the section>position:relative, the article>absolute will only move within the relative section - absolte is effected by it's parents and grandparents

//potentially move divs into articles for HTML
