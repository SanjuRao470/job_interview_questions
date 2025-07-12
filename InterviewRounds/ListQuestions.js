

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


//=======================///



//---QUESTION----- exclude the element from an array who comes  exaclty   (k) or  twice

// function CountFunction(array){

//     //Case -1 1st find frequency
//     let frequency = {}
//     for(let i=0; i<array.length;i++){
//         let ele = arr[i]
//         frequency[ele] ?  frequency[ele]+=1 : frequency[ele] =1
// if(frequency[array[i]] === 2){
//    count.push(array[i])//[1,5] //=== able to find exactly twice,trice
//  }
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


///------------------------NEW-----------------


//  function App(str ){
//      const frequency={};
//      let output = '';
//      for(let i=0; i<str.length; i++){
//          const char = str[i];
//          frequency[char] ?  frequency[char]+=1 : frequency[char]=1
         
//         //  if(  frequency[char] === 2){
//         //       output+=char//rmg
//         //  }
         
//         //  if(  frequency[char] === 1){
//         //       output+=char//progamin
//         //  }
        
//         //   if(  frequency[char] === 1){
//         //       return char//p
//         //  }
        
//      }
     
//     //   for(let i=0; i<str.length; i++){
//     //      const char = str[i];
//     //      if(frequency[char] === 2){
//     //       output+=char //rgrmmg
//     //      }
//     //  }
     
     
// //   for(let i=0; i<str.length; i++){
// //          const char = str[i];
// //          if(frequency[char] ===1){
// //               return char //p
// //          }
// //      }

//    return output; 
//  }
//   //const array =[ 2,2,2,4,1,3,4,4,5,6,7];//[ 1,3,5,6,7]
//    const str = 'programming'
// const result = App(str);
//   console.log(result)


///------------------------NEW-----------------



//  function App(array ){
//      const frequency={};
//      const output = [];
//      for(let i=0; i<array.length; i++){
//          const ele = array[i];
//          frequency[ele] ?  frequency[ele]+=1 : frequency[ele]=1
//      }


//      //case-1
//      for (let key in frequency) {
//     if (frequency[key] === 3) {
//       output.push(Number(key)); // convert string key to number//[ 2, 4 ]
//     }
//   }

//case-2
// for (let i=0; i<array.length; i++) {
//           const ele = array[i];
//     if (frequency[ele] === 3) {
//       output.push(array[i]); //[ 2, 2, 2, 4, 4, 4 ] 
//     }
//   }

//      case-3
//     //   for(let i=0; i<array.length; i++){
//     //      const ele = array[i];
//     //         if(frequency[ele] < 3){
//     //       output.push(array[i])////[ 1,3,5,6,7]
      
//     //      }
//     //  }
//      return output; 
//  }
//   const array =[ 2,2,2,4,1,3,4,4,5,6,7];//[ 1,3,5,6,7]
// const result = App(array);
//   console.log(result)


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


// //------------------------///



// function FindMissingElement(array){
//     const output = [];
//     array.sort((a,b)=> a-b);
//     for(let i=1; i<array.length; i++){
//         const currentEle  = array[i]
//         console.log("currentEle",currentEle)
//         const previous = array[i-1] 
//         console.log("previous",previous)
//         if(currentEle - previous > 1 ){
//             for(let j = previous+1 ; j < currentEle ; j++){
//                 output.push(j)  
//             }
//         }
//         }
//    return output; 
// }
// const array = [1,2,5,6,4,8]
// const result = FindMissingElement(array)
// console.log(result)//[ 3, 7 ]



//  //---------------------------------// ///

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
//         console.log(role)
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