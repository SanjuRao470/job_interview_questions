// The reduce() method 
// in JavaScript executes a reducer function
// for each array element, returning a single accumulated value. It skips empty array
// elements and doesn’t modify the original array, making it useful for concise data aggregation.

// accumulated value: it is itreable value

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, intialValue);


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


//---------------OR

// arr=[1,2,4]

// function SumFun(arr){
//     //newarr= 0 //case -1
//     //newarr= arr[0] //case-2
//     for(i=0; i< arr.length; i++){
//         newarr=newarr+arr[i]
        
//     }
//     return newarr;
// }
// let result = SumFun(arr)
// console.log(result)// case -1  7 // case-2 8 


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
//         if (i === index) {
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



// Question-9   Write a function to reverse the elements of an array.

// diffrent ways to solve:
// 1- using recursion
// 2-using in buildIn method// Array.reverse()
//3- using loop/stack method

// let  reverseArray =(arr)=> {
//     let newarr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newarr.push(arr[i]);
//     }
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = newarr.pop();
//     }
//     return newarr; // here whether newarr you return or not  it does not matter 
//     //because we  are not getting our final output in newarr
// }

// let arr = [1, 2, 3, 4, 5];
//  reverseArray(arr);
// console.log("Reversed Array:", arr);//Reversed Array: [ 5, 4, 3, 2, 1 ]


//Question - 10   Write a function to filter out even/Odds numbers from an array of numbers.

// FIND EVEN ELEMENT : REQUIRED CONDITION : arr[i] % 2 ==0

// function EvenFun( arr){
//     newArr =[]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 ==0){
//             newArr.push(arr[i])
            
//         }
//     }
//     return newArr
// }
//  let arr=[1,2,4,6,7,9]
//  const result =  EvenFun(arr)
//  console.log(result)//[ 2, 4, 6 ]


//FIND ODDS ELEMENT : REQUIRED CONDITION : arr[i] % 2 !==0

//  function OddFun( arr){
//     newArr =[]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 !==0){
//             newArr.push(arr[i])
            
//         }
//     }
//     return newArr
// }
//  let arr=[1,2,4,6,7,9]
//  const result =  OddFun(arr)
//  console.log(result)//[ 1,7,9 ]


// diffrent ways to solve:
// 1-  filter() method
// 2-using for/while loop
// 3- using forEach() method

// QUESTION-11 How to convert the first letter of string in UpperCase

//  let name ="Nia"
//  newname = "Pi" + name[2] 
//  //console.log(newname) //Pia

// let Fname ='sanju'
// let rename = Fname[0].toUpperCase() + Fname.slice(1)// by using it will give substring
// //console.log(rename) //Sanju


//QUESTION-12 Merge Arrays: Write a function to merge two arrays into a single array.

// function MergeFun(...arr3){
//     mergearr = []
//    arr3.forEach(arr3 => {
//      // mergearr.push(...arr3)
//     //mergearr = mergearr.concat(arr3)
//     // mergearr = [...mergearr , ...arr3]
//    })
//    return mergearr; 
// }

// let arr1 =[2,3,5]
// let arr2 = [6,7,8,2]
// let result =  MergeFun(arr1 ,arr2)
//  console.log(result)// [2,3,5,6,7,8,2]

// diffrent ways to solve:
// 1-  spread() ,push(), concat(), method
// 2-using for loop
// 3- using forEach() method
// 4-using reduce() method
// 5- using filter() method

 //EXAMPLE   -------------- NOTE
//  let nums1 = [1, 2, 3, 4]
//  let nums2 = [3, 4, 5, 6]
//  let nums3 = [5, 6, 7, 8]

//  nums1.push(...nums2, ...nums3); 
//     console.log(nums1); // [1, 2, 3, 4, 3, 4, 5, 6, 5, 6, 7, 8]
  
//     // If spread operator is not used 
//     nums1.push(nums2, nums3); 
//     console.log(nums1); // [1, 2, 3, 4, [3, 4, 5, 6],[5, 6, 7, 8]]



//QUESTION-13 To make square value from each elements 
// function MultiFun(arr){
//     let  mutliValue =[]
//       for(let i=0; i<arr.length; i++){
//         mutliValue.push(arr[i]*arr[i])
//       }
//       return mutliValue;
//   }
//   arr=[1,2,3,5]
//   let result = MultiFun(arr)
//   console.log(result)//[ 1, 4, 9, 25 ]



//QUESTION-13  What is a Prime Number,. Checking if a Number is Prime,Finding the Largest Prime Number in an Array.
//A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

//Note
// n % 3=> only give remainder  %  this sign call modulous
// n / 3=> it will gives quceation & remainder

//1- prime number is always is greater than 1 who has no remaider left e.g  n<=1 || n % 2 === 0  is not prime number


// Examples of Prime Numbers:

// 2 (divisors: 1, 2)
// 3 (divisors: 1, 3)
// 5 (divisors: 1, 5)
// 7 (divisors: 1, 7)
// 11 (divisors: 1, 11)

// Checking if a Number is Prime
// n is prime, you can follow these steps:

// 1-n is less than 2, it is not prime.
// if (n <= 1) return false;  // Step 1: Any number less than or equal to 1 is not prime.

// 2-n is divisible by any number from 2 to root square 𝑛
// if (n === 2) return true;  // Step 2: 2 is the only even prime number.

// 3-If no such divisors are found,n is prime.
// if (n % 2 === 0) return false;  // Step 3: Any other even number is not prime.

 //function isPrime(n) {
    //     if (n <= 1 || n % 2 === 0) return false;
    //       for (let i = 2; i < n; i++) {
    //         if (n % i === 0) return false;
    //     }
    //     return true;
    // }
    
    // Example to check if a number is prime
    //let numberToCheck = 16;
    //console.log(`Is ${numberToCheck} a prime number? ${isPrime(numberToCheck)}`);
    
    // -----------OR------------------
    
    //Math.sqrt(n)= if n= 16=>4, n= 36=>6
    // function isPrime1(n) {
    //     if (n <= 1 || n % 2 === 0) return false;
    //       for (let i = 2; n<=Math.sqrt(n); i+=2) {
    //         if (n % i === 0) return false;
    //     }
    //     return true;
    // }
    
    // Example to check if a number is prime
    // let numberToCheck = 16;
    // console.log(`Is ${numberToCheck} a prime1 number? ${isPrime1(numberToCheck)}`);


//CASE-2
// // Function to check if a number is prime
// function isPrime(n) {
//     if (n <= 1) return false;  // Numbers less than or equal to 1 are not prime
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;  // If n is divisible by any number other than 1 and itself, it's not prime
//     }
//     return true;
// }

// // Function to find minimum and maximum prime numbers in an array
// //between 0-50//  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 and 47
// function findMinMaxPrimes(array) {
//     let minPrime = Infinity;  // Initialize minPrime to Infinity
//     let maxPrime = -Infinity;  // Initialize maxPrime to -Infinity
    
//     // Loop through each number in the array
//     for (let num of array) {
//         if (isPrime(num)) {
//             // Update minPrime if num is smaller
//             if (num < minPrime) {
//                 minPrime = num;
//             }
//             // Update maxPrime if num is larger
//             if (num > maxPrime) {
//                 maxPrime = num;
//             }
//         }
//     }
    
//     // Check if no prime numbers were found
//     if (minPrime === Infinity && maxPrime === -Infinity) {
//         return "No prime numbers found in the array";
//     } else {
//         return { minPrime, maxPrime };  // Return an object with minPrime and maxPrime
//     }
// }

// // Example usage:
// let array = [4, 6, 8, 10, 12, 14];
// let result = findMinMaxPrimes(array);
// console.log(result);  // Output: No prime numbers found in the array

// let arrayWithPrimes = [10, 7, 15, 23, 8, 19, 25, 31, 14];
// let resultWithPrimes = findMinMaxPrimes(arrayWithPrimes);
// console.log(resultWithPrimes);  // Output: { minPrime: 7, maxPrime: 31 }





//WORKING...................
// 	let nums1 = [1, 2, 3, 4]; 
// 	let nums2 = [3, 4, 5, 6]; 
// 	let nums3 = [5, 6, 7, 8]; 

// let nums1 = [1, 2, 3, 4]; 
// let nums2 = [3, 4, 5, 6]; 
// let nums3 = [ 7, 8]; 

// function mergeNoDuplicates(...arrays){ // take any number of arrays as arguments using the rest parameter
//     let mergedArray = []; 

//     arrays.forEach(array => { 
//         mergedArray=[...mergedArray , ...array]
//     }); 
    
// // here is noDuplicates array
// // only unique elements are added to the noDuplicates array
    
//     const mergedUnique = mergedArray 
//     .reduce( (noDuplicates, item) => { 
//         if(noDuplicates.includes(item)) { 
//             return noDuplicates; 
//         } 
//         else { 
//             return [...noDuplicates, item]; 
//         }
        
//     }, []) 

//     return mergedUnique; 

// } 

// console.log(mergeNoDuplicates(nums1, nums2, nums3)); 




















