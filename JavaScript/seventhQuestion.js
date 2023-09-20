alert(
  "I have a lucky number between 1-10\nCan you guess it?\nYou have 4 tries."
);

let answer = 8;
let guess = prompt("Can you guess it?");

for (i = 0; i < 3; i++) {
  console.log(i);

  if (guess === answer) {
    alert("Correct!");
    console.log(guess);
    break;
  } else {
    console.log(guess);
    guess = prompt("Guess again!");
  }
}

//   if (guess <= 7) {
//     alert("Higher!");
//     guess();
//   } else if (guess >= 9) {
//     alert("Lower!");
//     guess();
//   while (guess !== answer) {
//     if (guess === answer) {
//       alert("Correct!");
//       break;
//     } else {
//       alert("Try again!");
//     }
