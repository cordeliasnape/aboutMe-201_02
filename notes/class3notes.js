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
