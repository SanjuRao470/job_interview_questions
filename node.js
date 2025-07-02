//ALL IMPORTANT POINTS ARE NOTED================
//npm ,package.json,require,import,module.exports,local/core module,event driven architecture,CORS
//advantage/disadvantage of using node.js
//how do handle error handling
//middleware in express.js

//============ Important Topic =======



//NODEJS SETUP WITH TYPESCRIPT------
//1- npm install -g typescript
//2- tsc --version
//3- go to cmd :mkdir folder-name, cd folder-name ,code .
//4- npm init -y  appear package.json
//5- npm install express //npm i express  appear pakage.lock.json,node-module
//6- npm install --save-dev typescript  @types/node @types/express
//7- npx tsc --init    this is the configure we to to complie typescript that is tsConfig.json

//IMPORTANT--------
//to complie: npx tsc appear build inside it app.js
// TO RUN : node build/app.js


//NODE SETUP-- 1-
// NPM INIT -y ,
//2- npm install express.js+

// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json());  //middleware in Express is used to parse incoming request bodies that are in JSON format.

// app.get('/api/items', (req, res) => {
//   const items = [
//     { id: 1, name: 'Item One' },
//     { id: 2, name: 'Item Two' },
//   ];
//   res.json(items);
// });

// app.post('/api/items', (req, res) => {
//   const newItem = req.body;
//   console.log('New Item:', newItem);
//   res.status(201).json(newItem);
// });

// app.put('/api/items/:id', (req, res) => {
//   const itemId = parseInt(req.params.id, 10);
//   const updatedItem = req.body;
//   console.log(`Item ID ${itemId} updated to:`, updatedItem);
//   res.json(updatedItem);
// });

// app.patch('/api/items/:id', (req, res) => {
//   const itemId = parseInt(req.params.id, 10);
//   const updateFields = req.body;
//   console.log(`Item ID ${itemId} partially updated with:`, updateFields);
//   res.json(updateFields);
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


//----------------------------------

//NOTES
//GET
// app.get(): Defines a route for handling GET requests to /.
// (req, res) => { ... }:
// The callback function has two parameters:
// req: The request object, containing information about the incoming request (headers, query parameters, etc.).
// res: The response object, used to send a response back to the client.
// res.json(data):  method automatically converts the object to JSON format.

// //POST
// app.post(): Defines a route for handling POST requests to /app/product.
// req.body: Contains the data sent by the client in the request body.//For this to work, you need middleware like express.json() to parse the incoming JSON body in your app.
// res.status(201): Sets the HTTP status code to 201 Created.
// res.json(item): Sends the item as a JSON response.









//IMPORTANT NOTES
//Node.js is a popular runtime environment that allows developers to
// build scalable network applications using JavaScript. 

// single thread: can perform one task at a time
//JavaScript and Node.js default behavior is single thread but ( Multi-threaded is possible in Node.js using Worker Threads). ).
//multiple thread: can perform multiple task at a time

//// JavaScript (Browser): JavaScript in the browser is single-threaded

// JavaScript and Node.js can both handle synchronous and asynchronous operations, but they are designed with 
// a strong emphasis on asynchronous, non-blocking execution, particularly in the context of I/O operations.
//like setTimeout, async/await, promise


// JavaScript:
// single thread
// By default, synchronous / execute sequenctially.
// Supports asynchronous operations for handling I/O, events, and timers using callbacks, promises, and async/await.


//Typscript
//it is a superset of JavaScript with having advance feature that was developed and 
//is maintained by Microsoft. its makes our cade easy to read , write, maintain we can write typescript in js code


// TypeScript allows you to add type annotations to variables,function parameters,
// and return values. This helps catch type-related errors at compile time rather than runtime.


// TypeScript offers several advantages over JavaScript, such as static typing, interfaces, enums, and advanced tooling support.
//  These features can lead to fewer bugs, improved code quality,



//both interface and type can be used to define the shape of an object.
//interface = delcration and merging
//type =  allow to make union and intersection

//type is the keyword used for defining the type
// type User = {
//     name: string;
//     age: number;
// };

// const user: User = {
//     name: "Alice",
//     age: 25
// };

// / Interfaces Type offers an alternative method for defining an object’s type, allowing for a distinct naming approach.
// interface Person {
//     name: string;
// }

// interface Person {
//     age: number;
// }

// // This is valid, and Person now has both name and age properties
// const person: Person = {
//     name: "John",
//     age: 30
// };

// A generic type in TypeScript allows you to create reusable components that can work with 
// a variety of types instead of a single one.
// It provides a way to define functions, classes, or interfaces that can operate on different data types

// function identity<T>(arg: T): T {
//     return arg;    
// }

// const result1 = identity<number>(42); // result1 is of type number
// const result2 = identity<string>("Hello"); // result2 is of type string


//note----
 //function identity<T>(...) declares a function named identity.
//<T> is a generic type parameter that allows the function to work with any data type. 
//arg: T specifies that the function takes one parameter named arg, which is of the type T.
//: T indicates that the function returns a value of type T. The return type matches the input type, ensuring type safety.


// access modifiers are keywords that set the accessibility of properties and methods within classes.
//  They determine whether the properties and methods can be
//  accessed from outside the class or not. The three main access modifiers in TypeScript are public, private, and protected.

// public =Members are accessible from anywhere
// private = Members are only accessible within the class they are defined.
// protected = Members are accessible within the class and subclasses.

//In TypeScript, never, unknown, and any are special types that serve different purposes:

//Use Case: Indicates that a function does not return a value or represents an impossible type.
//Represents a value whose type is not known at the time of writing the code. It is a type-safe counterpart to any.
//Represents a type that can be any value. also Used when migrating JavaScript code to TypeScript or when you need to work with
// dynamic content without strict type checking.


// Enums in TypeScript are a way of defining named constants which can
//  make it easier to create a set of distinct cases.
// TypeScript supports both numeric and string enums.



// access modifiers are keywords that set the accessibility of properties and methods within classes.
//  They determine whether the properties and methods can be
//  accessed from outside the class or not. The three main access modifiers in TypeScript are public, private, and protected.

// public =Members are accessible from anywhere
// private = Members are only accessible within the class they are defined.
// protected = Members are accessible within the class and subclasses.


// Node.js:
// single thread but we can make multiple thread using worker
// By default, asynchronous / execute independently.
// Primarily designed for asynchronous, non-blocking I/O operations.
// Can execute synchronous code but prefers asynchronous patterns to improve performance and scalability for I/O-bound tasks.


//Q-1 Is Node.js entirely single-threaded?
// No, Node.js is not entirely single-threaded. It uses an event-driven, non-blocking I/O
// model that allows multiple operations to be processed simultaneously OR existing or occurring at the same time. 
// However, the execution of JavaScript code is single-threaded.
// Multi-threaded is possible in Node.js using Worker Threads


//2- Is it possible to use Class in Node.js?
// Yes, it is possible to use Class in Node.js.Node.js supports the use of ES6 syntax,
// including Classes, which can be used to create objects with shared properties and methods. However,
// it is essential to note that Node.js is mainly designed to use JavaScript's functional programming paradigm.


//3-How can you avoid Callback Hell in Node.js?
//  Callback Hell refers to the situation where multiple levels of 
//  nested callbacks make code difficult to read and maintain. To avoid
//  Callback Hell in Node.js, you can use the following techniques:

// 1-Use named functions instead of anonymous functions.

//2-Break complex functions into smaller, simpler functions.

//3-Use control flow libraries such as Async.js or Promises to handle asynchronous operations.
//4 Using async/await()
// Using promises
// Using generators



//ARCHITECTURE-----------------------
//1- MONOLITHIC ARCHITECTURE:-- if you make your entire application on single inter-connected unit that's called MONOLITHIC ARCHITECTURE
// include : presentation layer, bussiness layer ,database layer
//we can not use monolithic architecture as a web services


//2-MICRO-SERVICES ARCHITECTURE:----
// microservice architecture - is an architectural style where a large application breaks down into small components/collections
//of services 
//Independently deployable ,Loosely coupled to its ability to create scalable and maintainable systems.

//Two common approaches are:
// event-based architecture ---The key features of event-based architecture include asynchronous communication
// request-based architecture. --The key features of request-based architecture include synchronous requests and responses.

//IMPORTANT--------
// Q1: How to Connect One Microservice to Another in Node.js?

// In a microservices architecture, services must communicate with each other. This can be done using different methods:

// REST API Calls (Synchronous Communication)
// Message Brokers (RabbitMQ, Kafka, NATS,  Google pub/sub etc.) (Asynchronous Communication)
// gRPC (High-Performance Communication)
// Service Discovery (Kubernetes, Consul, Eureka)

//3-WHAT IS THE WEB-SERVICES (services delivered over the web called web services)

//if you have two system written in deffrent language having communication via web services
//web service can be apis but api can not be web service

//example----
//if you have end url by hiting it you get response respect to that url and able to use it anywhere.

//typw of web services
//1- soap(Simple Object Access Protocol) in which geeting response in xml  
//2- restfull(80% of use  because of having different state like plain, json, xml ,)


//4- APIS----- it is third party utility you can use it in your application  to make easy





///================ NODE PRACTICAL QUESTIONS ==========================/////

// setTimeout is JS's built in method calls a function after no of millisecond
//  it contains two parameter a callback and delay time on ms

//  setTimeout( ()=>{} ,1000) 
//  such a task animation


//PROMISES
// A new Promise object is created. The promise constructor takes a single function as an argument,
//  often called the executor function, which takes two parameters: resolve and reject.


//Step 1: Creating a Promise

// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// const status =true;
// if(status){
//     resolve("success")
// }else{
//     reject("error")
// }
//     },1000)

// })


//.then method
// The .then method is used to handle the fulfillment of a Promise. When a Promise is fulfilled,
//  it means that the asynchronous operation it represents has completed successfully, and it has produced a value.
//It takes a callback function that runs with the resolved value of the Promise. 


//Step 2: Handling the Promise


// //Handling the Promise Result
// myPromise.then((message)=>{
// console.log(message)
// })
// .catch((error)=>{
// console.error(error)
// })



//Question  how to convert  promise by async and await ======  here is the answer
//Async //await

// const AsyncFunction = async () => {
//     try {
//         const data = await myPromise
//         console.log(data)

//     } catch (err) {
//         console.log(err)

//     }
// }

// console.log(AsyncFunction())

//CALLBACK FUNCTION
// it is a fucnction paased as an agrument to another function  and execute after the complation of that function
// ()=>{}





//METHODS----call(), apply(), bind()

// function sum(a,b){
//     return a+b;
// }
// console.log( sum.call(null,1,5))//6

// here we using null to avoid unneccessery context


// function multiply(a,b){
//     return a*b
// }
// console.log(multiply.apply(null, [4,5]))//20


//------QUESTION--------------

// function sum(greeting){
//     return (`${greeting} ${this.name}`)
// }
// const data = {"name":"sunny"}

////FOR CALL
// console.log(sum.call(data,"Hi"))//Hi sunny

//FOR APPLY
// console.log(sum.apply(data,["Hi"]))//Hi sunny

//// const boundSum = sum.bind(data); // Bind the function to the data object
// console.log(boundSum("Hi"));////Hi sunny


// FOR bind()

// function sum(greeting){
//     return (`${greeting} ${this.name}`)
// }
// const data = {"name":"sunny"}
// const boundSum = sum.bind(data); // Bind the function to the data object
// console.log(boundSum("Hi"));////Hi sunny





// Restfull api 

// app.get('/books', (req, res) => {
//     res.json(books);
//   });
  
//   app.get('/books/:id', (req, res) => {
//     const book = books.find(b => b.id === parseInt(req.params.id));
//     if (!book) return res.status(404).send('Book not found');
//     res.json(book);
//   });


// GraphQL schema

// const schema = buildSchema(`
//     type Book {
//       id: Int
//       title: String
//       author: String
//     }
  
//     type Query {
//       books: [Book]
//       book(id: Int!): Book
//     }
  
//     type Mutation {
//       addBook(title: String!, author: String!): Book
//     }
//   `);

// GraphQL endpoint
// app.use('/graphql', graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true
//   }));

//defination
// CORS (Cross-Origin Resource Sharing) is a middleware or security feature 
// that allows web applications to request resources from a different domain than the one that served the web application. 
// It uses HTTP headers to specify which domains are permitted to access the resources and
// which HTTP methods and headers are allowed in those requests.


//// Apply CORS middleware
//To enable CORS with various options:
//const cors = require('cors');

// app.use(cors({
//HTTP headers
//   origin: 'http://example.com',// specifies that only requests from http://example.com are permitted to access the resources.
//HTTP methods 
//   methods: ['GET', 'POST'], //allows only GET and POST HTTP methods for these requests.
//headers 
//   allowedHeaders: ['Content-Type', 'Authorization'] //this is optional 
// to ensures that your application can handle necessary headers. and enhancing both security and functionality.

// }));

// Content-Type: Allows clients to specify the type of data being sent (e.g., JSON).
// Authorization: Permits clients to send authentication tokens or credentials.

//JWT (JSON WEB TOKEN)

// JWT (JSON Web Token) is a compact, self-contained token used for secure data exchange between a client and a server. 
// It’s commonly used for authentication, where after login, the server issues a token to the client.
// The client then includes this token in the header of future requests to prove their identity.


//The payload of a JWT carries the actual data you want to transmit.
//Secret: A private key used to sign  and varify the token.
//Specifies the hashing algorithm (HMAC SHA-256) used for signing the token, providing security against tampering.
//Ensures that the token hasn’t been altered. If someone tries to modify the payload,



// const jwt = require('jsonwebtoken');

// const secret = 'your-256-bit-secret';

// // Create a token
// const payload = { sub: '1234567890', name: 'John Doe', iat: Math.floor(Date.now() / 1000) };
// const token = jwt.sign( payload, secret, { algorithm: 'HS256' } );

// console.log('Token:', token);

// // Verify a token
// try {
//   const decoded = jwt.verify(token, secret);
//   console.log('Decoded:', decoded);
// } catch (err) {
//   console.error('Invalid token:', err.message);
// }



// QUESTION --how to connect database(mongodb )to server side code(node.js)?

// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. 
// It provides a straightforward, schema-based solution to model your application data.


// STEPS-----
// 1- 1st install mongodb and mongoose in your node application.
// 2- then have to import mongoose using require function.
// 3- connect to the database


// npm install mongodb mongoose

// const mongoose = require('mongoose');

// function dbConfig() {
//     const url = 'mongodb+srv://';
//     Mongoose.connect(url).then(() => {
//         console.log("DB Connected successfully");
//     });
// }


//ANOTHER WAYS----------------
//Mongoose.connect() is a method used to connect to a MongoDB database

// function database_config(){
//     mongoose.connect("mongodb+srv://sanju:sanju%40123@cluster0.nrpylpw.mongodb.net/ProductData?retryWrites=true&w=majority",

//         console.log("Database connected successfully")

// );
// }


//// QUESTION -- what is .env file?,  why it use?,  what is benefit of using it? , how to use this file in your application?

//  .env file is a configration file, used to set up environment variables for an application, keeping sensitive information
//  like API keys and database URLs separate from the codebase.


//.env
// DATABASE_URL= "mongodb://username:password@host:port/database"
// API_KEY= "yourapikey"
// PORT=3000

//how to use this file in your application?
//npm install dotenv       //Install the dotenv package to load environment variables from the .env file.

// require('dotenv').config();

// Access the environment variables

// const dbUrl = process.env.DATABASE_URL;
// const apiKey = process.env.API_KEY;
// const port = process.env.PORT || 3000;


//BENEFIT------
// Security: Keeps sensitive information like passwords and API keys out of your source code.
// Configuration Management: Easily manage and change configuration settings without modifying the code.
// Environment Separation: Allows different settings for development, testing, and production environments.

//EVENT EMITTER==============

// An EventEmitter is a core feature in Node.js that allows objects to emit and listen for events.
//  It is part of the events module and provides a way to handle asynchronous events in an application. 
//  When an event is emitted, any listener or handler associated with that event is executed.

// Key Concepts:
// Emit: Triggers an event.
// Listener: A function that gets executed when a specific event is emitted.


//EventEmitter Class:
// const EventEmitter = require('events');

//Creating an Instance:
// const eventEmitter = new EventEmitter();

// // Create an event listener

// eventEmitter.on('greet', () => {
//   console.log('Hello, World!');
// });


//Emitting Events:

// // Emit the 'greet' event
// eventEmitter.emit('greet');


//output questins
//example---------------

// call Stack is a LIFO

// function foo() {                                                 
//     console.log('foo');
// }

// function bar() {
//     console.log('bar');
//     foo();
// }
// bar();


// OUTPUT:
// bar 
// foo



// function foo() {
//     console.log('foo function');
// }

// function bar() {
//     console.log('bar function');
// }


//case-1
// bar();    //bar function
//foo();    //foo function

//case-2
//foo();      //foo function
// bar();      // bar function

//TO UNDETSTAND THE CALL STACK----

// function LevelTwo() {
//     console.log("Inside Level Two!")
//  }
 
//  function LevelOne() {
//     LevelTwo()
//  }
 
//  function main() {
//     LevelOne()
//  }
 
//  main()

//OUTPUT
//Inside Level Two!


//-----------
// function bar() {
//     console.log('Start');
 
//  setTimeout(function() {
//      console.log('setTimeout');
//  }, 0);
 
//  Promise.resolve().then(function() {
//      console.log('Promise');
//  });
 
//  console.log('End');
//  }
 
//  bar();


//output
// Start
// End
// Promise
// setTimeout



/// V.IMP---    QUESTION---------------
// 

// console.log('Start');

// Promise.resolve().then(() => {
//     console.log('Promise Microtask');
// });

// async function asyncFunction() {
//     console.log('Async Function Start');
//     await Promise.resolve();
//     console.log('Async Function End');
// }

// asyncFunction();

// console.log('End');


// OUTPUT:::::
// Start
// Async Function Start
// End
// Promise Microtask
// Async Function End

// // ??? NOT SURE
// Start
// End
// Promise Microtask
// Async Function Start
// Async Function End




// Detailed Execution Steps:

// Synchronous Execution:

// console.log('Start') → Output: Start
// Promise.resolve().then(...) schedules a microtask.
// asyncFunction() is called:
// Inside asyncFunction(), console.log('Async Function Start') → Output: Async Function Start
// await Promise.resolve(); schedules a microtask and pauses execution of the async function.
// console.log('End') → Output: End



// V.IMP----
// console.log(1);
// const pro = new Promise((resolve) => {
//   console.log(2);     // is executed immediately,
//   resolve();      //is called, which schedules the then callbacks to run later.
//   console.log(3);    // is executed immediately,
// });

// console.log(4);

// pro
//   .then(() => {
//     console.log(5);
//   })
//   .then(() => {
//     console.log(6);
//   });

// console.log(7);

// setTimeout(() => {
//   console.log(8);
// }, 10);

// setTimeout(() => {
//   console.log(9);
// }, 0);

//BEACUSE HERE  one seTimeout call the function after 10 ms ,and  anthor one call the function after 0 ms 

//OUTPUT
1
2
3
4
7
5
6
9
8


//----------------
// console.log('one')
// console.log('two')
// console.log('three')
// setTimeout(()=>{
//   console.log('four')
// },2000)
// console.log('five')
// setTimeout(()=>{
//   console.log('six')
// },1000)

// one
// two 
// three
// five
// six
// four



//------------
// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
// }, 0);

// Promise.resolve().then(() => {         // here is  not executed immediately  , it will scheduled
//   console.log('Promise 1');
//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);
// });

// Promise.resolve().then(() => {
//   console.log('Promise 2');
// });

// setTimeout(() => {
//   console.log('Timeout 3');
// }, 0);

// console.log('End');

// setTimeout(() => {
//   console.log('Timeout 4');
// }, 0);

// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 3
// Timeout 4
// Timeout 2

//steps: flow synchronouse-----

// Immediate logs: 'Start' and 'End' 

//Micro-tasks (Promises): 

// Promise 1
// Promise 2

// Macro-tasks (setTimeout):  are executed in the order they were scheduled:

// 'Timeout 1'
// 'Timeout 3'
// 'Timeout 4'
// 'Timeout 2' (scheduled by the 'Promise 1' handler)




//--------------
// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
// }, 1000);

// Promise.resolve().then(() => {
//   console.log('Promise 1');
//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);
// });

// Promise.resolve().then(() => {
//   console.log('Promise 2');
// });

// setTimeout(() => {
//   console.log('Timeout 3');
// }, 2000);

// console.log('End');

// setTimeout(() => {
//   console.log('Timeout 4');
// }, 0);


//output------------
//Start
// End
// Promise 1
// Promise 2
// Timeout 4
// Timeout 2
// Timeout 1
// Timeout 3



/// INTERVIEW LOGIC QUESTIONS---
// const middlewareA = (res, req , next) =>{
//     console.log("middleware1")
//     next();
// }
// middlewareA()
// const middlewareB = (res, req , next) =>{
//     console.log("middleware2")
//     next();
//      console.log("middleware3")
// }

// middlewareB()

// //OUTPUT---------
// middleware1
// middleware2
// middleware3

//orrrrrrrrrr==
// middleware1
// next called
// middleware2
// next called
// middleware3



//QUESTION---  SHALLOW  & DEEPCOPY
// let a ={a:10}
// let b =JSON.parse(JSON.stringify(a))
// b.a=30
//  console.log(a)//{a:10}
//  console.log(b)//{a:30}



//  let a ={a:10}
// let b =a
// b.a=30
//  console.log(a)//{a:30}
//  console.log(b)//{ a: 30 }


// CLOSURES QUESTION-------------

// function app(){
//     var a= 10;
//     function foo(){
//         console.log("hi there-----" ,a)
//     }
//     foo();
// }
// app()  //hi there----- 10



// function outer() {
//     var name = "Sanju";
//     function inner() {
//         console.log(name);
//     }
//     return inner;
// }

// var closureFunc = outer();
// closureFunc(); //Sanju


 

//===QUESTION--------
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


//QUESTION -----
//WRITE CALLBACK HELL CODE
// function step1(callback) {
//     setTimeout(() => {
//       console.log("Step 1 completed");
//       callback();
//     }, 1000);
//   }
  
//   function step2(callback) {
//     setTimeout(() => {
//       console.log("Step 2 completed");
//       callback();
//     }, 1000);
//   }
  
//   function step3(callback) {
//     setTimeout(() => {
//       console.log("Step 3 completed");
//       callback();
//     }, 1000);
//   }
  
//   function step4(callback) {
//     setTimeout(() => {
//       console.log("Step 4 completed");
//       callback();
//     }, 1000);
//   }
  
//   // Calling each function in a nested way (Callback Hell)
//   step1(() => {
//     step2(() => {
//       step3(() => {
//         step4(() => {
//           console.log("All steps completed");
//         });
//       });
//     });
//   });

//RESULT:===========
// Step 1 completed
// Step 2 completed
// Step 3 completed
// Step 4 completed
// All steps completed
  


//QUESTION
// -----------DIFFERENCE B/W Dependencies and devDependencies?

// In a project, dependencies and devDependencies are both packages that you add to your project but serve different purposes:

//1--Dependencies (dependencies):

// These are the packages or libraries your project needs to run in production.
// They are essential for the core functionality of your application.
// Examples might include frameworks, libraries for handling HTTP requests, or database drivers.
// In package.json, they are listed under the dependencies section and are installed using npm install <package-name>.

// //"dependencies": {
//     "express": "^4.17.1",
//     "mongoose": "^5.10.9"
//   }


// Dependencies:
// express - Web framework for Node.js.
// react - Frontend library for building user interfaces.
// mongoose - MongoDB object modeling tool.
// axios - Promise-based HTTP client for making API requests.
// lodash - Utility library for common JavaScript functions.
// redux - State management library.
// socket.io - Library for real-time, bidirectional communication.
// jsonwebtoken - Library for creating and verifying JWT tokens.
// moment - Library for parsing, validating, and formatting dates.
// bcrypt - Library for password hashing.



// 2--DevDependencies (devDependencies):

// These packages are only required during development, not in production.
// They include tools like testing frameworks, linters, build tools, or transpilers.
// In package.json, they are listed under the devDependencies section and are installed using npm install <package-name> --save-dev (or simply npm i -D).

// //"devDependencies": {
//     "jest": "^26.6.3",
//     "eslint": "^7.11.0"
//   }
  

// DevDependencies:
// jest - Testing framework for JavaScript.
// eslint - Linter for identifying and fixing JavaScript errors.
// webpack - Module bundler for bundling JavaScript files.
// babel - JavaScript compiler (often used with React and ES6+).
// typescript - Superset of JavaScript adding static typing.
// nodemon - Tool for automatically restarting the server on file changes.
// mocha - Testing framework for Node.js.
// chai - Assertion library for testing.
// ts-node - TypeScript execution environment for Node.js.
// prettier - Code formatter.

// Key Differences:
// Dependencies are needed to run your app in production.
// DevDependencies are only needed for development and testing purposes.

// Usage in package.json
// The package.json file will automatically separate dependencies into dependencies and devDependencies if specified when installing.




//QUESTION--- how do we handle input and output operation in node js?

//Node.js provides a variety of built-in modules (like process, fs, http, https, and database connectors) || (console, file system, network, and database) 
//to handle input and output efficiently.
//Node.js’s asynchronous, non-blocking architecture is ideal for handling high I/O operations while maximizing application performance.

// Here’s a quick, point-by-point comparison:

// Console I/O:

// Input: process.stdin to capture user input.
// Output: console.log() or process.stdout.write() to display output.

// process.stdin.on('data', (data) => {
//     console.log(`Input received: ${data.toString().trim()}`);
//   });
  
// File System I/O:

// Read: fs.readFile (asynchronous) or fs.readFileSync (synchronous) for reading files.
// Write: fs.writeFile or fs.writeFileSync to write data to files.

// const fs = require('fs');
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Network I/O:

// HTTP Server: http.createServer to listen and respond to HTTP requests.
// HTTP Request: https.get or libraries like axios for making API requests.

// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!');
// });
// server.listen(3000, () => console.log('Server running on port 3000'));

// Database I/O:

// Connect: Database drivers or ORMs like Mongoose (MongoDB) or Sequelize (SQL) for connecting and querying databases.

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });
// const userSchema = new mongoose.Schema({ name: String });
// const User = mongoose.model('User', userSchema);
// User.find({}, (err, users) => console.log(users));

// Each type has specific methods/modules optimized for handling asynchronous operations in Node.js.
