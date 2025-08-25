/* =====================================================
        Higher-Order Functions & Nested Functions
===================================================== */

/* -----------------------------------------------------
1️⃣ Higher-Order Function: Passing a function as a parameter
------------------------------------------------------*/
function greet(name) {
    return `Hello, ${name}!`;
}

function processGreeting(fn) {
    // fn is a function passed as parameter
    return fn("Arjun");
}

console.log("HOF Example 1:", processGreeting(greet)); // Hello, Arjun!

/* -----------------------------------------------------
2️⃣ Higher-Order Function: Returning a function
------------------------------------------------------*/
function multiplier(factor) {
    return function(number) {
        return number * factor;
    }
}

const double = multiplier(2); // returns a function
console.log("HOF Example 2:", double(5)); // 10

/* -----------------------------------------------------
3️⃣ Nested Function
------------------------------------------------------*/
function outerFunction(name) {
    function innerFunction() {
        return `Hello, ${name}!`;
    }
    return innerFunction();
}

console.log("Nested Function Example:", outerFunction("Arjun")); // Hello, Arjun!

/* -----------------------------------------------------
4️⃣ Nested Function Returning Another Function (Closure)
------------------------------------------------------*/
function greet(language) {
    return function(name) {
        if (language === "EN") return `Hello, ${name}`;
        if (language === "ES") return `Hola, ${name}`;
    }
}

const greetEnglish = greet("EN");
console.log("Closure Example:", greetEnglish("Arjun")); // Hello, Arjun

const greetSpanish = greet("ES");
console.log("Closure Example:", greetSpanish("Arjun")); // Hola, Arjun

/* -----------------------------------------------------
5️⃣ Combining HOF + Nested Function
------------------------------------------------------*/
function processOrder(orderCallback) {
    function addExtras(item) {
        return `${item} with extra sugar`;
    }
    return orderCallback(addExtras); // passing nested function to callback
}

const result = processOrder(function(addExtrasFn) {
    return addExtrasFn("Tea");
});

console.log("HOF + Nested Function Example:", result); // Tea with extra sugar

/* -----------------------------------------------------
6️⃣ Using HOFs with Arrays
------------------------------------------------------*/
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function(num) { // map is a HOF
    return num * num;
});

console.log("Array HOF Example:", squares); // [1, 4, 9, 16, 25]
