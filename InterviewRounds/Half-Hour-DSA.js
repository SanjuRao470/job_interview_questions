//-----------------INTERVIEW DSA QUESTION----------------------

//---------------commonly asked recursion-based DSA questions using arrays and objects, ----------------------------------
//I use recursion to handle nesting object 
// ///Does the nested structure have the same pattern inside it (self-similarity)?

//---Mindset Summary for Recursion
//----When you see nested / repeated structure:
//1-Identify: Is the problem self-similar at smaller levels? Yes → recursion candidate.
//2-Base Case: Define when to stop recursion.
//3-Recursive Step: Decide what smaller problem to solve next.
//4-Combine: Merge the smaller results.
//5-Test Small Cases: Trace by hand before coding fully.

//-QUESTION-Count current level keys → if nested object, count inside it using the same function.
// function countKey(obj){
//     let count  = 0;
//    for(let key in obj){
//        count++;
//        if(typeof obj[key] === 'object' && obj[key] !== null &&  !Array.isArray(obj[key])){
//            count+=countKey(obj[key])  ////recursive call
//        }
//    }
//   return count;
//    }
// const obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3
//     }
//   },
//   f: 4
// };

// const result = countKey(obj)
// console.log(result)//6


///---------------------------//
//-QUESTION-Sum current numbers → if nested object, sum its numbers recursively.
//  function sumObjectValues(obj){
//     let  sum = 0;
//     for(let key in obj){
//     if(typeof obj[key] === 'object' &&  obj[key] !== null && obj[key] !== Array.isArray(obj[key])){
//       sum += sumObjectValues(obj[key]) //recursive call
//      }
//      else if(typeof obj[key] === 'number'){
//           sum += obj[key]
//     }
//     }
//     return sum;
// }

// const obj = { 
//     a:1,
//     b:{
//         h:2,
//         c:{
//             d:3
//         }
//     },
//     e:{
//         f:4
//         },
//         g:6,
//         k:"s"
//     }
// const result = sumObjectValues(obj)
// console.log(result)//16


//-----------------
//-QUESTION-For each element → if it’s an array, flatten it → else add to result.
// function flattenArray(array) {
//   const output = [];

//   for(let ele of array){
//       if(Array.isArray(ele)){
//           output.push(...flattenArray(ele)) ////recursive call
//       }else{
//          output.push(ele)
//       }
//   }
//   return output;
// }

// const arr = [[4,5],[9,6] ,[3, 4]];
// const result = flattenArray(arr);
// console.log(result); //[ 4, 5, 9, 6, 3, 4 ]

// 🧠 Takeaway
// You must handle both cases:

// If it's an array → recursively flatten

// If not → push directly

// Without the else, the non-array values are ignored, leading to an empty result.




















// function placeElementAtEnd(arr){
//     const output = [];
//     let zerosCount = 0;
//     for(let count of arr){
//         if(count === 0){
//             zerosCount++;
//         }else{
//            output.push(count) 
//         }
//     }
//     while(zerosCount--){
//         output.push(0)
//     };
//     return output;
//     }
// const arr = [0,2,3,4,5,7,8,9,0,4,0]
// const result = placeElementAtEnd(arr)
// console.log(result)
// //[
// //   2, 3, 4, 5, 7,
// //   8, 9, 4, 0, 0,
// //   0
// // ]



//1. Finding Duplicate Elements in an Array

// function findDuplicates(array) {
//     let duplicate = []; // Stores duplicate values

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] === array[j]) { // If a duplicate is found
//                 if (!duplicate.includes(array[i])) { // Ensure no duplicate entries
//                     duplicate.push(array[i]);
//                 }
//             }
//         }
//     }
//     return duplicate;
// }

// const array1 = [1, 2, 3, 2, 4, 5, 4, 5, 9, 7, 9];
// console.log("Duplicates:", findDuplicates(array1)); // Output: [2, 4, 5, 9]

//2. Removing Duplicates from an Array (Finding Unique Elements)

// function removeDuplicates(array) {
//     let unique = []; // Stores unique values

//     for (let i = 0; i < array.length; i++) {
//         if (!unique.includes(array[i])) { // If value is not already in unique array
//             unique.push(array[i]); // Add it
//         }
//     }
//     return unique;
// }

// const array2 = [1, 2, 3, 2, 4, 5, 4, 5, 9, 7, 9];
// console.log("Unique elements:", removeDuplicates(array2)); // Output: [1, 2, 3, 4, 5, 9, 7]

//How to Answer in an Interview?

// For finding duplicates:
// "I use a nested loop to compare each element with every other element. If a duplicate is found and not already added, I store it in a separate array."

// For removing duplicates:
// "I iterate through the array and add elements to a new array only if they are not already present."
// "For better performance, I can use the Set object, which automatically removes duplicates in O(n) time."


//1. Sorting an Array in Ascending Order After Removing Duplicates

// function sortAscending(array) {
//     let unique = [];

//     // Step 1: Remove duplicates
//     for (let i = 0; i < array.length; i++) {
//         if (!unique.includes(array[i])) {
//             unique.push(array[i]);
//         }
//     }

//     // Step 2: Sort in ascending order using Bubble Sort
//     for (let i = 0; i < unique.length; i++) {
//         for (let j = 0; j < unique.length - 1 - i; j++) {
//             if (unique[j] > unique[j + 1]) { // Swap if left element is greater
//                 let temp = unique[j];
//                 unique[j] = unique[j + 1];
//                 unique[j + 1] = temp;
//             }
//         }
//     }

//     return unique;
// }

// const array = [1, 2, 3, 2, 4, 5, 4, 5, 9, 7, 9];
// console.log("Sorted in Ascending Order:", sortAscending(array)); 
// // Output: [1, 2, 3, 4, 5, 7, 9]


//2. Sorting an Array in Descending Order After Removing Duplicates

// function sortDescending(array) {
//     let unique = [];

//     // Step 1: Remove duplicates
//     for (let i = 0; i < array.length; i++) {
//         if (!unique.includes(array[i])) {
//             unique.push(array[i]);
//         }
//     }

//     // Step 2: Sort in descending order using Bubble Sort
//     for (let i = 0; i < unique.length; i++) {
//         for (let j = 0; j < unique.length - 1 - i; j++) {
//             if (unique[j] < unique[j + 1]) { // Swap if left element is smaller
//                 let temp = unique[j];
//                 unique[j] = unique[j + 1];
//                 unique[j + 1] = temp;
//             }
//         }
//     }

//     return unique;
// }

// console.log("Sorted in Descending Order:", sortDescending(array)); 
// // Output: [9, 7, 5, 4, 3, 2, 1]


// How to Answer in an Interview?
// For sorting after removing duplicates:

// "First, I remove duplicates using a loop and an array. Then, I use Bubble Sort to arrange the values in ascending or descending order."
//This process is repeated until the array is sorted in desired  order.
// "A more optimized approach is using Set to remove duplicates and .sort() for sorting, reducing complexity to O(n log n)."

//Bubble sorting----
//Bubble Sort is one of the simplest sorting algorithms. It repeatedly compares adjacent elements and swaps them if they are in the wrong order. 



