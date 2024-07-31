// Webpack and Babel :
//are tools for developers that optimize JavaScript applications. 
// Webpack is a module bundler(it used ti bundler images,script,assest)we can use to minify multiple files in
//  a JavaScript project and increase the overall efficiency.

// Babel is a JavaScript compiler
// Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of
//  JavaScript in current and older browsers or environments.
//example like polyfill & Transpilers.

//how to make our modern code work on older engines that don’t understand recent features yet?
// There are two tools for that:

// Transpilers.
// Polyfills.  why we use it? : because it provide us to update/add new feature and browser compatibility.

//Transpilers   
// JavaScript before year 2020 didn’t have the “nullish coalescing operator” ??.
// A transpiler is a special piece of software that translates source code to another source code. 
// It can parse (“read and understand”) modern code and rewrite it 

// // before running the transpiler
// height = height ?? 100;

// // after running the transpiler
// height = (height !== undefined && height !== null) ? height : 100;

// Polyfills
// We just need to declare the missing function. A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations.
// there are polyfill.io library is available to provide us polyfill-sets you want to have in your bundle.
// <script src="https://polyfill.io/v3/polyfill.min.js"></script>

//example
// ES6
// Array.prototype.values
// Array.prototype.keys
// Array.from
// Math.trunc
// Object.assign
// ES7
// Array.prototype.includes
// String.prototype.startsWith

//EXAMPLE-1
// if (!Array.prototype.includes) {
//     Array.prototype.includes = function(valueToFind, fromIndex) {
//       // Default fromIndex to 0 if not provided
//       if (fromIndex === undefined) {
//         fromIndex = 0;
//       }
  
//       // Handle negative fromIndex
//       if (fromIndex < 0) {
//         fromIndex = Math.max(this.length + fromIndex, 0);
//       }
  
//       // Iterate over the array using a loop
//       for (var i = fromIndex; i < this.length; i++) {
//         // Check if the current element is equal to valueToFind
//         if (this[i] === valueToFind || (isNaN(this[i]) && isNaN(valueToFind))) {
//           return true;
//         }
//       }
//       return false;
//     };
//   }
  
//   // Example usage
//   var arr = [1, 2, 3, 4, 6, 8, 7, 9];
//   console.log(arr.includes(3)); // Output: true
//   console.log(arr.includes(5)); // Output: false
//   console.log(arr.includes(7, -3)); // Output: true (search starts from index 6)
//   console.log(arr.includes(NaN)); // Output: false (unless there's a NaN in the array)
  
//EXAMPLE-2
// if (!Array.prototype.odd) {
//     Array.prototype.odd = function() {
//       var result = [];
//       for (var i = 0; i < this.length; i++) {
//         if (this[i] % 2 === 1) {
//           result.push(this[i]);
//         }
//       }
//       return result;
//     };
//   }
  
//   var arr = [1, 2, 3, 4, 6, 8, 7, 9];
//   var oddNumbers = arr.odd();
//   console.log(oddNumbers); // Output: [1, 3, 7, 9]

 //------INTERVIEW QUESTIONS RELATED TO POLYFILL---

// 1-What is a polyfill in JavaScript?
// A polyfill is a piece of code (usually JavaScript) used to provide modern functionality on older
//  browsers that do not natively support it.

// 2-Why would you use a polyfill?
// To ensure compatibility with older browsers that may not support newer JavaScript features or APIs, thereby 
// providing a consistent experience across different environments.

// 3-How do you determine if a feature needs a polyfill?
// By checking if the feature or method exists on the object or prototype. If it doesn't,
//  a polyfill can be implemented. This can be done using feature detection,
//  for example: if (!Array.prototype.includes) { /* polyfill code */ }.

// 4-How do you write a polyfill for Array.prototype.includes?
//KINDLY REFER TO EXAMPLE NO 1

// 5-What are some common features that developers polyfill?
// Methods such as Array.prototype.includes, Array.prototype.find, Object.assign, Promise, fetch, and others 
// that are not supported in older browsers.

// 6-What is feature detection and how is it related to polyfills?
// Feature detection is the practice of checking if a particular feature or API is available
//  in the current environment before using it. If the feature is not available, a polyfill can be used to 
//  provide the missing functionality. It is an essential practice when implementing polyfills.

// 7-Can you explain the difference between a polyfill and a shim?
// A polyfill is a piece of code that provides the functionality that is missing in
//  older browsers. A shim, on the other hand, can sometimes be broader, patching or modifying existing code to 
// fix or extend functionality, not necessarily just adding missing features.

// 8-What are some best practices when writing polyfills?
// 1-Ensure that the polyfill does not overwrite existing functionality.
// 2-Use feature detection to check if the feature needs to be polyfilled.
// 3-Follow the specification as closely as possible to ensure the polyfill behaves like the native implementation.
// 4-Avoid using polyfills for features that are not widely supported in modern environments to minimize performance overhead.

// 9-How can you test if your polyfill works correctly?
//1- Write unit tests to cover different scenarios and edge cases.
// 2-Test in various browsers and environments, including those that do not support the feature natively.
// 3-Use tools like BrowserStack or Sauce Labs to test on actual devices and browsers.

// 10-How can you include polyfills in your project?
// You can include polyfills manually in your codebase, use a polyfill service like polyfill.io, or
// leverage tools like Babel that automatically 
// include necessary polyfills based on your target browser support.

//INTERSECTION OBSERVER APIS
//1- waht is the INTERSECTION OBSERVER APIS

// The Intersection Observer API is a web API that allows developers to asynchronously observe changes
// in the intersection of a target element with an ancestor element or with a top-level document's viewport. 
// It provides a way to efficiently detect when an observed element enters or exits the viewport or intersects with 
// another element, without the need for continuous polling or listening for scroll events.
// where it should use: lazy loading of images, infinite scrolling, triggering animations based on scroll position


//// Function to be called when the observed element intersects with the viewport
// function handleIntersection(entries, observer) {
//-----OR-------
// let callback = (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         console.log('Observed element is intersecting with the viewport!');
//         // Do something when the observed element is in view
//       } else {
//         console.log('Observed element is not intersecting with the viewport!');
//         // Do something when the observed element is out of view
//       }
//     });
//   }
  
// entries: here as an array which These entries contain details like whether the observed element is currently intersecting, the ratio of intersection,

// Creating an Intersection Observer instance
//   const options = {
//     root: null, // Use the viewport as the root // which element you set to use as  a viewport
//     rootMargin: '0px', // No margin around the root // whenever element set your root element will grow and shrink acc to that value.
//     threshold: 0.5 // 50% of the observed element is visible  // it indicates what %  of target visibility the callback function will executes.
//   };
  
//   const observer = new IntersectionObserver(handleIntersection, options);
//---OR----
//   const observer = new IntersectionObserver(callback, options);
  
//   // Targeting the element to observe
//   const target = document.getElementById('targetElement');
  
//   // Start observing the target element
//   observer.observe(target);
  


// CURRING----------Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c)
// currying is a functional programming technique that is used to transform a function that takes
// multiple arguments into a sequence of functions that each takes a single argument. Currying is
// mainly used in event handling and to avoid passing the same variable as a
// function argument multiple times.

//USE CASES OF CURRING------
//1--Currying can be used to handle asynchronous operations, in which functions return the promises.
//2--It is even helpful in handling situations where we need to partially apply functions with 
// specific arguments that can represent the current context of the event.
//3--It allows the creation of highly configurable middleware functions that can be used across different parts of the code.

// //----1
// // Non-curried function
// function add(a, b) {
//     return a + b;
//   }

//----2
//   // Curried version of the same function
//   function curriedAdd(a) {
//     return function(b) {
//       return a + b;
//     };
//   }

// function CurringFun(a){
//     return function(b){
//        return function(c){
//         return a+b*c   //  start working from left
//     } 
//     }
// }
// console.log(CurringFun(4)(3)(2))  //CurringFun(2)(3)(4)//10
  

//   // Usage
//   console.log(add(1, 2)); // 3
//   console.log(curriedAdd(1)(2)); // 3
  
//----3
/// Partial application
//   const addFive = curriedAdd(5);
//   console.log(addFive(10)); // 15
  


//QUESTION: How to achieve currying in JavaScript?
// There are two different ways 
//Using the closures function

// In this example, createMultiplier is a curried function.
//  The outer function takes the multiplier and returns an inner function that takes a number 
//  and multiplies it by the multiplier.
//  This allows the creation of specific multiplier functions like double and triple.

// Function to create a multiplier using closures
// function createMultiplier(multiplier) {
//     return function(number) {
//       return multiplier * number;
//     };
//   }
  
//   // Create specific multipliers
//   const double = createMultiplier(2);
//   const triple = createMultiplier(3);
  
//   // Usage
//   console.log(double(5)); // Output: 10
//   console.log(triple(5)); // Output: 15
  

// Using the bind() method
// In this example, multiply.bind(null) creates a new function curriedMultiply 
// that is a curried version of multiply.
 //The bind(null, 2)  call creates a new function where a is fixed to 2, effectively 
// creating a function that multiplies any given number by 2.
 //The bind(null, 3)  call creates a new function where a is fixed to 2, effectively 
// creating a function that multiplies any given number by 3.
//EXAMPLE
// Original function (non-curried)
// function multiply(a, b) {
//     return a * b;
//   }
  
//   // Curried function using bind()
//   const curriedMultiply = multiply.bind(null);
//   console.log(curriedMultiply)
//   // Usage
//   const multiplyBy2 = curriedMultiply.bind(null, 2);
//   console.log(multiplyBy2(5)); // 10
  
//   const multiplyBy3 = curriedMultiply.bind(null, 3);
//   console.log(multiplyBy3(5)); // 15

//EXAMPLE
// function add(a) {
//     return function(b) {
//       return a + b;
//     };
//   }
  
//  Using the curried function
//   const add5 = add(5);
//   console.log(add5(3)); // Outputs 8
//   console.log(add(2)(4)); // Outputs 6

//EXAMPLE 
// function app (a){
//     return function(b){
//         return function(c){
//         return a+b+c
//         }
//     }
// }
// console.log(app(2)(4)(6))//12  //Curried Function

// Original Function: A function f that takes multiple arguments, say f(x, y, z).
// Curried Function: This function is transformed into a series of functions, each taking one argument: f(x)(y)(z).


// IMPORTANT QUESTIONS ABOUT JS
//1- Is javascript interpreter or complile language?
//ANS:its behaves like both interpreter and complile language after 
// that it comes like JIT compilation (just in time)
// JIT: combination of both  interpreter and complile to optimize code execution speed..

//JAVASCRIPT RUNETIME ENVIORNMENT(JRE) : it is the space to execute JS code.   for example node behave as JRE
// 1-  it contains many things like JS engine (memory heap , call stack), web apis(like settimeout , console.log) , callback quece  , event loop and a lot of other things.
// 2- JS engine(google V8: translates JavaScript code directly into machine code* ) (memory heap , call stack) : it is the piece of code takes a js code as an input

 // it have three stages : 
 //  a- parse : created AST(abstract tree)
 //  b-  JIT => Just-In-Time compilation is a technique: interpreator( execute code one by one) & compiler(produce compress version of optimised code)
 // 3-c Execution : finally js code execute with help of memory heap , call stack
 //Garbage Collection: memory heap is memory storage  which assign memory to every function ,variable etc. 

 // difference b/w interpreator and compiler
 //ANS : interpreator : increases the speed of js engine
 // compiler :  produce the efficiency

 // SUMMARY OF HOW V8 ENGINE WORKS
//  TO USE V8 ENGINE WE REQUIRED JRE(JS RUNTIME ENVIRONMENT) :IT IS THE SPACE TO EXECUTE THE JS CODE
// V8 ENGINE :it is the piece of code takes a js code as an input ,BASICALLY  translates JavaScript code directly into machine code
// IT CONTAINS THREE STAGES:
// 1-PARSE THE CODE INTO ABSTRACT TREE
// 2- AFTER THAT EXECUTE THE CODE ONE BY ONE AND PRODUCE COMPRESS VERSION OF OPTIMISED CODE AT RUNTIME WITH THE HELP OF JIT 
// COMPILATION TECHNIQUE 
// 3- EXECUTE THE FINAL CODE

 //NOTE
//A JavaScript engine(v8 engine)is a software component that executes JavaScript code. 
//The V8 engine's architecture and its components like Ignition and TurboFan enable it to deliver high performance
//for both client-side applications in browsers and server-side applications in Node.js.
//Ignition :(Interpreter & Bytecode)
//TurboFan :(JIT Compiler) Optimized Machine Code            |

//Garbage Collection

// There are many parts of the JRE
// The components of the JavaScript runtime environment are:

// Heap memory:
// The heap is a region of memory used for storing objects and variables that require dynamic memory allocation. 
// Unlike the stack, memory allocation in the heap is more flexible and can grow or shrink as needed.

// Characteristics:
// Dynamic Allocation: Memory is allocated at runtime.
// Non-contiguous: Memory blocks can be scattered throughout.
// Garbage Collection: Unused memory is managed and freed by the garbage collector.

//An execution context 
//It is a container that holds information about the current execution of code, including 
//variables, the scope chain, and the value of this.
//Each execution context provides the necessary context for the JavaScript engine to execute code properly.

// Call Stack
// Event Loop(javascript 's browser)
// Callback Queue: macrotask (Task Queue) and Microtask Queue (Job Queue)
// Web APIs (or Node.js APIs)
// Event Loop Phases (Node.js specific)


//MAIN TOPIC EXPERIENCE
//REST
//REDUX (AN OBJECT IN STORE , THERE IS KEY IN SALARY 10K NOW UPDATE TO 12K)//TOOLKIT  REDUCER,ACTION
//CURRING

//STAGE-1
//PROJECT :
// Typical Interview Questions About Projects
//1- Can you describe a recent project you worked on? What was your role?
// Agenda: Assess overall project understanding, role clarity, and individual contribution.

//2- What were the main challenges you faced during this project and how did you overcome them?
// Agenda: Evaluate problem-solving skills and resilience.

//3- What technologies and tools did you use? Why did you choose them?
// Agenda: Gauge technical knowledge and decision-making process.

//4- How did you manage your time and resources during the project?
// Agenda: Understand project management skills and efficiency.

// Can you give an example of a significant contribution you made to the project?
// Agenda: Identify key individual contributions and impact.

//5- What was the outcome of the project? Were there any measurable results?
// Agenda: Assess the effectiveness and success of the project.

//6- How did you handle team conflicts or disagreements during the project?
// Agenda: Evaluate interpersonal and conflict resolution skills.

//7- What did you learn from this project, and how have you applied those lessons to future work?
// Agenda: Understand reflection and continuous improvement.

// 8-What did you learn from this project, and how have you applied those lessons to future work?
// Agenda: Understand reflection and continuous improvement.

//9-How do you approach debugging and troubleshooting a complex issue in your code?]]
//Purpose: To understand your problem-solving skills and methodologies for identifying and fixing bugs.


///STAGE-2
// what kind of questions should candidate ask to the interview  panels. 









// JS  INTERVIEW QUESTIONS
// diff. b/w virtual DOM and real DOM with example.senario a button
// diff. b/w const, let, var.
// diff. b/w fat arrow function and regular function.
// where we use fat arrow function?
// what is the context Api?
// what are the diffrent ways to share the data without
// not having relationship b/w components? (ans: context api and redux)
// what is the interceptors,why we should use it and where gonna apply it?
// can we use context api with vue?
// can you provide syntax of two way binding?
// how to compare two alphabates? (ans:by ascii values and local compare)
// can you explain about children component within tag?
// what is the hoisting?
// what are the closure, context,this,scope?
// diff. b/w map and forEach?
// diff. b/w event bubbling and capturing?
// explain reduce method.
// diff. b/w promises and callback,async and await?
// what is the callback hell?
// diff. b/w loop and event queue.
// diff. b/w spread oprator, rest oprator, destructring.
// how you swap two values without using any third variable and loop in js?

// // JS EXPERIANCE INTERVIEW QUESTIONS
// what are prototypes?
// how have can create private method in a function?
// what is the constructor?
// how you gonna add a new method in an object class?
// how you add a new key in an object with property keyword?
// what is the custom event and how to create it?
// what is deep and shallow copy?
// diff. b/w call, bind ,apply.
// diff. b/w splice and slice.
// diff. b/w map method and hap class.
// diff. b/w map and set class.
// what are the session storage and cookies?
// what is the debouncing?
// 4 methods of BOM cookies?

// NODE.JS INTERVIEW QUESTIONS
// Frameworks of node.js:
// 1-express
// 2-next.js
// diff. b/w require and import.
// what is the middleware?
// what is JWT?
// Diff. b/w encoding and encryption.
// what is cors? 
// why we use 'use' method in express?  ( ans:to add middleware)
// Authentication cycle?
// diff. b/w authentication and authorization.
// what are Google login and passpore API?
// Payment Gateway?
// what is web hooks?
// second higher salary(mongoDB)?
// pagination(skip and limit)?
// Aggregation methods in mongoDB?
// HOW you can remove a key from a collection?
// data integration  from MySql to Mongodb?
// Webscraping, crone jobs?

// React.JS INTERVIEW QUESTIONS
// diff. b/w function and class components?
// "" state b/w function and class component?
// class life cycle method?
// what is the redux context api?
// useRedux like custom hook
// diff. b/w useCallback and useMemo.
// what is the prop drilling?
// use of useRef hooks?
// what is forward Ref?
// how you gonna debug your component?
// HOC (higher order component)?
// Lazy loading and its benefits?
// Children  object in props?
// what do you mean by default props?
// what is the props types?
// what we use to avoid props drilling  ans: to use context api to avoid props drilling


// Interview  Asked Question

// Questions asked in interview
//.env file
// React working flow
// High order components
// Dom, virtual dom
// State lifestyle methods
// Functional components
// Usememo
// Redux
// Redux working flow
// Middleware
// Useeffect hook
// Difference between functional and class components
//horizonatal and vertical scaling
//curring,rest opreator, prototype,reucer in redux (update salary) 
//pre-Redndering
// Asked about the projects mentioned in resume

//EXTRA QUESTIONS
// diff  b/w SSR & CSR
// coreWebvitals
// what is the passed method // Json Stringfy
// Cookies & Session




// TIME OF INDIA INTERVIEWS-------------------------IMPORTANTS QUESTIONS----

//ROUND--1

// 1. explain the flow how browser run an application? 
//ANS:

// Sure,I can break down how a browser runs an application in simple terms.

// 1-User Input: It starts when you type a web address (URL) or click on a link.

//2- HTTP Request: The browser sends a request over the internet to the server where the website is hosted.This request asks for the website's files (like HTML, CSS, and JavaScript).

// 3-Receiving Files: The server responds by sending back these files to the browser.

// 4-HTML Parsing: The browser reads the HTML file first. HTML is like a blueprint that tells the browser what content to show (like text, images, and links).

// 5-Building the DOM Tree: Based on the HTML, the browser builds a Document Object Model (DOM) tree. This tree structure represents all the elements on the web page.

// 6-CSS Parsing and Rendering: The browser reads the CSS files to understand how elements should look (like colors, fonts, and layout). Then, it combines this with the DOM to create the render tree — which is how things will appear on the screen.

// 7-JavaScript Execution: If there's JavaScript code on the page, the browser runs it. JavaScript can add interactivity, animations, and dynamic content.

//8- Rendering the Page: Finally, the browser displays the web page on your screen based on the render tree. It continues to listen for any user interactions (like clicks or scrolls) that might require changes to the page.

// 9-Continued Interaction: As you interact with the page, the browser might need to fetch more files (like images or data) or execute additional JavaScript based on your actions.

// This process happens quickly and continuously while you browse the web, making websites interactive and responsive to your input.

 // 2. what is CSR and SSR?
// 3. How V8 engine works?
// 4. what are promises in js?
// 5. If we need to call multiple api in a single request then how we can do it ?
 //Ans:
// To call multiple APIs in a single request, you can use a technique called API chaining or batching.
//  This approach allows you to combine multiple API requests into a single HTTP request, 
// which can be more efficient in certain scenarios, especially when dealing with multiple independent data fetches. 

//Using API Chaining/Batching Techniques:

// 1-Custom Server-Side Logic/aggration:
// 2-API Gateway or Middleware:
// 3-Client-Side Aggregation:
// 4-Batch Processing with API Libraries:

//EXAMPLE
// const urls = [
//     'https://api.example.com/data1',
//     'https://api.example.com/data2',
//     'https://api.example.com/data3'
// ];

// const requests = urls.map(url => fetch(url));

// Promise.all(requests)
//     .then(responses => Promise.all(responses.map(r => r.json())))
//     .then(data => {
//         console.log('Data 1:', data[0]);
//         console.log('Data 2:', data[1]);
//         console.log('Data 3:', data[2]);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });


//SERVER SIDE

// const express = require('express');
// const axios = require('axios');

// const app = express();
// const PORT = 3000;

// app.get('/batch-api', async (req, res) => {
//   try {
//     const results = await Promise.all([
//       axios.get('https://api.example.com/endpoint1'),
//       axios.get('https://api.example.com/endpoint2'),
//       axios.get('https://api.example.com/endpoint3')
//     ]);

//     const responseData = results.map(response => response.data);
//     res.json(responseData);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



//Example with JavaScript (using Fetch API):
// 6. what is hoisting in js?
// 7. what is closure in js ?
// 8. what is callbacks ?
// 9. difference b/w promises and async await ?


// ###Scanrio based questions
// Pass by value or pass by refence doesn't apply at all here. You're not passing anything
//  to the enclosed timer function. You're just referencing i from the lexical environment. 
  
// 1.   for(var i = 1 ; i<= 5; i++){
//        setTimeout(function(){
//            console.log(i)//6,6,6,6,6,6
//        },1000 * i)
//      }

//with let
// for(let i = 0 ; i<= 5; i++){
//     setTimeout(function timer(){
//         console.log(i)//0,1,2,3,4,5
//     },1000 * i)
//  }
//------OR-----

// function app(){
//     for(var i = 0 ; i<= 5; i++){
//            setTimeout(function(){
//                console.log(i)//6,6,6,6,6,6
//            },1000 * i)
//         }
//     }
//    app()

//important case
//case-1
// for( let i = 1 ; i<= 5; i++){
     
//     setTimeout(function(){
//         console.log(i)//1,2,3,4,5
//     },1000 * i)
    
//  }
//--OR---
//let i;
// for( i = 1 ; i<= 5; i++){
     
//     setTimeout(function(){
//         console.log(i)//6,6,6,6,6
//     },1000 * i)
    
//  }
//case-2
//var i;
// for( i = 1 ; i<= 5; i++){
     
//     setTimeout(function(){
//         console.log(i)//6,6,6,6,6
//     },1000 * i)
    
//  }
     
//  #output  print five times 5
//  # why it print five times 5 and how to correct it 
//ANS
//In case of var you are always referring to the same variable address, because var is function scoped.
//let is block scoped. For every callback in setTimeout you have a different value of i, since it is a different block.
//that's why we prefer to use let over the var because of how confusing var hoisting can be!

// ### coding Questions using without using built in methods
// 1. const arr = [1,2,3,4,3,2,1,4,5,4,2,1]  find frequency of number 
//     desired output => {'1':3,'2':3,'3':2,'4':3,'5':1}

// 2. find prime numbers from 1 to 50 using single loop. 

 
//ROUND--2

// 1.   let topstories = ["news1", "news2", "news3", "news4", "news5", "news6",
//     "news7", "news8", "news9", "news10"];
//     let adList = [{
//       name: 'ad1',
//       index: 2
//     }, {
//       name: 'ad2',
//       index: 8
//     }];   
// })
    
// how will u insert the ad1,add2 in the given array on the give index position 
    
// 2.difference between GET and POST in details with use case

// 3.where we can store the user login data like local storage ,session storage,cookies (explain with use cases)
//ANSWER

// Encryption: Avoid storing sensitive information in local storage or session storage without encryption.
// Secure Cookies: Always set cookies with Secure, HttpOnly, and SameSite attributes for sensitive data.

// 4.how will u set the timeout when u fething api if it will take time then how will u set the time out 
// AbortController can be utilized to set up timeouts.
//  Instantiated abort controller has a signal property which represents
//   reference to its associated AbortSignal object. Abort signal object
//  is used as a signal parameter in the request with Fetch API,
//   so HTTP request is aborted when abort method is called.


/////======================
// const HTTP_TIMEOUT = 3000;
// const URL = 'https://www.google.com:81';

// (async () => {
//   const controller = new AbortController();
//   const timeoutId = setTimeout(() => controller.abort(), HTTP_TIMEOUT);

//   try {
//     const response = await fetch(URL, {
//       signal: controller.signal
//     }).then((res) => res.json());
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     clearTimeout(timeoutId);
//   }
// })();

// import { useState, useEffect } from 'react';

// function useFetch(url) {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//useEffect(() => {
// const abortController = new AbortController(); // to create new instance associated with signal , this signal used to cancel ongoing request
// const signal = abortController.signal;

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url , { signal });
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const responseData = await response.json();
//                 setData(responseData);
//             } catch (error) {
//                 if (error.name !== 'AbortError') {
//                  setError(error.message);
//              }
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//         // Cleanup function (optional)
//         return () => {
//            // Cleanup function to cancel the fetch request
// abortController.abort();
//         };
//     }, [url]); // Trigger useEffect when 'url' changes

//     return { data, loading, error };
// }

// export default useFetch;

// 5.all array method with use case like in slice we pass the 1 or 2 argument what if we pass the 3 argument?
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(1, 3,1);
// console.log(newArr); // [2, 3]
// it can accept does not change the expected result

// 6.how will u send the sensative information like aadhar ,pancard etc to the server ,
//ANSWER
// Use HTTPS: Ensure that the server uses HTTPS (HyperText Transfer Protocol Secure) 
// to encrypt the data transmitted between the client and server.

//Encrypt Data: Encrypt the sensitive information on the client side before sending it to the server.
//after that  he/she can decrypt it

//token-based authentication (e.g., JWT):to ensure that only authorized clients can send data to the server.
// Tokenization: Replace sensitive information with unique tokens before sending. 
// The server can then map the tokens back to the original data.

// Authentication and Authorization: Ensure that only authenticated and authorized 
// users can send and access sensitive information.

// . Use POST Method
// Always use the POST method for sending sensitive data, as GET parameters can be logged
//  in various places (such as browser history, server logs, etc.).

// 7.what are the project u have done and what are the challenges u faced

// 8.how will u dynamicaly get the object or how will u dynamical set the object
//ANSWER
// Dynamically Getting a Property
// const obj = {
//     name: "John",
//     age: 30,
//     job: "Developer"
// };

// const propertyName = "name";
// console.log(obj[propertyName]); // Output: John


// Dynamically setting a Property
// const obj = {
//     name: "John",
//     age: 30,
//     job: "Developer"
// };

// const propertyName = "age";
// obj[propertyName] = 31;
// console.log(obj.age); // Output: 31



// 9.how will u flat the nested object

// 10.how will u flat the nested array

// 11.how will u convert the first letter in upper case like mango=Mango,orange=Orange



// function app(){
    // for(let i = 0 ; i<= 5; i++){
    //        setTimeout(function timer(){
    //            console.log(i)
    //        },1000 * i)
    //     }
    // }
    // console.log(app())