// 🔹 Spread Operator (...)
// Used to expand elements of an array or object.

// ✅ Use Cases:
// Copying arrays or objects
// make a shallow copy of arrays or objects
// Combining arrays or objects
// Passing array elements as arguments to function


// ✅ Examples:
// 1. Arrays:

// js
// Copy
// Edit
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
// 2. Objects:

// js
// Copy
// Edit
// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
// 3. Function Arguments:

// js
// Copy
// Edit
// function sum(a, b, c) {
//   return a + b + c;
// }
// const nums = [1, 2, 3];
// console.log(sum(...nums)); // 6


// 🔸 Rest Operator (...)
// Used to collect remaining elements into an array or object.

// ✅ Use Cases:
// Collecting arguments in functions

// Destructuring arrays or objects

// ✅ Examples:
// 1. Function Parameters:

// js
// Copy
// Edit
// function sum(...args) {
//   return args.reduce((acc, val) => acc + val, 0);
// }
// console.log(sum(1, 2, 3, 4)); // 10
// 2. Array Destructuring:

//example---
// function Rest(a,b, ...rest){
//     console.log(a)//3
//         console.log(b)//4
//             console.log(rest)//[6,6,78]
//               console.log(arguments)//[Arguments] { '0': 3, '1': 4, '2': 6, '3': 6, '4': 78 }
// } 
//   Rest(3,4,6,6,78)


// js
// Copy
// Edit
// const [first, ...rest] = [10, 20, 30, 40];
// console.log(first); // 10
// console.log(rest);  // [20, 30, 40]
// 3. Object Destructuring:

// js
// Copy
// Edit
// const { a, ...others } = { a: 1, b: 2, c: 3 };
// console.log(a);      // 1
// console.log(others); // { b: 2, c: 3 }











// ///[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]====================



// 🔹 Spread Operator (...) – Practical Definition
// The spread operator is used when you want to take an array or object and "unpack"
//  its values into another array, object, or function. You're spreading its contents out.

// 🧠 Think of it like:
// "I have a box of items (array or object), and I want to open the box and take everything out, piece by piece."

// ✅ Example (Practical Use):
// js
// Copy
// Edit
// const oldItems = ['pen', 'pencil'];
// const newItems = ['eraser', ...oldItems, 'sharpener'];
// console.log(newItems); 
// // ['eraser', 'pen', 'pencil', 'sharpener']
// You're combining multiple arrays into one, or passing all items from one array into a function.

// 🔸 Rest Operator (...) – Practical Definition
// The rest operator is used when you want to gather the remaining items into an array or object. You're collecting what's "left over."

// 🧠 Think of it like:
// "I only want the first item separately, and the rest can go into a group or bag."

// ✅ Example (Practical Use):
// js
// Copy
// Edit
// const [first, ...others] = ['apple', 'banana', 'cherry'];
// console.log(first);  // 'apple'
// console.log(others); // ['banana', 'cherry']
// Also in functions:

// js
// Copy
// Edit
// function greet(first, ...others) {
//   console.log(`Hello ${first}`);
//   console.log(`Others:`, others);
// }

// greet('Alice', 'Bob', 'Charlie');
// // Hello Alice
// // Others: ['Bob', 'Charlie']
// 🎯 One-Liner to Remember:
// Spread = “Break it apart”

// Rest = “Gather the rest”

// Want me to make a visual or analogy for this too?



// You said:
// give me  waht is the main diffference between  in practical ways?


// ChatGPT said:
// Absolutely! Here’s the main difference between the spread and rest operators in a practical, simple way:

// 🟩 Main Practical Difference

// Operator	What It Does	When You Use It	Real-Life Analogy
// Spread (...)	Unpacks values	When you're sending out or copying values	You're emptying your bag and putting everything on the table
// Rest (...)	Packs values	When you're receiving many values and want to group them	You're scooping up leftovers into a new bag
// 🧪 Practical Code Comparison:
// ✅ Spread (Expanding):
// js
// Copy
// Edit
// const fruits = ['apple', 'banana'];
// const moreFruits = [...fruits, 'orange'];
// console.log(moreFruits); 
// // ['apple', 'banana', 'orange']
// 👉 You’re unpacking fruits into another array.

// ✅ Rest (Collecting):
// js
// Copy
// Edit
// const [first, ...rest] = ['apple', 'banana', 'orange'];
// console.log(first); // 'apple'
// console.log(rest);  // ['banana', 'orange']
// // 👉 You’re collecting the remaining items into rest.

// 💡 Quick Memory Trick:
// Spread = Send out

// Rest = Receive all remaining





//----------------------------------------------------------------------------------------------------///




// 🟩 Shallow Copy – Practical Definition
// A shallow copy copies only the first layer of an object or array. If the object has nested objects, those are still linked to the original.

// 🧠 Think of it like:
// You're making a duplicate of a document, but the inside pages (nested objects) are still shared between the copies.

// ✅ Example:
// js
// Copy
// Edit
// const original = {
//   name: 'Alice',
//   address: { city: 'Delhi' }
// };

// const copy = { ...original }; // Shallow copy using spread

// copy.name = 'Bob';           // ✅ Independent change
// copy.address.city = 'Mumbai'; // ⚠️ Changes original too!

// console.log(original.address.city); // 'Mumbai'
// 🔴 Problem: Changing copy.address.city also changes original.address.city because the nested object is shared.


//------------------------
// One-Line Interview Answer

// Object.assign copies references, Object.freeze blocks top-level changes but not nested ones. Both are shallow.
//Object.freeze prevents changes, Object.assign copies data — they solve opposite problems.

//Use assign to change data safely, use freeze to stop data from changing.


// Final Difference (Very Important)
// Behavior	Object.assign(obj)	
// Creates new object   	❌ No	
// Can change top-level	✅ Yes	
// Can change nested	    ✅ Yes	
// Purpose           	Copy / merge
// Shallow             	✅ Yes	



// const obj ={
//     age:20,
//     address:{city:'pune'}
// }
//  let user =Object.assign({},obj)

// user.age = 40;
// user.address.city = 'delhi';
// console.log(user)//{ age: 40, address: { city: 'delhi' } }
// console.log(obj)//{ age: 20, address: { city: 'delhi' } }



// Final Difference (Very Important)
// Behavior      	Object.freeze(obj)
// Creates new object  	❌ No
// Can change top-level    ❌ No
// Can change nested	    ✅ Yes
// Purpose	        	Prevent mutation(stop : update,add,delete)
// Shallow	          	✅ Yes

// const obj ={
//     age:20,
//     address:{city:'pune'}
// }
//  let user =Object.freeze(obj)

// user.age = 40;
// user.address.city = 'delhi';
// console.log(user)//{ age: 20, address: { city: 'delhi' } }
// console.log(obj)//{ age: 20, address: { city: 'delhi' } }



//--------------------------------------

// In JavaScript, Object.freeze() locks an object so it cannot be changed.
// What freeze does ✅

// ❌ Cannot change existing values
// ❌ Cannot add new properties
// ❌ Cannot delete properties

// const obj = { name: "Sanju" };
// Object.freeze(obj);

// obj.name = "Rao";   // ❌ not allowed
// obj.age = 25;      // ❌ not allowed
// delete obj.name;   // ❌ not allowed

// console.log(obj);  // { name: "Sanju" }


// Important catch (very important for interviews ⚠️)

// Object.freeze() is SHALLOW

// const user = {
//   name: "Sanju",
//   address: { city: "Delhi" }
// };

// Object.freeze(user);
// user.address.city = "Noida"; // ✅ works!

// Why?
// Only the top-level object is frozen, not nested objects. 









// 🟦 Deep Copy – Practical Definition
// A deep copy makes a full, independent copy of the object — including all nested objects. Nothing is shared with the original.

// 🧠 Think of it like:
// You’re photocopying every page and folder inside a document — it's a full, separate clone.

// ✅ Example:
// js
// Copy
// Edit
// const original = {
//   name: 'Alice',
//   address: { city: 'Delhi' }
// };

//  Deep copy using JSON method
// const deepCopy = JSON.parse(JSON.stringify(original));

// deepCopy.address.city = 'Mumbai';

// console.log(original.address.city); // 'Delhi' ✅ Unaffected
// ✅ Now, changing the nested value in deepCopy does not affect original.





// Why JSON.parse(JSON.stringify(obj)) is bad for deep cloning in production?

//structuredClone(obj);  and  JSON.parse(JSON.stringify(obj));
//Better option is structuredClone(obj)


// JSON.parse(JSON.stringify(obj)) is not the better option because of
// Silently removes functions
// Converts Date → string
// Drops undefined
// Breaks BigInt

// structuredClone enforces a clean separation between data and behavior, which is critical for scalable and reliable systems.

// structuredClone safely deep-clones structured data, but intentionally fails on functions to avoid copying executable behavior.


// What structuredClone is designed to do

// structuredClone only clones data, not behavior.

// ✅ Can clone:

// Objects
// Arrays
// Date
// Map / Set
// BigInt
// undefined

// Circular references

// ❌ Cannot clone:

// Functions ❌
// Classes ❌
// DOM nodes ❌
// Closures ❌


// const obj = {
//   date: new Date(),
//   fn: () => console.log("hi"),
//   undef: undefined,
//   big: 10n
// };
// const {fn , ...dataOnly} = obj
// let newObj = structuredClone(dataOnly);
// console.log(newObj);//{ date: 2026-01-01T13:12:20.687Z, undef: undefined, big: 10n }


// How to fix it (real-world solutions) using structuredClone
// ✅ Solution 1: Remove functions before cloning
// ✅ Solution 2: Store functions separately (best practice)





//--Regular Expression-- used

// Regular Expressions (RegEx) in JavaScript —
// a very powerful way to search, match, and transform text (strings).

// Let’s break this down step by step, so you understand where and why we use:
// str.replace(), str.match(), and str.test() — especially when combined with regex like /\d+/g.



// let str = 'asby34 mbnmv778'
// let str1 = 'asby mbnmv'

// console.log(str.match(/\d+/g))//['34','778']
// console.log(str.match(/[a-z]+/g))//[ 'asby', 'mbnmv' ]

// console.log(/\d+/.test(str))//true
// console.log(/\d+/.test(str1))//false

// console.log(str.replace('m','M'))//asby34 Mbnmv778
// console.log(str.replaceAll('m','M'))//asby34 MbnMv778

