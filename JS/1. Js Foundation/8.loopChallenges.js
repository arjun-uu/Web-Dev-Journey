// 📌 Loop + Array Methods + Conditions Challenges

// 1. Print only even numbers from an array
let nums = [1, 2, 3, 4, 5, 6];
for (let n of nums) {
  if (n % 2 === 0) console.log("Even:", n);
}

// 2. Count how many numbers are greater than 10
let numbers = [5, 12, 8, 130, 44];
let count = 0;
for (let n of numbers) {
  if (n > 10) count++;
}
console.log("Numbers >10:", count);

// 3. Find the largest number in an array
let arr = [15, 7, 22, 3, 9];
let max = arr[0];
for (let n of arr) {
  if (n > max) max = n;
}
console.log("Max Number:", max);

// 4. Reverse an array without using reverse()
let teaMenu = ["chai", "green tea", "oolong tea"];
let reversed = [];
for (let i = teaMenu.length - 1; i >= 0; i--) {
  reversed.push(teaMenu[i]);
}
console.log("Reversed Menu:", reversed);

// 5. Sum of all numbers using reduce
let sum = numbers.reduce((a, b) => a + b, 0);
console.log("Sum using reduce:", sum);

// 6. Filter cities starting with 'N'
let cities = ["New York", "London", "Nairobi", "Paris"];
let nCities = cities.filter(city => city.startsWith("N"));
console.log("Cities starting with N:", nCities);

// 7. Transform array → convert to uppercase
let teas = ["chai", "green tea", "oolong"];
let upperTeas = teas.map(t => t.toUpperCase());
console.log("Uppercase Teas:", upperTeas);

// 8. Check if all numbers are positive
let marks = [10, 20, 30, -5];
console.log("All positive?", marks.every(m => m > 0));

// 9. Find first tea with length > 6
let foundTea = teas.find(t => t.length > 6);
console.log("First Tea >6 letters:", foundTea);

// 10. Use switch + loop: print day name for numbers 1–3
for (let d = 1; d <= 3; d++) {
  switch (d) {
    case 1: console.log("Day 1: Monday"); break;
    case 2: console.log("Day 2: Tuesday"); break;
    case 3: console.log("Day 3: Wednesday"); break;
  }
}
