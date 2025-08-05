//--------NOTES---------------------
// arr.reduce((e)=(i,j)=>i+j)

// arr.forEach(ele=>{
//    // sum += ele
// })



// The reduce() method 
// in JavaScript executes a reducer function
// for each array element, returning a single accumulated value. It skips empty array
// elements and doesn’t modify the original array, making it useful for concise data aggregation.

// accumulated value: it is itreable value

//function in JavaScript that iterates over an array and applies a reducer
 //function to each element,  resulting in a single output value.
 
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, intialValue);



//----CONCEPTS-------

//const arr = [2,5,1,3]

// IMPORTANT POINTS
//1- reduce() we can do achive both total sum of array element and multiplication
//2-map() we can only achieve multiplication  and add new element to old element or we can say sum of each elements.


//Example-1
// const SumValues = arr.reduce((acc , curr) => acc + curr)
// console.log(SumValues)//11


////Example-2
// const MultiplicationValue = arr.map((item)=> item*3) 
// console.log(MultiplicationValue)//[ 6, 15, 3, 9 ]


// const arr = [2,5,1,3]
// const SumEachValue = arr.map((item)=> item+3) 
// console.log(SumEachValue)//[ 5, 8, 4, 6 ]


////Example-3
// const arr = [1, 2, 3, 4, 5];
// const mappedArr = arr.map(item => item);
// const sum = mappedArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15


// const arr = [2, 5, 1, 3];
// const result = arr.forEach(item => item * 2);
// console.log(result); //undefined

//REASON:================
//result will be undefined because forEach does not return the transformed array.
//If you want to see the transformed values, you should use map instead of forEach.


// const arr = [2, 5, 1, 3];
// const result = arr.forEach(item => console.log(item*2));
// 4
// 10
// 2
// 6


// map: Transforms each element and returns a new array.
// reduce: Accumulates values into a single result and returns that result.
// forEach: Executes a function on each element without returning a new array.


//NOTES--- AND / OR operator=========
// && requires both sides to be true.
// || requires at least one side to be true.




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



// QUESTION-3 Add the new element in the eixiting array at specific postion.
// different ways:
// 1- using slice
// 2- using reduce
// 3- using loop

//QUESTION-8 Write a function to find the largest number in an array of numbers.
// diffrent ways to solve:
// 1- using spread
// 2-using reduce(), ForEach() ,sort() 
//3- using loop
    

//Qusetion-6  Write a function to remove a specific value from an array, modifying it in place
// diffrent ways to solve:
// 1- using loop
// 2-using pop(), shift() ,filter() ,splice()




// Question-9   Write a function to reverse the elements of an array.

// diffrent ways to solve:
// 1- using recursion
// 2-using in buildIn method// Array.reverse()
//3- using loop/stack method

// const arr = [2,3,4,5,7]
//note-----
// let arr = [1, 2, 3];
// arr.push(4);  // Adds 4 to the end => [1, 2, 3, 4]
// arr.pop();    // Removes 4 from the end => [1, 2, 3]


//anthor------

// let  reverseArray =(arr)=> {
//     let newarr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newarr.push(arr[i]);      ///to add element from at the end of the array.
//     }
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = newarr.pop();     ///to remove element from at the end of the array.
//     }
//     return newarr; // here whether newarr you return or not  it does not matter 
//     //because we  are not getting our final output in newarr
// }

// let arr = [1, 2, 3, 4, 5];
//  reverseArray(arr);
// console.log("Reversed Array:", arr);//Reversed Array: [ 5, 4, 3, 2, 1 ]



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







// Q-1 Find the sum of all array element
//example sum+= sum+array[i] => sum+sum+array[i]

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


//FIND COMMAN ELEMENTS FROM GIVEN ARRAY====================


// const arr1 =[2,3,45,66,6]
// const arr2 =[3,4,5,6,77]

// function CommanElement(arr1,arra2){
//     const commanNewArray =[];
//     for(let i=0; i<arr1.length; i++){
//          for(let j=0; j<arr2.length; j++){
//         if(arr1[i] === arr2[j])
//         commanNewArray.push(arr1[i]) or  commanNewArray.push(arr2[j])
//         }
//     }
//     return commanNewArray;
// }
// const result = CommanElement(arr1,arr2)
// console.log(result)//[3,6]


//QUESTION--- how do you count the occurence of each character  from given string. or frequency

// function countCharOccurrences(str){
    
//     let CountChar = {};
    
//     for(let i=0 ; i<str.length; i++){
//         CountChar[str[i]] ?  CountChar[str[i]]+=1 : CountChar[str[i]]=1 
//another ways----   
//         // CountChar[str[i]] = (CountChar[str[i]] || 0) +1
//           }
//     return CountChar;
     
//  }

//  let str4 = "programming"
//  const result = countCharOccurrences(str4)
//  console.log(result)//{ p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }
 

// QUESTION-2 Write a function to count the frequency of each element in an array.
//  arr=[1,2,3,1,2,3,4,5,1,1,5]
 
//  function freObj(arr){
//      let frequency={};
     
//      for(let i=0; i<arr.length; i++){
//          let ele = arr[i]
//          frequency[ele] ?  frequency[ele]+=1 :  frequency[ele]=1
       
//another ways--------------
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



///===========QUESTION================
//Group elements by first letter

// function SetkeyValue(input){
//      let output = {}
//      for(let i=0; i<input.length; i++){
//          const word = input[i]
//          const firstletter = word[0]
        
//     if( output[firstletter]){
//          output[firstletter].push(word)
//     }else{
//          output[firstletter] = [word]
//     }
//      }
//      return output 
//  }
//  input= ['apple', 'banana', 'apricot', 'blueberry', 'avocado', 'mango']
// const result = SetkeyValue(input)
// console.log(result)

// // output:{
// //   a: ['apple', 'apricot', 'avocado'],
// //   b: ['banana', 'blueberry'],
// //   m: ['mango']
// // }

// /////////
// // output:{
// //   a: '3',
// //   b: '2',
// //   m: '1'
//  //}






// ------ Question function----------


// function indexElement(array1, index){
   
//     let newArray = [];

//     for (let i = 0; i < array1.length; i++) {
//         // if (array1[i] == index) { //now representing element //[ 1, 55, 3, 4, 5 ]  element === 2
//         if (i == index) {  //now representing index  //[ 1, 2, 55, 4, 5 ]            index === 2
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
// console.log(result1)



////=================================//


// function indexElement(array1, ele){
   
//     let newArray = [];

//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== ele) {  
//             newArray.push(array1[i]);
//         }
//     }
//     return newArray;
// };

// let array1 = [1, 2, 3, 4, 5];
// let ele = 2;
// let result1 = indexElement(array1,ele);
// console.log(result1)//[ 1, 3, 4, 5 ]




//QUESTION------ check given string is palindrome or not ?
// Anagram:
// ➤ Two strings are anagrams if they contain the same characters with the same frequency, but possibly in a different order.
// Example: 'listen' and 'silent'

// Palindrome:
// ➤ A string is a palindrome if it reads the same forward and backward.
// Example: 'madam', 'racecar'


// A palindrome is a string that reads the same forwards and backwards. In other words,
//  if you reverse the string, it will remain unchanged.

// function isPalindrome(str) {
//     str = str.toLowerCase();
//   let j = str.length -1  //backward check 6
//   for (let i = 0; i < j;  i++) {  //// only iterate until the middle ---  i=0, j=6 | i=1 ,j=5 |i=2, j=4 | i=3 , j=3 
//The loop condition i < j is now false (3 < 3 is false), so it exits and returns 'palindrome'
//       if (str[i] != str[j]) {  //forward change//checks if the character at index i is not equal
//If they are not equal, the function immediately returns the string 'not palindrome', indicating that the input string is not a palindrome.
//           return false; ///   return 'not plindrome'
//       }else{
//    j--;  //If the characters are equal, the index j is decremented (j--) to check the next character from the end in the next iteration.
//     }   
//  }
//   return true; //   return 'plindrome'
// }

// let str1 = "rAcecar";
// let str2 = "niTin";
// let str3 = "Rama";

// console.log(isPalindrome(str1));//true
// console.log(isPalindrome(str2));//true
// console.log(isPalindrome(str3));//false

//-----//madam


//QUESTION-------------- //////  -----------

//  function FindPalindrome(sentence){
//      const words = sentence.split(' ');
//      let output= [];
      
//     for(let i=0; i<words.length; i++){
//         const word = words[i].toLowerCase();
//          let reverseWord = '';
         
//         for(let j=word.length-1; j>=0; j--){
//             reverseWord+=word[j]
//         }
        
//          if(word === reverseWord && word.length > 1){
//             output.push(words[i])
//         }
        
//          }
    
//     return output;
    
//  }
//  const sentence = 'please madaM tell aBout Level to niTin'
//  const Result = FindPalindrome(sentence)
//  console.log(Result)//[ 'madaM', 'Level', 'niTin' ]



//QUESTION--//Reverse the Given String

// function reverseString(str){
//     let reverseStr =''
//     for(let i = str.length-1; i>=0; i--){
//         reverseStr+= str[i]
//     }
//     return reverseStr;
// }

// const StringVar ='abcd'
// const result= reverseString(StringVar)
// console.log(result)//dcba`



// ------ANOTHER--------------------
// function reverseEachWord(str) {
//   let reversedWord = '';
//     for (let char of str) {
//       reversedWord = char + reversedWord; 
//       console.log( "=====",reversedWord)
//     }
//    return reversedWord;
// }

// const str = 'ujnas';
// const result = reverseEachWord(str);
// console.log(result); // sanju



//QUESTION--//Reverse the Given Array


// function ReverseArray(array){
//    let reverseArr =[];
//     for(let i=0; i<array.length; i++){
//         reverseArr.push(array[i])
//     }
//     for(let i=0; i<array.length; i++){
//       arr[i]= reverseArr.pop()
//     }
//     return arr;  //if you return here  reverseArr array it will give empty array
// }
// const result = ReverseArray(arr)
// console.log(result)//[7,5,4,3,2]




// Problem Statement: Rotate an Array to the Left by k Positions (Without Using Built-in Methods)
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const rotateBy = 3;
// const n = arr.length;

// const rotated = [];

// // Step 1: Push the last 'rotateBy' elements to the front
// for (let i = n - rotateBy; i < n; i++) {
//   rotated.push(arr[i]);
// }

// // Step 2: Push the remaining elements
// for (let i = 0; i < n - rotateBy; i++) {
//   rotated.push(arr[i]);
// }

// console.log(rotated);
// // Output: [5, 6, 7, 1, 2, 3, 4]


//--------QUESTION---------

// function DimentionalArray(array){
//     const Rotated = []
//     const rotateBy= 2
//     const position = array.length-rotateBy
   
//    //  for(let i=position; i<array.length; i++){
//    //      Rotated.unshift(array[i])//[ 8, 6, 2, 3, 4, 5 ]
//    // }
   
//    //OR----
   
//    for(let i=position; i<array.length; i++){
//         Rotated.push(array[i])//[ 6, 8, 2, 3, 4, 5 ]
//    }
   
//    for(let i=0; i<position; i++){
//        Rotated.push(array[i])
//    }
//      return Rotated;
// }
// const  arr = [2,3,4,5,6,8]  //[6,8,2,3,4,5]


// const result = DimentionalArray(arr)
// console.log(result)




//=========FOR TRIAL--------
// function CountFunction(array){
  
//     let result = []
//     let rotatesBy = 4
//     const n = array.length //8
    
//     for(let i=n-rotatesBy; i<n ;i++){
//        result.unshift(array[i])//[8,7,6,5,1,2,3,4]
//     }

//     for(let i=n-rotatesBy; i<n ;i++){
//        result.push(array[i])//[5,6,7,8,1,2,3,4]
//     }

//     for(let i=0; i<n-rotatesBy ;i++){
//        result.push(array[i])
//     }
//   return result
// }
//  const arr = [1,2,3,4,5,6,7,8]//[8,7,6,5,1,2,3,4]
//  const result = CountFunction(arr)
//  console.log(result)




//---QUESTION----- exclude the element from an array who comes  exaclty twice

// function CountFunction(array){

//     //Case -1 1st find frequency
//     let frequency = {}
//     for(let i=0; i<array.length;i++){
//         let ele = arr[i]
//         frequency[ele] ?  frequency[ele]+=1 : frequency[ele] =1
//     }

//   //Case-2  Now Filter out numbers that appear exactly twice
//   let count = []      
//      for(let i=0; i<array.length;i++){
// if(frequency[array[i]] !== 2){      //countMap[arr[i]] looks up the value in the object (countMap) using the element as the key.
//     count.push(array[i])
// }
//     }
//     return count
// }
//  const arr = [22,22,22,2,1,4,1,5,5]
//  const result = CountFunction(arr)
//  console.log(result)//[ 22, 22, 22, 2, 4 ]


// QUESTION------ REVERSE EACH WORD FROM GIVEN SENTENCE

// function reverseWords(str){
//     let reverse = '';
//     let word = '';
    
//      for(let i=0; i<str.length ; i++){
         
//          if(str[i] !== ' '){ //provide a space here
//  // Instead of appending (word + str[i]), we are prepending the character (str[i] + word).
//              word = str[i] + word    // word+str[i]
//          }else{
//              reverse += word + ' '  /////provide a space here
//              word =''
//          }
//     }
//       reverse += word
//          return reverse
// }
//  let str = 'my name is Rohan';
// const result = reverseWords(str)
// console.log(result)//ym eman si nahoR
//NOTES----
// console.log(result)//ym eman si // without adding after the loop //reverseStr+=word
// console.log(result)//ym eman si nahoR // with adding after the loop  //reverseStr+=word
//The loop doesn't handle the last word because it doesn't end with a space. This step ensures that the final word
// (which doesn't have a space after it) is added to reverseStr

//---- VERY IMPORTANT ------
// function reverseStr(str){
//     const  words = str.split(' ');
//     let output = '';
//     for(let word of words){
//          let reverse = '';
//         //CASE-1
//         for(let char of word){
//              reverse = char + reverse
//          }
//          CASE-2
//         //  for(let i= word.length-1 ; i>=0 ;i--){
//         //      reverse+= word[i]
//         //  }
//        output+= reverse + ' '
//     }
//     return output;
//     }

// const str ='ym si eman nahk'
// const result = reverseStr(str)
// console.log(result)//my is name khan 




//---------------OR-------------
// function App(str) {
//   const words = str.split(' ');
//   let output = '';

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     let reversedWord = '';

//     // Reverse the current word using a loop
//     for (let j = word.length - 1; j >= 0; j--) {
//       reversedWord += word[j];
//     }

//     output += reversedWord;

//     // Add space between words except after the last one
//     if (i < words.length - 1) {
//       output += ' ';
//     }
//   }

//   return output;
// }

// const str = 'my name is khan';
// const result = App(str);
// console.log(result); // ➞ "ym eman si nahk"



//-----------------------------------QUESTION----------------
// function reverseStr(str){
//     const words =str.split(' ');
//     let output='';
    
//     for(let word of words){
//        let reverseStr = '';
//         for(let char of word){
//         reverseStr= char + reverseStr;
//    }
//      output+=reverseStr + ' ';
//    }
//    return output;
// }
// const str = 'ujnas oar'
// const result = reverseStr(str)
// console.log(result)//sanju rao



///--------------------------METHODS--------------------

// const str = 'ujnas oar'
// let output = str.split(' ');

// let result= output.map(word => word.split('').reverse().join('')).join(' ');

// console.log(output)
// console.log(result)// sanju rao
// //str.split(' '); vs str.split('');
// //join(' ') vs join('')
//reverse()

// for(let/const char in/of str){

// }

//------EXAMPLE------------------
// const str =   [ 'ujnas', 'oar' ] 
// let output = str.join(' ');
// console.log(output)//ujnas oar


// //== just for trial============================

// function CountFunction(str){
//     //let Restr = ''
//     let frequency = {}
  
//     for(let i=0; i<str.length ;i++){
//        let char = str[i]
//        frequency[char] ? frequency[char]+=1 : frequency[char] =1
       
//        //case-1
//     //   if( frequency[char] === 2){
//     //       Restr+=char//rmg
//     //   }
       
//        //case-2
//     //   if( frequency[char] === 1){
//     //       Restr+=char//progamin
//     //   }
//     }
    
// //case-3
//     for(let i=0; i<str.length ;i++){
//         let char  =str[i]
//       if( frequency[char] === 1){
//            return char//p
        
//       }
//     }
// }

// let str = 'programming' //rgm
//  const result = CountFunction(str)
//  console.log(result)



/// QUESTION ----ANAGRAM STRING-------------------
//Anagrams: Same length + Same characters (with same frequency).

// function AnagramString(str1,str2){

//     //step-1

//        if(str1.length !== str2.length){
//             return ' not anagram'; //return false;
//        }
       
//        //step-2
//        let charCount1 = {};
//        let charCount2 =  {};
       
//        // step -3
//        for(let i=0; i<str1.length ; i++){
           
//             charCount1[str1[i]] = (charCount1[str1[i]] || 0) + 1;
//         }
       
//        for(let i=0; i< str2.length ; i++){
           
//              charCount2[str2[i]] = (charCount2[str2[i]] || 0) + 1;   
//        }
       
//        //step-4
       
//        for(let char in charCount1 ){
           
//            if(charCount1[char] !== charCount2[char]){
//                 return ' not anagram'; //return false;
//            }
           
//        }
//              return ' anagram'; //return true;
//    }
   
//    let str1 = 'listen' 
//    let str2 = 'silent'
//    const result = AnagramString(str1,str2)
//    console.log(result)//true


// QUESTION ---To find the first non-repeating character in a string.


// function FirstNonRepeatingChar(str){
//     let CountChar = {};
    
//     for(let i=0; i<str.length; i++){
//     // step-1 find occurence of each character   
//         let char = str[i]
//         if(CountChar[char] === undefined){
//            CountChar[char] = 1; 
//         }else{
//             CountChar[char]++;
//         }
//     }
    
//     for(let i=0; i<str.length; i++){
// // step-2 find non repeating character
//         let char = str[i]
//         if(CountChar[char] === 1){
//           return char; 
//         }
//     }
    
//     return 'not found any non repeating character'
// }
// let str = 'programming'
// const result = FirstNonRepeatingChar(str)
//  console.log(result)// ANS:p



// QUESTION-7 find duplicate  from given an array 

// function  duplicateFun(array){
//     duplicates=[]
    
// for(let i = 0; i < array.length; i++) {
//     for(let j = i + 1; j < array.length; j++){
//         if (array[i] === array[j]) {// compares two elements from an array (at positions i and j).
//             if (!duplicates.includes(array[i])) {  //if both are equal This checks if the current value (array[i]) is not already present in the duplicate array.
//If array1[i] is not in the duplicate array, the condition becomes true.
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




//--- find only those element which appear only once-----

// function duplicateArray (array){
//      const map = {};
//     const duplicateElement = [];
//     for(let i =0; i<array.length; i++){
//         const ele = array[i]
//         map[ele] ?   map[ele]+=1 :   map[ele] =1
        
//         if(map[ele] ===1){
//                duplicateElement.push(array[i])
//           }
//       }
//    return  duplicateElement;
// } 
//  const arr = [2,3,4,56,2,4,9,9]
//  const result = duplicateArray(arr)
//  console.log(result)//[ 2, 3, 4, 56, 9 ]



//// QUESTION-7 find duplicate  from given an string 

// function App(str){
    
//     let duplicateChar = '';
//     let seenObj = {};
    
//     for(i=0; i<str.length; i++){
//         let char =str[i]
//          seenObj[char] ? seenObj[char]+=1
//   : seenObj[char]=1  
  
//   if(seenObj[char] === 2){
//         duplicateChar+=char
//     }
//     }
    
//    return duplicateChar
//   }
//   let str = ' programming'
//   const result = App(str)
//   console.log(result)//rmg




// QUESTION-- How do you remove duplicate character from a string.

// function RemoveDuplicatesStr(str) {
//     let result = '';
//     let seeObj = {};  // Object to track seen characters
    
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];  // Current character
        
//         if (!seeObj[char]) {
//             seeObj[char] = true;  // Mark character as seen
//             result += char;       // Append to result if not seen
//         }
//     }
    
//     return result;  // Return the result string with no duplicates
//  }
 
//  let str4 = "programming";
//  const result = RemoveDuplicatesStr(str4);
//  console.log(result);  // Output: "progamin"
 

// QUESTION ---- find largest number from given array.

// function LargestNumFun (array){
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


// QUESTION ---- find largest word from given sentence.

// function LargestWord(sentence1){
//     let word = sentence1.split(' '); ////because you're splitting the string str into an array of words.
//     let largest = '';

//     for(let i=0 ; i<word.length; i++){
//         if(word[i].length > largest.length){
//            largest = word[i]
//     }
   
// }
// return largest;
// }

// let sentence = 'Digital and IT operations are based out of Pune, Maharashtra.'
// const result = LargestWord(sentence)
// console.log(result)//Maharashtra.


//----QUESTION FIND SECOND LARGEST ELEMENT FROM ARRAY--------------

// function SecondLargest(array){
//     let largest = -Infinity;             // can be also inialize with 0
//      let SecondLargestNum = -Infinity;   // can be also inialize with 0
     
//      for(let i=0; i<array.length; i++){
//          if(array[i] > largest){
//              SecondLargestNum=largest
//              largest=array[i]
//          }else if(array[i] > SecondLargestNum  &&  array[i] !== largest){
//              SecondLargestNum=array[i]
//          }
         
//      }
//     return SecondLargestNum;
// }
// const arr= [2,4,5,6,8]

// const result = SecondLargest(arr)
// console.log(result)//6



// FIND SECOND LARGEST WORD FROM GIVEN SENTENCE=================


// function SecondLargestWord (sentence){
//     let words = sentence.split(" ")
//     let largest = ""
//     let secondLargest =""
    
//     for(let i=0; i< words.length; i++){
       
//         if(words[i].length > largest.length ){
//             secondLargest = largest
//             largest = words[i]
            
//      }else if(words[i].length > secondLargest.length  &&   words[i].length < largest.length ){
//          secondLargest=words[i] 
///          secondLargest=words[i].length   ////9
//          }
// }
//     return secondLargest;
//     }
// const sentence ="Regularly Asyncchronouse at least once every week"
// const result =SecondLargestWord(sentence)
// console.log(result)//Regularly


//QUESTION  Sort the given an array ================


// function sortAscending(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length-1-i; j++){
//             if(arr[j] > arr[j+1]){   
//                 //TIPS:  if you want to make it decending (arr[j] < arr[j+1])
//                 let temp =arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//                  }
//           }
//     }
//     return arr;

// }
// const arr =[2,3,4,6,5,7,8,9,32,11]
// console.log(sortAscending(arr))//[ 2, 3, 4,  5,  6,7, 8, 9, 11, 32]



// function sortDecending(array){
//     for( let i=0; i<array.length; i++){
//         for(let j=0; j<array.length-1-i; j++){
//             if(array[j] < array[j+1]){   
//                 let temp =array[j]
//                 array[j]=array[j+1]
//                 array[j+1]=temp
//                  }
//           }
//     }
//     return array;

// }
// const array =[2,3,4,6,5,7,8,9,32,11]
// console.log(sortDecending(array))//[ 32, 11, 9, 8, 7, 6,  5, 4, 3, 2]

//-- FOR UNDERSTANDING-----------------

 //j represents the current index being compared with its next neighbor (j + 1).
//  function SortedFunction(array){//Function Declaration: SortedFunction(array)
     
//     for(let i=0; i<array.length; i++){//The outer loop runs from 0 to the length of the array. 
//         for(let j=0; j<array.length-1-i; j++){// Inner loop is responsible for comparing adjacent elements and swapping them if neccessary.
//         //The loop runs up to array.length - 1 - i to avoid checking elements that are already sorted.
//             if(array[j] < array[j+1]){ //If true: It swaps the two elements so that the larger one comes first (to ensure descending order).
//                 let temp = array[j]//The value of array[j] is temporarily stored in a variable temp.
//                 array[j] = array[j+1]//Then array[j] is replaced by array[j+1].
//                 array[j+1] = temp//Finally, array[j+1] is set to the original array[j] value from temp.

//             }
//         }
//     }
// return array; 
// }


// const arr = [8,6,2,9,6,3,4,]
// const result = SortedFunction(arr)
// console.log(result)//[ 9, 8, 6, 6, 4, 3, 2]


// Sort the array by Method 

//const arr =[2,3,4,6,5,7,8,9,32,11]
// arr.sort((a,b)=> a-b)
// console.log(arr)//a[2, 3, 4,  5,  6,7, 8, 9, 11, 32]

// arr.sort((a,b)=> b-a)
// console.log(arr)//d[ 32, 11, 9, 8, 7,6,  5, 4, 3, 2]



/// CONBINE SORT AND DUPLICATE ARRAY
// Bubble Sort is a simple sorting algorithm that repeatedly swaps adjacent elements 
// if they are in the wrong order until the list is sorted.

// function SortedArray(array){
    
//     let duplicateSortedArray=[]
        
//         for(let i=0; i<array.length; i++){
//             if(!duplicateSortedArray.includes(array[i])){
//                 duplicateSortedArray.push(array[i])
//             }
            
//         }
        
//         for(let i=0; i<duplicateSortedArray.length; i++){
//             for(let j=0; j<duplicateSortedArray.length-i-1 ;j++){
//                 if(duplicateSortedArray[j] < duplicateSortedArray[j+1] ){
//                     let temp = duplicateSortedArray[j]
//                     duplicateSortedArray[j] =  duplicateSortedArray[j+1]
//                     duplicateSortedArray[j+1] = temp
//                 }
//             }
//         }
//         return duplicateSortedArray;
        
//     }
//     const arr = [1,2,34,5,66,77,88,6,9,9]
//     const result = SortedArray(arr)
//     console.log(result)//[88, 77, 66, 34, 9,  6,  5,  2,  1]






//QUESTION : MERGE TWO SORTED ARRAYS INTO SINGLE SORTED ARRAY

//we can use the for loop also  (;i < arr1.length && j < arr2.length) ,(;i < arr1.length)  ,(;j < arr2.length)

// function mergeSortedArrays(arr1, arr2) {
//     let mergedArray = [];
//     let i = 0; // Pointer for arr1
//     let j = 0; // Pointer for arr2

//     // Merge elements from both arrays
//     while (i < arr1.length  &&  j < arr2.length) {
//         if (arr1[i] < arr2[j]){         //if (arr1[i] > arr2[j])
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }

//     // Handle any remaining elements in arr1
//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }

//     // Handle any remaining elements in arr2
//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }
//     return mergedArray;
// }

// // Example Usage:
// //there is three snerio which need to focus 
// // 1- already given sorted array
// // 2- unsorted array given
// // 3- one is sorted another is unsoterd
// let unsortedArr1 = [40, 10, 30, 20];
// let unsortedArr2 = [35, 15, 45, 25];

// // Sort the arrays before merging
// unsortedArr1.sort((a, b) => a - b);           ///((a, b) => b-a)
// unsortedArr2.sort((a, b) => a - b);             //((a, b) => b-a)

// let sortedMergedResult = mergeSortedArrays(unsortedArr1, unsortedArr2);
// console.log(sortedMergedResult); // Output: [10, 15, 20, 25, 30, 35, 40, 45]




//QUESTION--------------

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return [];   /// point: no need to return here
// }

// // Example Usage:
// const nums = [2, 7, 11, 15];
// const target = 9;
// const result = twoSum(nums, target);
// console.log(result); // Output: [0, 1]


//-----------        ========
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

// // Example Usage:
// const nums = [3, 2, 4];
// const target = 6;
// const result = twoSum(nums, target);
// console.log(result); // Output: [1, 2]


// QUESTION------- GIVEN CONVERT INTO THREE SET OF ARRAY


//const input = [1,2,3,4,5,6,7,8,9] 

// const [arg,arg1,agr3, arg4,arg5,agr6 ,...rest] =input
// console.log([[arg,arg1,agr3],[arg4,arg5,agr6] ,rest])
//[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

//NOTES:
// array.slice(i, i + chunks) extracts elements from the array starting from index i and ending at index i + chunks (non-inclusive).
// The slice method returns a portion of the array

//--- Basic Chunking Function

// function App(array){
//     let chunkSize =3 //size of each subarray 
//     let outputArray = [];
//     for(let i=0; i<array.length; i+=chunkSize){  //i+=chunkSize = i=i+chunkSize
//         outputArray.push(array.slice(i,i + chunkSize))
//     }
//     return outputArray;
// }
// const input = [1,2,3,4,5,6,7,8,9]
// const result = App(input)
// console.log(result)//[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]



///---------- Chunk + Sort + Format Function

// function CountApp(array) {
//   const chunkSize = 3;
//   const res = [];

//   for (let i = 0; i + chunkSize - 1 < array.length; i += chunkSize) {
//     res.push([array[i], array[i + 1], array[i + 2]]);
//   }

//   for (let i = 0; i < res.length - 1; i++) {
//     for (let j = i + 1; j < res.length; j++) {
//       if ((res[i][0] + res[i][2]) > (res[j][0] + res[j][2])) {
//         let temp = res[i];
//         res[i] = res[j];
//         res[j] = temp;
//       }
//     }
//   }

//   const formatted = res.map(item => `{ ${item[0]}, ${item[1]}, ${item[2]} }`);
//   console.log("[" + formatted.join(", ") + "]");
// }
//const array = [-5, -3, 0, 3, 5, 1, 2];
// const result = CountApp(array)
// console.log(result)//[{ -5, 0, 5 }, { -3, 0, 3 }, { -3, 1, 2 }]




// QUESTION JUST OPPOSITE===================

// function OneDArray(array){
//     const flattenedArray=[];
//     for(let i=0; i<array.length; i++){
//         for(let j=0; j<array[i].length; j++){           // at i=2  =>[ 7, 8, 9 ]   arr[2].length  => 3   , gives the number of elements in the current sub-array.
//             flattenedArray.push(array[i][j])             //array[i][j] => at j=0 ,array[2][0] =>7, array[2][1]=>8 ,array[2][2] =>9
                                                           //// at i=0  =>[ 1, 2, 3 ]   arr[0].length  => 3 
//         }                                                ////array[i][j] => at j=0 ,array[0][0] =>1, array[0][1]=>2 ,array[0][2] =>3
//     }
//     return flattenedArray;
// }
// const arr = [ [ 2, 3, 4, 5 ], [ 6, 7, 78, 8 ], [ 9, 12, 23, 45 ] ]
// const result =OneDArray(arr)
// console.log(result)//[2,3,4,5,6,7,78,8,9,12,23,45]


// ================= ANOTHER WAYS  ===============

// const arr = [ [ 2, 3, 4, 5 ], [ 6, 7, 78, 8 ], [ 9, 12, 23, 45 ] ]
// const result= arr.flat()
// console.log(result)//[2,3,4,5,6,7,78,8,9,12,23,45]



//        ================= curially most asked questions  =============================

//QUESTION--------------------------------

// const obj = {
//     a: { b: "jitendra" },
//     c: { d: "Vishwakarma" },
//     e: "address"
// };

// function flattenObject(obj) {
//     const flattened = {};  //step-1

//     // Iterate over each key in the original object
//     for (let key in obj) {  //step-2
//         if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//             // If the value is an object (and not an array), flatten its nested keys
//             const nestedObj = obj[key];    //{ b: "jitendra" } &  { d: "Vishwakarma" }
//             for (let nestedKey in nestedObj) {
//                 // Construct the flattened key by joining parent key and nested key with a dot
//                 const flattenedKey = `${key}.${nestedKey}`; //a.b &  c.d
//                 // Assign the value to the flattened key in the result object
//                 flattened[flattenedKey] = nestedObj[nestedKey]; /// jitendra & Vishwakarma or we can say {'a.b':'jitendra', 'c.d':'Vishwakarma' ,e:'address'}
//             }
//         } else {
//             // If the value is not an object (primitive value), simply assign it to the result object
//             flattened[key] = obj[key];  // {key:value} like this we get answer

//         }
//     }

//     return flattened;
// }

// const flattenedObj = flattenObject(obj);
// console.log(flattenedObj);

// //output
// {
//     'a.b': 'jitendra',
//     'c.d': 'Vishwakarma',
//     e: 'address'
// }

//------/////////////////////////////////////---

//  function groupByValue(input){
//     const output={};
//      for(let word of input){
//           const keys = word.city
//             if(!output[keys]){
//                  output[keys] = []
//           }
//           output[keys].push(word)
//           }
//       return output;
//  }
 
// const input = [{city:'NY'},{city:'LA'},{city:'NY'}];
// const result = groupByValue(input)
// console.log(result)
//{ NY: [ { city: 'NY' }, { city: 'NY' } ], LA: [ { city: 'LA' } ] }



//---------------------------------------------
//  function groupById(input){
//      const output={};
//      for( let item of input){
//          const keys = item.id
//          if(!output[keys]){
//              output[keys] = {};
//          }
//          output[keys]=item
//      }
//     return output; 
//  }
//  const input= [{id:1,name:'a'},{id:2,name:'b'}]
//  const result = groupById(input)
//  console.log(result)
//  //{ '1': { id: 1, name: 'a' }, '2': { id: 2, name: 'b' } }





//---------------- FIND DUPLICATES BY ID---------------------
//  function getDuplicatesById(input){
//      const output=[];
//      for(let i=0; i<input.length; i++){
//         for(let j=i+1; j<input.length; j++){
//             console.log(input[i].id)
//               if(input[i].id === input[j].id){
//                   output.push(input[i])
//               }
//   }
//       }
//     return output; 
//  }
//  const input= [{id:1},{id:2},{id:1},{id:2},{id:4},{id:3}]
//  const result = getDuplicatesById(input)
//  console.log(result)
// /// result: [ { id: 1 }, { id: 2 } ]



//---------------- SORT BY NESTED KEY---------------------






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

