alert(
  "I have a lucky number between 1-10\nCan you guess it?\nYou have 4 tries."
);

let answer = 8;
let guess = prompt("Can you guess it?");

for (let i = 0; i < 3; i++) {
  if (answer == guess) {
    alert("Correct!");
    console.log(guess);
    // break;
  }
  // else if (guess <= 7) {
  //   guess = prompt("Higher!!");
  //   guess();
  // }
  // else if (guess >= 9) {
  //     alert("Lower!");
  //     guess();
  // }
  else {
    guess = prompt("Guess again!");
    console.log(guess);
  }
}
