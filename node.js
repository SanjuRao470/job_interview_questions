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



//NODE SETUP-- 1- NPM INIT ,2- npm install express.js
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

// setTimeout is JS's built in method calls a function  after  no of millisecond
//  it contains two parameter a callback and delay time on ms

//  setTimeout( ()=>{} ,1000) 
//  such a task animation


//PROMISES
// A new Promise object is created. The promise constructor takes a single function as an argument,
//  often called the executor function, which takes two parameters: resolve and reject.

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

// //Handling the Promise Result
// myPromise.then((message)=>{
// console.log(message)
// })
// .catch((error)=>{
// console.error(error)
// })

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



//To enable CORS with various options:

// app.use(cors({
//HEADER
//   origin: 'http://example.com',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));



//JWT (JSON WEB TOKEN)

// const jwt = require('jsonwebtoken');

// const secret = 'your-256-bit-secret';

// // Create a token
// const payload = { sub: '1234567890', name: 'John Doe', iat: Math.floor(Date.now() / 1000) };
// const token = jwt.sign(payload, secret, { algorithm: 'HS256' });

// console.log('Token:', token);

// // Verify a token
// try {
//   const decoded = jwt.verify(token, secret);
//   console.log('Decoded:', decoded);
// } catch (err) {
//   console.error('Invalid token:', err.message);
// }
