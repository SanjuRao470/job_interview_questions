// JavaScript-------------
// JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming
//  language with first-class functions. While it is most well-known as the scripting language for Web pages,
//   many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is 
//   a prototype-based, multi-paradigm, single-threaded, dynamic language,
//  supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.


// includes things:
// JIT( A TECHNIQUE WHICH COMBINE BOTH INTERPRETER & COMPILE THE CODE)
// first-class functions
// many non-browser environments
// Node.js(JRE)
// Apache CouchDB (OPEN SOURCE DATABASE)
//  Adobe Acrobat (COMMON PROTABLE DOCUMENT FORMAT(PDF))
//  prototype-based (creation of an object without first defining its class)
//  single-threaded (EXECUTE ONE TASK AT A TIME)

//  prototype-based: In simple words: this type of style allows the creation of an object without first defining its class.



// a()
// b()//TypeError: b is not a function 

// //function statement ask declaration
// function a(){
//     console.log("a called");
// }

// //function expression
// var b = function (){
//     console.log('b called')
// }
//QUESTION DII B/W statement & expression 
// answer: IS HOISTING

//function declaration
// is also known as a function statement

// anonymous function( a function without name is anonymous function)
// when we use??: anonymous function used as value (as you seen function expression example ,anonymous function store as value in variable b)
// if we call simply got syntax error  function syntax requires a function name
// function () {

// }

//named function expression
// var c = function xy(){
//     console.log('c called')
//     console.log(xy) // can be accessble
// }
// xy() can't  be accessble gives reference error  because not available in global environment

//diff b/w parameter & arguments
// function d(x,y){
//     console.log("a called");
// }
// d(2,4)

// first class function :( the ability use a function as value known as first class function )

// It can be stored as a value in a variable.

// const greet = function(name) {
//     return `Hello, ${name}!`;
// };

// It can be returned by another function.

// function createGreeter(greeting) {
//     return function(name) {
//         return `${greeting}, ${name}!`;
//     };
// }

// const sayHello = createGreeter('Hello');
// console.log(sayHello('Alice')); // Output: Hello, Alice!


// It can be passed into another function as a parameter.

// function logGreeting(greetFunction, name) {
//     console.log(greetFunction(name));
// }
// function greet(){
//     return ('hello')
// }
// logGreeting(greet, 'Bob'); // Output: Hello, Bob!


// It can also stored in an array, queue, or stack.

// const functions = [
//     function() { return 'First function'; },
//     function() { return 'Second function'; },
//     function() { return 'Third function'; }
// ];

// functions.forEach(func => console.log(func()));
// // Output:
// // First function
// // Second function
// // Third function

//OR
// const functions = [sayHello, greeter];

// functions.forEach(fn => fn("Bob"));
// // Output: 
// // Hello, world!
// // Hi, Bob

// Also, It can have its own methods and property.

//arrow function

//what is the recursive function?
// the recursiveFunc function calls itself within the body of the function.
//  It will repeat calling itself until the desired output is achieved.

// function recursiveFunc() {
//     // some code here... 
//     recursiveFunc()
//   }