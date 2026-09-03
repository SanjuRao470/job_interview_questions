//-----------------ARRAY METHODS-------------

// const arr = [1,2,3]
//console.log(arr.map((i)=> console.log(i * 3)))//3,6,9
// const newArray = arr.map((i)=> i * 3)
// console.log(newArray)//[ 3, 6, 9 ]



//const arr = [1,2,3]
//console.log(arr.filter((i)=> console.log(i <=2)))//true//true//false
// console.log(arr.filter((i)=> console.log(i, i <=2)))//1 true//2 true//3 false
// const newArray = arr.filter((i)=> i <= 2)
// console.log(newArray)//[ 1, 2 ]


// const arr = [1,2,3]
//  const newArray = []
//  arr.forEach((i)=>{
//     newArray.push( i * 3)
//     }  )
//  console.log(newArray)//[3,6,9]


// const arr = [1,2,3]

//  arr.forEach((i)=>
//     console.log( i * 3)//3,6,9
//     )





//---------------------------------------------------------



//------------ARRAY METHOD-------------
//-----map/filter/reduce/forEach/slice/splice

//  const arr = [1,2,4]
//  const sum = arr.reduce((acc,curr)=>{
//  return acc+curr
//  },0)
//  console.log(sum)//7


// const arr = [1,2,4]
//  const multiple = arr.reduce((acc,curr)=>{
//  return acc*curr
//  },1)
//  console.log(multiple)//8


// const arr = ["a", "b", "c"];

// const result = arr.reduce((acc, curr) => {
//   acc[curr] = curr.toUpperCase();
//   return acc;
// }, {});
// console.log(result)//{ a: 'A', b: 'B', c: 'C' }

// const arr = [1, 2, 3];

// const result = arr.reduce((acc, curr) => {
//   acc.push(curr * 2);
//   return acc;
// }, []);

// console.log(result); // [2, 4, 6]


//-- CLOSURE--------------------------------------

//  function ClosureFn(){
// let result = 1
//  return function(number){
//     result = result * number
//     console.log(result)
//  }

//  }
//  const multiple = ClosureFn()
//  multiple(3)//3
//  multiple(3)//9
//  multiple(3)//27


//--------------------------------------------------

//  function ClosureFn(resultValue){
//     console.log(resultValue)
//  return function(number){
//     console.log(number)
//     return resultValue * number
    
//  }

//  }
//  const arr = [1,2,4] 
//  const multiple = ClosureFn(3)
//  const result = arr.map(multiple)
//  console.log(result)//[3,6,12]


//------------------------------------------------------

//  function createMultiplier() {
//   let result = 1; // Private variable

//   return function (number) {
//     result = result * number; // Maintained state

//     console.log(result);
//   };
// }

// const multiply = createMultiplier();

// multiply(2); // 2
// multiply(3); // 6
// multiply(4); // 24


//-------------------------------------------------------


//  function createSum() {
//   let result = 0; // Private variable

//   return function (number) {
//     result = result + number; // Maintained state

//     console.log(result);
//   };
// }

// const sum = createSum();

// sum(2); //2
// sum(3); //5
// sum(4); //9


//----------------------------------------------------

// function createCounter(){
//   let count = 0;//// Private variable
//   //case-1
//  return function (){ anonyouse function
//      count++; // // Maintained state
//      console.log(count)
//  }
// }
// const counter1 = createCounter()
// counter1();//1
// counter1();//2
// counter1();//3
// counter1();//4


//-----------------------------

//  function App(){
//     for(let i=0; i<=4; i++){
//         setTimeout(()=>{
// console.log(i)
//         },1000)
//     }
//  }
//  App()
// 0
// 1
// 2
// 3
// 4


//  function App(){
//     for(let i=0; i<=4; i++){
//         setTimeout(()=>{
// console.log(i)
//         }, i*1000)
//     }
//  }
//  App()

//  // 0
// // 1
// // 2
// // 3
// // 4

 //---------------------------------------

 
//  function App(){
//     for(var i=0; i<=4; i++){
//         setTimeout(()=>{
// console.log(i)
//         }, i*1000)
//     }
//  }
//  App()

 // 5
 // 5
 // 5
 // 5
 // 5

 //--   USING MY IIFE TO CREATE PRIVATE VARIABLE

//   function App(){
//     for(var i=0; i<=4; i++){
//         (function(i){
            
// setTimeout(()=>{
// console.log(i)
//         }, i*1000)


//         })(i)
//           }
//  }
//  App()
//  0
// 1
// 2
// 3
// 4


//--------------------------------------------

//  function CallByValue(a){
//      a=22
//      console.log(a)//22
    
//  }
//  const num =10
//  CallByValue(num)



//  function CallByReference(user){
//     //console.log(user)
//     user.name = 'tom'
//      console.log(user.name)//tom
//     }
//  const obj = {name:'alice'}
//  CallByReference(obj)
//  console.log("-----------",obj.name)//tom


//-----------------------------------------

// function CurryingFn(a){
//     return function(b){
//         return function(c){
//        return function(){
//          // return a*c+b//11
//   return a+b*c//14
//        }
      
//     }
//     }

// }
//console.log(CurryingFn(2)(3)(4)())//


// function CurryingFn(a){
//     return function(b){
//         return function(c){
//        // return a*c+b//11
//         return a+b*c//14
//     }
//     }

// }

// console.log(CurryingFn(2)(3)(4))//


 




 



 

