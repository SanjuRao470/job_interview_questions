

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


//--NOTE
//--here we are find no of appearance of element based on key of object(countMap) that's why we are getting answer in incresing order 
//When result is collected:After the full array is traversed and counts are built.


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
//     const output = [];
//     array.sort((a,b)=> a-b);
//     for(let i=1; i<array.length; i++){
//         const currentEle  = array[i]
//         console.log("currentEle",currentEle)
//         const previous = array[i-1] 
//         console.log("previous",previous)
//         if(currentEle - previous > 1 ){//This checks if there is a gap between the current and previous elements.
//            for(let j = previous+1 ; j < currentEle ; j++){//If there's a gap, we use another for loop to fill in the missing numbers between priviousEle + 1 and currentEle.
//                 output.push(j)  
//             }
//         }
//         }
//    return output; 
// }
// const array = [1,2,5,6,4,8]
// const result = FindMissingElement(array)
// console.log(result)//[ 3, 7 ]



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


////-----------------------

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

// function GroupByLastLetter(input){
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
// const result =  GroupByLastLetter(input)
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

// function CountKeys(obj){
//     let count =0;
//     for(let key in obj){
//     count++;//count the current key
    
//      // if the value is a nested object (not array or null), recurse
//     if(typeof obj[key] === 'object' &&  obj[key] !== null &&   !Array.isArray(obj[key]) ){
//         count+=CountKeys(obj[key])// // add keys from the nested object
//     }
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







