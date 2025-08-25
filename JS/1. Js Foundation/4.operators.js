// 📌 Operations in JavaScript

let a = 10, b = 3;

// -------- Arithmetic Operators --------
console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.333...
console.log("Modulus:", a % b);        // 1
console.log("Exponent:", a ** b);      // 1000
console.log("Increment:", ++a);        // 11
console.log("Decrement:", --b);        // 2

// -------- Assignment Operators --------
let x = 5;
x += 2;  // x = x + 2
x -= 1;  // x = x - 1
console.log("Assignment result:", x);  // 6

// -------- Comparison Operators --------
console.log("Equal (==):", 5 == "5");    // true (checks value only)
console.log("Strict Equal (===):", 5 === "5"); // false (checks value + type)
console.log("Not Equal (!=):", a != b); // true
console.log("Greater:", a > b);         // true
console.log("Less or Equal:", a <= b);  // false

// -------- Logical Operators --------
console.log("AND (&&):", (a > 5 && b > 5)); // false
console.log("OR (||):", (a > 5 || b > 5));  // true
console.log("NOT (!):", !(a > 5));          // false

// -------- Bitwise Operators --------
console.log("Bitwise AND:", 5 & 1);  // 1
console.log("Bitwise OR:", 5 | 1);   // 5
console.log("Bitwise XOR:", 5 ^ 1);  // 4
console.log("Left Shift:", 5 << 1);  // 10
console.log("Right Shift:", 5 >> 1); // 2
