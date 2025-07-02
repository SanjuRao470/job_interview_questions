// 🔁 FOR LOOP + var vs let (Classic Closure Trap)
// 1. Output-based Question

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// Expected Output:

// 3
// 3
// 3
// Because var is function scoped, the same variable i is shared across all iterations.



// 2. Output-based Question

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// Expected Output:

// 0
// 1
// 2
// Because let is block scoped, a new binding is created in each iteration.



// 🧠 Hoisting & TDZ (Temporal Dead Zone)
// 3. Output-based Question

// console.log(a);
// var a = 5;
// Output:

// undefined
// var is hoisted, but its value is undefined until assignment.


// 4. Output-based Question

// console.log(b);
// let b = 10;
// Output:

// ReferenceError: Cannot access 'b' before initialization
// let is hoisted, but in the Temporal Dead Zone (TDZ) until the declaration line.



// 🔄 Re-declaration
// 5. What happens here?

// var x = 1;
// var x = 2;
// console.log(x);
// Output:


// 2
// var allows re-declaration.



// 6. What happens here?

// let y = 1;
// let y = 2;
// Output:

// SyntaxError: Identifier 'y' has already been declared
// let and const do not allow re-declaration in the same scope.



// 🔐 Scope (Function vs Block)
// 7. What will this print?

// {
//   var a = 1;
// }
// console.log(a);
// Output:

// 1
// var is function-scoped, not block-scoped.

// 8. And this?

// {
//   let b = 2;
// }
// console.log(b);
// Output:

// ReferenceError: b is not defined
// let is block-scoped.

// 📌 const vs let
// 9. Output-based Question

// const x = 10;
// x = 20;
// Output:


// TypeError: Assignment to constant variable
// const cannot be reassigned.


// 10. But what about this?


// const obj = { a: 1 };
// obj.a = 2;
// console.log(obj.a);
// Output:

// 2
// const prevents reassignment of the reference, not mutation of the object.



// 🔄 Edge Case: IIFE with var
// 11. Output-based Question


// for (var i = 0; i < 3; i++) {
//   (function(i) {
//     setTimeout(() => console.log(i), 1000);
//   })(i);
// }
// Output:




// 0
// 1
// 2
// IIFE captures i correctly by passing it as a parameter.

// ✅ Summary Table
// Feature	var	let	const
// Scope	Function	Block	Block
// Hoisted	Yes (undefined)	Yes (TDZ error)	Yes (TDZ error)
// Re-declaration	Allowed	Not allowed	Not allowed
// Reassignment	Allowed	Allowed	❌ Not allowed

// Would you like me to give you a printable cheat sheet or a mock test based on these concepts?








// You said:
// please can you give me more senario in this
// for (var i = 0; i < 3; i++) {
//   (function(i) {
//     setTimeout(() => console.log(i), 1000);
//   })(i);
// }


// ChatGPT said:
// Absolutely! Let's break down and explore more scenarios using for loops, var, let, and closures with setTimeout, which is a common interview topic for experienced JavaScript developers.

// ✅ Original Scenario Recap:




// for (var i = 0; i < 3; i++) {
//   (function(i) {
//     setTimeout(() => console.log(i), 1000);
//   })(i);
// }
// 🧠 Here, you're using an Immediately Invoked Function Expression (IIFE) to pass the i value by value, not by reference, which fixes the classic closure issue.



// 🔍 SCENARIO 1: Without IIFE (using var)

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log("var", i), 1000);
// }
// 🧠 Output:

// var 3
// var 3
// var 3
// Because var is function scoped, i is shared across all loop iterations and ends up as 3.



// 🔍 SCENARIO 2: With let (no IIFE needed)

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log("let", i), 1000);
// }
// 🧠 Output:

// let 0
// let 1
// let 2
// let creates a new scope for each iteration, so closures capture the correct value.


// 🔍 SCENARIO 3: Mixing var with delayed execution (manual closure)

// for (var i = 0; i < 3; i++) {
//   const capture = i;
//   setTimeout(() => console.log("capture", capture), 1000);
// }
// 🧠 Output:


// capture 0
// capture 1
// capture 2
// Here you're manually capturing the value of i by assigning it to capture (declared with const), which the closure holds onto correctly.



// 🔍 SCENARIO 4: Double IIFE Confusion


// for (var i = 0; i < 3; i++) {
//   (function(i) {
//     (function(j) {
//       setTimeout(() => console.log("double", j), 1000);
//     })(i);
//   })(i);
// }
// 🧠 Output:

// double 0
// double 1
// double 2
// Even with two IIFEs, the passed values are isolated and correct.



// 🔍 SCENARIO 5: Countdown Timer using var

// for (var i = 3; i > 0; i--) {
//   setTimeout(() => console.log("count", i), 1000);
// }
// 🧠 Output:


// count 0
// count 0
// count 0
// Classic mistake — var again leaks the reference, and by the time the timeout executes, i = 0.


// 🔍 SCENARIO 6: Countdown Timer Fixed using IIFE

// for (var i = 3; i > 0; i--) {
//   (function(i) {
//     setTimeout(() => console.log("fixed count", i), 1000);
//   })(i);
// }
// 🧠 Output:


// fixed count 3
// fixed count 2
// fixed count 1


// 🔍 SCENARIO 7: setTimeout with let inside a function


// function delayedLoop() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log("inside func", i), 1000);
//   }
// }
// delayedLoop();
// 🧠 Output:


// inside func 0
// inside func 1
// inside func 2



// 🔍 SCENARIO 8: Closures in Asynchronous Loops with API Calls


// for (var i = 0; i < 3; i++) {
//   (function(i) {
//     fetchData(i).then(data => console.log("API result", data));
//   })(i);
// }
// function fetchData(i) {
//   return Promise.resolve("Data " + i);
// }
// 🧠 Output:


// API result Data 0
// API result Data 1
// API result Data 2
// Same principle applies to any async task — capture i with IIFE to preserve value.

