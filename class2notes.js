let eduQ = prompt("do i have a degree in fhfwrkhfkr").toLowerCase().trim();

///make sure the answer is either yes or no
while (eduQ !== "yes" || eduQ !== "y") {
  eduQ = prompt("do i have a degree ub jff?").toLowerCase();
}

let ans;

// checking answer
if (eduQ === "yes") {
  alert("incorrect");
} else if (eduQ === "no") {
  alert("correct");
}

// Arrays

// Arrays are lists of data in programming, not unique to JavaScript

let ex1 = [1, 2, 3, 4];
let ex2 = ["Joe", "Cord"];

console.log(myArray);
console.log(myArray2);

//no logical reason to mix data types inside an array ie. let myArray = [1, 2, 3, 4, "Cord"];
// delimited: words separated by a comma - CSVs are comma-separated values
//we can store anyhting in an array(strinng, number, object, {array - let arrayCeption = [[1,2,3], [4,5,6]]}
// 3 parts of a for-loop - initilisation, condition, increment

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//incrementing until 'i' is valued until 10
//If i want to console log multiple things:
//Arrays are 0 indexed

console.log("Joe");
console.log("Cord");

let myArray = [1, 2, 3, 4];
let myArray2 = ["Joe", "Cord"];

console.log(myArray);
console.log(myArray2);

console.log("Hello, " + myArray2[0]); // I will get "Joe" in c.l
console.log("Hello, " + myArray2[1]); // I will get "Cord" in c.l

// to automate it

for (let i = 0; i < myArray2.length; i++) {
  console.log(myArray2[i]);
}
//we have defined the number i, so can allow it to increment
//can go on and on in the array forever
//using numbers also in the form of indexing
//don't use <= bc it defines the length of the myArray2

///post lab03 unvielling

// let userPoints = 0;

alert("Welcome to my guessing game!");

let user = prompt("What is your name?");

while (!user) {
  user = prompt("You need to actually tell me.");
}

alert("Hello, " + user + ". Would your like to play a game?");

if (user === "answer") {
  alert("Urgh!");
}

if (user !== "answer") {
  alert("Urgh, You could be called" + user + "!");
}

/// page break, quiz time

let faveFood = ["pizza", "pasta", "garlic bread"];

let foodAns = prompt("What is one of Tim's favourite foods?").toLowerCase();

if (foodAns === "pizza") {
  alert("yeah, nice one, he loves pizza");
}

/// how would the logic look? so it checks all the array answer - create loop so checks every index - for is checking every item as opposed to fitting a condition

let userPoints = 0;

for (let i = 0; i < faveFood.length; i++) {
  console.log("checking");
  if (foodAns === faveFood[i]) {
    console.log("found");
    alert("yeah, nice)");
    userPoints++;
  }
}
//loops as many times as necessary, so pasta will loop it twice

alert("You got " + userPoints + " questions correct.");

let arr = [];
let foodItem = prompt("What food do you like?");

arr.push(foodItem);
//push is an array method, it adds the foodItem to the array, methods don't need square brackets
//push is just a way of adding to an array, pop just removes an item

console.log(arr);
arr.push("Tess"); // removes the first one
arr.pop(); //removes the last one

arr.unshift("Helen"); // adds it to the beginning
console.log(arr);

arr.shift(); // removes the first one

//if index of fave food is not negative 1 - can use this

// pressing cancel/null on name - makes sure user adds something

if (faveFoods.indexOf(foodAns) <= 0) {
  alert("You got it right");
  userPoints++;
}

//indexOf checks
// index of instead of if
//use 'splice' to add things in between specfic numbers

// let userPoints = 0;

// for (let i = 0; i < faveFood.length; i++) {
//   console.log("checking");
//   if (foodAns === faveFood[i]) {
//     console.log("found");
//     alert("yeah, nice)");
//     userPoints++;
//   }
// }

//

arr.splice(index, deleteCount, itemToBeAdded);
arr.splice(1, 1); // using splice to remove an item based of index

//removing a specific item
let indexOfTim = arr.indexOf("Tim");
arr.splice(indexOfTim, 1);

///

while (!user) {
  user = prompt("You need to actually tell me.");
}

// loop is a repeatable code
// iteration is a part of the loop

// CSS spans
// can add in a span into HTML, but it doesn't take up whole length like a div
// using a div - add a border
// add thing, padding, then border, then margin
// background is increased using padding
//margin: 80px 90px;
