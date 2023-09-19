let readyQ = confirm("Are you ready???");
if (readyQ === true) {
  username = prompt("Amazing!\nWhat's your name?");
  console.log("You're ready to rumble!");
} else {
  username = prompt("Boooo!!!\nWhat's your name?");
  console.log("You're not ready to rumble :(");
}
let userName = prompt;
console.log(username);

let userAge = prompt("Hey " + username + ", how old are you?");
if (userAge <= 8) {
  alert("Ew! How can you even use a computer.");
} else if (userAge <= 24) {
  alert("You're young!");
} else if (userAge === 25) {
  alert("We're the same age!");
} else if (userAge <= 32 && userAge >= 26) {
  alert("We're kind of the same age!");
} else if (userAge <= 57) {
  alert("I bet you have a house and stuff.");
} else {
  alert("What are you doing on my website?");
}

//add if if if else  else else lol have specific ages
