let answer1 = prompt("What is my dog called?");

function question1() {
  if ((answer1 = "Tess")) {
    console.log("You are right!");
  } else if ((answer1 = "Jess")) {
    console.log("Almost?");
  } else if ((answer1 = "I don't know")) {
    console.log(
      "I invite you into my website and you can't even be bothered to learn anything about me???"
    );
  } else {
    console.log("Incorrect... Click me again when you are ready.");
  }
}
