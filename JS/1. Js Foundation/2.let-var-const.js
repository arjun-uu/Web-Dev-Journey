// 📌 Understanding let, var, and const

// ---- var ----
var x = 10;
var x = 20;   // ✅ re-declaration allowed
x = 30;       // ✅ update allowed
console.log("var x:", x);

// ---- let ----
let y = 40;
// let y = 50; // ❌ error: re-declaration NOT allowed in same scope
y = 60;       // ✅ update allowed
console.log("let y:", y);

// ---- const ----
const z = 70;
// z = 80;     // ❌ error: cannot update const
// const z = 90; // ❌ error: re-declaration not allowed
console.log("const z:", z);

// ---- Scope Difference ----
if (true) {
    var a = 100;  // function/global scoped
    let b = 200;  // block scoped
    const c = 300; // block scoped
}
console.log("var a:", a);   // ✅ accessible
// console.log("let b:", b);   // ❌ error
// console.log("const c:", c); // ❌ error
