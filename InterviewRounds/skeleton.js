//-----SKELETON

// function App(){
//     let output = 
//     for(let item of arr){
   
//         if(condition){

//     }else{

//     }

//     }
//   return  output;
// }

//---STRING

// function App(){
//     let output = '';
//     for(let item of arr){
   
//    output+=item

//     }
//   return  output;
// }

//---OBJECT

// function App(){
//     let output = {};
//     for(let item of obj){
//    if(let key in item){
//     console.log(key)
//     console.log(item[key])
//    }
//     }
//   return  output;
// }


////---ARRAY

// function App(){
//     let output = [];
//     for(let item of arr){
//     console.log(item)
//    if(let index in item){
//     console.log(index)
//     console.log(item[index])
//    }
//     }
//   return  output;
// }


//----RECURSION

// function App(){
//     let output = 
//     for(let item of arr){
   
//         if(Array.isArray(item)){

//     }else{

//     }

//     }
//   return  output;
// }


//--Nested object  //Recursion skeleton

// function App(){
//     let output = [];
//     for(let item of obj){
//     console.log(item)
//    if(let key in item){
//     if( (typeof obj[key] === "object"))
//     console.log(item[key])
//    }
//     }
//   return  output;
// }




//   let str = 'abc'
//  for(let char of str){
//   let newstr = char //as per js rule you can declare and assign  at same time.
//       console.log("Try" , newstr);//a//b//c
//  }

//----------------------


//   let str = 'abc'
//  for(let char of str){
//       let rstr += char // as per js rule you can not declare and update at same time.
//         console.log("000---" , rstr);//syntax error 
//  }



////----------------------

// let str = 'abc'

// for (let char of str) {
//    let rstr = "";   // declare
//    rstr += char;    // update
//    console.log(rstr);//a //b //c
// }
// //Every time loop runs, a new, fresh rstr is


//----------------------


// let str = 'abc'
//   let rstr = ""; 
// for (let char of str) {
//   rstr += char;    // update
//    console.log(rstr);//'abc'
// }
// /Because rstr keeps growing across loop iterations.


//-----------------

// let str = 'abc'
//   let rstr = ""; 
// for (let char of str) {
//   rstr += char // update
//    console.log(rstr);//abc
//   let result = rstr.split('').join(',')//convert accumulated string into array → join with commas
//    console.log(result);//'a,b,c'// separate by comman
// }

//--WOrKING------

// let str = 'abc'
//   let rstr = ""; 
// for (let char of str) {
//   rstr += char
//   let result = rstr.split('')//['a','b','c']
//   console.log(result)
//   result = result.join(',')//'a,b,c'
//    console.log("----",result)
// }

//---------

// let str = 'abc'
//   let rstr = ""; 
// for (let char of str) {
//   rstr += char  + ','
//    console.log(rstr);
// }
//   rstr = rstr.slice(0,-1) //remove last comma
//    console.log(rstr);'a,b,c'


//(0,-1)//
//0 start from  beginning
// -1 → end at 1 step before the last character


//-------------------
// let arr = [1,2,3]
//   console.log("----",arr.join(','))//'1,2,3'


// let str = 'abc'
// // console.log("----",str.split(''))//[ 'a', 'b', 'c' ]
// console.log("----",str.split(','))//[ 'abc' ]


//------
//  const obj = [{a:'1'},{b:'2'}]
//   for(let item of obj){
//     console.log("each items",item)//{a:'1}//{b:'2'}
// for(let key in item){
//      console.log( "key from each item",key)//a//b
//       console.log( "value from each item", item[key])//1//2
//  }
//  }



 //----diff between for of and for in-------------------

// const arr = [10, 20, 30];

// for (let item of arr) {
//   console.log(item);  // 10, 20, 30  (values)
// }

// ✔ Reads actual values
// ✔ Works on arrays, strings, sets, maps
// ❌ Not for objects



//  const arr = [10, 20, 30];

// for (let index in arr) {
//   console.log(index);       // 0, 1, 2
//   console.log(arr[index]);  // 10, 20, 30
// }


// const obj = { a: 1, b: 2 };

// for (let key in obj) {
//   console.log(key);        // a, b  (keys)
//   console.log(obj[key]);   // 1, 2  (values using the key)
// }


// ✔ Reads keys
// ✔ Best for objects
// ❌ Should NOT be used for arrays normally (because you get indexes, not values)


//--------

//  for of  → Value //good for([]//{}//'')
// doe in → Index / Key ////good only for(//{}//[])

  
