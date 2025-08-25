// **************** OOP in JavaScript ****************

// 1️⃣ Creating Object with Constructor Function
// Old way before ES6 classes, still works fine
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHi = function () {
    return `Hi, I'm ${this.name}, ${this.age} years old.`;
  };
}

const person1 = new Person("Arjun", 22);
console.log("Constructor Function:", person1.sayHi());

// --------------------------------------------------

// 2️⃣ Using ES6 Class (modern way)
class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  introduce() {
    return `Hello, I'm ${this.name} and I study ${this.course}.`;
  }
}

const student1 = new Student("Abhilasha", "BBA");
console.log("Class Example:", student1.introduce());

// --------------------------------------------------

// 3️⃣ Inheritance (extends keyword)
// Parent Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

// Child Class
class Dog extends Animal {
  speak() {
    return `${this.name} barks! 🐶`;
  }
}

const dog1 = new Dog("Tommy");
console.log("Inheritance Example:", dog1.speak());

// --------------------------------------------------

// 4️⃣ Encapsulation (private fields + getter/setter)
class BankAccount {
  #balance = 0; // private field (cannot be accessed outside)

  // Deposit money
  deposit(amount) {
    this.#balance += amount;
    return `Deposited ₹${amount}. Current Balance: ₹${this.#balance}`;
  }

  // Withdraw money safely
  withdraw(amount) {
    if (amount > this.#balance) {
      return "❌ Insufficient balance!";
    }
    this.#balance -= amount;
    return `Withdrew ₹${amount}. Remaining Balance: ₹${this.#balance}`;
  }

  // Getter (to safely check balance)
  get balance() {
    return `Your balance is ₹${this.#balance}`;
  }

  // Setter (to reset account with warning)
  set resetBalance(value) {
    this.#balance = value;
  }
}

const account = new BankAccount();
console.log("Encapsulation Example:", account.deposit(500));
console.log("Encapsulation Example:", account.withdraw(200));
console.log("Check Balance (getter):", account.balance);
account.resetBalance = 1000; // setter
console.log("After Reset Balance (setter):", account.balance);

// --------------------------------------------------

// 5️⃣ Polymorphism (same method behaves differently)
class Shape {
  area() {
    return "Area formula not defined.";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log("Polymorphism Circle Area:", circle.area().toFixed(2));
console.log("Polymorphism Rectangle Area:", rectangle.area());

// --------------------------------------------------

// 6️⃣ Abstraction (Hiding implementation details)
// Only necessary methods are exposed, internal logic is hidden
class CoffeeMachine {
  #waterLevel = 0;

  fillWater(amount) {
    this.#waterLevel += amount;
    return `☕ Water filled: ${amount} ml`;
  }

  brewCoffee() {
    if (this.#waterLevel < 50) {
      return "❌ Not enough water!";
    }
    this.#waterLevel -= 50;
    return "✅ Coffee is ready!";
  }
}

const machine = new CoffeeMachine();
console.log("Abstraction Example:", machine.fillWater(100));
console.log("Abstraction Example:", machine.brewCoffee());
