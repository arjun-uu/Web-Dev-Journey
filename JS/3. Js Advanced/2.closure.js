// ===============================
// 📘 Closures in JavaScript
// ===============================

// 🔹 Definition: 
// A closure is formed when an inner function "remembers" 
// the variables of its outer function even after the outer 
// function has finished executing.

// -------------------------------------------------------
// 1. Basic Closure Example
// -------------------------------------------------------
function outer() {
    let count = 0; // outer function variable

    function inner() {
        count++; // inner function accessing outer variable
        console.log("Count:", count);
    }

    return inner; // returning inner creates closure
}

const counter = outer(); 
counter(); // 1
counter(); // 2
counter(); // 3

// -------------------------------------------------------
// 2. Closures for Data Privacy (Private Variables)
// -------------------------------------------------------
function createBankAccount() {
    let balance = 1000; // private variable

    return {
        deposit: function (amount) {
            balance += amount;
            console.log(`Deposited: ${amount}, Balance: ${balance}`);
        },
        withdraw: function (amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: ${amount}, Balance: ${balance}`);
            } else {
                console.log("❌ Insufficient funds");
            }
        }
    };
}

const account = createBankAccount();
account.deposit(500);  // Deposited: 500, Balance: 1500
account.withdraw(300); // Withdrew: 300, Balance: 1200
// console.log(account.balance); ❌ Not accessible directly

// -------------------------------------------------------
// 3. Function Factory Example
// -------------------------------------------------------
function multiplier(factor) {
    return function (x) {
        return x * factor; // closure remembers "factor"
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15

// -------------------------------------------------------
// 4. Closure with Event Handler Example
// -------------------------------------------------------
// (Run this in a browser environment with an HTML button)
/*
<!DOCTYPE html>
<html>
<body>
    <button id="btn">Click Me</button>
    <script src="closures.js"></script>
</body>
</html>
*/

function setupButton() {
    let clicks = 0;
    document.getElementById("btn").addEventListener("click", function () {
        clicks++; // closure remembers "clicks"
        console.log(`Button clicked ${clicks} times`);
    });
}
// setupButton(); // Uncomment when running in browser

// ===============================
// ✅ Summary
// - Closure = Function + Lexical Scope
// - Inner function keeps reference to outer function variables
// - Use cases: Private data, function factories, event handlers
// ===============================
