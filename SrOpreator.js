// 🔹 Spread Operator (...)
// Used to expand elements of an array or object.

// ✅ Use Cases:
// Copying arrays or objects
//make a shallow copy of arrays or objects
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

// // Deep copy using JSON method
// const deepCopy = JSON.parse(JSON.stringify(original));

// deepCopy.address.city = 'Mumbai';

// console.log(original.address.city); // 'Delhi' ✅ Unaffected
// ✅ Now, changing the nested value in deepCopy does not affect original.

