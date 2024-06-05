// IMPORTANT QUESTIONS ABOUT JS
//1-  Is javascript interpreter or complile language?
//ANS:  its behaves like both interpreter and complile language after 
// that it comes like JIT compilation (just in time)
// JIT: combination of both  interpreter and complile.

//JAVASCRIPT RUNETIME ENVIORNMENT(JRE) : it is the space to execute JS code.   for example node behave as JRE
// 1-  it contains many things like JS engine (memory heap , call stack), web apis(like settimeout , console.log) , callback quece  , event loop and a lot of other things.
// 2- JS engine(google v8) (memory heap , call stack) : it is the piece of code takes an js code as an input

 // it have three stages : 
 //  a- parse : created AST(abstract tree)
 //  b-  JIT : interpreator( execute code one by one) & compiler(produce compress version of optimised code)
 // 3- Execution : finally js code execute with help of memory heap , call stack
 ////Garbage Collection: memory heap is memory storage  which assign memory to every function ,variable etc. 

 // difference b/w interpreator and compiler
 //ANS : interpreator : increases the speed of js engine
 // compiler :  produce the efficiency

 //NOTE
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
// Callback Queue (Task Queue)
// Microtask Queue (Job Queue)
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
// diff. b/w loop and enet queue.
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
//  what we use to avoid props drilling  ans: to use context api to avoid props drilling


// Interview  Asked Question

// Questions asked in interview
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
// Asked about the projects mentioned in resume

//EXTRA QUESTIONS
// diff b/w  SSR & CSR
// coreWebvitals
// what is the passed method // Json Stringfy
// Cookies & Session




// TIME OF INDIA INTERVIEWS-------------------------IMPORTANTS QUESTIONS----

//ROUND--1

// 1. explain the flow how browser run an application ? 
 //ANS::

// Sure, I can break down how a browser runs an application in simple terms.

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
  
// 1.   for(var i = 1 ; i<= 5; i++){
//        setTimeOut(function(){
//            console.log(i)
//        },1000 * i)
//      }
     
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
//Encrypt Data: Encrypt the sensitive information on the client side before sending it to the server.
//after that  he/she can decrypt it

// Tokenization: Replace sensitive information with unique tokens before sending. 
// The server can then map the tokens back to the original data.

// Authentication and Authorization: Ensure that only authenticated and authorized 
// users can send and access sensitive information.

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



