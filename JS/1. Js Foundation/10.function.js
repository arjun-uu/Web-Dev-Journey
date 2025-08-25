// 1. Write a function named `makeTea` that takes one parameter, 
// `typeOfTea`, and returns a string like "Making green tea".

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}

// Call the function and store the result in teaOrder
let teaOrder = makeTea("green tea");

// Print the result
console.log(teaOrder);



// 2. Create a function `orderTea` that takes a type of tea as a parameter.
// Inside this function, define another function `confirmOrder` that returns
// a message confirming the order of the given tea type. 
// The outer function should call the inner function and return its result.


// Outer function
function orderTea(teaType) {

    // Inner function
    function confirmOrder() {
        return `Order confirmed for ${teaType}`;
    }

    // Call the inner function and return its result
    return confirmOrder();
}

// Usage
console.log(orderTea("Chai"));       // ✅ Order confirmed for Chai
console.log(orderTea("Green Tea"));  // ✅ Order confirmed for Green Tea

//3. Arrow function to calculate total cost
const calculateTotal = (price, quantity) => {
    return price * quantity;
}

// Usage
let totalCost = calculateTotal(100, 5); // Example: price = 100, quantity = 5

console.log(totalCost); // ✅ Output: 500


// 4. Write a function named `processJuiceOrder` that takes another function `makeJuice` as a parameter.
// It should call `makeJuice` with the argument "Mango" and return the result.


// Function that will be passed as a parameter
function makeJuice(fruit) {
    return `Juice is ready: ${fruit}`;
}

// Higher-order function
function processJuiceOrder(makeJuiceFunction) {
    // Call the passed function with "Mango"
    return makeJuiceFunction("Mango");
}

// Usage
const result = processJuiceOrder(makeJuice);
console.log(result); // ✅ Output: Juice is ready: Mango






// 📌 JavaScript Functions Deep Dive

// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Arjun")); // Hello, Arjun

// 2. Function Expression (Anonymous Function)
const add = function (a, b) {
    return a + b;
};
console.log(add(5, 7)); // 12

// 3. Arrow Function (ES6)
const multiply = (x, y) => x * y;
console.log(multiply(4, 6)); // 24

// 4. Default Parameters
function power(base, exp = 2) {
    return base ** exp;
}
console.log(power(5)); // 25
console.log(power(5, 3)); // 125

// 5. Rest Parameters
function sumAll(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// 6. Functions are First-Class Citizens
// You can pass them as arguments
function operate(a, b, fn) {
    return fn(a, b);
}
console.log(operate(10, 20, add)); // 30
console.log(operate(10, 20, multiply)); // 200

// 7. Returning a Function (Higher-Order Function)
function multiplier(factor) {
    return function (x) {
        return x * factor;
    };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// 8. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("IIFE executed immediately!");
})(); // runs instantly

// 9. Closures (function remembers scope)
function outer() {
    let secret = "JS is powerful!";
    return function inner() {
        return secret; // inner remembers outer’s variable
    };
}
const closureExample = outer();
console.log(closureExample()); // JS is powerful!

// 10. Function Scope vs Block Scope
function scopeTest() {
    if (true) {
        var x = 10; // function scoped
        let y = 20; // block scoped
        const z = 30; // block scoped
    }
    console.log(x); // 10
    // console.log(y); ❌ Error
    // console.log(z); ❌ Error
}
scopeTest();

// 11. Callback Example (async style)
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        callback("Data received!");
    }, 1000);
}
fetchData((msg) => console.log(msg));

// 12. Arrow Functions & `this` keyword
const person = {
    name: "Arjun",
    normalFn: function () {
        console.log("Normal:", this.name);
    },
    arrowFn: () => {
        console.log("Arrow:", this.name); // ❌ undefined (lexical this)
    },
};
person.normalFn(); // Normal: Arjun
person.arrowFn(); // Arrow: undefined
