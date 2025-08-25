// =======================
// 🔥 Understanding `this` in JavaScript
// =======================

// 1️⃣ Normal Object Method
const person = {
  name: "Hitesh",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};
person.greet(); 
// Output: Hi, I am Hitesh
// 👉 `this` refers to the object before the dot (person)

// -----------------------

// 2️⃣ Function Reference (loses context)
const greetFunction = person.greet;
greetFunction(); 
// Output: Hi, I am undefined (strict mode) OR Hi, I am [object Window] (non-strict)
// 👉 When a method is taken out and called as a function, `this` is lost

// -----------------------

// 3️⃣ Binding `this` explicitly with bind()
const boundGreet = person.greet.bind({ name: "John" });
boundGreet(); 