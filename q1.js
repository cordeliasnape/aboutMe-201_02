let answer1 = prompt("What is my dog called?");

function question1() {
  switch (
    answer1 //keyword and variable
  ) {
    case "Tess": //possibilites
      console.log("You are right!");
    case "Jess":
      console.log("Almost?");
    case "I don't know":
      console.log(
        "You disappoint me.\nHow can we even pretend to be friends?\nI invite you into my website and you can't even be bothered to learn anything about me???\nJust leave."
      );
      break;
    default:
      console.log("Wrong.");
  }
}
