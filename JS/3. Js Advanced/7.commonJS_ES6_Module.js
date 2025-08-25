// ------------------------------
// CommonJS (CJS) - Node.js
// ------------------------------

// mathCJS.js (CJS style)
const mathCJS = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

// Exporting in CJS
module.exports = mathCJS;

// Importing in CJS
const math = require('./mathCJS'); // Works only in Node.js
console.log("CJS Add:", math.add(5, 3));        // 8
console.log("CJS Subtract:", math.subtract(5, 3)); // 2


// ------------------------------
// ES6 Modules (ESM) - Modern JS
// ------------------------------

// mathESM.mjs (ES6 module style)
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// Default export (optional)
export default function multiply(a, b) {
    return a * b;
}

// Importing ES6 module (works in Node.js with "type": "module" or .mjs)
import multiplyFunc, { add as addESM, subtract as subESM } from './mathESM.mjs';
console.log("ESM Add:", addESM(5, 3));       // 8
console.log("ESM Subtract:", subESM(5, 3));  // 2
console.log("ESM Multiply:", multiplyFunc(5, 3)); // 15
