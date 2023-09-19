// these are notes/practice from class 2

// let answer5 = confirm("Are you ready to rumble!!");
// if (answer5 === true) {
//   console.log("You're ready to rumble");
// } else {
//   console.log("You're not ready to rumble");
// }

let first = true;
let second = true;
let third = false;

if (first && third) {
  console.log("option 1");
} else if (first && second) {
  console.log("option 2");
} else {
  console.log("option 3");
}

///
let answer1 = prompt(
  "Do I like to eat tteokbokki?\n(answer with y/n or yes/no)"
);

if (answer1 == "y" || "yes") {
  console.log("Correct!");
} else if (answer1 == "n" || "no") {
  console.log("Incorrect.");
} else {
  console.log("Uhhhh...");
}

///

switch (color) {
  case "red":
    console.log("your fave colour is red");
    break;
  case "blue":
    console.log("your fave colour is blue");
    break;
  default:
    console.log;
}

// VIEWING switch/case again

let color = prompt("what is your fave colour?");

switch (
  color //keyword and variable
) {
  case "red": //possibilites
    console.log("your fave colour is red");
    break;
  case "blue":
    console.log("your fave colour is blue");
    break;
  default:
    console.log("who are you?");
}

//if colour is red 'your fav is red', else if color is blue 'your fav is blue'

//confirm returns a true or false value to us

// as a x, I want y, so i can z

function question2() {
  switch (
    answer1 //keyword and variable
  ) {
    case "Tess": //possibilites
      console.log("You are right!");
    case "Jess":
      console.log("Almost?");
    case "I don't know":
      console.log(
        "I invite you into my website and you can't even be bothered to learn anything about me???"
      );
      break;
    default:
      console.log("Wrong. Click me again when you are ready.");
  }
}
