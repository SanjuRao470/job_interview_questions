 //-------------------------------

//  function reverseStr(str){
//      const words = str.split(' ')
//      let output = '';
     
//      for(let str of words){
//           let newStr = ''
//        for(let char of str){
//         newStr = char + newStr
//         }
//      output+= newStr[0].toUpperCase()+newStr.slice(1) + ' ';
//        }
//         return output
//      }
 
//  const str = 'ujnas oar'
//  const result = reverseStr(str)
//  console.log(result)//Sanju Rao 


//-----------------------------
 
//  function reverseStr(str){
//      let output = '';
     
//      for(let char of str){
//        output = char + output
//         }
//            return output
//      }
 
//  const str = 'ujnas'
//  const result = reverseStr(str)
//  console.log(result)//sanju


 //------------------------



  
//  function reverseStr(str){
//      let output = '';
     
//      for(let i=str.length-1 ; i>=0 ; i--){
//          output+=str[i]
//         }
//            return output
//      }
 
//  const str = 'dcba'
//  const result = reverseStr(str)
//  console.log(result)//abcd


//----------------------

//  function reverseStr(str){
//      const output = {};
     
//      for(let char of str){
//      // output[char] =  (output[char] ?? 0)+1 
//       // output[char] = (output[char] || 0)+1 
//         }
//            return output
//      }
 
//  const str = 'programming'
//  const result = reverseStr(str)
//  console.log(result)//{ p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }


//-------------------------------------------

//  function reverseStr(str){
//      const output = {};
//       let reverse = '';
     
//      for(let char of str){
//       output[char] =  (output[char] ?? 0)+1 
     
//    }
   
//     for(let key in output){
//           if(output[key] == 1){
//               reverse+= key//p or rgm
//               //return key
//           }
      
//         }
//            return reverse//poain
//      }
 
//  const str = 'programming'
//  const result = reverseStr(str)
//  console.log(result)//


//--------------------------------

// function palindromeCheck(str){
//     for(let i = 0; i < str.length / 2; i++){
//         if(str[i] !== str[str.length - 1 - i]){
//             return "not palindrome";
//         }
//     }
//     return "palindrome";
// }
// console.log(palindromeCheck("racecar"));//palindrome


// for(let i = 0; i < str.length / 2; i++){

// Start loop from index 0
// Run till half of string


// str.length - 1 - i

//str.length - 1
// Changes every iteration:

////- i means:
// “Move backward from the end as much as we moved forward from the start”