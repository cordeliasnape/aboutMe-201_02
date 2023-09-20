let readyQ = confirm("Are you ready???");
if (readyQ === true) {
  username = prompt("Amazing!\nWhat's your name?");
  console.log("You're ready to rumble!");
} else {
  username = prompt("Boooo!!!\nWhat's your name?");
  console.log("You're not ready to rumble :(");
}
while (!username) {
  username = prompt("You need to actually tell me.");
}
let message = "Hello, " + username + ".";

document.write(message);

let userName = prompt;
console.log(username);

let userAge = prompt("Hey " + username + ", how old are you?");
if (userAge <= 8) {
  alert("Ew! " + username + "! How can you even use a computer.");
} else if (userAge <= 24) {
  alert("You're young, " + username + "!");
} else if (userAge == 25) {
  alert("Wow, " + username + ". We're the same age!");
} else if ((userAge >= 26) & (userAge <= 32)) {
  alert("We're kind of the same age, " + username + ".");
} else if (userAge <= 57) {
  alert("I bet you have a house and stuff, " + username + ".");
} else {
  alert("What are you doing on my website, " + username + "?");
}

//add if if if else  else else lol have specific ages
