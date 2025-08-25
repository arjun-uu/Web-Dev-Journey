// 📌 Conditions in JavaScript

let age = 18;

// ---- if ----
if (age >= 18) {
  console.log("You are an adult");
}

// ---- if...else ----
let num = 5;
if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// ---- if...else if...else ----
let score = 75;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// ---- switch ----
let day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Other day");
}

// ---- Ternary Operator ----
let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome!" : "Please log in");
