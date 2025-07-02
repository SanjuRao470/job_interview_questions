//===========================

//   // shallow copy able to copy ony 1st layer of obj and nested obj still attached to original
//   const obj = {
//     a:20,
//     b:{c:8}
// }
// //  const shallowCopy = {...obj}
// //  shallowCopy.b.c = 15

// // deepCopy make full independent copy  including nested 
// const deepCopy = JSON.parse(JSON.stringify(obj))
// deepCopy.b.c=10
// console.log("original" , obj)
// console.log("original" , deepCopy)

//=============================SPREAD
  //const arr = [2,3,40]
  // copy, combine, passed array element as an argument
  // can make shallow copy
 // const newarr = [...arr]
 //const newarray = [6,7,...arr,10,9]
//  function app(a,b,c){
//      return a+b+c
//  }
//  console.log(app(...arr))


//===================================
// const arr = [2,3,40,9,8,7]
   
//    const [a,b,...rest] = arr
//  console.log(a)
//   console.log(b)
//    console.log(rest)


// function App(a,b,c,...rest){
//     console.log(a)
//      console.log(rest)
//       console.log(arguments)
// }
//  App(2,3,4,5,6,7,8)

// //result
// // 2
// // [ 5, 6, 7, 8 ]
// // [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7, '6': 8 }



///==========================================CURRYING
// function App(a){
//     return function(b){
//          return function(c){
//         return a+b*c
//     }
//     }
    
// }
// console.log(App(2)(5)(3))//17


///=====================================/// VARIABLE

// var y =1;
// function App(){
//     var  y=7
//     console.log("00000000",y)
//     var y = 9//redeclare the same variable
//     y = 15//reassign the variable
//         console.log(y)
        
//     console.log(x)//hoisting
//     var x =10
  
    
//     if(true){//functional scope
//         var z = 5
//         }
//         console.log(z)
// }
// App()

//QUESTION----- CONVERT ARRAY INTO OBJ
// const array = [1,2,3,4]
//   const obj = {...array}
//   console.log(obj)//{ '0': 1, '1': 2, '2': 3, '3': 4 }



//=====================================
// function App(){
//   if(true){
//        let  y=7
//   console.log("00000000",y) 
//   }
// // console.log("00000000",y)// because you accessing out side the block, got reffernece error

// let y=8;
// y=12// can be reassign
// console.log(y)



// //let y =10// can't redeclare same variable
// //   console.log(y)/SyntaxError: Identifier 'y' has already been declared in same block

// }
// App()


///===========================================
 

// function App(){
//   if(true){
//        const  y=7
//   console.log("00000000",y) 
//   }
// // console.log("00000000",y)// because you accessing out side the block, got reffernece error

// const y=8;
// //  y=12// can not be reassign typeError//to constant variable.
// console.log(y)



// let y =10// can't redeclare same variable
// console.log(y)//SyntaxError: Identifier 'y' has already been //declared in same block

// }
// App()



//==================================================
//closures to encapsulate data can help to prevent code unpredictability and protect private data.
//  This helps to avoid unpredictability and unwanted bugs in your code.


//NOTE-----

//A closure is the combination of a function and its lexical scope. 
//Closure = function + memory of its environment
//Final Tip:
//This pattern is super important in React, event handlers, timers, counters,
//state management — basically everywhere where you want to "remember" something.


// function closureFun() {
//   let x = 10;
  
//    function Inner() {
//      console.log(x);//10
//   }
//   Inner()
// }
// closureFun()


// function createCounter(){
//   let count = 0;
//   //case-1
//  return function (){ anonyouse function
//      count++;
//      console.log(count)
//  }

// }
// const counter1 =  createCounter()
// counter1();//1
// counter1();//2
// counter1();//3
// counter1();//4




//=====INTERVIEWER ASKED QUESTIONS=====================//
// ✅ 3. Reference Sharing in Arrays

// let a = [1, 2, 3];
// let b = a;
// a.push(4);
// console.log(a); // [1, 2, 3, 4]
// console.log(b); // [1, 2, 3, 4] → b references same array as a
// They point to the same memory.



//=====INTERVIEWER ASKED QUESTIONS=====================//

// {
//   var innerVar = 'a';
//   let innerLet = 'b';
//   const innerConst = 'c';
// }
// console.log(innerVar);     // 'a' (because var is function-scoped)
// console.log(innerLet);     // ❌ ReferenceError
// console.log(innerConst);   // ❌ ReferenceError


//=====INTERVIEWER ASKED QUESTIONS=====================//

// const person = {
//   name: 'Alice',
//   greet: function () {
//     console.log(this.name);
//   },
//   greetFullName: () => {
//     console.log(this.name); // Will be undefined because arrow functions don't bind `this`
//   }
// };

// const { greet, greetFullName } = person;

// greet();              // undefined (loses context)
// greetFullName();      // undefined (arrow function doesn't bind this)

// person.greet();       // Alice (correct context)
// person.greetFullName(); // undefined (arrow function again)

