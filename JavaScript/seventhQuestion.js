let favFood = [
  "caesar salad",
  "pizza",
  "tteokbokki",
  "hot pot",
  "summer rolls",
  "jianbing",
  "seafood pasta",
  "chinese lamb skewers",
  "tacos",
  "fried chicken",
];

alert("Now it's time for a quiz!");

let foodAns = prompt("Name one of my favourite foods!").toLowerCase();

for (let i = 0; i < favFood.length; i++) {
  // console.log("checking");
  if (foodAns == favFood[i]) {
    // console.log("found");
    alert(
      "Well done!\nAll of the answers you could have guessed correctly were: caesar salad, pizza, tteokbokki, hot pot, summer rolls, jianbing, seafood pasta, Chinese lamb skewers, tacos or fried chicken"
    );
  }
}
