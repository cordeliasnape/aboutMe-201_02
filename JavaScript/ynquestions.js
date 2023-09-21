let userPoints = 0;

function quiz() {
  let answer1 = prompt(
    "Do I like to eat pasta?\n(please answer with y/n or yes/no)"
  ).toLowerCase();

  if (answer1 === "y" || answer1 === "yes") {
    // console.log("Correct!");
    alert("Correct!");
    userPoints++;
    console.log(userPoints);
  } else if (answer1 === "n" || answer1 === "no") {
    // console.log("Incorrect.");
    alert("Incorrect.");
  } else {
    // console.log("Uhhhh...");
    alert("Uhhhh...");
  }

  let answer2 = prompt(
    "Do I HATE eating noodles?\n(please answer with y/n or yes/no)"
  ).toLowerCase();

  if (answer2 === "y" || answer2 === "yes") {
    // console.log("Incorrect.");
    alert("Incorrect.");
  } else if (answer2 === "n" || answer2 === "no") {
    // console.log("Correct!");
    alert("Correct!");
    userPoints++;
    console.log(userPoints);
  } else {
    // console.log("Uhhhh...");
    alert("Uhhhh...");
  }

  let answer3 = prompt(
    "Do I like to eat bread?\n(please answer with y/n or yes/no)"
  ).toLowerCase();

  if (answer3 === "y" || answer3 === "yes") {
    // console.log("Correct!");
    alert("Correct!");
    userPoints++;
    console.log(userPoints);
  } else if (answer3 === "n" || answer3 === "no") {
    // console.log("Incorrect.");
    alert("Incorrect.");
  } else {
    // console.log("Uhhhh...");
    alert("Uhhhh...");
  }

  let answer4 = prompt(
    "Do I own a dog?\n(please answer with y/n or yes/no)"
  ).toLowerCase();

  if (answer4 === "y" || answer4 === "yes") {
    // console.log("Correct!");
    alert("Correct!");
    userPoints++;
    console.log(userPoints);
  } else if (answer4 === "n" || answer4 === "no") {
    // console.log("Incorrect.");
    alert("Incorrect.");
  } else {
    // console.log("Uhhhh...");
    alert("Uhhhh...");
  }

  let answer5 = prompt(
    "Do you think I'm cool?\n(please answer with y/n or yes/no)"
  ).toLowerCase();

  if (answer5 === "y" || answer5 === "yes") {
    // console.log("Correct!");
    alert("Correct!");
    userPoints++;
    console.log(userPoints);
  } else if (answer5 === "n" || answer5 === "no") {
    // console.log("I didn't ask you to come here anyway.");
    alert("I didn't ask you to come here anyway.");
    userPoints--;
    console.log(userPoints);
  } else {
    // console.log("Try again and try again CORRECTLY!!!!");
    alert("Try again and try again CORRECTLY!!!!");
  }
}
// while (answer5 !== "yes" || answer5 !== "y") {
//   answer5 = prompt(                                                     //can change this to a function
//     "Do you think I'm cool?\n(please answer with y/n or yes/no)"
//   ).toLowerCase();
// }

// will be able to fix once it's put into a function again

let notice = confirm("You have " + userPoints + " points.");
