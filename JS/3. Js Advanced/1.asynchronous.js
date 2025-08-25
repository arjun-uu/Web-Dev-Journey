// ===============================
// 📘 Synchronous vs Asynchronous JS
// ===============================

// ---- 1. Synchronous Example ----
console.log("Synchronous Example:");
console.log("Start"); // Executes immediately

function longTask() {
    for (let i = 0; i < 1e7; i++) {} // Simulating heavy task
    console.log("Long Task Finished");
}

longTask(); // Blocks further execution until done
console.log("End\n");

// ---- 2. Asynchronous Example ----
console.log("Asynchronous Example:");
console.log("Start");

setTimeout(() => {
    console.log("setTimeout: Async Task Done");
}, 1000); // Non-blocking (goes to Web APIs)

console.log("End\n");

// ---- 3. Event Loop Example ----
console.log("Event Loop Example:");
console.log("Start");

setTimeout(() => console.log("setTimeout (Macrotask)"), 0);

Promise.resolve().then(() => console.log("Promise (Microtask)"));

console.log("End\n");

// ---- OUTPUT ORDER ----
// Synchronous Example:
// Start
// Long Task Finished
// End
//
// Asynchronous Example:
// Start
// End
// setTimeout: Async Task Done
//
// Event Loop Example:
// Start
// End
// Promise (Microtask)
// setTimeout (Macrotask)
