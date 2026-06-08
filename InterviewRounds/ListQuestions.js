//---- in case of Array
 // important  points
 // for  k times  1-- after processing ,2- during processing (order matters-----)
 // for first non reapting  1- based on value , 2- based on  key  (on both case get different answer)



///-------IMPORTANT RESEARCH --- DSA QUESTUION MADE IN THESE AREA-- 70% IN ARRAY / 50% IN STRING  / 30% IN OBJECT

//---/// 70% IN ARRAY
//---- QUESTIONS ARIVE DIFFERENT TYPE
//-----RECURSION


//---/// 50% IN STRING 
//---- QUESTIONS ARIVE DIFFERENT TYPE-- 
// -1 REVERSE
// -2 FREQUENCY
// -3 PALINDROME
// -4 ANAGRAM


//---/// 30% IN OBJECT
//---- QUESTIONS ARIVE DIFFERENT TYPE ---
// -1 COUNTING
// -2 FREQUENCY
// -3 GROUPING
// -4 RECURSION



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


//------------------------------------

//--FINF FREQUENCY------

// function findFrequency(str){
//     const countMap = {};
//     for(let char of str){
//         countMap[char] = (countMap[char]|| 0)+1
//           }
//         return countMap
// }
// const str = 'programming'
// const result = findFrequency(str)
// console.log(result)
// //{ p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 } ////HERE ORDER OF STORING BECOME DIFFRENT


// function findFrequency(array){
//     const countMap = {};
//     for(let ele of array){
//         countMap[ele] = (countMap[ele]|| 0)+1
//           }
//         return countMap;
// }
// const arr = [4,5,1,2,0,4]
// const result = findFrequency(arr)
// console.log(result)
// //{ '0': 1, '1': 1, '2': 1, '4': 2, '5': 1 } //HERE ORDER OF STORING BECOME DIFFRENT


//----------NOTE----  we are using based on key


// function firstNonRepeatingEle(array){
//     const countMap = {};
//     for(let ele of array){
//         countMap[ele] = (countMap[ele]|| 0)+1
//           }
//           for(let key in countMap){
//               if(countMap[key] === 1){
//               return key
//               }
//           }
//         return countMap;
// }
// const arr = [4,5,1,2,0,4]
// const result = firstNonRepeatingEle(arr)
// console.log(result)//0

//because we are using based on key  that's why we are getting 0 answer 
// but with array we have to return a number not key specially with firstNonRepeating char ot value  but this will works fine with string case


//-------
//this will works fine with string case


// function firstNonRepeatingEle(str){
//     const countMap = {};
  
//     for(let char of str){
//         countMap[char] = (countMap[char]|| 0)+1
//           }
//           for(let key in countMap){
//         if(countMap[key] === 1){
//            return key;
//               }
//           }
     
// }
// const str = 'programming'
// const result = firstNonRepeatingEle(str)
// console.log(result)//p

//ARRAY------------------
//based on value not key

// function firstNonRepeatingEle(array){
//     const countMap = {};
  
//     for(let ele of array){
//         countMap[ele] = (countMap[ele]|| 0)+1
//           }
//           for(let ele of array){
//         if(countMap[ele] === 1){
//            return ele;
//               }
//           }
     
// }
// const arr = [4,5,1,2,0,4]
// const result = firstNonRepeatingEle(arr)
// console.log(result)//5

//---------------------------

// function firstNonRepeatingEle(str){
//     const countMap = {};
  
//     for(let char of str){
//         countMap[char] = (countMap[char]|| 0)+1
//           }
//           for(let char of str){
//         if(countMap[char] === 1){
//            return char;
//               }
//           }
     
// }
// const str = 'programming'
// const result = firstNonRepeatingEle(str)
// console.log(result)//p


////---QUESTION----- exclude the element from an array who comes  exaclty   (k) or  twice
//----------------------
//✅ Version 1 — Using for...in after counting all elements

// function findExactlyTwo(array){
//     const countMap = {};
//     const output = [];
//     for(let ele of array){
//         countMap[ele] = (countMap[ele]|| 0)+1
//           }
//           for(let key in countMap){using key using symbol in not of
//               if(countMap[key] === 2){
//                   output.push(Number(key))//['1','6'] convert  to [ 1, 6 ] using Number
//               }
//           }
          
//     return output;
// }
// const arr = [1, 22, 22, 4, 6, 1, 4, 22, 4, 6, 5, 7];
// const result = findExactlyTwo(arr)
// console.log(result)//[ 1, 6 ]


//--NOTE--  complete sorted order// after complete process
//------------
// function findExactlyThree(array){
//     const countMap = {};
//     const output = [];
//     for(let ele of array){
//         countMap[ele] = (countMap[ele]|| 0)+1
//           }
//           for(let key in countMap){using key using symbol in not of
//               if(countMap[key] === 3){
//                   output.push(Number(key))//['4','22'] convert  to [ 4, 22 ] using Number
//               }
//           }
          
//     return output;
// }
// const arr = [1, 22, 22, 4, 6, 1, 4, 22, 4, 6, 5, 7];
// const result = findExactlyThree(arr)
// console.log(result)//[ 4, 22 ]


//--NOTE--  complete sorted order// after complete process
//--here we are find no of appearance of element based on key of object(countMap) that's why we are getting answer in incresing order 
//When result is collected:After the full array is traversed and counts are built.



////--NOTE--  during process  order
//--------------------------------------
//✅ Version 2 — Pushing while counting inside the loop
// function findExactlyThree(array){
//     const countMap = {};
//     const output = [];
//     for(let ele of array){
//         countMap[ele] = (countMap[ele]|| 0)+1
//          if(countMap[ele] === 3){
//                   output.push(ele)
//               }
//           }
         
          
//     return output;
// }
// const arr = [1, 22, 22, 4, 6, 1, 4, 22, 4, 6, 5, 7];
// const result = findExactlyThree(arr)
// console.log(result)//[ 22, 4 ]



///--------------
// function elementsRepeatingTwice(array) {
//   const countMap = {};
//   const output = [];

//   for (let ele of array) {
//     countMap[ele] = (countMap[ele] || 0) + 1;
//   }

//   for (let item of array) {
//     if (countMap[item] === 2 && !output.includes(item)) {
//       output.push(item);
//     }
//   }

//   return output;
// }

// const arr = [4, 5, 1, 4, 6, 7, 1];
// const result = elementsRepeatingTwice(arr);
// console.log(result); // [4, 1]




//NOTE--- HERE IS THE DIFFERENCE BETWEEN BOTH VERSION , SEE ORDER ✅ Version 1 IS [4,22] AND ✅ Version 2 IS [22,4]


///--ANOTHER INTERVIEW QUESTION-----

// function findAtLeastK(Input,k){
//     const map = {};
//   const output = [];

//   // Count frequency
//   for (let item of Input) {
//     map[item] = (map[item] || 0) + 1;
//   }

//   // Collect elements with frequency >= k
//   for (let key in map) {
//     if (map[key] >= k) {
//       output.push(key);
//     }
//   }

//   return output; 
//        }
//        const Input= ["react","node","react","mongodb","node","node","redis"]
// k = 2
// const result = findAtLeastK(Input,k)
// console.log(result)//[ 'react', 'node' ]




//--NOTE
//--When result is collected:Immediately when any element’s count becomes 3. 


/////------------
// function findNotExactlyTwo(array){
//     const countMap = {};
//     const output = [];
//     for(let ele of array){
//         countMap[ele] = (countMap[ele]|| 0)+1
//          if(countMap[ele] === 2){
//                   output.push(ele)
//               }
//           }
          
//     return output;
// }
// const arr = [1, 22, 22, 4, 6, 1, 4, 22, 4, 6, 5, 7];
// const result = findNotExactlyTwo(arr)
// console.log(result)//[ 22, 1, 4, 6 ]

//--NOTE
//--When result is collected:Immediately when any element’s count becomes 2.my recommendation is not use because it returns result immedialty 
//as element appears two time not exactly two time 


//-------firstNonReaptingItem

// function firstNonReaptingItem(array){
//   const map  = {};
//   const output = [];
  
//   for(let item of array){
//     map[item] = (map[item] || 0) + 1;
//   }
 
//   for(let key in map){
//     if(map[key] == 1){
//       return key;
//     }
//   }
//   return output;
// }

// const arr = [3,8,1,3,4,3,8];
// const result = firstNonReaptingItem(arr);
// console.log(result);//1




//STRING----- only based on  key of object(countMap)
///------------------------NEW-----------------

// function findFrequency(str){
//     const countMap = {};
//     let output = '';
//     for(let char of str){
//         countMap[char] = (countMap[char]|| 0)+1
//           }
//           for(let key in countMap){
//               if(countMap[key] === 1){
//                output+=key
//               }
//           }
          
//     return output;
// }
// const str = 'programming'
// const result = findFrequency(str)
// console.log(result)//poain


//--------------------------------------------

// function findFrequency(str){
//     const countMap = {};
//     let output = '';
//     for(let char of str){
//         countMap[char] = (countMap[char]|| 0)+1
//           }
//           for(let key in countMap){
//               if(countMap[key] === 2){
//                output+=key
//               }
//           }
          
//     return output;
// }
// const str = 'programming'
// const result = findFrequency(str)
// console.log(result)//rgm

//-------------------------------------------------

//---BASED ON KEY NOT VALUE

// function findFrequency(str){
//     const countMap = {};
//     for(let char of str){
//         countMap[char] = (countMap[char]|| 0)+1
//           }
//           for(let key in countMap){
//               if(countMap[key] === 1){
//              return key;
//               }
//           }
// }
// const str = 'programming'
// const result = findFrequency(str)
// console.log(result)//p


//--------------------------------
//Version 2 — Pushing while counting inside the loop

// function findFrequency(str){
//     const countMap = {};
//     let output = '';
//     for(let char of str){
//         countMap[char] = (countMap[char]|| 0)+1
        
//         if(countMap[char] === 1){
//               output+=char
//               }
//           }
          
//     return output;
// }
// const str = 'programming'
// const result = findFrequency(str)
// console.log(result)//progamin



//----- FLATTEN A NESTED ARRAY(1OR MULTIPLE LEVEL DEEP--)----------------
//-- “Write a recursive function that takes a deeply nested array and returns a flat array.”

//--NOTE--We use the spread operator (...) to unpack the returned array from flattenArray(ele)
// // so that each item gets pushed individually into output.

// function flattenArray(array) {
//   const output = [];

//   for (let item of array) {
//     if (Array.isArray(item)) {
//       // If item is an array, flatten it first
//       output.push(...flattenArray(item));//recursive call flattenArray([2,[3,4]])  and recursive call flattenArray(..[3,4]) and final recursive call flattenArray(..[2,3,4])
//     } else {
//       // If item is a number, add directly
//       output.push(item);
//     }
//   }

//   return output;
// }

// const arr = [1, [2, [3, 4]]];
// const result = flattenArray(arr);
// console.log(result); // [1, 2, 3, 4]


//------------------------
// function flattenArray(array) {
//   const output = [];

//   for(let ele of array){
//       if(Array.isArray(ele)){
//           output.push(...flattenArray(ele)) /// 
//       }else{
//          output.push(ele)
//       }
//   }
//   return output;
// }

// const arr = [[4,5],[9,6] ,[3, 4]];
// const result = flattenArray(arr);
// console.log(result); //[ 4, 5, 9, 6, 3, 4 ]



//------------FIND INTERSECTION OF TWO ARRAY--------

// function intersectionOfTwoArray(array1,array2){
//     const output = [];
//     for(let ele1 of array1){
//          for(let ele2 of array2){
//              if(ele1 === ele2){
//                 output.push(ele1) //or  output.push(ele1)
//              }
//          }
//          }
//        return output;
// }
// const arr1 = [1,2,3]
// const arr2 = [2,3,4]
// const result = intersectionOfTwoArray(arr1,arr2)
// console.log(result)//[ 2, 3 ]


//------------REMOVE DUPLICATES ELEMENTS FROM  GIVEN ARRAY--------

// function removeDuplicates(array){
//     const output = [];
//     for(let i=0; i<array.length; i++){
//              if(!output.includes(array[i])){
//                 output.push(array[i]) 
//              }
//          }
//        return output;
// }
// const arr = [1,2,2,3,4,4,5]
// const result = removeDuplicates(arr)
// console.log(result)//[ 1, 2, 3, 4, 5 ]



//---------------FIND DUPLICATES ELEMENT ------

// function findDuplicates(array){
//     const output = [];
//     for(let i=0; i<array.length; i++){
//          for(let j=i+1; j<array.length; j++){
//              if(array[i] === array[j])
//              if(!output.includes(array[i])){
//                 output.push(array[i])
//              }
//          }
//          }
//        return output;
// }
// const arr = [1,2,2,3,4,4,5]
// const result = findDuplicates(arr)
// console.log(result)//[ 2, 4 ]


//------------FIND SUM OF TWO  ELEMENT PAIR OF ARRAY--------

// function findPairs(array,k){
//       const  output = [];
//       for(let i=0; i<array.length; i++){
//           for(let j=i+1; j<array.length; j++){
//               if(array[i]+array[j] === k){
//                      output.push([array[i],array[j]] );
//               }
//            }
//       }
// return output;
// }
// const array = [1,2,3,4]
// const k=5
// const result = findPairs(array,k)
// console.log(result)////[[1,4],[2,3]]


//------------FIND MISSING ELEMENTS OF THE ARRAY--------

// function FindMissingElement(array){
// function app(arr){
//     const output = [];
//   arr.sort((a,b)=> a-b)
//     for(let i=0; i<arr.length - 1; i++){
//         if(arr[i +1] !== arr[i]+1){
//           output.push(arr[i] + 1)
//           //return arr[i] +1
//         }
//      }
//     return output
// }
// const arr = [1,2,5,6,4,8] //--[1,2,4,5,6,8]
// const result = app(arr)
// console.log(result)//[ 3, 7]
// explaination next number is  at i =1 arr[i+1] =>arr[2] =>4
// current number is  at i =1 arr[i] +1 =>arr[1] + 1 => 2+1 =>3
//  check 4!==3 here 3 is missing




///---QUESTION-----Find First Repeating Element


//best -------If output[firstletter] is null/undefined → assign []

//  function reverseFn(array){
//      const output = {};
     
//      for(let item of array){
//          const firstletter = item[0]
//          output[firstletter] ??=[];
//          output[firstletter].push(item)
//      }
       
//     return output;  
//  }

//  const arr = ["apple", "banana", "avocado"]
//  const result = reverseFn(arr)
//  console.log(result)//{ a: [ 'apple', 'avocado' ], b: [ 'banana' ] }





//------------------------------------------

//1. **Group array elements by first character**
// function GroupEleByFirstChar(Input){
//     const output = {};
//     for(let i=0;i<Input.length;i++){
//          const Word = Input[i]
//          const InitialChar = Word[0]
//      if(output[InitialChar]){//output["a"]
//          output[InitialChar].push(Word)  //output["a"] = ["apple"]
//      }else{
//          output[InitialChar] =  [Word] // initializes a new array with the current word when that letter hasn’t been seen before.
//      }
//  }
//   return output;   
// }
// Input= ["apple", "banana", "avocado"]
// const result = GroupEleByFirstChar(Input)
// console.log(result)//{ a: ["apple", "avocado"], b: ["banana"] }

//------------------ANOTHER--------------------

//  function groupByFirstLetter(array){
//      const output={};
//      for(let i=0;i<array.length; i++){
//       const word = array[i]
//         const firstLetter = word[0]
//            if(!output[firstLetter]){
//               output[firstLetter] = [];
//           }
//               output[firstLetter].push(word)  
//            }
//      return output;
//  }
 
//  const input = ['aca','tcs','http','adsa','hcl','type','telegram'];
// const result = groupByFirstLetter(input)
// console.log(result)

// {
//   a: [ 'aca', 'adsa' ],
//   t: [ 'tcs', 'type', 'telegram' ],
//   h: [ 'http', 'hcl' ]
// }


////-----------------------Version A 

//  function groupByFirstLetter(input){
//      const output={};
//      for(let word of input){
//          const firstLetter = word[0]
//            if(!output[firstLetter]){
//               output[firstLetter] = [];
//           }
//               output[firstLetter].push(word)  
//            }
//      return output;
//  }
 
//  const input = ['aca','tcs','http','adsa','hcl','type','telegram'];
// const result = groupByFirstLetter(input)
// console.log(result)

// {
//   a: [ 'aca', 'adsa' ],
//   t: [ 'tcs', 'type', 'telegram' ],
//   h: [ 'http', 'hcl' ]
// }

///===== another====Version B
 
//  function groupByFisrtLetter(Input){
//      const output = {};
//      for(let item of Input){
//          const firstLetter = item[0]
//          if(output[firstLetter]){
//             output[firstLetter].push(item)  
//          }else{
//              output[firstLetter] =  [item] 
//          }
//      }
//      return output;
//  }
//  Input= ["apple", "banana", "avocado"]
//  const result =  groupByFisrtLetter(Input)
//  console.log(result)
//  //{ a: [ 'apple', 'avocado' ], b: [ 'banana' ] }
 


//  Version A → compact, slightly less verbose.

// Version B → clearer, easier for beginners to understand.

// 👉 In interviews, both are fine.
// If you want to show cleaner intent, go with Version B.
// If you want to show shorter code, go with Version A.
 
 
 
 
 
 
//============================//
//NOTE:
 //for(let i=0; i<obj.length; i++)// for array
//for(let key in obj)// for object

// function arrayToObject(arr) {
//   const obj = {};
//   for (let i = 0; i < arr.length; i++) {
 //obj = arr[i]; reassign , TypeError: Assignment to constant variable., return result 5 also here need declare let obj = {}
//     obj[i] = arr[i];// just update  
// obj[i] is a dynamic property access on the object.
//   }
//   return obj;
// }
//  const arr = ['a','b','c','d']
//  const result = arrayToObject(arr)
//  console.log(result)//{ '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

//obj[i] = arr[i]===creates a key value pair
// i = 0:
// output[0] = array[0] → output[0] = 1

// i = 1:
// output[1] = array[1] → output[1] = 2

//====================================///


// function objectValuesToArray(obj) {
//   const arr = [];
//   for (let key in obj) {
//     arr.push(obj[key]);
//   }
//   return arr;
// }
//  const obj = { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }
//  const result = objectValuesToArray(obj)
//  console.log(result)//[ 'a', 'b', 'c', 'd' ]



//----Interview Question


//  function createObject(keys, values) {
//   const output = {};
  
//   for (let i = 0; i < keys.length; i++) {
//     output[keys[i]] = values[i];
//   }
  
//   return output;
// }

// const keys = ['name', 'age', 'country'];
// const values = ['bobby', 30, 'India'];

// const result = createObject(keys, values);
// console.log(result);
// //{ name: 'bobby', age: 30, country: 'India' }



// // Iteration 1 (i = 0)

// // keys[0] → 'name'

// // values[0] → 'bobby'

// // So:

// // output['name'] = 'bobby'


// // Now:

// // output = { name: 'bobby' }




//======================================//

 
//  function App(obj){
//    const keys = [];
//     const values = [];
   
//      for(let key in obj){
//        keys.push(Number(key));    // convert string to number //[0, 1, 2, 3, 4]
//        keys.push(key)
//        values.push(obj[key])
//      }
//     // return keys;
//      //return values;
//       return [keys, values];   //[ [ '0', '1', '2', '3', '4' ], [ 1, 2, 34, 4, 5 ] ]
//  }
 
//  const obj = { '0': 1, '1': 2, '2': 34, '3': 4, '4': 5 }
//  const result =  App(obj)
//  console.log(result)  //[ [ '0', '1', '2', '3', '4' ], [ 1, 2, 34, 4, 5 ] ]
//  console.log(result[0])//[ '0', '1', '2', '3', '4' ]
//   console.log(result[1])//[ 1, 2, 34, 4, 5 ]
 


//========================//
//-----  Modulo Operation ------///////////

// function NewElements(array, index) {
//   const output = [];
//   const length = array.length;

//   for (let i = 0; i < 3; i++) {
//     output.push(array[(index + i) % length]);
//   }

//   return output;
// }

// // Test cases
// console.log(NewElements(["A", "B", "C", "D"], 1)); // [B, C, D]
// console.log(NewElements(["A", "B", "C", "D"], 3)); // [D, A, B]
// console.log(NewElements(["A", "B", "C", "D"], 0)); // [A, B, C]


///====================================///

//  function countTarget(input){
//      const output = {};
//      const expectedResult = [];
//      for(let item of input){
//        const {target} = item
//        output[target] =(output[target] || 0) +1 
//      }
//      for(let key in output){
//          expectedResult.push({target : key, count:output[key] })
//      }
     
//     return expectedResult;
//  }

//   const input = [
//   { target: 'abc' },
//   { target: 'gft' },
//   { target: 'abc' }
// ];
//  const result =  countTarget(input)
//  console.log(result)

//[ 
// { target: 'abc', count: 2 },
//  { target: 'gft', count: 1 } 
//]

 
//------------ANOTHER WAYS-------------

 
//  function countTargets(array){
//    const frequency = {}; //const countMap  = {};
//    const output = [];
  
//   for( let i=0; i<array.length; i++){
//       const ele = array[i].target;
//       frequency[ele] ?    frequency[ele]+=1 :   frequency[ele]=1
//        }
      
//        for (let key in frequency) {
    // console.log(key)
//     console.log(map[key])
//     output.push({ target: key, count: frequency[key] });
//   } 
    
//      return output;
//     }
 
//   const array = [
//   { target: 'abc' },
//   { target: 'gft' },
//   { target: 'abc' }
// ];
//  const result =  countTargets(array)
//  console.log(result)

  //[
//   { target: 'abc', count: 2 },
//   { target: 'gft', count: 1 }
// ]


//--------QUESTION---------------------

// function groupByLastLetter(input){
//     const output = {};
//    for(let item of input){
//         const { name, dept, role } = item;

//         if(!output[dept]){
//            output[dept] = {}; 
//         }
//         if (!output[dept][role]) {
//       output[dept][role] = [];
//     }
//      output[dept][role].push(name)
//        }
//         return output;
// }

//  const input = [
//   { name: 'Alice', dept: 'Engineering', role: 'Frontend' },
//   { name: 'Bob', dept: 'Engineering', role: 'Backend' },
//   { name: 'Eve', dept: 'Engineering', role: 'Frontend' },
//   { name: 'Tom', dept: 'HR', role: 'Recruiter' }
// ];
// const result =  groupByLastLetter(input)
// console.log(result)

/* Output:
{
  Engineering: {
    Frontend: [Alice, Eve],
    Backend: [Bob]
  },
  HR: {
    Recruiter: [Tom]
  }
}
*/




// ////-----


// function groupByFn(array){
//     const output = {};
//     const outcome = [];

//     for(const { name, dept, role } of array){

//         // Initialize dept
//         output[dept] ??= {
//             names: [],
//             count: 0,
//             roles: {}
//         };

//         // Add name
//         output[dept].names.push(name);

//         // Count
//         output[dept].count++;

//         // Group by role inside dept
//         output[dept].roles[role] ??= [];
//         output[dept].roles[role].push(name);
//     }

//     // Convert to desired format
//     for(let key in output){
//         outcome.push({
//             dept: key,
//             names: output[key].names,
//             count: output[key].count,
//             roles: output[key].roles
//         });
//     }

//     return outcome;
// }


//   const arr =  [
//   { name: 'Alice', dept: 'Engineering', role: 'Frontend' },
//   { name: 'Bob', dept: 'Engineering', role: 'Backend' },
//   { name: 'Eve', dept: 'Engineering', role: 'Frontend' },
//   { name: 'Tom', dept: 'HR', role: 'Recruiter' }
// ];
//  const result = groupByFn(arr)
//  console.log(result)




// [
//   {
//     dept: "Engineering",
//     names: ["Alice", "Bob", "Eve"],
//     count: 3,
//     roles: {
//       Frontend: ["Alice", "Eve"],
//       Backend: ["Bob"]
//     }
//   },
//   {
//     dept: "HR",
//     names: ["Tom"],
//     count: 1,
//     roles: {
//       Recruiter: ["Tom"]
//     }
//   }
// ]



// //---=============== ANOTHER WAYS OF SOLVING ===================------
//  function groupByDept(array){
//      const output={};
//      for(let i=0;i<array.length; i++){
//          const keys = array[i].dept
//            const nestedKeys = array[i].role
//           const values = array[i].name
          
//            if(!output[keys]){
//               output[keys] = {};
//           }
//            if(!output[keys][nestedKeys]){
//               output[keys][nestedKeys] = [];
//           }
//               output[keys][nestedKeys].push(values)  
//            }
//      return output;
//  }
 
//  const input = [
//   { name: 'Alice', dept: 'Engineering', role: 'Frontend' },
//   { name: 'Bob', dept: 'Engineering', role: 'Backend' },
//   { name: 'Eve', dept: 'Engineering', role: 'Frontend' },
//   { name: 'Tom', dept: 'HR', role: 'Recruiter' }
// ];
// const result = groupByDept(input)
// console.log(result)

// {
//   Engineering: {
//     Frontend: [Alice, Eve],
//     Backend: [Bob]
//   },
//   HR: {
//     Recruiter: [Tom]
//   }



// ---   ============================================   ----------
//  function groupByRole(array){
//      const output={};
//      for(let i=0;i<array.length; i++){
//          const keys = array[i].role
//           const values = array[i].name
//             if(!output[keys]){
//               output[keys] = [];  //// create new array if needed
//           }
//               output[keys].push(values)  //always push the name or This version works properly every time — it ensures the array is there and always adds the name.
//            }
//      return output;
//  }
 
//  const input = [
//   { name: 'Alice', dept: 'Engineering', role: 'Frontend' },
//   { name: 'Bob', dept: 'Engineering', role: 'Backend' },
//   { name: 'Eve', dept: 'Engineering', role: 'Frontend' },
//   { name: 'Tom', dept: 'HR', role: 'Recruiter' }
// ];
// const result = groupByRole(input)
// console.log(result)

// {
//   Frontend: [ 'Alice', 'Eve' ],
//   Backend: [ 'Bob' ],
//   Recruiter: [ 'Tom' ]
// }



//----Note---
//this represent dynamic property  output[keys]

//------------wrong way
// if(!output[keys]){
//               output[keys] = [];
//           }else{
//               output[keys].push(values)  // if iam using else Pushes only if array already exists (misses 1st value)
//            }






// // Write a function that takes an array of objects, where each object represents a piece of hardware with an id, a type, and a status. Your function should return an object that groups the hardware ids by their status.
// // Example Input:

// function newObj(array){
//  let output = {};
//      for(let i=0; i<array.length;i++){
//          const key =array[i].status
//          const id = array[i].id   
//          if (!output[key]) {
//       output[key] = [];
//     }   
//           output[key].push(id);  
//      }  
//      return output; 
// }
// const hardware = [
//  { id: 'meter-01', status: 'online', type: 'meter' },
//  { id: 'relay-01', status: 'offline', type: 'relay' },
//  { id: 'inverter-01', status: 'online', type: 'inverter' },
//  { id: 'meter-02', status: 'error', type: 'meter' },
//  { id: 'relay-02', status: 'offline', type: 'relay' },
// ];
// const result =  newObj(hardware)  
//  console.log(result)


// // Expected Output:
// // {
// //  online: ['meter-01', 'inverter-01'],
// //  offline: ['relay-01', 'relay-02'],
// //  error: ['meter-02']
// // }


//---------------------------------///

// function GroupByLastLetter(data) {
//   const map = {};
//   const output = [];
//   for(let item of data){
//       const {product,quantity} = item;
//       console.log(quantity)
//  map[product] =    map[product] ? map[product] + quantity : quantity;
//   }
  
//  for(let product in map){
//      output.push({product , quantity: map[product]  })
//  }
//   return output;
// }

// const data = [
//   { product: 'apple', quantity: 2 },
//   { product: 'banana', quantity: 1 },
//   { product: 'apple', quantity: 3 }
// ];

// const result = GroupByLastLetter(data);
// console.log(result);

/* Output:
[
  { product: 'apple', quantity: 5 },
  { product: 'banana', quantity: 1 }
]
*/


////---------------------//////


// function toTitleCase(str) {
//   const words = str.split(' ');
//   let result = '';

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     const firstLetter = word[0].toUpperCase();
//     const rest = word.slice(1).toLowerCase();
//     result += firstLetter + rest;
//or
//result += firstLetter + rest + ' ';//// "Hello World How You Doing "

//     if (i < words.length - 1) {
//       result += ' ';
//     }
//   }

//   return result;
// }
// const str = 'heLlo WorLd hoW yOu dOIng';
// const formatted = toTitleCase(str);
// console.log(formatted); // ➞ "Hello World How You Doing"



//===QUESTION ======
// function findPalindromes(arr) {
//   const palindromes = [];

//   for (let i = 0; i < arr.length; i++) {
//     const str = arr[i];
//     let isPalindrome = true;

//     for (let j = 0; j < Math.floor(str.length / 2); j++) {
//       if (str[j] !== str[str.length - 1 - j]) {
//         isPalindrome = false;
//         break;
//       }
//     }

//     if (isPalindrome) {
//       palindromes.push(str);
//     }
//   }

//   return palindromes;
// }

// // Example usage
// const input = ["abc", "aa", "qwx", "a", "zzxe", "madam", "eeze"];
// console.log(findPalindromes(input));  // Output: [ 'aa', 'a', 'madam' ]


///----Interview Question-------
//[{ -5, 0, 5 }, { -3, 0, 3 }, { -3, 1, 2 }] 





//const arr = [-5, -3, 0, 3, 5, 1, 2]


//question based  on recursion ----
// A && B && C = only true if A and B and C are all true.
// A || B || C = true if any one of them is true.


//---(typeof obj[key] === 'object' &&  obj[key] !== null &&   !Array.isArray(obj[key]) )

//typeof obj[key] === 'object' → the value must be an object type.
//obj[key] !== null → not null (because typeof null is 'object').
//!Array.isArray(obj[key]) → not an array.


//REcursion----

//  function App(number){
//      if(number <= 0){
//          return null//0;
//      }else{
//          return number + App(number -1)
//      }
//  }
//  console.log(App(6))//21


//  function App(number){
//      if(number <= 0){
//          return 0;
//      }else{
//          return number + App(number -1)
//      }
//  }
//  console.log(App(3))//6


/// Recurion question------------

// function App(profile) {
//   let count = 0;

//   for (let key in profile) {
//     if (Array.isArray(profile[key])) {
//       for (let item of profile[key]) {
//           console.log(item)
//         count += App(item); // recursively call App for each kid object
//       }
//     } else if (typeof profile[key] === 'number') {
//       count += profile[key]; // add the age
//     }
//   }

//   return count;
// }

// let profile = {
//   age: 56,
//   kids: [
//     { age: 23, kids: [{ age: 1 }, { age: 3, kids: [{ age: 4 }] }] },
//     { age: 27, kids: [{ age: 4 }] }
//   ]
// };

// const result = App(profile);
// console.log(result); // ✅ Output: 118


// //===========================
//  function App(obj){
//     let sum =0;
//     for(let key in obj){
//          if(typeof  obj[key] === 'object' &&  obj[key] !==null && !Array.isArray(obj[key]) ){
//            sum+= App(obj[key])
//        }else if(typeof  obj[key] === 'number'){
//           sum += obj[key]  
//        }
//     }
//     return sum;
// }

// const obj ={
//     a:4,
//     b:{h:6},
//     r:0,
//     y:{h:2,u:{n:1}}
// }


// const result = App(obj)
// console.log(result)//13



// function flattenArray(array) {
//   const output = [];

//   for (let item of array) {
//     if (Array.isArray(item)) {
//       // If item is an array, flatten it first
//       output.push(...flattenArray(item));//recursive call flattenArray([2,[3,4]])  and recursive call flattenArray(..[3,4]) and final recursive call flattenArray(..[2,3,4])
//     } else {
//       // If item is a number, add directly
//       output.push(item);
//     }
//   }

//   return output;
// }

// const arr = [1, [2, [3, 4]]];
// const result = flattenArray(arr);
// console.log(result); // [1, 2, 3, 4]



//-------------------------
// function CountKeys(obj){
//     let count =0;
//     for(let key in obj){
//     count++;//count the current key
    
//      // if the value is a nested object (not array or null), recurse
//     if(typeof obj[key] === 'object' &&  obj[key] !== null &&   !Array.isArray(obj[key]) ){
//         count+=CountKeys(obj[key])// // add keys from the nested object
//     }

//---optional
//-----      count++;
//
//        }
//        return count;
// }


// const obj = {
//   a: "1",
//   b: {
//     a: 1,
//     b: "q",
//     n: {
//       a: 1
//     },
//     h: {
//       b: 1
//     }
//   },
//   h: 1
// };
// const result = CountKeys(obj)
// console.log(result)//9

//------------------//
//recursion
//  function sumObjectValues(obj){
//     let  sum = 0;
//     for(let key in obj){
//     if(typeof obj[key] === 'object' &&  obj[key] !== null && !Array.isArray(obj[key])){
//       sum += sumObjectValues(obj[key])
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


//-- Important------

// function flattenArray(array) {
//   const count = 0;
//   for (let item of array) {
//     if (Array.isArray(item)) {
//       count+=(flattenArray(item))
//     } else {
//     count++
//     }
//   }

//   return output;
// }

// const arr = [1, [2, [3, 4]]];
// const result = flattenArray(arr);
// console.log(result); 


//------IMPORTANT NOTES----

// for  flatten array we have write result+=(...app(arr)) here spread oprator we using to convert into same level
 // for both case count/sum we  result+=app(arr) its just go inside the depth of nested arry convert into  single digit
 // for count =>  depends in else part which is count++ //4
 // for sum =>  depends in else part which is count+=item//10




//=========
// case-1 flatten array till  given depth   for that i applied depth
// case-2  remove duplicate for that i used global Set


//note---
// seen = new Set() is global set or special data structre that stores unique value and remove duplicate for future used.

// function app(arr , depth, seen = new Set() ){
//     const output  = [];
//     console.log("000--",seen)
    
//     for(let item of arr){
//         if(Array.isArray(item) &&  depth > 0){
//      output.push(...app(item , depth- 1, seen))
//          }else{
//              if(!seen.has(item)){
//                  seen.add(item)5
//                  output.push(item)  
//          }
//          }
//     }
//     return output;
// }
// const arr =[1, [2,8, [1, [3]]]]
// const depth = 2
// const result = app(arr,depth)
// console.log(result)

// //[ 1, 2, 8, [ 3 ] ]


// console.log("000--",seen) PROOF
// 000-- Set(0) {}
// 000-- Set(1) { 1 }
// 000-- Set(3) { 1, 2, 8 }




//===
// function maxDepth(arr) {
//   let innerMax = 1; // current array itself is depth 1

//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       // RECURSION
//       innerMax = Math.max(innerMax, maxDepth(item) + 1);
//     }
//   }
//   return innerMax;
// }
// const arr =[100, [2,8, [12, [3,[3,4,[9]]]]]]

// const result = maxDepth(arr)
// console.log(result)//6



//=====

// function maxElementOnlyNested(arr , isTopLevel = true){
//       let elementMax  = -Infinity;
//     for(let item of arr){
//         if(Array.isArray(item)){
//    const elements = maxElementOnlyNested(item , false)
//    elementMax = Math.max(elementMax , elements)
//          }
//          else{
//              if(!isTopLevel){
//          elementMax = Math.max(elementMax, item);
//              }
//          }
//      }
//       return elementMax;
// }
// const arr =[100, [2,8, [12, [3,[3,4]]]]]

// const result = maxElementOnlyNested(arr)
// console.log(result)//12


//------

// function maxElementInMain(arr){
//       let elementMax  = -Infinity;
//     for(let item of arr){
//         if(Array.isArray(item)){
//    const elements = maxElementInMain(item)
//    elementMax = Math.max(elementMax , elements)
//          }
//          else{
//          elementMax = Math.max(elementMax, item);
//          }
//      }
//       return elementMax;
// }
// const arr =[100, [2,8, [12, [3,[3,4]]]]]

// const result = maxElementInMain(arr)
// console.log(result)//100

// NOTE-- for finding smallest element you just have defined  let elementMin  = Infinity  and use MATH.min()



//------
// function stringFormat(arr){
//       let part  = [];
//     for(let item of arr){
//         if(Array.isArray(item)){
//      part.push(stringFormat(item))// return string into the array like [1, "2,12,3,4"] 
//  }
//          else{
//                part.push(item)
//               }
//      }
//       return part.join(','); //[1, "2,12,3,4"].join(',')
// }
// const arr =[1,[2,[12, [3,4]]]]

// const result = stringFormat(arr)
// console.log(result)//'1,2,12,3,4' 

//--SOLUTION-- but version 1 is best way to solve---

// const result = App(arr)
// const strResult = result.join(',');
//  console.log(strResult)//'1,2,12,3,4'  // here is the correct answer

//-------------
// (stringFormat(item)) return a string
// (...stringFormat(item)) return a array



//-----------------------------Objects---------
// function app(obj) {
//   let values = [];
//   let keys = [];

//   for (let key in obj) {
//     let val = obj[key];

//     // If value is a nested object
//     if (typeof val === "object" && val !== null && !Array.isArray(val)) {
//       const inner = app(val);
//       //console.log(inner)
//       values.push(...inner.values);
//       keys.push(...inner.keys);
//     } 
    
//     else {
//       values.push(val);
//       keys.push(key);
//     }
//   }

//   return { values, keys };
// }

// const data = { a: 10, b: { c: 2, d: { e: 3 } }, d: 4 };

// const result = app(data);
// console.log(result)//{ values: [ 10, 2, 3, 4 ], keys: [ 'a', 'c', 'e', 'd' ] }
// //console.log([...result.values, ...result.keys])
// //// → [10, 2, 3, 4, "a", "b", "c", "d", "e"]




//----------------RECURSTION WITH OBJECTS-------------------------

//Input: { 'a.b.c': 1, 'g.u.r': 7 }
//Output: { a: { b: { c: 1 } }, g: { u: { r: 7 } } }

// function unflattenObj(obj){
//     const output = {};
    
//      for(let key in obj){
//         const value = obj[key];
//         const keys = key.split('.');
        
//         let current = output;
        
//         keys.forEach((key , index)=>{
//             if(index === keys.length -1){
//                current[key] = value 
//             }else{
//                 if(!current[key]){
//                     current[key] = {} 
//                 }
//                  current =  current[key] // go deeper
////////-------  current[key] =  value //{a:1,b:1,c:1} // if we want this answer---
//            }
//            })
//        }
// return output;    
// }
// const obj = { 'a.b.c': 1, 'g.u.r': 7 }
// const result = unflattenObj(obj)
// console.log(result);//{ a: { b: { c: 1 } }, g: { u: { r: 7 } } }



//--------------------------

// Input: { a: { b: { c: 1 } } }
// Output: { 'a.b.c': 1 }

// function flattenObject(obj, parentKey = '', object = {}){
    
//     for(let key in obj){
//         const value = obj[key];
//         let newKey = parentKey ? parentKey + "." + key : key;
//         if(typeof value === 'object' && value !== null && !Array.isArray(value)){
//               flattenObject(value, newKey, object)
//         }else{
//           object[newKey]   = value
//         }
//         }
// return object;    
// }
// const obj = { a: { b: { c: 1 }}, g:{u:{r:7}} }
// const result = flattenObject(obj)
// console.log(result);////{ 'a.b.c': 1, 'g.u.r': 7 }



//--------------------
// Input: { a:{ b: { c: 1 } } }
// Output: ['a','a.b','a.b.c']



// function getAllKeys(obj , parentKey = '' , output= []){
  
//      for(let key in obj){
//          const value = obj[key]
//          let newKeys = parentKey ? parentKey + '.' + key : key
//          output.push(newKeys)
//          if(typeof value === 'object' && value !==null && !Array.isArray(value)){
//              getAllKeys(value, newKeys , output )
//          }
//      }      
//        return output;    
// }
// const obj = { a:{ b: { c: 1 } } }
// const result = getAllKeys(obj)
// console.log(result);['a','a.b','a.b.c']




///--------------------Regex----

   //  const digitArr = item.match(/\d/g)//20 ---['4' ,'5']/['0' ,'1']/['8']/['2'] --indiviual


   //  const digitArr = item.match(/\d+/g)//56 ---['45']/['01']/['8']/['2'] --group



//  function app(arr){
//      let output =0;
//      for(let item of arr){
//      const digitArr = item.match(/\d+/g )

//        if(digitArr){           
//        for(let digit of digitArr){
      //     output+=Number(digit) 
//           }
//         }

//      }
//   return output;  
//  }

//  const arr = ['dd45', 'nn01' , 'bb' ,'o8o','yy2']
//  const result = app(arr)

// console.log(result);//56


//-------------------------
//  function app(arr){
//      let output ='';
//      for(let item of arr){
//      const digitArr = item.match(/\d+/g)
//        if(digitArr){
//             output+= digitArr.join('')
//         }
//      }
//   return output;  
//  }

//  const arr = ['dd45', 'nn01' , 'bb' ,'o8o','yy2']
//  const result = app(arr)

// console.log(result);////'450182'


////-----------------------------------------

// ❗ Why do we need the if (digitArr){}?

// Because .match() returns:
// an array → when digits are found
// null → when NO digits are found

//------------------------------------------


//----------------------

// function freq(str) {
//   return {
//     uppercase: (str.match(/[A-Z]/g) || []).length,
//     lowercase: (str.match(/[a-z]/g) || []).length,
//     digits:    (str.match(/[0-9]/g) || []).length,
//     special:   (str.match(/[^a-zA-Z0-9]/g) || []).length
//   };
// }

// console.log(freq('A47&*1CJK9/yw'));
// { uppercase: 4, lowercase: 2, digits: 4, special: 3 }


//----------------------------

// function freq(str) {
// const  result = {
//           up:(str.match(/[A-Z]/g) || []).length,
//           lc: (str.match(/[a-z]/g) || []).length,
//           n:(str.match(/[0-9]/g) || []).length,
//           sc:(str.match(/[^a-zA-Z0-9]/g) || []).length
//       }
//       return result;
//}
//{ up: 4, lc: 2, n: 4, sc: 3 }



//--------------------------------------
//  function app(str){
//      let  result = {
//           up:0,
//           lc:0,
//           n:0,
//           sc:0
//       }
//       for(let char of str){
//           if(/[A-Z]/.test(char)){
//              result.up++ 
//           }else if(/[a-z]/.test(char)){
//              result.lc++ 
//           }else if(/[0-9]/.test(char)){
//              result.n++ 
//           }else{
//              result.sc++  
//           }
//       }
      
//       return result;
//  }

//  const str = 'A47&*1CJK9/7yw'
//  const result = app(str)
//  console.log(result)

 //{ up: 4, lc: 2, n: 5, sc: 3 }



//------------------


// function countFrequency(str) {
//   let result = {
//     uppercase: 0,
//     lowercase: 0,
//     digits: 0,
//     special: 0
//   };

//   for (let char of str) {

//     if (/[A-Z]/.test(char)) {
//       result.uppercase++;

//     } else if (/[a-z]/.test(char)) {
//       result.lowercase++;

//     } else if (/[0-9]/.test(char)) {
//       result.digits++;

//     } else {
//       result.special++;
//     }
//   }

//   return result;
// }

// const str = 'A47&*1CJK9/yw';
// console.log(countFrequency(str));
// { uppercase: 4, lowercase: 2, digits: 4, special: 3 }


//---------------NOTES-------------

// If matches /[A-Z]/ → uppercase
// ✔ If matches /[a-z]/ → lowercase
// ✔ If matches /[0-9]/ → digit
// ✔ Else →  /[^a-zA-Z0-9]/  special character



// /g = global flag — it tells .match() to return all matches in the string as an array.

// Without /g .match() usually returns only the first match (and extra info for capture groups), not a list of all.

// So to count occurrences you must use /g.

//|| [] makes sure you always have an array: if .match() is null, it falls back to an empty array [].




//-------------------------------------------------

//  function app(str){
//     //  let result = ''
//       let result = []
//      for(let char of str){
//        const upChar = char.match(/[A-Z]/g)//match(/[a-z]/g)
//        if(upChar){

//           //result+= upChar.join('')//'ACJK'//'acjk'

//           for(let item of upChar){
//                result.push(item)//[ 'A', 'C', 'J', 'K' ]//['a' , 'c' , 'j' ,'k']
//           }
         
//        }
//      }
//     return result; 
//  }

//  const str = 'A47&*1CJK9/yw'
//  const result = app(str)
//  console.log(result)


//----------------------------------------

//  function app(str){
//       let result = []
//      for(let char of str){
//        const upChar = char.match(/[0-9]/g)
//        if(upChar){
        
//           for(let item of upChar){
//                result.push(Number(item))//[ 4, 7, 1, 9 ]
//           }
         
//        }
//      }
//     return result; 
//  }

//  const str = 'A47&*1CJK9/yw'
//  const result = app(str)
//  console.log(result)



//-------------------

//  function app(str){
//       let result = []
//      for(let char of str){
//        const upChar = char.match(/[^a-zA-Z0-9]/g)
//        if(upChar){
        
//           for(let item of upChar){
//                result.push((item))//[ '&', '*', '/' ]
//           }
         
//        }
//      }
//     return result; 
//  }

//  const str = 'A47&*1CJK9/yw'
//  const result = app(str)
//  console.log(result)





///---------QUESTION---------------------------

// function getCountByDataType(array){
//     const output = {};
//     for(let ele of array){
//         output[typeof ele]  = (output[typeof ele] || 0)+1
// }
//  return output;
// }

// const arr = [2,{name:'abc'},true,'program',null,undefined,4,false]
// const result = getCountByDataType(arr)
// console.log(result)
// //{ number: 2, object: 2, boolean: 2, string: 1, undefined: 1 }
// //here null is treated as an onject


/////ANOTHER WAYS------

// function getCountByDataType(array){
//     const output = {};
//     const expectedOutput = [];
//     for(let ele of array){
        
//         output[typeof ele]  = (output[typeof ele] || 0)+1
// }
// for(let key in output){
//     expectedOutput.push({dataType : key    , count :output[key]})
//     }
//  return expectedOutput;
// }

// const arr = [2,{name:'abc'},true,'program',null,undefined,4,false]
// const result = getCountByDataType(arr)
// console.log(result)
// [
//   { dataType: 'number', count: 2 },
//   { dataType: 'object', count: 2 },
//   { dataType: 'boolean', count: 2 },
//   { dataType: 'string', count: 1 },
//   { dataType: 'undefined', count: 1 }
// ]
//here null is treated as an onject


///------------------ANOTHER--------------------
// function getCountByDataType(array){
//     const output = {};
//     const expectedOutput = [];
//     for(let ele of array){
//         let type;// its like box where datatype of ele stored
//         // // ✅ Separate entry for null
//         if(ele === null){
//             type = "null"
//         }else{
//             type = typeof ele
//         }
//            output[type]  = (output[type] || 0)+1
// }
// for(let key in output){
//     expectedOutput.push({dataType : key    , count :output[key]})
//     }
//  return expectedOutput;
// }

// const arr = [2,{name:'abc'},true,'program',null,undefined,4,false]
// const arr = [2,true,undefined,{},'program',false,[],null]
// const result = getCountByDataType(arr)
// console.log(result)
// [
//   { dataType: 'number', count: 2 },
//   { dataType: 'object', count: 1 },
//   { dataType: 'boolean', count: 2 },
//   { dataType: 'string', count: 1 },
//   { dataType: 'null', count: 1 },
//   { dataType: 'undefined', count: 1 }
// ]
//here null is treated as a seperate dataType


///-------- Another question  formule---------
// const arr =  [9, 2, 1, 4, 50, 3,8]
// console.log(arr.sort((a,b)=>a-b))
// console.log(arr.sort((a,b)=>b-a))


 //const arr= [9, 2,[ 1, 4, [50,6], 3,8]]
//console.log(arr.flat())//[ 9, 2, 1, 4, [ 50, 6 ], 3, 8 ] first leyar flatten
//console.log(arr.flat(Infinity))//[  9, 2, 1, 4, 50, 6, 3, 8]




/// INTERVIEW QUESTION------


//Get names of active Engineering users, sorted alphabetically

//  function getNameByEngg(users){
//       const output = [];
      
//        for(let user of users){
//            // const {name, department, active } = user
//            if(user.department === 'Engineering' &&  user.active === true){
//                output.push(user.name)
//            }
//        }
//       return output.sort(); FOR SORT
//        //  return output
//  }
//   const users = [ { id: 1, name: 'Tom', department: 'Engineering', salary: 80000, active: true },
//  { id: 2, name: 'Bob', department: 'Engineering', salary: 75000, active: false }, 
// { id: 3, name: 'Charlie', department: 'Sales', salary: 60000, active: true }, 
// { id: 4, name: 'Paul', department: 'Engineering', salary: 90000, active: true },
//  { id: 5, name: 'Eva', department: 'Marketing', salary: 65000, active: true },
//  { id: 6, name: 'Frank', department: 'Sales', salary: 58000, active: false }, 
// { id: 7, name: 'Grace', department: 'HR', salary: 70000, active: true },
//  { id: 8, name: 'Alice', department: 'Engineering', salary: 95000, active: true }, 
// { id: 9, name: 'Ivy', department: 'Marketing', salary: 62000, active: false },
//  { id: 10, name: 'Jack', department: 'Finance', salary: 72000, active: true },
//  { id: 11, name: 'Kate', department: 'Sales', salary: 67000, active: true }, 
// { id: 12, name: 'Leo', department: 'Engineering', salary: 78000, active: false },
//  { id: 13, name: 'Maya', department: 'HR', salary: 68000, active: true },
//  { id: 14, name: 'Noah', department: 'Finance', salary: 85000, active: true }, 
// { id: 15, name: 'Olivia', department: 'Marketing', salary: 71000, active: true }, 
// { id: 16, name: 'Hanery', department: 'Engineering', salary: 82000, active: true },]
 
//  const result = getNameByEngg(users)
//  console.log(result)
// //[ 'Alice', 'Hanery', 'Paul', 'Tom' ]



 ////. Calculate average salary of active users by department
 //avgSalary = sum/count
 
//  function getAvgSalaryByDept(users){
//      const output = {}
//      for(let user of users){
//          let {name,department,active,salary} = user
//          if(active === true){
//               if(!output[department]){
//              output[department] = { sum: salary  ,count:1}
//          }else{
//            output[department].sum +=salary
//              output[department].count +=1   
//         }
//          }
//           }
//            for(let department in output){
//         output[department].avg =   output[department].sum /  output[department].count
//          }
//      return  output;
//  }
 
//  const  result = getAvgSalaryByDept(users)
//  console.log(result)
//  {
//   Engineering: { sum: 347000, count: 4, avg: 86750 },
//   Sales: { sum: 127000, count: 2, avg: 63500 },
//   Marketing: { sum: 136000, count: 2, avg: 68000 },
//   HR: { sum: 138000, count: 2, avg: 69000 },
//   Finance: { sum: 157000, count: 2, avg: 78500 }
// }


//  for this format--

//   const map = {};
//            for(let department in output){
//         map[department] = output[department].sum /  output[department].count
//          }
//      return  map;

//      {
//   Engineering: 86750,
//   Sales: 63500,
//   Marketing: 68000,
//   HR: 69000,
//   Finance: 78500
// }
 
 //NOTE-----

//  note---
//??=[] (Nullish Coalescing Assignment) means If outcome[department] is null or undefined, assign it []
// ?? 0 Nullish Coalescing Assignment) means If outcome[department] is null or undefined, assign it 0

 
// Difference from ||:

// || treats 0 as false
// ?? does NOT treat 0 as false



//Aggregation = collecting multiple values and combining them into one result.
// Examples of Aggregation

// From many numbers → one value:

// Sum
// Average
// Count
// Min
// Max
// Total

//---- most efficient way of solving-----
//  function app(users){
//      const output = {};

//      for(const {name , department,active} of users){
//          if(active === true ){
//          (output[department] ??= []).push(name)
//          }
//      }
//    return output;
//  }

//  const users = [ { id: 1, name: 'Tom', department: 'Engineering', salary: 80000, active: true },
//  { id: 2, name: 'Bob', department: 'Engineering', salary: 75000, active: true }, 
// { id: 3, name: 'Tharlie', department: 'Sales', salary: 60000, active: true }, 
// { id: 4, name: 'Paul', department: 'Engineering', salary: 90000, active: true },
//  { id: 5, name: 'Gva', department: 'Marketing', salary: 65000, active: true },
//  { id: 6, name: 'Brank', department: 'Sales', salary: 58000, active: false }, 
// { id: 7, name: 'Grace', department: 'HR', salary: 70000, active: true }]

//  const  result = app(users)
//  console.log(result)


//-----MOST IMPORTTANT SALARY, COUNT----


//  function  app(users){
//      const output = {};
//      const map = {};
//        const newOutput = {};
//      const finalOutcomes = []; 
     
//      for(const {name,active,department,salary} of users){
//          if(active === true){
//              (output[department] ??=[]).push(name)
//              map[department] = ( map[department] || 0)+1  or    map[department] = ( map[department] ?? 0)+1
//              newOutput[department] = ( newOutput[department] ?? 0 )+ salary
//          }
//      }
     
//      for(let key in output){
//          finalOutcomes.push({
//              dept: key,
//              [key] : output[key],
//              count : map[key],
//              sum : newOutput[key],
//              avgSalary : newOutput[key] /  map[key]
// })
//      }
//   return finalOutcomes;
//  }
 
//  const users = [ { id: 1, name: 'Tom', department: 'Engineering', salary: 80000, active: true },
//  { id: 2, name: 'Bob', department: 'Engineering', salary: 75000, active: false }, 
// { id: 3, name: 'Charlie', department: 'Sales', salary: 60000, active: true }, 
// { id: 4, name: 'Paul', department: 'Engineering', salary: 90000, active: true },
//  { id: 5, name: 'Eva', department: 'Marketing', salary: 65000, active: true },
//  { id: 6, name: 'Frank', department: 'Sales', salary: 58000, active: false }, 
// { id: 7, name: 'Grace', department: 'HR', salary: 70000, active: true },
//  { id: 8, name: 'Alice', department: 'Engineering', salary: 95000, active: true }, 
// { id: 9, name: 'Ivy', department: 'Marketing', salary: 62000, active: false },
//  { id: 10, name: 'Jack', department: 'Finance', salary: 72000, active: true },
//  { id: 11, name: 'Kate', department: 'Sales', salary: 67000, active: true }, 
// { id: 12, name: 'Leo', department: 'Engineering', salary: 78000, active: false },
//  { id: 13, name: 'Maya', department: 'HR', salary: 68000, active: true },
//  { id: 14, name: 'Noah', department: 'Finance', salary: 85000, active: true }, 
// { id: 15, name: 'Olivia', department: 'Marketing', salary: 71000, active: true }, 
// { id: 16, name: 'Hanery', department: 'Engineering', salary: 82000, active: true },]
// const result = app(users)
// console.log(result)

// [
//   {
//     dept: 'Engineering',
//     Engineering: [ 'Tom', 'Paul', 'Alice', 'Hanery' ],
//     count: 4,
//     sum: 347000,
//     avgSalary: 86750
//   },
//   {
//     dept: 'Sales',
//     Sales: [ 'Charlie', 'Kate' ],
//     count: 2,
//     sum: 127000,
//     avgSalary: 63500
//   },
//   {
//     dept: 'Marketing',
//     Marketing: [ 'Eva', 'Olivia' ],
//     count: 2,
//     sum: 136000,
//     avgSalary: 68000
//   },
//   {
//     dept: 'HR',
//     HR: [ 'Grace', 'Maya' ],
//     count: 2,
//     sum: 138000,
//     avgSalary: 69000
//   },
//   {
//     dept: 'Finance',
//     Finance: [ 'Jack', 'Noah' ],
//     count: 2,
//     sum: 157000,
//     avgSalary: 78500
//   }
// ]

//---------------------ANOTHER WAYS--------------------


// function groupByDepartment(array){
//     const output = [];
//     const map = {};
    
//     for(let {name,department, salary, active} of array){
//         if(!active) continue; // skip who are inctive and include only active  ✅ fix
//         map[department] ??= {
//             users: [],
//             count: 0,
//             sum: 0
//         }
          
//         map[department].users.push(name);
//         map[department].count++;
//         map[department].sum += salary;
//     }
          
//     for(let key in map){
//         output.push({
//             dept: key,
//             user: map[key].users,
//             count: map[key].count,
//             sum: map[key].sum,
//             avgSalary: map[key].sum / map[key].count // ✅ fix
//         }) 
//     }
     
//     return output;
// }
//  const users = [ { id: 1, name: 'Tom', department: 'Engineering', salary: 80000, active: true },
//  { id: 2, name: 'Bob', department: 'Engineering', salary: 75000, active: false }, 
// { id: 3, name: 'Charlie', department: 'Sales', salary: 60000, active: true }, 
// { id: 4, name: 'Paul', department: 'Engineering', salary: 90000, active: true },
//  { id: 5, name: 'Eva', department: 'Marketing', salary: 65000, active: true },
//  { id: 6, name: 'Frank', department: 'Sales', salary: 58000, active: false }, 
// { id: 7, name: 'Grace', department: 'HR', salary: 70000, active: true },
//  { id: 8, name: 'Alice', department: 'Engineering', salary: 95000, active: true }, 
// { id: 9, name: 'Ivy', department: 'Marketing', salary: 62000, active: false },
//  { id: 10, name: 'Jack', department: 'Finance', salary: 72000, active: true },
//  { id: 11, name: 'Kate', department: 'Sales', salary: 67000, active: true }, 
// { id: 12, name: 'Leo', department: 'Engineering', salary: 78000, active: false },
//  { id: 13, name: 'Maya', department: 'HR', salary: 68000, active: true },
//  { id: 14, name: 'Noah', department: 'Finance', salary: 85000, active: true }, 
// { id: 15, name: 'Olivia', department: 'Marketing', salary: 71000, active: true }, 
// { id: 16, name: 'Hanery', department: 'Engineering', salary: 82000, active: true },]

// const result = groupByDepartment(users)
// console.log(result)


// //---
// [
//   {
//     dept: 'Engineering',
//     user: [ 'Tom', 'Paul', 'Alice', 'Hanery' ],
//     count: 4,
//     sum: 347000,
//     avgSalary: 86750
//   },
//   {
//     dept: 'Sales',
//     user: [ 'Charlie', 'Kate' ],
//     count: 2,
//     sum: 127000,
//     avgSalary: 63500
//   },
//   {
//     dept: 'Marketing',
//     user: [ 'Eva', 'Olivia' ],
//     count: 2,
//     sum: 136000,
//     avgSalary: 68000
//   },
//   {
//     dept: 'HR',
//     user: [ 'Grace', 'Maya' ],
//     count: 2,
//     sum: 138000,
//     avgSalary: 69000
//   },
//   {
//     dept: 'Finance',
//     user: [ 'Jack', 'Noah' ],
//     count: 2,
//     sum: 157000,
//     avgSalary: 78500
//   }
// ]




///////////////----------------------------------------------------------------------



//  function app(data){
// const output = {};      // category → count
// const outcomes = [];    // final result array
// const map = {};         // category → sum
// const outputUser = {};  // category → users list

//       for(const {category,amount,user} of data){
//         output[category] = (output[category] || 0) +1;
//       map[category] = ( map[category] ?? 0) + amount;
//               (outputUser[category] ??=[]).push(user)
//      }

//      for(let key in  output){
//          outcomes.push({
//              category:key,
//              count:output[key],
//              sum:map[key],
//             agvSum:Math.floor(map[key]/output[key] ),
//             users:outputUser[key]
//          })
//      }
      
//     return outcomes
// }

//  const  data = [
//   { id: 1, user: "Amit", category: "Food", amount: 200 },
//   { id: 2, user: "Riya", category: "Travel", amount: 500 },
//   { id: 3, user: "Amit", category: "Food", amount: 150 },
//   { id: 4, user: "Riya", category: "Food", amount: 300 },
//   { id: 5, user: "Neha", category: "Travel", amount: 400 }
// ]
//  const result = app(data)
//  console.log(result)
 
 
//  [
//   {
//     category: 'Food',
//     count: 3,
//     sum: 650,
//     agvSum: 216,
//     users: [ 'Amit', 'Amit', 'Riya' ]
//   },
//   {
//     category: 'Travel',
//     count: 2,
//     sum: 900,
//     agvSum: 450,
//     users: [ 'Riya', 'Neha' ]
//   }
// ]



///-----------------------


// function groupByDepartment(array){
//     const output = [];
//     const map = {};
    
//     for(let {user,amount,category} of array){
        
//         map[category] ??= {
//             users:[],
//             count:0,
//             sum:0
//         }
//         map[category].users.push(user)
//            map[category].count++
//            map[category].sum+=amount
        
//   }
  
//   for(let key in  map){
//       output.push({
//           category:key,
//           [key]:map[key].users,
//           count: map[key].count,
//           sum:map[key].sum,
//           avgAmount: map[key].sum / map[key].count
//       })
//   }
//     return output;
// } 



//  const  data = [
//   { id: 1, user: "Amit", category: "Food", amount: 200 },
//   { id: 2, user: "Riya", category: "Travel", amount: 500 },
//   { id: 3, user: "Amit", category: "Food", amount: 150 },
//   { id: 4, user: "Riya", category: "Food", amount: 300 },
//   { id: 5, user: "Neha", category: "Travel", amount: 400 }
//  ]

// const result = groupByDepartment(data)
// console.log(result)

// [
//   {
//     category: 'Food',
//     Food: [ 'Amit', 'Amit', 'Riya' ],
//     count: 3,
//     sum: 650,
//     avgAmount: 216.66666666666666
//   },
//   {
//     category: 'Travel',
//     Travel: [ 'Riya', 'Neha' ],
//     count: 2,
//     sum: 900,
//     avgAmount: 450
//   }
// ]



///--------------Move all even numbers to left and odd to right while maintaining order.
 
// function rearrange(arr) {
//   const even = [];
//   const odd = [];

//   for (let num of arr) {
//     if (num % 2 === 0) {
//       even.push(num);
//     } else {
//       odd.push(num);
//     }
//   }

//   return [...even, ...odd];
// }

// const arr = [2,4,6,8,1,3,5,7]
// const result = rearrange(arr)
// console.log(result);
// // Output: [2,4,6,8,1,3,5,7]

