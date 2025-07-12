//Interview Exprience--------
//=====INTERVIEWER ASKED QUESTIONS=====================//
//js-- single thread --- by default synchronouse but suports asynchronouse
//Node-- single thread but we make multiple thread using worker thread --- be default asynchronouse


//=====INTERVIEWER ASKED QUESTIONS=====================//


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




//-----------

// const obj = {
//   num: 100,

//   regular: function () {
//     return this.num;
//   },

//   arrow: () => {
//     return this.num;
//   }
// };

// console.log(obj.regular()); // ✅ 100
// console.log(obj.arrow());   // ❌ undefined



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




// ✅ 3. Reference Sharing in Arrays

// let a = [1, 2, 3];
// let b = a;
// a.push(4);
// console.log(a); // [1, 2, 3, 4]
// console.log(b); // [1, 2, 3, 4] → b references same array as a
// They point to the same memory.



//=====INTERVIEWER ASKED QUESTIONS=====================//

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

// let x = 5;
// let y = ++x;//This is a pre-increment operation. It means:
// //x is incremented first → x becomes 6
// console.log(y);//6
// console.log(x)//6


// let x = 5;
// let y = x++;//x++ returns the original value of x (then increments),
// // console.log(y);//5
// // console.log(x)//6


//  or-- both are same
// let x = 5;
// let y = x + x;
// console.log(y); // 6
// console.log(x); // 6

// 🔹 x++ → Post-increment  =>x++ returns the original value of x (then increments),
// 🔹 ++x → Pre-increment  =>++x increments x first, then returns the new value.


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

////QUESTION---

// I used with let  // this asked INTERVIEWER interview // what you get if you use let instead of var
//  function app(){
   
//      x=10;
//      let x= 10  //ReferenceError: Cannot access 'x' before initialization
//      console.log(x)
   
//  }
//  app()


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
// function app(){

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

//   // working fine
//   // const Increment = () => {
//   //   setCounter(counter + 1);
//   // };

//   // const Increment = () => {
//   //   setCounter(counter + 1);
//   //   setCounter(counter + 1);
//   // };
//   // ANSWER::1 final output incresed by only 1

//   // const Increment = () => {
//   //   setCounter((prev) => prev + 1);
//   //   setCounter((prev) => prev + 1);
//   // };
//   //  // ANSWER::2 final output incresed by only 2

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
