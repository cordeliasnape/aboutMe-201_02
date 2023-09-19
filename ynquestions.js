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
