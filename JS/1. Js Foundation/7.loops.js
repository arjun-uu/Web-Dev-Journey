// 📌 Loops in JavaScript

// 1. for loop
for (let i = 1; i <= 5; i++) {
  console.log("for loop:", i);
}

// 2. while loop
let j = 1;
while (j <= 5) {
  console.log("while loop:", j);
  j++;
}

// 3. do...while loop
let k = 1;
do {
  console.log("do...while loop:", k);
  k++;
} while (k <= 5);

// 4. for...of loop (arrays, strings, iterables)
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log("for...of:", fruit);
}

// 5. for...in loop (objects → keys)
let user = { name: "Arjun", age: 21, city: "Dehradun" };
for (let key in user) {
  console.log("for...in:", key, "=", user[key]);
}

// 6. forEach method (arrays)
fruits.forEach((fruit, index) => {
  console.log("forEach:", index, fruit);
});

// 7. break & continue
for (let n = 1; n <= 5; n++) {
  if (n === 3) continue; // skip 3
  if (n === 5) break;    // stop at 5
  console.log("break/continue example:", n);
}
 