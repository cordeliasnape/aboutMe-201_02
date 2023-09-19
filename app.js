let answer1 = confirm("Are you ready to rumble!!");
if (answer1 === true) {
  console.log("You're ready to rumble");
} else {
  console.log("You're not ready to rumble");
}

console.log(answer1);

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

let color = prompt("what is your fave colour?");

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

//if colour is red 'your fav is red', else if color is blue 'your fav is blue'

//confirm returns a true or false value to us

// as a x, I want y, so i can z
