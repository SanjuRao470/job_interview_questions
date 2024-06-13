// Q-1 Find the sum of all array element

// arr = [2,4,6,8]
// sum =0;
// for(let i=0; i< arr.length; i++){
//     //sum+= arr[i]
//     sum = sum+arr[i]
// }
// console.log("sum",sum)
// by reduce method---------
// let sum1 = arr.reduce( (e)= (i,j) =>i+j )
// console.log("sum",sum1)

// QUESTION-2 Write a function to count the frequency of each element in an array.
//  arr=[1,2,3,1,2,3,4,5,1,1,5]
 
//  function freObj(arr){
//      let frequency={};
     
//      for(let i=0; i<arr.length; i++){
//          let ele = arr[i]
//          frequency[ele] ?  frequency[ele]+=1 :  frequency[ele]=1
       
//     //      if(frequency[ele]){
//     //           frequency[ele]+=1
//     //      }else{
//     //         frequency[ele]=1
//     //      }
    
//      }
//      return frequency
     
//  }
//  let result = freObj(arr)
//  console.log(result)

// //or----------

//  arr=[1,2,3,1,2,3,4,5,1,1,5]
 
//  let frequency = arr.reduce((freObj, ele)=>{
//      freObj[ele] ?  freObj[ele]+=1 : freObj[ele] =1
//      return freObj;
//  },{})
//  console.log(frequency)

// QUESTION-3 Add the new element in the eixiting array at specific postion.
// different ways:
// 1- using slice
// 2- using reduce
// 3- using loop


// ------function----------


// let indexElement = (array1, index) => {
   
//     let newArray = [];

//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] === index) {
//             newArray.push(55);
//         }else{
//              newArray.push(array1[i]);
//         }
//     }
//     return newArray;
// };

// let array1 = [1, 2, 3, 4, 5];
// let index = 2;
// let result1 = indexElement(array1, index);

// console.log("Adding elements: " + result1);//Adding elements: 1,55,3,4,5


// arr = [23,45,67,78,99,10]
// let index =0
// let newarr = []

//     for( let i=0; i< arr.length; i++){
//      if(i === index){
//         newarr.push(80) 
//      } else{
//           newarr.push(arr[i])  
//      }
        
//     }

// console.log(newarr)//[ 80, 45, 67, 78, 99, 10 ]
// console.log(arr)//[ 23, 45, 67, 78, 99, 10 ]

// ---------slice-----
// arr = [23,45,67,78,99,10]
// let index = 2
// newarr = [...arr.slice(0,index),50 , ...arr.slice(index ,arr.length)]

// console.log(newarr)
// [
//   23, 45, 50, 67,
//   78, 99, 10
// ]

// -------splice-----
//  arr = [23,45,67,78,99,10]
//  let newcopy = [...arr]
// let index = 1
// let value = 100 
// newcopy.splice(index ,0 , value)

// console.log(newcopy)
// [
//   23, 100, 45, 67,
//   78,  99, 10
// ]


// QUESTION-4    Flat the nested Array

// diffrent ways to solve:
// 1- Array flat() method
// 2-using Recursion and reduce
// 3- using spread method

//  function Flat(arr){
//      return arr.flat()
//  }
//   arr = [
//   [10,20,30],
//   [50,60,70]

//   ]


// console.log(Flat(arr))//[ 10, 20, 30, 50, 60, 70 ]
// console.log([ ...arr[0] , ...arr[1] ])

// ---------reduce------
// function flatten(arr) {
    
//   const newArr = arr.reduce((acc, item) => {
      
//     if ( Array.isArray(item) ) {
//       acc = acc.concat(flatten(item));
//     } else {
//      acc.push(item);
//     }
//    return acc;
//   }, []);

//   return newArr;
  
// }

// const numArr = [1, [2, [3], 4, [5, 6, [7]]]];

// flatten(numArr) // [1, 2, 3, 4, 5, 6, 7]

// QUESTION-5 Write a function to determine if a given string is a palindrome
// diffrent ways to solve:
// 1- using loop
// 2-using split, join , reverse

// function isPalindrome(str) {
// 	let j = str.length -1  //backward check
// 	for (let i = 0; i < str.length ; i++) {
// 		if (str[i] != str[j]) {  //forward change
// 			return false;
// 		}
// 		j--;
// 	}
// 	return true;
// }

// let str1 = "racecar";
// let str2 = "nitin";
// let str3 = "Rama";

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));


//Qusetion-6  Write a function to remove a specific value from an array, modifying it in place
// diffrent ways to solve:
// 1- using loop
// 2-using pop(), shift() ,filter() ,splice()

// let removeElement = (array, removedElem) => {
   
//     let newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== removedElem) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// };

// let array = [1, 2, 3, 4, 5];
// let removedElem = 2;
// let result = removeElement(array, removedElem);

// console.log("Remaining elements: " + result);//Remaining elements: 1,3,4,5


// QUESTION-7 find duplicate  from given an array 

// let  duplicateFun = (array)=>{
//     duplicates=[]
    
// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] === array[j]) {
//             if (!duplicates.includes(array[i])) {
//                 duplicates.push(array[i]);
//             }
//         }
//     }
// }
//  return duplicates
// }

// const array = [1, 2, 3, 2, 4, 5, 4, 5, 9, 7, 9];
// let resilt = duplicateFun(array)
// console.log(resilt); // Output: [2, 4, 5, 9]

//QUESTION-8 Write a function to find the largest number in an array of numbers.
// diffrent ways to solve:
// 1- using spread
// 2-using reduce(), ForEach() ,sort() 
//3- using loop
    
// let  Fun = (array)=>{
//     let largestNum = [];//This is actually a mistake in the code because largestNum should be initialized to a number (e.g., let largestNum = -Infinity or let largestNum = array[0]), not an array.
// largestNum = array[0]
// for (let i = 0; i < array.length; i++ ) {
//  if (array[i] > largestNum) { // If the current element is greater than largestNum, largestNum is updated to this current element
//        largestNum = array[i];
//    }
// }
// return largestNum
// }

// const array = [1, 2, 3, 2, 4, 5, 4, 5, 9, 7, 9,10];
// let resilt = Fun(array)
// console.log(resilt); // Output: 10





 



















