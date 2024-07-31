//Typescript : it is a superset of JavaScript with having advance feature  that was developed and 
//is maintained by Microsoft. its makes our cade easy to read , write, maintain we can write typescript in js code
//Both client-side and server-side JavaScript applications can be built with TypeScript.
//example
// In Js
// let fname ='abc'
// fname = 123
// fname = true
// console.log(fname) //this will absolity work in js because it is  dynamic language.


// In Ts
// let fname:string ='abc'
//    fname = 123
//    fname = true
//   console.log(fname)  // this will show error because of fname declare with string datatype now it can not take anything
// else datatpye instead of string and fname taking boolean datatype


//Key Features
// Here are some benefits of using TypeScript:

// Optional static typing.
// Type inference.
// Ability to use Interfaces


//OR--
// Static Typing:
// TypeScript allows you to add type annotations to variables, function parameters,
//  and return values. This helps catch type-related errors at compile time rather than runtime.

//Type Inference:
// TypeScript can infer types even if you don’t explicitly annotate 
// them, making it easier to write code while still benefiting from type checking.


//EXAMPLE-----------
// // Type annotation for a variable
// let message: string = "Hello, TypeScript";

// // Function with typed parameters and return type
// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }

// console.log(greet("World")); // Output: Hello, World!

// Interface for a person object
// interface Person {
//  firstName: string;
//  lastName: string;
//   age: number;
// }

// const person: Person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// console.log(person);

// // Class with a constructor and a method
// class Greeter {
//   greeting: string;

//   constructor(message: string) {
//     this.greeting = message;
//   }

//   greet(): string {
//     return `Hello, ${this.greeting}`;
//   }
// }

// let greeter = new Greeter("world");
// console.log(greeter.greet()); // Output: Hello, world

//Advantages of Using TypeScript
// Early Error Detection
// Improved Code Quality like autocompletion, navigation
// Enhanced IDE Support
// Scalability

//Conclusion
//TypeScript adds powerful features to JavaScript that
//can help you write more reliable, maintainable, and scalable code.
//It’s especially useful for large projects where type safety
//can significantly reduce the number of runtime errors and improve overall code quality.

//Note
//typescript catches errors at compile time instead of runtime, which makes debugging easier and reduces
//the liklihood of bugs in production.

//QUESTION--
// vite.js is a rapid development tool for modern web projects. it focuses on speed and performance by providing
// the development experience.
// npm create vite@latest my-vite-app --template react
// cd my-vite-app
// npm install
// npm run dev

//ESLint is a widely-used static code analysis tool for identifying and fixing problems in JavaScript and TypeScript code.


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
// Polyfills. 

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


