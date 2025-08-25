// 📌 JavaScript Data Types

// ----------- Primitive Types -----------
let num = 102;                       // Number
let str = "Hello World";             // String
let isLoggedIn = true;               // Boolean
let userEmail;                       // Undefined
let emptyValue = null;               // Null
let bigNum = 12345678901234567890n;  // BigInt
let uniqueId = Symbol("id");         // Symbol

console.log("====== Primitive Types ======");
console.log("Number:", num, "| Type:", typeof num);
console.log("String:", str, "| Type:", typeof str);
console.log("Boolean:", isLoggedIn, "| Type:", typeof isLoggedIn);
console.log("Undefined:", userEmail, "| Type:", typeof userEmail);
console.log("Null:", emptyValue, "| Type:", typeof emptyValue); // typeof null -> "object" (quirk)
console.log("BigInt:", bigNum, "| Type:", typeof bigNum);
console.log("Symbol:", uniqueId, "| Type:", typeof uniqueId);
console.log("\n");

// ----------- Non-Primitive Types -----------

console.log("====== Non-Primitive Types ======");
// Array
let fruits = ["apple", "banana", "mango"];
console.log("Array:", fruits, "| Type:", typeof fruits); // object

// Object
let user = { name: "Arjun", age: 21 };
console.log("Object:", user, "| Type:", typeof user);

// Function
function greet() { return "Hello, Arjun!"; }
console.log("Function:", greet, "| Type:", typeof greet);
console.log("Function Call Output:", greet());
console.log("\n");

// ----------- Primitive → Object Conversion (Wrapper Objects) -----------
console.log("====== Primitive to Non-Primitive Conversion ======");

// Number
let numObj = new Number(102);
console.log("numObj:", numObj, "| Type:", typeof numObj);

// String
let strObj = new String("Hello World");
console.log("strObj:", strObj, "| Type:", typeof strObj);

// Boolean
let boolObj = new Boolean(true);
console.log("boolObj:", boolObj, "| Type:", typeof boolObj);

// ⚠️ BigInt and Symbol cannot be created with 'new'
console.log("BigInt & Symbol cannot be converted using 'new'.");
