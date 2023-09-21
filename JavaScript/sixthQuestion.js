let answer = 8;
let guess = prompt(
  "I have a lucky number between 1-10\nCan you guess it?\nYou have 4 tries."
);
let attempts = 4;

while (attempts > 1) {
  attempts--;
  if (guess > answer) {
    alert("Too high!");
    guess = prompt("Guess again! You have  " + attempts + " left.");
  } else if (guess < answer) {
    alert("Too low!");
    guess = prompt("Guess again! You have  " + attempts + " left.");
  } else if (parseInt(guess) === answer) {
    alert("Well done! It was 8.");
    break;
  }

  if (parseInt(guess) !== answer) {
    alert("The answer was __");
  }
}
