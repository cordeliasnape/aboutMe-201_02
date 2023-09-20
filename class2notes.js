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
