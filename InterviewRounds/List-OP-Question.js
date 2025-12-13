//Interview Exprience--------
//=====INTERVIEWER ASKED QUESTIONS=====================//
//js-- single thread --- by default synchronouse but suports asynchronouse
//Node-- single thread but we make multiple thread using worker thread --- be default asynchronouse


// Output-Based Questions (JS Execution Order)
// Q: What is the output of

// console.log(2);
// setTimeout(() => console.log(3));
// Promise.resolve(4).then((val) => console.log(val));
// console.log(5);

//AANSWERE
// 2
// 5
// 4
// 3

//Question---

// let vs var in Block Scoping
// Test 1:

// let a = 1;
// {
//   let a = 2;
//   console.log(a); // 2
// }
// console.log("af", a); // "af" 1
// Block-scoped let; inner a is isolated.

// Test 2:

// let a = 1;
// {
//   var a = 2;
//   console.log(a); // 2
// }
// console.log("af", a); // "af" 2
//    ^

//SyntaxError: Identifier 'a' has already been declared

// var is function/global-scoped; redeclares a outside block, so both logs are 2.

// Reason: let == block scope, var == function/global scope; redeclaring with var affects parent/context.


//-------
// let a = 1;
// var b --hoisted
// {
//   var b = 2;
//   console.log(b); // 2
// }
// console.log("af", a); // "af" 2
//   console.log(b);//2



//---- QUESTION -----
// var a = 30;
// {
//     let a = 10;
//    console.log("Try ", a); //10
// }
// console.log("Try programiz.pro", a);//30

// Try  10
// Try programiz.pro 30



//Question--

// function foo() {
// 	console.log(this.a);
// }

// var obj = { 
// a: 2, 
// foo: foo
// }

// var bar = obj.foo;
// var a = "3";

// bar(); // logs '3' //without strict mode but in strict mode getting undefined



//Question--
//there are the  two function calls one is for increment and another one is for  just printing that value

// counter = 0 //
 
// console.log(counter)
// counter++ // error counter var nor def
 
// incCounter() //  1 ++
 
// printCunter() // ==> 1
 
// incCounter() //2 

//how to solve this?

// let counter = 0;
// function incCounter() {
//     counter++;
// }

// function printCounter() {
//     console.log(counter);
// }
// incCounter(); // 1
// printCounter(); // 1
// incCounter(); // 2



//Question --Write simple promise function

// function demoPromise() {
//   return new Promise((resolve, reject) => {
//     console.log("Promise is pending...");
// //const success = true;//fulfilled
// const success = false;//rejected
//     setTimeout(() => {
//       if (success) {
//         resolve("Promise fulfilled!");
//       } else {
//         reject("Promise rejected!");
//       }
//     }, 2000);
//   });
// }

// // Usage for fulfilled:
// demoPromise()
//   .then(result => console.log(result))   // Logs: Promise fulfilled!
//   .catch(error => console.error(error));




//----QUESTION---

// const a = {};
// const b = {key: 'b'};
// const c = {key :'c'};
// a[b] = 123;
// a[c] = 456;
// console.log(a[c]) //456
// console.log(a[b]) //456

// const a = {};
// const b = {key: 'b'};
// const c = {key :'c'};
// a[b] = 123;
// a[c] = 456;
// console.log(a[c]) //456
// console.log(a[b]) //456


// Dot vs bracket
// a.b → key is literally "b".
// a["b"] and a[b] (if b === "b") are the same.



// Step 2: What happens with a[b] = 123;
// You are using bracket notation: a[b].
// But b is an object ({ key: 'b' }).

// ⚠️ Plain JavaScript objects ({}) cannot use another object directly as a key.
// So, JavaScript automatically converts it into a string.

// 👉 Conversion rule:
// Objects are converted with .toString(), unless they have Symbol.toPrimitive or valueOf.
// For plain objects, b.toString() → "[object Object]"

// --EXAMPLE
// const b = { key: 'b' };
// const c = { key: 'c' };

// console.log(b.toString()); // "[object Object]"
// console.log(c.toString()); // "[object Object]"
// Both objects → same string.

// a[b] = 123; // becomes a["[object Object]"] = 123
// a[c] = 456; // becomes a["[object Object]"] = 456 (overwrites!)



// Why "[object Object]" specifically?
// This comes from Object.prototype.toString implementation.
// By spec, its output format is:[object <Type>]


// --example
// For plain objects, <Type> = "Object".

// For arrays, it would be "[object Array]".

// For dates: "[object Date]".


// Step 3: What happens with a[c] = 456;
// Again, c is an object ({ key: 'c' }).
// JavaScript converts it the same way: c.toString() → "[object Object]".
// So:

// a["[object Object]"] = 456;

// ⚡ This overwrites the previous value (123), because the key string is the same.

// Now a looks like:

// { "[object Object]": 456 }





// const a = {};
// const b = {key: 'b'};
// const c = {key :'c'};
// a[b] = 123;
// a[c] = 456;
// console.log(a)//{ '[object Object]': 456 }
// console.log(b)//{ key: 'b' }
// console.log(c)//{ key: 'c' }
// console.log(b.toString())//[object Object]
// console.log(a[c]) //456
// console.log(a[b]) //456





//=====INTERVIEWER ASKED QUESTIONS=====================//


//----THIS CONCEPT----------
// 🔹 1. Understanding this First:
// The behavior of this depends on how a function is called,
//  not how it is declared. It’s also influenced by execution context: global, function, object method, arrow functions, and classes.

// What is this in JavaScript?
// this is a special keyword in JavaScript.
// Its value is determined at runtime (when the code runs, not when you write it).
//It usually refers to the object that is executing the current function. 
// Its value depends on how the function is called, not where it is defined.


// default value of this is window
// how do you update this value -- using  call(), apply(), bind()


//Q: Does the this keyword ever care about var, let, or const?
//answer: No, this is not affected by the keyword used (var, let, or const) to declare a variable. 
//It depends on how the function is invoked, not how variables are declared.



/////////----------------------------///////

// 📌 How this works in different cases

// In Global Scope (non–strict mode)

// console.log(this); 
// // In browser → window
// // In Node.js → {}


// Inside a function (non–strict mode)

// function show(){
//   console.log(this);
// }
// show(); // In browser → window


// Inside a function (strict mode)

// "use strict";
// function show(){
//   console.log(this);
// }
// show(); // undefined


// Inside an object method

// const user = {
//   name: "Sanju",
//   greet: function() {
//     console.log(this.name);
//   }
// };
// user.greet(); // "Sanju"


// Here, this refers to the object (user).

// Inside a class

// class Person {
//   constructor(name){
//     this.name = name;
//   }
//   greet(){
//     console.log("Hello, " + this.name);
//   }
// }
// const p = new Person("Sanju");
// p.greet(); // "Hello, Sanju"


// Arrow functions
// Arrow functions don’t have their own this.
// They take this from the surrounding (lexical) scope.

// const user = {
//   name: "Sanju",
//   greet: () => {
//     console.log(this.name);
//   }
// };
// user.greet(); // undefined (because arrow takes `this` from outside object → global)

// 📌 Special cases with this

// Event handlers in DOM

// document.querySelector("button").addEventListener("click", function(){
//   console.log(this); // the button element
// });


// Using bind, call, apply

// function greet(){
//   console.log("Hello " + this.name);
// }
// const person = { name: "Sanju" };

// greet.call(person);   // Hello Sanju
// greet.apply(person);  // Hello Sanju
// const boundFn = greet.bind(person);
// boundFn();            // Hello Sanju


//----diffrent way----

// function greet(){
//   console.log("Hello " + this.name);
// }
//const person = { name: "Sanju" };
//person.method = greet
//console.log(person.method()) Hello Sanju


// ✅ Interview-style

// const person = {
//   name: 'Alice',
//   greet: function () {
//     console.log(this.name);
//   },
//   greetFullName: () => {
//     console.log(this.name); // Will be undefined because arrow functions don't bind `this`
//   }
// };

// const { greet, greetFullName } = person;

// greet();              // undefined (loses context)
// greetFullName();      // undefined (arrow function doesn't bind this)

// person.greet();       // Alice (correct context)
// person.greetFullName(); // undefined (arrow function again)



//questions---

//  var  a = 10;
//  function OuterFun(a){
//      function Inner(){
//          var b=20;
//          console.log(a+b)//30//Reason:because a is primitive datatype here and already used now we can't mutates
//      }
//      return Inner;
//  }
//  var varFn = OuterFun(a)
//   a = 30;
//   varFn();


//  var  a = {values:{c:10}};
//  function OuterFun(a){
//      function Inner(){
//          var b=20;
//          console.log(a.values.c+b)//50//Reason:because a is non primitive(reference type) datatype here and already used now we can mutates because it still point the same memory
//      }
//    return Inner;
//  }
//  var varFn = OuterFun(a)
//   a.values.c = 30;
//   varFn();//50



// //-----------------------------///////


// const obj = {
//   name: 'sanju',

//   regular: function () {
//     return this.name;
//   },

//   arrorwFn: function () { //or// arrorwFn (){
//     return {
//       arrow: () => {
//         return this.name;
//       }
//     };
//   },

//   arrow: () => {
//     return this.name;
//   }
// };
// ✅ obj.regular()
// Regular function binds this to the calling object, so this.name refers to obj.name.

// ✅ obj.arrorwFn().arrow()
// Arrow function inherits this from its enclosing regular function, which is called by obj, so this.name is obj.name.

// ❌ obj.arrow()
// Arrow function doesn’t have its own this and inherits it from the global scope, not obj, so this.name is undefined.




// //SUMMERY----------------------------------------
// So to summarize:

// Regular functions get this from how they're called — in this case, obj.regular() binds this to obj.

// Arrow functions get this from where they are defined — 
// and since arrow was defined directly inside the object 
// (but not using a regular function), it inherits this from the outer lexical scope (which is not obj), so this.num is undefined.


//-----------

// const obj = {
//   num: 100,

//   regular: function () {
//     return this.num;
//   },

//   arrow: () => {//In this case, the surrounding scope is the global context, not the obj. sothat 's why this.num inside the arrow function doesn’t point to obj.num, but instead to undefined (or window.num in browsers.)
//     return this.num;
//   }
// };

// console.log(obj.regular()); // ✅ 100
// console.log(obj.arrow());   // ❌ undefined/window.num


//---------CORRECT VERSION--------------

// const obj={
//     name:'sanju',
//     regular: function (){
//       return this.name
//     },
//      arrorwFn : function() {
//          return {
//        arrow: () => {
//       return this.name
//     }  
//  }
//   }
    
// }
// console.log(obj.regular())//sanju// here we can say regular function called as an object method in javascript.
// console.log(obj.arrorwFn().arrow())//sanju



//NOTE----

////arrorwFn is a regular function, so when called like obj.arrorwFn(),  returns an object

// {
//   arrow: () => { return this.name; }
// }
// this inside arrorwFn refers to obj.
// So, this inside the arrow function is same as this inside arrorwFn, which is obj.



/////---REASON----------------------
// This is a regular function.

// When called as obj.regular(), the value of this is bound to the object obj.

// So this.num becomes obj.num → 100.

// ✅ Output: 100



// This is an arrow function, and arrow functions do not have their own this.

// Instead, they capture this from the surrounding (lexical) scope where the function was defined.

// Here, this is not bound to obj, but to the outer scope (likely window or undefined in strict mode).

// So this.num → undefined.

// ❌ Output: undefined


//-------Experiments------------


// const obj = {
//   num: 100,

//   regular: function () {
//     return this.num;
//   }
// };

// // Create a separate lexical scope where `this` refers to `obj`
// const objArrow = {
//   arrow: () => {
//     return obj.num;  // explicitly use `obj` since `this` won't point to obj
//   }
// };

// console.log(obj.regular());       // ✅ 100
// console.log(objArrow.arrow());   // ✅ 100



//-----✅ Alternate (Using Lexical this Correctly):

// const obj = {
//   num: 100,
  
//   getArrow() {
//     return () => this.num; // arrow inherits `this` from getArrow()
//   }
// };

// const arrowFn = obj.getArrow();
// console.log(arrowFn()); // ✅ 100

 

//-----

// Quick Summary

//Primitive types are passed by value-----// Pass by Value → Function gets a copy → Original value unchanged (primitives).
///Non-Primitive types are passed by Reference------ // Pass by Reference → Function gets a reference → Original value changed (objects/arrays).

// 💡 In JavaScript, strictly speaking:
// Primitives (Number, String, Boolean, Null, Undefined, Symbol, BigInt) → passed by value.
// Objects (Objects, Arrays, Functions) → reference to the object is passed (so changes reflect).


// 🔹 Pass by Value

// When a variable is passed by value, a copy of the actual data is sent to the function.
// ➡️ Changes made inside the function do not affect the original variable.


//--EXAMPLE--------------
// function passByValue(a){
//     a=8;
//     console.log("inside",a)//8
// }

// let num = 10;
// passByValue(num)
//   console.log("outside",num)//10


// 🔹 Pass by Reference

////--EXAMPLE--------------
// When a variable is passed by reference, the function gets a reference (address) to the actual data.
// ➡️ Changes made inside the function directly affect the original variable.

// function passByReference(obj) {
//   obj.name = "Updated"; // modifies the original object
//   console.log("Inside function:", obj.name);//Updated
// }

// let user = { name: "Sanju" };
// passByReference(user);

// console.log("Outside function:", user.name);//Updated


//==============
// function safeUpdate(obj) {
//   let copy = { ...obj }; // clone the object
//   copy.name = "Updated";
//   console.log("Inside:", copy.name); // Updated
// }

// let user = { name: "Sanju" };
// safeUpdate(user);
// console.log("Outside:", user.name); // still "Sanju"




// ✅ 3. Reference Sharing in Arrays

// let a = [1, 2, 3];
// let b = a;
// a.push(4);
// console.log(a); // [1, 2, 3, 4]
// console.log(b); // [1, 2, 3, 4] → b references same array as a
// They point to the same memory.


//====OR==
// let a = [1, 2, 3];
// let b = a;
// b.push(4);
// console.log(a); // [1, 2, 3, 4]
// console.log(b); // [1, 2, 3, 4]


//----------
// let a = [1, 2, 3];
// let b = [...a]; // or Array.from(a), or a.slice()
// a.push(4);
// console.log(a)//[ 1, 2, 3, 4 ]
// console.log(b)//[ 1, 2, 3 ]


//------NOTES-------------
// let a = [1, 2, 3];

// a is a reference to a memory location where the array [1, 2, 3] is stored.

// let b = a;

// Now, b doesn’t create a new copy of the array.

// Instead, b just points to the same memory location as a.

// a.push(4);

// Since both a and b point to the same array in memory, modifying the array through a also affects what b sees.

    
//----------IMPORTANT NOTES -----------------
//  In short:
// Arrays (and objects) are reference types in JavaScript.

// When you assign them to a new variable (let b = a), you're copying the reference, not the actual data.

// So any changes made via one reference (a.push(4)) will be visible to the other (b).



//---QUESTION----
// let a1 = a2 = [1, 2, 3];
// a1.length = 2;
// console.log(a1);//[1,2]
// console.log(a2);//[1,2]

// let b = [2,3,4]
// let c =b
// b.push(5)
// console.log(b);//[2,3,4,5]
// console.log(c);//[2,3,4,5]


// let d = [2,3,4,9]
// let e =[...d]
// d.push(5)
// console.log(d);//[2,3,4,9,5]
// console.log(e);//[2,3,4,9]

// let a = b = [1, 2];
// b.push(3);
// console.log(a);//[1, 2,3]
// console.log(b);//[1, 2,3]




///----------IMPORTANT---
// const a=[9,8,7]
// const b = [a]
// const c =[...a]
// b.push(5)
// c.push(3)
// console.log("Try programiz.pro",a); //[ 9, 8, 7 ]
// console.log("Try ",b); //[ [ 9, 8, 7 ], 5 ]
// console.log("programiz.",c); //[ 9, 8, 7, 3 ]



//=====INTERVIEWER ASKED QUESTIONS=====================//

// function test() {
//   var a = 1;
//   let b = 2;
//   const c = 3;

//   console.log(this.a); // ❌ undefined
//   console.log(this.b); // ❌ undefined
//   console.log(this.c); // ❌ undefined
// }

// test();
// ✅  this does not refer to local variables, no matter how they are declared.



//QUESTION--- With var, let, and const in Global Scope:

// var x = 10;
// let y = 20;
// const z = 30;

// console.log(window.x); // ✅ 10 (attached to global `window`)
// console.log(window.y); // ❌ undefined
// console.log(window.z); // ❌ undefined
// ✅ Explanation:

// var is function-scoped and attached to the global object (window in browser).

// let and const are block-scoped and are not added to the global object.


// {
//   var innerVar = 'a';
//   let innerLet = 'b';
//   const innerConst = 'c';
// }
// console.log(innerVar);     // 'a' (because var is function-scoped)
// console.log(innerLet);     // ❌ ReferenceError
// console.log(innerConst);   // ❌ ReferenceError



//QUESTION---
//  console.log("what is the name" , name)
//  var name;
//   console.log("what is the name" , name)
//   name="sanju"
//   console.log("what is the name" , name)
   
   
//   what is the name undefined
// what is the name undefined
// what is the name sanju

//QUESTION---

// const str = "Sanju";
// const mystery = [...str]
// console.log(mystery);//[ 'S', 'a', 'n', 'j', 'u' ]


// const str = "Sanju";
// const mystery = {...str}
// console.log(mystery)//{ '0': 'S', '1': 'a', '2': 'n', '3': 'j', '4': 'u' }


// function App(obj){
//     const array = [];
//     for(let key in obj){
//      array.push(obj[key])
//     //console.log(array)
// }
// return array;
// }

// const obj = { '0': 'S', '1': 'a', '2': 'n', '3': 'j', '4': 'u' }
// const mystery = App(obj)
// console.log(mystery)//[ 'S', 'a', 'n', 'j', 'u' ]


// const arr =[23,4,55,6]
// const myarr = [...arr]
// console.log(myarr)//[ 23, 4, 55, 6 ]


// const array = [9,8,7,6,3,5,4]
// const myobj = {...array}
// console.log(myobj)//{ '0': 9, '1': 8, '2': 7, '3': 6, '4': 3, '5': 5, '6': 4 }


//QUESTION---

// console.log(a);
// //  var a = 10;/undefined

//QUESTION---

// console.log(a);
//  let a = 10;//ReferenceError: Cannot access 'a' before initialization


//QUESTION---

//    // count++ logs the old value then increments,
//   let x = 5
//   let y = x++//post
//   console.log(x)//6
//    console.log(y)//5
//   // x++ =>first take 5 , y received same value 5  after that increment 
  
 

// // ++count increments first and logs the new value.
//    let a = 5
//   let b = ++a //pre
//   console.log(a)//6
//    console.log(b)//6


// 🔹 x++ → Post-increment  =>x++ returns the original value of x (then increments),
// 🔹 ++x → Pre-increment  =>++x increments x first, then returns the new value.



//--
// console.log(typeof(NaN));
//answer : number


//Destructuring Error Example
// const example = ({ a, b, c }) => {
//   console.log(a, b, c);
// };
// example(0, 1, 2);
////answer undefined
//TypeError: Cannot destructure property 'a' of 'undefined' as it is undefined.


//reason :What happens internally?
//Your function expects one argument, and that argument must be an object:
// Only the first argument (0) is passed to the function.
// The other values 1 and 2 are ignored.

// Inside the function, JavaScript tries to do:
// const { a, b, c } = 0;


// But 0 is not an object, so destructuring fails.
// Therefore it throws:



// ANOTHER WAYS--
// const example = ({ a, b, c }) => {
//   console.log(a, b, c);
// };
// example({ a: 0, b: 1, c: 2 }); // Output: 0 1 2



//----
//Difference Between slice() and splice()

// a = [1, 2, 3, 4, 5];
// console.log(a.slice(2, 4)); // [3, 4]
// console.log(a);//[1, 2, 3, 4, 5]

//slice() does not modify the original array.
//It returns a shallow copy between given indexes.


// a = [1, 2, 3, 4, 5];
// console.log(a.splice(2, 4)); // [3, 4, 5]
// console.log(a);//[1, 2]


// 👉 splice(start, deleteCount) mutates the original array.
// It removes elements starting from index 2, removing 4 elements (or until array ends).


///----
// function createCounter(){
//   let count = 0;
//   //case-1
//  return function (){ anonyouse function
//      count++;/++count  /// got same answer
//      console.log(count)
//  }

// }
// const counter1 =  createCounter()
// counter1();//1
// counter1();//2
// counter1();//3
// counter1();//4



//--------------SAMSUNG INTERVIEW--------------


//---   BEHAVIOUR OF useState-----

// const [count, setCount] = useState(0);

// const handlerCount = () => {
//   setCount(count + 1);
//   setCount(count + 1);
//   setCount(count + 1);
// };
// // Final count = 1 (React batches updates, takes last state = 0+1)//--regular

// const handlerCount = () => {
//   setCount(prev => prev + 1);
//   setCount(prev => prev + 1);
//   setCount(prev => prev + 1);
// };
// // Final count = 3 (uses latest state each time)//--functional 



///-----------------
// With setInterval:

// const handlerCount = () => {
//   setInterval(() => {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//   }, 1000);
// };
// // Final count = always +1 (stale closure: `count` doesn’t update inside interval)


// 👉 Fix: use prev form inside interval.

//✅ Correct version (if you want it to increment properly):

// setInterval(() => {
//   setCount(prev => prev + 1);
//   setCount(prev => prev + 1);
//   setCount(prev => prev + 1);
// }, 1000);
// Now every tick increases by 3 (1+1+1).


//------------

// const [count, setCount] = useState(0);

// const handlerCount = () => {
//   setCount(count + 1);
//   setCount(count + 1);
//   setCount(prev => prev + 1);
// };
// 🔎 Step by step when count = 0 initially:

// setCount(count + 1) → setCount(1)

// setCount(count + 1) → again setCount(1) (still using old render value 0)

// setCount(prev => prev + 1) → takes the latest state (1) and increments → 2

// ✅ Final value of count = 2


//--------------------------
//--NOTES=== always remember * sign always has higher order so always start calculating with where * start wheather left and right
//return a + b * c; //10 
//return a * b + c; //14

// function CurringFun(a) {
//   return function(b) {
//     return function(c) {
//       return a + b * c; //10 works directly here
//-------return a * b + c; //14
//     }
//   }
// }

// console.log(CurringFun(4)(3)(2)); // 10
//Structure: 3 levels of functions → returns a value directly (not another function).

// Evaluation:

// CurringFun(4) → returns function(b){...}
// (3) → returns function(c){ return 4 + 3* c }
// (2) → executes immediately → 4 + 3*2 = 10
// No extra () at the end needed, because it already returns a value.



///----------------

// function fun(a) {
//   return function(b) {
//     return function(c) {
//       return function() {
//         return a + b + c;
//       };
//     };
//   };
// }

// console.log(fun(2)(3)(4)()); // 9
//Structure: 4 levels of functions → the last one still returns a function, not a value.

// valuation:
// fun(2) → returns function waiting for b
// (3) → returns function waiting for c
// (4) → returns another function, which when called () finally gives the value
// You must call with extra () at the end to get the result.


// In interviews, you can say:

// First one: direct currying, returns the result immediately.

// Second one: higher-order currying, defers execution until explicitly invoked — 
// useful when you want to delay evaluation or add extra logic at the end 
// (like logging, caching, or chaining).



//OUTPUT BASED QUESTION -------


// useEffect(() => {
//   console.log('hello');
//   setC(c + 1);
//   setC(c + 1);
//   setC(c + 1);
// });
//final value:1


//const [count,setCount] = (0)
// console.log(count);

//   useEffect(() => {
//     setCount(count + 1); // 0 + 1 = 1
//     setCount(count + 1); // 0 + 1 = 1
//     setCount((prev) => prev + 1); // last one uses updated value (1 + 1 = 2)
//   }, []);
//final value:2


//const [count,setCount] = (0)
// useEffect(() => {
//   setC(c + 1);
//   setC(c + 1);//2
//   setC(count + 1);//0+1
// });