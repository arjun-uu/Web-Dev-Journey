/*******************************************
 * 📝 PROTOTYPAL INHERITANCE - NOTES
 *******************************************/

// 1️⃣ Basic Inheritance using __proto__
const person = {
    greet: function () {
        console.log("👋 Hello! I am a person.");
    }
};

const student = {
    study: function () {
        console.log("📖 I am studying.");
    }
};

// Linking student to person (inheritance)
student.__proto__ = person;

student.study();   // Own property
student.greet();   // Inherited from person


/*******************************************/

// 2️⃣ Inheritance Chain (Multi-level prototype chain)
const animal = {
    eat: function () {
        console.log("🍎 Eating...");
    }
};

const dog = {
    bark: function () {
        console.log("🐶 Barking...");
    }
};

dog.__proto__ = animal; // Dog inherits from Animal
student.__proto__ = dog; // Student inherits from Dog (and indirectly Animal)

student.bark();  // From dog
student.eat();   // From animal


/*******************************************/

// 3️⃣ Constructor Function with Prototype
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`👋 Hello! I am ${this.name}.`);
};

function Student(name, subject) {
    Person.call(this, name); // call parent constructor
    this.subject = subject;
}

// Inheriting prototype of Person
Student.prototype = Object.create(Person.prototype);

// Reset constructor (important step)
Student.prototype.constructor = Student;

// Adding new method to Student
Student.prototype.study = function () {
    console.log(`📚 ${this.name} is studying ${this.subject}.`);
};

// Usage
const s1 = new Student("Arjun", "JavaScript");
s1.greet();  // From Person prototype
s1.study();  // From Student prototype


/*******************************************/

// 4️⃣ Modern way: class (syntactic sugar over prototypes)
class Parent {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`👋 Hello! I am ${this.name}.`);
    }
}

class Child extends Parent {
    constructor(name, hobby) {
        super(name); // call parent constructor
        this.hobby = hobby;
    }
    play() {
        console.log(`🎮 ${this.name} loves ${this.hobby}.`);
    }
}

const c1 = new Child("Abhilasha", "Painting");
c1.greet(); // From Parent
c1.play();  // From Child


/*******************************************
 * 🔑 QUICK DIFFERENCE:
 * - Inheritance: Concept of passing down properties/methods.
 * - Prototype: Mechanism (in JS) by which inheritance happens.
 *******************************************/
