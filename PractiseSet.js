// [] & [1,3 ]  both  are truthy value 
 


// how do add key in an object?

// Define an object
// let person = {
//   firstName: "John",
//   lastName: "Doe"
// };

// // Add a new key-value pair using dot notation
// person.age = 30;

// console.log(person);
// Output: { firstName: "John", lastName: "Doe", age: 30 }


// // props type & default props
// prop-types is a package used in React to type-check the props passed to a component and provide 
// warnings in development if props are used incorrectly.

// import PropTypes from 'prop-types';

// class Greeting extends React.Component {
//   render() {
//     return <div>Hello, {this.props.name}!</div>;
//   }
// }

// Greeting.propTypes = {
//   name: PropTypes.string.isRequired // 'name' prop is expected to be a string and is required
// };


// defaultProps is a feature in React that
//  allows you to specify default values for props in a component.
// class Greeting extends React.Component {
//   render() {
//     return <div>Hello, {this.props.name}!</div>;
//   }
// }

// Greeting.defaultProps = {
//   name: 'Guest' // Default value for the 'name' prop
// };

// //advantage of using 
// These features are important for ensuring component reliability, enforcing prop type
//  requirements, and improving code readability and maintainability in React applications.

//how do you debuge your project.
//debuge in react applicaton involving indentifying and fixing the issue in react project/application
//console.log , ReactDevTool,  error boundries 

//q- swap the two variable  without using third varialbe
//answer
// let a = 5;
// let b = 10;

// // Swap values using destructuring assignment
// [b, a] = [a, b];

// console.log(a); // Output: 10
// console.log(b); // Output: 5



//CALLBACK HELL

// Callback hell refers to the situation in asynchronous programming 
// where code becomes difficult to read and maintain due to nested callbacks.
// This typically occurs when you have multiple asynchronous operations 
// that depend on the results of each other, resulting in deeply nested callback functions.

//EXAMPLE OF CALLBACK HELL

// Example of callback hell
// asyncFunction1(arg1, function(result1) {
//   asyncFunction2(result1, function(result2) {
//       asyncFunction3(result2, function(result3) {
//           // More nested callbacks...
//       });
//   });
// });

//QUESTION Difference between call(),apply(),bind()
//all three are methods which help in controlling the context of a function.

// call() & apply(): they are pretty interchangable both execute current function immediately it all up to 
// wheather  its easier to send in an array or comma seperated list of arguments
//OR
//when we want to invoke a function immediately with sepecified this value and arguments

//bind(): when we want create reusable function with sepecified this value and intial arguments


// What will be the output of the following code?
// javascript


// Copy code
// function greet(message) {
//   return message + ' ' + this.name;
// }

// const person = { name: 'Alice' };
// const message = greet.call(person, 'Hello');
// console.log(message);
// a) "Hello Alice"
// b) "Hello undefined"
// c) "Hello "
// d) TypeError: Cannot read property 'name' of undefined

// Answer: a) "Hello Alice"

// What does the following code snippet output?
// javascript
// Copy code
// function sum(a, b) {
//   return a + b;
// }

// const result = sum.apply(null, [10, 20]);
// console.log(result);
// a) 30
// b) 10
// c) NaN
// d) TypeError: Cannot read property 'apply' of null

// Answer: a) 30

// function sum(a, b) {
//   return a + b;
// }

// const result = sum.apply( [10, 20]);     /////when we do not provide this value null in case answeR will be NaN
// console.log(result);
// a) 30
// b) 10
// c) NaN
// d) TypeError: Cannot read property 'apply' of null

// Answer: c) NaN 


//BIG REASON:
// The apply() method calls the sum function with the this value as null and the arguments 10 and 20.
// Inside the sum function, a receives the value 10 and b receives the value 20.
// The sum function returns the sum of a and b, which is 10 + 20 = 30.

// What will be logged to the console in the following code?
// javascript
// Copy code
// function fullName(city, country) {
//   return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country;
// }

// const person = { firstName: 'Emma', lastName: 'Smith' };
// const message = fullName.apply(person, ['London', 'UK']);
// console.log(message);
// a) "Emma Smith, London, UK"
// b) "Emma Smith, London, undefined"
// c) "Emma Smith, undefined, undefined"
// d) TypeError: Cannot read property 'firstName' of undefined

// Answer: a) "Emma Smith, London, UK"

// What will be the output of the following code?
// javascript
// Copy code
// function greet(message) {
//   return message + ' ' + this.name;
// }

// const person = { name: 'Bob' };
// const greetBob = greet.bind(person, 'Hi');
// console.log(greetBob());
// a) "Hi Bob"
// b) "Hi undefined"
// c) "Hi "
// d) TypeError: Cannot read property 'name' of undefined

// Answer: a) "Hi Bob"

// What does the following code snippet output?
// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];
// const maxNumber = Math.max.apply(null, numbers);
// console.log(maxNumber);
// a) 5
// b) 1
// c) NaN
// d) TypeError: Cannot read property 'apply' of null

// Answer: a) 5



//Question Behaviour of event capturing (Parent to child) and event bubbling (child to parent)

// For the outer and middle buttons, event listeners are registered with true,
//  indicating event capturing.

// For the inner button, event listeners are registered without specifying true,
//  indicating event bubbling (default behavior).


// <!DOCTYPE html>
// <html>
// <head>
//     <title>Event Bubbling</title>
// </head>
// <body>
//     <div id="outer">
//         <div id="middle">
//             <div id="inner">Click me!</div>
//         </div>
//     </div>
//     <script>
//         document.getElementById('outer').addEventListener('click', function() {
//             console.log('Outer div clicked - Bubbling phase');
//         });

//         document.getElementById('middle').addEventListener('click', function() {
//             console.log('Middle div clicked - Bubbling phase');
//         });

//         document.getElementById('inner').addEventListener('click', function() {
//             console.log('Inner div clicked - Bubbling phase');
//         });
//     </script>
// </body>
// </html>


//Example---------------------------------
// document.getElementById('outer').addEventListener('click', function(event) {
//   console.log('Outer button clicked - Capturing phase');
// }, true); // Event capturing

// document.getElementById('middle').addEventListener('click', function(event) {
//   console.log('Middle button clicked - Capturing phase');
// }, true); // Event capturing

// document.getElementById('inner').addEventListener('click', function(event) {
//   console.log('Inner button clicked - Capturing phase');
// }, true); // Event capturing

// document.getElementById('outer').addEventListener('click', function(event) {
//   console.log('Outer button clicked - Bubbling phase');
// }); // Event bubbling

// document.getElementById('middle').addEventListener('click', function(event) {
//   console.log('Middle button clicked - Bubbling phase');
// }); // Event bubbling

// document.getElementById('inner').addEventListener('click', function(event) {
//   console.log('Inner button clicked - Bubbling phase');
// }); // Event bubbling


// Event Capturing:-----

// When using event capturing in JavaScript, which phase does the event propagate through first?

// A) Target phase
// B) Bubbling phase
// C) Capturing phase
// D) Event phase

// ANS: C) Capturing phase

// Which method in JavaScript is used to attach an event listener with event capturing?

// A) addEventListener
// B) attachEvent
// C) on
// D) bindEvent

// ANS:A) addEventListener

// Event Bubbling:------

// When using event bubbling in JavaScript, which phase does the event propagate through after reaching the target element?

// A) Capturing phase
// B) Bubbling phase
// C) Target phase
// D) Event phase

// ANS:B) Bubbling phase

// By default, which phase of event propagation does JavaScript use when attaching an event listener without specifying a phase?

// A) Target phase
// B) Bubbling phase
// C) Capturing phase
// D) Event phase

// ANS:B) Bubbling phase

// Combining Event Capturing and Bubbling:

// In JavaScript, can event capturing and event bubbling be used simultaneously for the same event?

// A) Yes, they can be used together without any restrictions.
// B) No, they cannot be used together as they are mutually exclusive.
// C) Yes, but only in modern browsers.
// D) Yes, but only in older browsers.

// ANS: A) Yes, they can be used together without any restrictions.

// Which phase of event propagation takes precedence when event capturing and event bubbling are both used for the same event?

// A) Event phase
// B) Target phase
// C) Capturing phase
// D) Bubbling phase

// ANS:C) Capturing phase


// Cross-Browser Compatibility:
// Which browser introduced event capturing in JavaScript?

// A) Internet Explorer
// B) Firefox
// C) Google Chrome
// D) Netscape Navigator

// ANS:D) Netscape Navigator

// When dealing with cross-browser compatibility issues related to event capturing and event bubbling, what is a common approach used by developers?

// A) Using vendor-specific prefixes
// B) Using polyfills
// C) Ignoring the issue and focusing on modern browsers
// D) Avoiding event capturing and event bubbling altogether

// Answers:B) Using polyfills


//Question  equality comparisons:
//The main difference between == and === in JavaScript is how they handle equality comparisons:

//== : it is known as loose equality that only check value ,not the data type
// console.log(5 == "5"); // Output: true
// console.log(null == undefined); // Output: true


//=== : it is known as Strict Equality that  check both  value  and  data type
// console.log(5 === "5"); // Output: false
// console.log(null === undefined); // Output: false
// console.log("5" === "5"); // Output: true
// console.log(20 === 21); // Output: false


//question
//What are the data types in JavaScript?
// JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.

// Value Types:
// Primitive types (e.g., numbers, strings, booleans,null, undefined) are
//  stored directly in memory where the variable is allocated. When you assign a value 
//  to a new variable or pass it to a function, a copy of the value is created.

//EXAMPLE
// let name ='sanju'
//  let remane =name
// name="vvv"
// console.log(name) //vvv
// console.log(remane) // sanju
//console.log(remane===name)//false

// Reference Types:
// Objects, arrays, functions, and other complex types are stored
//  in memory separately from the variable that references them. Variables of reference types store references
//   (pointers) to the memory locations where the actual data is stored. When you assign 
// a reference type to a new variable or pass it to a function, you are copying the reference, not the data itself.

//EXAMPLW
// let arr =["vv"]
//  let newarr = arr
//  arr.push("pp")
//  console.log(arr)// [ 'vv', 'pp' ]
// console.log(newarr)  //[ 'vv', 'pp' ]
//console.log(newarr ===arr)//true


// Primitive data type   ///  string, number, boolean, undefined, null , BigInt=2113434n// VALUE TYPE
// Non-primitive (reference) data type   //objects, arrays, functions  // REFERENCE TYPE // all return type is an object

//NOTE
// a reference data type (or reference type) refers to a type of data that stores references 
// (addresses) to the memory locations of other objects rather
//  than the data itself. This is in contrast to value types, which directly store their data values.

//or
// When you create a variable of a reference type and assign it
//  a value, you are actually storing a reference (memory address) to the location where the
//  actual data is stored in memory. This reference allows you to access 
//  and manipulate the underlying data indirectly.

//diffrenece between undefined and null

//1 Definition
//undefined: represents a variable that has been declared but has not been assigned a value.

// let variable;
// console.log(variable); // Output: undefined

 //null: represents a variable intentionally has no value or an object property has no assigned value.

//  let obj = null;
//  console.log(obj); // Output: null
 

// 2 Type:

// undefined: Is a type itself in JavaScript, representing the absence of a value.
// null: Is an object type in JavaScript, although typeof null returns 'object', which is a historical quirk in JavaScript
// console.log(typeof(null))  //object

// 3 Usages
// undefined: when trying to access properties that do not exist.
// null:  when there is a deliberate absence of a value.


// 4 Behavior in Functions:

// When a function does not explicitly return a value, it implicitly returns undefined.              //explicitly means  aspast roop  se     ,implicitly means : uljhav roop se
// If a function explicitly returns null, it means the function intentionally returns no value.


//5 Equlity comparison
// undefined: Loosely equal (==) to both null and undefined, but not strictly equal (===) to anything except undefined.
// null: Loosely equal (==) to undefined and itself, but not strictly equal (===) to anything except null.

// example
// console.log(null === undefined); // Output: false
// console.log(null == undefined); // Output: true


//5 top case----------------------------
// Scenario 1: Initialization of Variables

// javascript
// Copy code
// let x; // Variable declared but not initialized, defaults to undefined
// console.log(x); // Output: undefined

// let y = null; // Variable explicitly initialized to null
// console.log(y); // Output: null



// Scenario 2: Object Properties
// javascript
// Copy code
// let person = {
//     name: "John",
//     age: undefined // Property initialized to undefined, indicating the age is not yet known
// };
// console.log(person.name); // Output: "John"
// console.log(person.age); // Output: undefined

// let car = {
//     make: "Toyota",
//     model: null // Property initialized to null, indicating the model is intentionally absent
// };
// console.log(car.make); // Output: "Toyota"
// console.log(car.model); // Output: null


// Scenario 3: Function Returns
// javascript
// Copy code
// function getUser() {
//     // Function does not return a value, implicitly  returns undefined         implicitly means:(It means that you trust them without question)
// }
// console.log(getUser()); // Output: undefined

// function findUser(id) {
//     if (id === 1) {
//         return { name: "Alice" };
//     } else {
//         return null; // Explicitly returning null when user is not found
//     }
// }
// console.log(findUser(1)); // Output: { name: "Alice" }
// console.log(findUser(2)); // Output: null


// Scenario 4: Comparison and Validation
// javascript
// Copy code
// let z; // Variable declared but not initialized, defaults to undefined
// console.log(z == null); // Output: true (loose equality comparison)

// let status = null;
// if (status === null) {
//     console.log("Status is null."); // Output: "Status is null."
// } else if (status === undefined) {
//     console.log("Status is undefined.");
// } else {
//     console.log("Status has a value.");
// }
//ans: Status is null.


//##OBJECTS
//Question 1


// let user = [{
//     fname:"piya",
//     lname:"sharma"
// }]

// let user1 =[...user ,{age:30}]  
//console.log(user1)  // [{fname:"piya",lname:"sharma"},{age:30}]

// let user1= [...user]
// user1.fname = 'anisha'
//console.log(user1) [ { fname: 'piya', lname: 'sharma' }, fname: 'anisha' ]

//  let key = "fname" 
// console.log(user[key]) //piya

//  let key = prompt ("fname") 
// console.log(user[key]) //fname



//##STRINGS
///Question-----------------
// let store = "Hello"
// console.log(store.length) //5
// console.log(store[3]) //l
// console.log(store[-2]) //The square brackets always return undefined for negative indexes, for instance:
// alert(store.at(-2));   //l


//Question_______________--
// for (let char of "Hello"){
//     console.log(char)
// }
// H
// e
// l
// l
// o

// //STRING
// let str = "asdfghjk"

// for (let char of str){
//     console.log(char)
// }
// a
// s
// d
// f
// g
// h
// j
// k
// a
// s
// d
// f
// g
// h
// j
// k
// //OR
// for (let char of "asdfghjk"){
//     console.log(char)
// }
//*************************************
//Strings can’t be changed in JavaScript
//The usual workaround is to create a whole new string and assign it to str instead of the old one.

//  let name ="Nia"
//  newname = "Pi" + name[2] 
//  //console.log(newname) //Pia

// let Fname ='sanju'
// let rename = Fname[0].toUpperCase() + Fname.slice(1)// by using it will give substring
// //console.log(rename) //Sanju

//Question************************
// let products = "DataRequired"
// console.log("DataRequired".toLowerCase()) //datarequired
// console.log("DataRequired"[4].toLowerCase()) //r
// console.log("management"[0].toUpperCase()) //M


//EXAMPLE********************************
//let str = "this is the best product in  the india"
// console.log(str.length) //37
// console.log(str.length) //38
// console.log(str[5]) //i
// console.log(str[7]) //whiteSpace
// console.log(str[40]) //undefined

// str1= 'Thi' + str[3]
// console.log(str1)//This

// position =0
//  let finalStr =str.slice(0,position) + str1 +str.slice(position)
//  console.log(finalStr)//Thisthis is the best product in  the india

// console.log("this is the best product in  the india".toUpperCase())
// console.log("this is the best product in  the india"[0].toUpperCase())
//THIS IS THE BEST PRODUCT IN  THE INDIA
//T
// console.log("Mine"[0].toLowerCase())
// console.log("Mine".toLowerCase())
//m
//mine



//TOPIC
//Searching for a substring
//There are multiple ways to look for a substring within a string.

// 1- str.indexOf(substr, pos).
//Example
// let str = 'Widget with id';
// alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
// alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
// alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

// 2-str.lastIndexOf(substr, position)
// 3-includes, startsWith, endsWith //The more modern method str.includes(substr, pos) returns true/false depending on whether str contains substr within.
//Example
// alert( "Widget".includes("id") ); // true
// alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"
// alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
// alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"


//EXAMPLES

 // indexOf, includes, startsWith, endSWith,lastIndexOf
//let str = "this is the best product in  the india"
//  console.log(str.length) //38
//  console.log(str.indexOf('is'))//2
//  console.log(str.indexOf('am'))//-1
//  console.log(str.indexOf('india'))//33
  //console.log(str.includes("india"))//true
  //   console.log(str.includes("usa"))//false
// console.log(str.startsWith('this'))//true
//  console.log(str.endsWith("in"))//false
//   console.log(str.lastIndexOf("india"))//33
 


//GET A SUBSTRING
 // slice,  substring,  substr

//  let str = "this is the best product in  the india"
//  //slice not include end
//  // in case of slice always start<end if it is not like that the swap the   parameter
//  console.log(str.slice(3,8))//s is 
//  console.log(str.slice(3))// s is the best product in  the india
//  console.log(str.slice(6,3))// empty
// console.log(str.slice(3,6)) //by swap s i

// Q- ucFirst ="john"==John
// let ucFirst ="john"
// let newStr = ucFirst[0].toUpperCase() + ucFirst.slice(1)
// console.log(newStr)//John




//TOPIC
//To get a substring, use: slice or substring.

//ARRAYS
//Array is an object and thus behaves like an object.
//arr[0]  //actually come from the object syntax.That’s essentially the same as obj[key], 
//where arr is the object, while numbers are used as keys.

// contiguous memory area :refers to a block of memory where elements or data are stored in
//  consecutive or sequential locations. This means that the elements are stored one after another
//  in memory without any gaps or spaces between them.

 // IMPORTANT FORMULA -------- PUSH/POP FOR FROM END ,UNSHIFT/SHIFT FOR FROM START 

//let fruits = ["Apple", "Orange","aa","qwe"]
//method-1
//So new elements are added or taken always from the “end”.that is push ,pop
//alert( fruits.pop() ); //qwe
//fruits.push("banana")
//console.log(fruits)//[ 'Apple', 'Orange', 'aa', 'qwe', 'banana' ]

//1-shift
//console.log(fruits.shift())//Apple
//console.log(fruits)//[ 'Orange', 'aa', 'qwe' ]

//2-unshift
//fruits.unshift('ttt')
//console.log(fruits)//[ 'ttt', 'Apple', 'Orange', 'aa', 'qwe' ]
// we can extract/get  any index elements without using any formula
// positive array counting from 0 to .....
// negetive array counting from -1 to .....
// console.log(fruits.at(-3))//orange
// fruits[2] = "assd"
//console.log(fruits)//[ 'Apple', 'Orange', 'assd', 'qwe' ]
//console.log(fruits.length)//4

//EXAMPLES
// let order = ["bb"]
// order.unshift("aa")// add at beginning 
// order.push("cc")// add at end 
// console.log(order)//[ 'aa', 'bb', 'cc' ]

// let lists =["01","02","03","04","05","06"]
// console.log(lists.pop())//Extracts at end   ///06
// console.log(lists.shift())//Extracts at beginning   ///01
// console.log(lists)//[ '02', '03', '04', '05' ]

//Qusetion
// let list = ["abc"]
// let arr = list
// console.log(list === arr) //true
// arr.push("bca") // // modify the array by reference
// console.log(list)//[ 'abc', 'bca' ]

//QUESTION
// let list =["abc"]// Array is also a special kind of an object
// list.age=26
// console.log(list)//[ 'abc', age: 26 ]
// console.log(list.age)//26

//QUESTION
//ARRAY
// let arr = ["Apple", "Orange", "Pear"];

// for (let i = 0; i < arr.length; i++) {
//   console.log( arr[i] );
// }

// Apple
// Orange
// Pear

//QUESTION
// let arr =[]
// arr[99]="apple"
// console.log(arr.length)//100

//QUESTION
//let arr =[0,1,2,3,4,5,6]
// arr.length =2
// console.log(arr)//[ 0, 1 ]

//QUESTION
// let arr =[
//     [1,2,3],// 0 index
//     [4,5,6],// 1 index
//     [7,8,9] // 2 index
// ]
//console.log(arr.length)//3
//console.log(arr[2])//[ 7, 8, 9 ]
// console.log(arr[0][1])//2 second element of 0 index

//OUTPUT BASED QUESTIONS
// toString

//  let arr = [1,2,3,4]
//   console.log(String(arr) === "1234")//false
//   console.log(String(arr) ==="1,2,3,4")//true

//OUTPUT BASED QUESTIONS
// they implement only toString conversion, so here [] becomes an empty string, [1] becomes
//  "1" and [1,2] becomes "1,2".

//IMPORTANT NOTE: in which every answer you get to see on screen like vs code,js complier without string.
// but it assume when we use .toString()  then the answer will get in string. like in example

// example:
// console.log((1).toString()) //"1"
// console.log(([1,4]+3).toString()) //"1,43"

    // console.log([1]+1) //11
    //   console.log([1,4]+3) //"1,43"
    //       console.log(["1"]+1) //"11"   
    //       console.log([1,8]+"1") //"1,81"
    //     console.log([0]+0) //"00" 
    //   console.log([0]+"1") //"01"
    //       console.log(["1,5"]+"1,9")//"1,51,9"    
    //       console.log(["1"]+1,7) //"11,7"
    //  console.log([]+1,7) //1 7
    //  console.log([]+"1,7") //1,7
    //  console.log([""]+1,7) //1 7 

 //RULES
// alert( [] + 1 ); // "1"             
// alert( [1] + 1 ); // "11"
// alert( [1,2] + 1 ); // "1,21"

// alert( "" + 1 ); // "1"
// alert( "1" + 1 ); // "11"
// alert( "1,2" + 1 ); // "1,21"


//OUTPUT BASED QUESTIONS
//Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.
// This operator has no special treatment for arrays, it works with them as with any objects.(becoz of it we can not use array compared with operator ==. )
//So, how to compare arrays?
//That’s simple: don’t use the == operator. Instead, compare them item-by-item in a loop or using iteration methods

// console.log(0 == []) //true
// console.log(0 == '') //true
// console.log('0' == []) //false
// console.log('0' == '') //false


//OUTPUT BASED QUESTIONS
// console.log([] == []) //false
// console.log([0] == [0]) //false
//console.log({}== {}) //false
//console.log({0} == {0}) //Unexpected number

//OUTPUT BASED QUESTIONS
//QUESTION Is array copied?  answer : would be yes  

// let arr =['ab','bc','cd','ed','ef']
// let newarr = arr
// newarr.push('fg')
// console.log(newarr.length)//6
// console.log(newarr)//[ 'ab', 'bc', 'cd', 'ed', 'ef', 'fg' ]  modify the array by reference

//OUTPUT BASED QUESTIONS
// let arr =['Jazz', 'Blues']
// //point-1
// arr.push( 'Rock-n-Roll')
// //console.log(arr)//[ 'Jazz', 'Blues', 'Rock-n-Roll' ]
// //point-2
// arr[1] ='Classics'
// //console.log(arr)//[ 'Jazz', 'Classics', 'Rock-n-Roll' ]
// arr.shift('Jazz')
// //console.log(arr)//[ 'Classics', 'Rock-n-Roll' ]
// arr.unshift('Rap, Reggae')
// console.log(arr)//[ 'Rap, Reggae', 'Classics', 'Rock-n-Roll' ]

//OUTPUT BASED QUESTIONS
// let arr =['Jazz', 'Blues']
// let newarr = arr or  newarr = arr
// newarr.push('ab')
// console.log(newarr)//['Jazz', 'Blues', 'ab' ]  modify the array by reference
// console.log(arr)//['Jazz', 'Blues', 'ab' ]  


//ARRAY METHODS
//IMP FOR INTERVIEW
//The element was removed, but the array still has 3
// elements, we can see that arr.length == 3.
//That’s natural, because delete obj.key removes a value by the key.
//becoz array behave like an object here

// let arr =['ab','bc','ca']
// delete arr[1]
// console.log(arr[1])//undefined
// console.log(arr)// [ 'ab', <1 empty item>, 'ca' ]
// console.log(arr.length)// 3```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// console.log(arr.length == 3)//true


//FOR ARRAY
//The arr.splice method is a swiss army knife for arrays.It can do everything: insert,remove and replace elements.
```````````````````````````````````
// Slice:`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// Extracts a portion of an array.
// Creates a new array without modifying the original.
// Typically used for selecting elements.`````````````````````
// syntax:arr.slice(start,end) last element is not included.```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//example:```````````````````````````````````````````````````````````
// let originalarr = ['ab','bc','ca','de','ef','fg']````````````````````````
// newarr = originalarr.slice(2,4)
// console.log(newarr)//[ 'ca', 'de' ] created an new array and take out a portion of an array.
// console.log(originalarr)//[ 'ab', 'bc', 'ca', 'de', 'ef', 'fg' ] original array is as it is ,no changes!


// Splice:
// Adds or removes elements within an array.
// Modifies the original array.
// Used for inserting or deleting elements from an array.
//  syntax:arr.splice(start,end)
//example:
// start counting from given index to , remove given elements like arr.splice(2,5) so here including  at index 2 element ,remove total 5 elements,and return remaining elements in an array.
// let originalarr = ['ab','bc','ca','de','ef','fg' ]

// originalarr.splice(3,2)//['de','ef']
// console.log(originalarr)// ['ab','bc','ca','fg'] it is the showing deleted array

// originalarr.splice(1,5)//['bc','ca','de','ef','fg' ]
// console.log(originalarr)//[ 'ab' ]

// originalarr.splice(2,4)// ['ca','de','ef','fg' ]  this is display whose element take out from the original array
// console.log(originalarr)//['ab','bc'] // now here display only lefted elements

//To Store removal arrays
//CASE-2
// array1 = originalarr.splice(1,4)
// console.log(array1) //['bbc','ca','de','ef'' ] to store removal arrays

//QUESTION-(without deleting any array's element instead of shift the array)
// let originalarr = ['ab','bc','ca','de','ef','fg']
// // here to set delete 0  and also defined the position 1 where you want to place the new word!
// //  originalarr.splice(1,0, 'cnbc')
// //  console.log(originalarr)//[
// //   'ab', 'cnbc',
// //   'bc', 'ca',
// //   'de', 'ef',
// //   'fg'
// // ]
// //OR
// originalarr.splice(4,0,'drd','rsr')
// console.log(originalarr)
// [
//   'ab', 'bc',  'ca',
//   'de', 'drd', 'rsr',
//   'ef', 'fg'
// ]

//QUESTION-( deleting  array's elements then add elements)
// let originalarr = ['ab','bc','ca','de','ef','fg' ]
// originalarr.splice(2,4,'drd','rsr')
// console.log(originalarr)


//output based question
// let arr = ['aa', 'ab', 'bc', 'bb', 'cdc', 'edd']
// let users ={
//     name:'piya',
//     age:29
// }
// console.log(typeof users)//object
// console.log(typeof arr)//object


//QUESTION-1
// let arr = ['aa', 'ab', 'bc', 'bb', 'cdc', 'edd']
// arr.forEach( function (item, index, array) {
//     console.log(`${item}  :is item ,
//     ${index} :is index,
//      ${array} :is array `)   
// })

//IMPORTANT POINTS
//for LOOP : WHEN WE KNOW THE NO OF ITERATION
//while : WHEN WE DON'T KNOW THE ON OF ITERATION AND WANT TO MET DESIRE CONDITION
// forEach : WHEN WE WANT THE ITERATION ON EVERY ELEMENTS OF ARRAY


//Question
// let arr = ['aa', 'ab', 'bc', 'bb', 'cdc', 'edd']

// let users ={
//     name:'piya',
//     age:29
// }

// console.log(arr.concat(['a','c']))
// [
//   'aa', 'ab',  'bc',
//   'bb', 'cdc', 'edd',
//   'a',  'c'
// ]
// console.log(arr.concat(['b','db'],['cv','vc']))
// [
//   'aa', 'ab',  'bc',
//   'bb', 'cdc', 'edd',
//   'b',  'db',  'cv',
//   'vc'
// ]
// console.log(arr.concat(['rr','tt'],'pp','oo'))
// [
//   'aa', 'ab',  'bc',
//   'bb', 'cdc', 'edd',
//   'rr', 'tt',  'pp',
//   'oo'
// ]
// console.log(arr.concat(users))
// [ 'aa', 'ab', 'bc', 'bb', 'cdc', 'edd', { name: 'piya', age: 29 } ]











