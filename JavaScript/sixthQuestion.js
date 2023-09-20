let guess = prompt(
  "I have a lucky number between 1-10\nCan you guess it?\nYou have 4 tries."
);
for (i = 0; i < 4; i++) {
  console.log(i);
}
if (guess <= 7) {
  alert("Higher!");
  // guess();
} else if (guess >= 9) {
  alert("Lower!");
  // guess();
}
while (guess !== 8) {
  alert("Try again!");
}
