//INTERVIEW QUESTIONS-------
//QUESTION---  What is the TS?

////Type annotation in TypeScript refers to explicitly specifying the type of a variable,

// TypeScript allows you to add type annotations to variables,function parameters,
// and return values. This helps catch type-related errors at compile time rather than runtime.


//TypeScript is a superset of javascript with having advance feature and offers several advantages over JavaScript, 
//such as static typing, interfaces, enums, and advanced tooling support. These features can lead to fewer bugs, improved code quality,

//2--What are the key differences between TypeScript and JavaScript?
// the main difference  which i found between TS and JS.

// JS------- 1- Dynamic typing   2-error occur at runtime.
//let age = 25; // Type is determined at runtime and can change during execution  ,age = "twenty-five"; // Allowed in dynamic typing

//TS------ 1- static typing   2-error occur at compile time rather than runtime.
//let age: number = 25; // Type is declared and checked at compile-time


//QUESTION-3 What are TypeScript interfaces, and how do they differ from types?
//TypeScript interfaces can be used in various ways--

//Basic Interface: Defines the structure for an object with properties and their types.
// interface User {
//     name: string;
//     age: number;
//   }
  
//Interface with Methods: Interfaces can define methods along with properties.
// interface User {
//     name: string;
//     greet(): void; // Method definition
//   }
  
//Function Interfaces: Used to define the structure of a function.
// interface MathOperation {
//     (x: number, y: number): number;
//   }
  
//Extending Interfaces: One interface can inherit properties from another using extends.
// interface Person {
//     name: string;
//   }
  
//   interface Developer extends Person {
//     skills: string[];
//   }
  

//both interface and type can be used to define the shape of an object.
//Interfaces define the shape of objects and can be extended, while types are more flexible 
//or can say allow to make union and intersection but cannot be extended in the same way as we able to do with the interface.

//---- Interfaces: Can be extended

 // interface Person {
//     name: string;
//     age: number;
//   }
  
//   interface Developer extends Person {
//     skills: string[];
//   }
  
//   const sanju: Developer = {
//     name: "Sanju",
//     age: 25,
//     skills: ["JavaScript", "TypeScript", "React"]
//   };
  
//. Types: Cannot be extended in the same way
// type Person = {
//     name: string;
//     age: number;
//   };
  
//   type Developer = Person & {
//     skills: string[];
//   };
  
//   const sanju: Developer = {
//     name: "Sanju",
//     age: 25,
//     skills: ["JavaScript", "TypeScript", "React"]
//   };
  
//QUESTION-4 ---What are generics in TypeScript, and how are they used?
//generics provide a way to create reusable components that can work with a variety of types instead of a single one.
//Generics: The function is generic, allowing it to accept and return values of any type.

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


/////QUESTION-5  ---What is the difference between never , any and unknown types in TypeScript?
//In TypeScript, never, unknown, and any are special types that serve different purposes:

//In TypeScript,
// never :  represents values that never occur, 
//unknown  :  Requires type checking before you can use it, making it safer to handle.
// any  : Allows any operation without type checks, leading to potential runtime errors.


///QUESTION-6 ---What is the difference between any and unknown types in TypeScript?
//unknown promotes safer code practices, while any provides maximum flexibility but sacrifices type safety.

//QUESTION-6 ---What is Enums?

// Enums in TypeScript are a way of defining named constants which can
//  makes it easier to create a set of distinct cases. and improving code readability.
// TypeScript supports both numeric and string enums.



//or
//For example, enums can be useful when dealing with fixed categories like days of the week, user roles, or states of a system:
//EXAMPLE-------

// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// let move: Direction = Direction.Up;

// console.log(move); // Outputs: 0 (default index value)
// console.log(Direction[move]); // Outputs: "Up"



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


