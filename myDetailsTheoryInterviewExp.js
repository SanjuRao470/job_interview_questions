//---•	null vs undefined vs NaN


// let a = null;
// console.log(a);            // null
// console.log(typeof a);     // "object"  (weird but true)


// let b;
// console.log(b);            // undefined
// console.log(typeof b);     // "undefined"  // itself is datatype


// console.log(0 / 0);        // NaN
// console.log("abc" * 3);    // NaN
// console.log(parseInt("hi")); // NaN
// console.log(typeof NaN);   // "number"
// ✅ Interview line: “NaN is a special numeric value that represents an invalid number.”


// console.log(null == undefined); //true
// console.log(null === undefined); //false
// console.log(NaN == NaN);//false
// console.log(NaN === NaN);//false 



//---  •	Truthy & Falsy values

//  In JavaScript, every value is either “truthy” or “falsy” when used in Boolean contexts (e.g., if, while, logical operators).
 
//why [] and {} are truthy value?
 // because they are  object in the memory

//  //console.log(Boolean([]))//true
// // console.log(Boolean({}))//true
//  //console.log(Boolean(""))//false
//  //console.log(Boolean(" "))//true
//   //console.log(Boolean("hello "))//true
//   //console.log(Boolean(null))//false
//  //console.log(Boolean(undefined))//false
// // console.log(Boolean(0))//false
// // console.log(Boolean(1))//true
// // console.log(Boolean(0))//false
// // console.log(Boolean(-0))//false
// // console.log(Boolean(-1))//true
// // console.log(Boolean(1))//true
// // console.log(Boolean(NaN))//false
// //console.log(Boolean(123));// true



// 1️⃣ What is ! (NOT operator)?
// The ! operator converts a value into a Boolean first, then inverts it.

// Example:

// console.log(!true);   // false
// console.log(!false);  // true
// console.log(!0);      // true  (0 → falsy → becomes false → invert → true)
// console.log(!123);    // false (123 → truthy → becomes true → invert → false)


// So one ! does:
// Convert value → Boolean
// Invert (flip true ↔ false)


// 2️⃣ What does !! (Double NOT) do?
// The first ! converts the value to Boolean and flips it.
// The second ! flips it back to the original truthiness, leaving only the Boolean conversion.
// So !!value is the same as Boolean(value).


// 3️⃣ Step-by-step Example
// console.log(!!"world");


// Step 1: "world" is a truthy string.
// Step 2: First ! → !("world") → false
// Step 3: Second ! → !false → true ✅


// 2️⃣ Use Double NOT (!!)

// Shortcut way: !!value converts it to a strict Boolean.

// console.log(!!false);    // false
// console.log(!!0);        // false
// console.log(!!"");       // false
// console.log(!!"world");  // true
// console.log(!![]);       // true
// console.log(!!{});       // true



// EXECUTION CONTEXT & CALL STACK---------------

//--context
//scope---global,functional.block
//variable--global,functional.block
//lexical scope
//regular call
//method call


//-----using with this keyword-----
// this keyword alwways work with a regular function and an object using strict and non-strict mode

//--this value depend how a functional call not where and how its defined--
//  its calculate at runtime
// this value can update by  call , apply , bind methods


///--- why we need this keyword in  js--
// It tells functions “who is calling me?”
// Without this, functions would not know the object they belong to.


// 2️⃣ Why we need this

// A. To access properties of the object inside methods

// const person = {
//   name: "Sanju",
//   greet: function() {
//     console.log("Hello " + this.name);
//   }
// };

// person.greet(); // Hello Sanju


// this.name refers to the name of the object that owns the method (person).
// Without this, you’d have to hardcode person.name inside the method, which makes it non-reusable.


// B. To make methods reusable across objects

// function greet() {
//   console.log("Hello " + this.name);
// }

// const person1 = { name: "Sanju", greet };
// const person2 = { name: "Rao", greet };

// person1.greet(); // Hello Sanju
// person2.greet(); // Hello Rao


// Same function behaves differently depending on the context (the object calling it).
// this allows dynamic behavior → reusability.


// C. To handle dynamic execution context


// Sometimes we don’t know which object will call the function at runtime.
// this allows functions to adapt dynamically.


// function showName() {
//   console.log(this.name);
// }

// const obj = { name: "Sanju" };
// const obj2 = { name: "Rao" };

// obj.method = showName;
// obj2.method = showName;

// obj.method();  // Sanju
// obj2.method(); // Rao


// showName function can work for any object.

// D. Works with constructors & classes
// function Person(name) {
//   this.name = name;
// }

// const p1 = new Person("Sanju");
// console.log(p1.name); // Sanju


// this refers to the newly created object in constructors.
// Without this, constructors cannot assign properties dynamically.


// ✅ Summary: Why we need this

// Access object properties dynamically

// Make methods reusable across objects

// Adapt function behavior depending on caller

// Work with constructors/classes to create new objects



// Scope = “where can I access a variable?” → age inside function
// Context = “who is executing this function (this)?” → person because it’s a method call
//Context deals with the object that owns the execution of the function.


// function hello() {/// this makes function execution context(FEC)
//   console.log(this);
// }


// const obj = {
//   name: "Sanju",
//   sayHello: hello
// };


// const person = {
//   name: "Sanju",
//   greet: function() {  // <-- method of the object(person)
//     var age = 26;   ////function variable
//     console.log(this.name); 
//     console.log(age);  //function scope
//   }
// };


// var a = 10; // global scope

// function test() {
//   let b = 20; // function scope
//   console.log(b); //✅ accessible inside function
//   if (true) {
//     const c = 30; // block scope
//     console.log(c); // 30 //✅ accessible inside  block function
//   }
//   // console.log(c); // ❌ ReferenceError
// }


// var a = 10; // global scope

// function outer() {
//   var b = 20; // function scope of outer

//   function inner() {
//     console.log(a); // can access global 'a'
//     console.log(b); // can access outer's 'b' → lexical scope
//   }

//   inner();
// }



// outer();
// test()
// hello();       // regular function call → this = window
// obj.sayHello(); // method call → this = obj
// person.greet(); // method call → this = person


//--- function and object using this along with strict and non-strict

///----FUNCTION


//---in the browser

// var name = 'john'

// function foo(){
//   console.log(this.name)//  window
// }
//foo()

// Explanation:
// foo() is a regular function call, not a method.
// In non-strict mode, this defaults to the global object.
// In a browser, global object = window, and window.name = "John" because var creates a property on window.



// `use strict`
// var name = 'john'

// function foo(){
//   console.log(this.name)//undefined
// }
// /foo()

// Explanation:
// In strict mode, regular functions do not default this to the global object.
// this inside foo() = undefined
// Accessing this.name → undefined


// //--- in Node its an object
// this in Node top-level function = global object? Actually in Node modules,
//  this = undefined in strict mode, 
//  or {} in non-strict inside module.


///----OBJECT

// const person = {
//   name: 'Sanju',
//   greet: function() {
//     console.log(t                                                                                                                                                                                                his.name);
//   }
// };

// person.greet(); // ?
// Explanation:

// greet() is called as a method of person → this = person

// Accessing this.name → "Sanju"






//HOISTING : VARIABLE & FUNCTION-----

// var-------

// console.log(a); // undefined
// var a = 10;


// let

// console.log(b); // ReferenceError
// let b = 20;


// Function declaration-- can call function before its definition
//Yes,Function hoisted with body

// greet(); // "Hello!"
// function greet() { console.log("Hello!"); }


// Function expression
//--The function is not hoisted, only the variable.Only the variable is hoisted

// sayHi(); // TypeError
// var sayHi = function(){ 
// console.log("Hello!"); 
//}

// How engine sees it:
// // During creation phase
// var sayHi = undefined;

// // During execution
// sayHi(); // ❌ TypeError: sayHi is not a function
// sayHi = function() {
//   console.log("Hi!");
// };


// ----
// var sayHi = function(){ 
// console.log("Hello!"); 
// }
// sayHi()//Hello!


//---- output based questions=====
// {
//   function greet() {
//     console.log("Hi!");
//   }
// }

// greet();
// Answer: ❌ ReferenceError
// Explanation: Function declarations inside a block are block-scoped in strict mode.


//----
// console.log(foo); 
// var foo = 1;
// function foo() {}
// console.log(foo);


//break into parts
//part--1
// console.log(foo); 
// var foo = 1;
// function foo() {}


//--//part--2
// var foo = 1;
// function foo() {}
// console.log(foo);

// Answer:
// [Function: foo]
// 1

// Order of hoisting:

// Step 1: Hoisting phase (creation phase)
// Function declarations are hoisted first, with their full body.
// function foo() {} // hoisted first


// var declarations are hoisted next, initialized to undefined.
// var foo = undefined; // hoisting only, assignment stays in place


// So internally, the engine sees (conceptually):

// function foo() {}  // hoisted
// var foo; =>undefined 


// Step 2: Execution phase
// First console.log(foo)
// The function declaration exists, so foo refers to the function.
// Output: [Function: foo]

// var foo = 1;
// Assignment happens now, overwriting the function reference with 1.
// Second console.log(foo)
// Prints 1 because the variable assignment replaced the function.



//-----

// IIFE + hoisting
// var a = 10;
// (function() {
//   console.log(a);
//   var a = 20;
// })();


// Answer:
// undefined
// Explanation: Inside the IIFE, var a is hoisted → undefined. Outer a = 10 is shadowed.



//Interview Exprience--------
//=====INTERVIEWER ASKED QUESTIONS=====================//

//QUESTION---

// function app(){
//    x=10;
//    var x= 10
//    console.log(x)
   
// }
// app()//10

////QUESTION---

// function app(){
//    x=10;
//    var x= 50
//    console.log(x)
   
// }
// app()//50  // latest updated value

//or
// function app() {
//   var x;     // hoisted, x = undefined
//   x = 10;    // assignment
//   x = 50;    // overwrite with 50
//   console.log(x); // prints 50
// }


////QUESTION---

// I used with let  // this asked INTERVIEWER interview // what you get if you use let instead of var
//  function app(){
//        x=10;
//      let x= 10  //ReferenceError: Cannot access 'x' before initialization
//      console.log(x)
   
//  }
//  app()


//-------------------------

//  function app(){
//      console.log(x)// always get Refference error
//         x=10;
//          console.log(x)// always get Refference error
//      let x= 10  
//       console.log(x)// always get Refference error
//    }
//  app()
//from at top of the scope to line  let x= 10  called TDZ. in the area anywhere if you access variable then always get Refference error



///-------------REASON---------
// Why the behaviors differ

// var

// Hoisted and initialized to undefined at the start of the scope.

// Accessible anywhere in the function after hoisting.

// Function-scoped. Redeclaration allowed.

// let

// Hoisted but uninitialized until its declaration line executes.

// In the TDZ before that line—any access/assignment throws ReferenceError.

// Block-scoped. No redeclaration in the same scope.



//CASES:-------

// function app(){

//     x=10;  
//     let  y= 50  
//    console.log(y)//50
//       console.log(x)//10
   
 
// }
// app()


// function app() {
//     x = 10;           // Implicit global variable (no `let/var/const`) or x = 10; assigns 10 to a variable without declaring it, so it becomes a global variable.
//     let y = 50;       // Proper block-scoped variable
//     console.log(y);   // ✅ 50
//     console.log(x);   // ✅ 10
//   }
//   app();


//CASE-2
// function app(){//can not re-declare the same variable in let

//     x=10;////ReferenceError: Cannot access 'x' before initialization
//     let  x= 50  
//    console.log(x)
//       console.log(x)
//   // result: //ReferenceError: Cannot access 'x' before initialization
// }
// app()

// function app() {
//     // TDZ starts here
//     let x;            // 👈 Hoisted (uninitialized)
//     x = 10;           // ❌ Error: Cannot access 'x' before initialization
//     x = 50;
//     console.log(x);
//   }


//let x;  // declaration only           
//let x = 5;  // declaration + initialization



//Notes==
//The period between hoisting and initialization is called the "Temporal Dead Zone (TDZ)".
// TDZ: Time between hoisting and initialization where variable exists but can't be accessed

//REASON---------------
// In the first code, x = 10 is an undeclared assignment, so JavaScript treats it as a global variable.
//  Later, let y = 50 is a separate, properly scoped variable, so there's no conflict — both work fine.

// But in the second code, I used let x = 50 after assigning x = 10. Because let variables are hoisted to the top of their scope in 
// what's called the "temporal dead zone", JavaScript reserves the name x at the top, 
// but doesn’t initialize it until the line let x = 50. So when I try to assign x = 10 before it's initialized, it throws a ReferenceError.




//QUESTION----
// // Timer question //144days|hours|min|sec
// given date :"December,31,2024"

//QUESTION----  make a input  that only accept number 
// if empty should show error---
// only accept number 
// there also increament button  to increase number


//Hoisting means:  variable declared with keyword not initialize the value into variable.
//

// var a = 10;
// function app(){
//    console.log(a)
//     var a = 20;
// }
// app();

// answer  reason =========== 
//  var a = 10;
// function app() {
//     var a; // This is hoisted
//     console.log(a); // 'a' is undefined here
//     a = 20; // This is the assignment
// }
// app()

//------------------------
// var y=2;
// function app(){
//     console.log(x)//undefined
//     console.log(y)//2
//     var x=10;  
// }
// app()



// closure----------

// function app(){
//     var x=10;
    
//     function foo(){
//         let y=3;
//         console.log(x)//10
//          console.log(y)//3
//     }
//     foo()
//        console.log(x)//10
    
// }
// app()

///------or-------------
// function outer() {
//     var name = "Sanju";
//     function inner() {
//         console.log(name);
//     }
//     return inner;//need to call with return Inner instead of return Inner()
// }

// var closureFunc = outer();
// closureFunc(); //Sanju


//second option-------------------
//  function OuterFn(){
//      var x = 10;
//      function Inner(){
//          let y=2;
//          console.log(y)//2
//              console.log(x)//10
//      }
//       return Inner(); need to call with return Inner() instead of return Inner
//  }
//  OuterFn()


//----------counter----
// function createCounter(){
//   let count = 0;//// Private variable
//   //case-1
//  return function (){ anonyouse function
//      count++; // // Maintained state
//      console.log(count)
//  }

// }
// const counter1 =  createCounter()
// counter1();//1
// counter1();//2
// counter1();//3
// counter1();//4




//--here how it works..
//--here createCounter() call only once to create private variable(count) and return anonymous function
//--counter1() ==  the anonymous inner function
//--You’re not calling createCounter() again — you’re calling the anonymous function that createCounter() returned.
//--This anonymous function:
//--Accesses count from the closure
//--Updates it (count++)
//--Logs it

//--Since count lives in the closure’s memory:
//--First counter() → count goes from 0 → 1
//--Second counter() → count goes from 1 → 2
//--And so on…

//----IMPORTANT NOTE:
// Why it’s always the same count?
// Closures don’t copy variables — they keep a reference to them.
// So all calls to counter() are reading and writing the exact same variable count in memory.



//------------------------  Closure example to prevent memory leak   -------------------------
// function createDelayedLogger() {
//   let timers = []; // closure reference
//   function start() {
//     for (let i = 0; i < 5; i++) {
//       const id = setTimeout(() => console.log(i), 2000);
//       timers.push(id);
//     }
//   }

//   function stop() {
//     timers.forEach(id => clearTimeout(id));
//     timers = []; // release → avoids leak
//   }

//   return { start, stop };
// }
// const logger = createDelayedLogger();
// logger.start();
//0
//1
//2
//3
//4
// logger.stop();//-- empty nothing


//-------If an empty / undefined element is found → 
// stop ALL future logs (even previously scheduled ones).


// let a = [0, 1, 2,4, 5, 6]; /// let a = [0, 1, 2,undefined,4, 5, 6];
// function delayTask(ms) {
//   let timers = [];

//   for (let i = 0; i < a.length; i++) {

//     // ❌  f element doesn't exist → stop everything
//     if (a[i] === undefined || a[i] === null) {
//       console.log("No element found. Stopping...");
//       // clear previously scheduled timers
//      timers.forEach(id => clearTimeout(id));
//       return; // exit the function
//     }
//   // schedule logging
//     const id = setTimeout(() => {
//       console.log(a[i]);
//     }, ms * (i + 1));
//       timers.push(id);
//   }
// }
// delayTask(500);

// 0
// 1
// 2
// 4
// 5
// 6




//QUESTION //IIFE:it is a function that runs immediately after its definition and it is enclosed() and executed right away, it used to prevent global scope pollution.

// function app(){
//    for(var i=0;  i<=3; i++){
//      (function(i){
//         setTimeout(()=>  console.log(i),1000)//0,1,2,3
     
//       })(i)
//    }
// }
// app()


// function app(){
//    for(var i=0;  i<3; i++){
//    for( i=0;  i<3; i++){
//         setTimeout(()=>  console.log(i),1000)//3,3,3
//    }
// }
// app()


// function app(){
//    for(let i=0;  i<3; i++){
//         setTimeout(()=>  console.log(i),1000)//0,1,2
//    }
// }
// app()




//Question------
//difference between var ,let ,const
 // let , var ,cost


//  function App1(){
//     var x 
//     var x = 10

//     var x=30
//     console.log(x)//30

//     let y = 10
//     y=20
//    console.log(y)//20


//    const z = 10
 
//   console.log(z)//10
    
//  }

//  App1()
//  30
// 20
// 10

//---1. var Example:

// function testVar() {
//     // Scope Example
//     if (true) {
//       var a = 10; // function-scoped       //// First assignment and declaration
//     }
//     console.log(a); // 10 - accessible because 'var' is function-scoped
  
//     // Assignment and Redeclaration
//     var a = 40; // allowed - 'var' can be reassigned and redeclared 
//     console.log(a); // 40 - reassigned value for 'var'
  
//     // Hoisting Example
//     console.log(b); // undefined - 'var' is hoisted but initialized as 'undefined'
//     var b = 50;
//     console.log(b); // 50
//   }
  
//   testVar();
  
//---2. let Example:

// function testLet() {
//     // Scope Example
//     if (true) {
//       let b = 20; // block-scoped
//       console.log(b); // 20 - accessible inside block
//     }
//     // console.log(b); // Error - 'let' is block-scoped, not accessible outside
  
//     // Assignment
//     let c = 30;
//     c = 40; // allowed - 'let' can be reassigned
//     console.log(c); // 40 - reassigned value
  
//     // Redeclaration
//     // let c = 50; // Error - 'let' cannot be redeclared in the same scope
  
//     // Hoisting Example
//     // console.log(d); // Error - 'let' is hoisted but in Temporal Dead Zone (TDZ)
//     let d = 60;
//     console.log(d); // 60
//   }
  
//   testLet();
  
////---3. const Example:

// function testConst() {
//     // Scope Example
//     if (true) {
//       const e = 30; // block-scoped
//       console.log(e); // 30 - accessible inside block
//     }
//     // console.log(e); // Error - 'const' is block-scoped, not accessible outside
  
//     // Assignment and Redeclaration
//     const f = 40;
//     // f = 50; // Error - 'const' cannot be reassigned
//     console.log(f); // 40
  
//     // Redeclaration
//     // const f = 60; // Error - 'const' cannot be redeclared
  
//     // Hoisting Example
//     // console.log(g); // Error - 'const' is hoisted but in Temporal Dead Zone (TDZ)
//     const g = 70;
//     console.log(g); // 70
//   }
  
//   testConst();
  
//NOTES-------------
///---- Temporal Dead Zone (TDZ)
// TDZ applies to variables declared with let and const.
// It prevents the variable from being used before it's initialized.
// If you try to use the variable in the TDZ, you'll get a ReferenceError.




///------------------COUNTER BUTTON---------

// import React, { useState } from "react";

// export default function App() {
//   const [counter, setCounter] = useState(0);

// working fine
  // const Increment = () => {
  //   setCounter(counter + 1);//ANS: final output incresed by only 1,2,3,4..so on
  // };

  // const Increment = () => {
  //   setCounter((prev) => prev + 1);//ANS: final output incresed by only 1,2,3,4..so on
  // };

//   // const Increment = () => {
//   //   setCounter(counter + 1);
//   //   setCounter(counter + 1);
//   // };
//   // ANSWER::1 final output incresed by only 1,2,3,4..so on

//   // const Increment = () => {
//   //   setCounter((prev) => prev + 1);
//   //   setCounter((prev) => prev + 1);
//   // };
//   //  // ANSWER::2 final output incresed by only 2,4,6...so on 

//   return (
//     <div>
//       {/* <button onClick={() => setCounter(counter + 1)}>+</button> one way of write */}

//       {/* <button onClick={Increment}>+</button>  second ways of writing */}




//       {/* <button onClick={setCounter(counter + 1)}>+</button> what is the reson: ×
// Error
// Too many re-renders. React limits the number of renders to prevent an infinite loop.
//       here */}




//       <button onClick={Increment}>+</button>

//       <p>code : {counter}</p>
//     </div>
//   );
// }

//QUESTIONS--------
// Difference between them============

// const increment = () => {
//   setCount(prev => prev + 1);
//   setCount(prev => prev + 1);
// };


// const increment = () => {
// setCount(count + 1);
// setCount(count + 1);
// };

///----How setState works in batching and updating

//=====ANSWER=======
// Syntax comparison:

// ❌ Regular form (may use stale state):setCount(count + 1);
//Here, count is taken from the current render — could be stale if updates are batched.

// ✅ Functional form (always fresh): setCount(prev => prev + 1)
//Here, you're passing a function. React calls it with the latest state, no matter how many updates are queued.



//  What does “batching” mean in React?
// Batching means React groups multiple state updates together and performs a single re-render instead of one for each update.

// 🔧 Why does React do batching?
// ✅ To improve performance
// ✅ To reduce unnecessary renders

//  Example without batching (hypothetical):

// setCount(1); // causes one render
// setName('Asha'); // causes another render
// 🔁 That would mean 2 renders — inefficient.


// 📦 Example with batching (how React actually works):

// setCount(1);
// setName('Asha');
// 🧠 React batches both updates, then renders once.


// ✅ Summary:
// Case	                              What happens	                               Why?
// setCount(count + 1) twice	          Increases by 1	                           Same value used both times
// setCount(prev => prev + 1) twice	  Increases by 2	                          Each call gets fresh state
// onClick={() => ...}	                  Works	                                      Function passed to be run on click
// onClick={...}	                      Runs immediately	                          Executes during render, not on click




///-----✅ Part 2: Button Click – Passing vs Calling Function

// //<button onClick={() => setCounter(counter + 1)}>+</button>
// Here, you're passing a function reference (onClick={() =>...}), so React runs it only when the user clicks.


{/* <button onClick={setCounter(counter + 1)}>+</button>
Here, you're immediately calling setCounter(counter + 1) during render.
It returns undefined, so it's like: */}
