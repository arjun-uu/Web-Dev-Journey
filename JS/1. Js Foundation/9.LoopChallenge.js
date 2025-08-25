// Challenge-1: Break with for loop
// You are given an array of fruits → ["Apple", "Banana", "Mango", "Orange"].
// Stop the loop when you encounter "Mango" and store all fruits before it
// into a new array called selectedFruits.

let fruits = ["Apple", "Banana", "Mango", "Orange"];
let selectedFruits = [];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Mango") break;
  selectedFruits.push(fruits[i]);
}
console.log("Challenge-1:", selectedFruits); // ["Apple", "Banana"]

/* ----------------------------------------------------------- */

// Challenge-2: Continue with for loop
// You are given an array of vegetables → ["Carrot", "Potato", "Tomato", "Spinach"].
// Loop through the array, but skip "Tomato".
// Store all other vegetables in a new array called availableVeggies.

let veggies = ["Carrot", "Potato", "Tomato", "Spinach"];
let availableVeggies = [];

for (let i = 0; i < veggies.length; i++) {
  if (veggies[i] === "Tomato") continue;
  availableVeggies.push(veggies[i]);
}
console.log("Challenge-2:", availableVeggies); // ["Carrot", "Potato", "Spinach"]

/* ----------------------------------------------------------- */

// Challenge-3: Break with for...of loop
// You are given an array of numbers → [10, 20, 30, 40, 50].
// Stop the loop when the number 40 is found.
// Store all numbers before 40 in a new array named smallNumbers.

let numbers = [10, 20, 30, 40, 50];
let smallNumbers = [];

for (let num of numbers) {
  if (num === 40) break;
  smallNumbers.push(num);
}
console.log("Challenge-3:", smallNumbers); // [10, 20, 30]

/* ----------------------------------------------------------- */

// Challenge-4: Continue with for...of loop
// You are given an array of fruits → ["Apple", "Banana", "Grapes", "Orange"].
// Skip "Grapes".
// Store the other fruits in a new array named favoriteFruits.

let fruits2 = ["Apple", "Banana", "Grapes", "Orange"];
let favoriteFruits = [];

for (let fruit of fruits2) {
  if (fruit === "Grapes") continue;
  favoriteFruits.push(fruit);
}
console.log("Challenge-4:", favoriteFruits); // ["Apple", "Banana", "Orange"]

/* ----------------------------------------------------------- */

// Challenge-5: Break with for...in loop (objects)
// Use a for..in loop to iterate through an object containing city populations.
// Stop the loop when the population of Berlin is found,
// and store all previous cities' population in a new object named cityPopulation.

let populations1 = {
  Delhi: 32000000,
  Mumbai: 21000000,
  Berlin: 3600000,
  Paris: 11000000,
  London: 9000000
};

let cityPopulation = {};

for (let city in populations1) {
  if (city === "Berlin") break;
  cityPopulation[city] = populations1[city];
}
console.log("Challenge-5:", cityPopulation); 
// { Delhi: 32000000, Mumbai: 21000000 }

/* ----------------------------------------------------------- */

// Challenge-6: Continue with for...in loop (objects)
// Use a for..in loop to iterate through an object containing city populations.
// Skip any city which has a population below 3 million.
// Store the rest in a new object called largeCity.

let populations2 = {
  Delhi: 32000000,
  Mumbai: 21000000,
  Berlin: 3600000,
  Paris: 11000000,
  London: 9000000,
  Zurich: 400000,     
  Oslo: 700000        
};

let largeCity = {};

for (let city in populations2) {
  if (populations2[city] < 3000000) continue;
  largeCity[city] = populations2[city];
}
console.log("Challenge-6:", largeCity); 
// { Delhi: 32000000, Mumbai: 21000000, Berlin: 3600000, Paris: 11000000, London: 9000000 }

/* ----------------------------------------------------------- */

// Challenge-7: forEach loop with return
// Write a forEach loop that iterates through the array: ["Apple", "Banana", "Mango", "Orange"].
// Stop the iteration when "Mango" is found and store all previous fruits in availableFruits.

const fruitCollection = ["Apple", "Banana", "Mango", "Orange"];
const availableFruits = [];

fruitCollection.forEach(function(fruit) {
  if (fruit === "Mango") return;
  availableFruits.push(fruit);
});
console.log("Challenge-7:", availableFruits); // ["Apple", "Banana"]

/* ----------------------------------------------------------- */

// Challenge-8: forEach loop with skip
// Write a forEach loop that iterates through the array: ["Berlin", "Tokyo", "Sydney", "Paris"].
// Skip "Sydney" and store the other cities in travelledCities.

const worldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
const travelledCities = [];

worldCities.forEach(function(city) {
  if (city === "Sydney") return;
  travelledCities.push(city);
});
console.log("Challenge-8:", travelledCities); // ["Berlin", "Tokyo", "Paris"]

/* ----------------------------------------------------------- */

// Challenge-9: for loop with skip and multiplication
// Write a for loop that iterates through the array: [2, 5, 7, 9].
// Skip the value 7 and multiply all the other numbers by 2.
// Store the results in a new array named doubleNumbers.

const myNumbers = [2, 5, 7, 9];
const doubleNumbers = [];

for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] === 7) continue;
  doubleNumbers.push(myNumbers[i] * 2);
}
console.log("Challenge-9:", doubleNumbers); // [4, 10, 18]

/* ----------------------------------------------------------- */

// Challenge-10: for...of with string length check
// Use a for...of loop to iterate through the array: ["Apple", "Banana", "Watermelon", "Strawberry", "Grapes"].
// Stop when the length of the current fruit name is greater than 10.
// Store all fruits before stopping in shortFruits.

const myFruits = ["Apple", "Banana", "Watermelon", "Strawberry", "Grapes"];
const shortFruits = [];

for (let fruit of myFruits) {
  if (fruit.length > 10) break;
  shortFruits.push(fruit);
}
console.log("Challenge-10:", shortFruits); // ["Apple", "Banana"]
