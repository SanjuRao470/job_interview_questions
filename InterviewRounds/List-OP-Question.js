//Interview Exprience--------
//=====INTERVIEWER ASKED QUESTIONS=====================//
//js-- single thread --- by default synchronouse but suports asynchronouse
//Node-- single thread but we make multiple thread using worker thread --- be default asynchronouse


//=====INTERVIEWER ASKED QUESTIONS=====================//

// 🔹 1. Understanding this First:
// The behavior of this depends on how a function is called,
//  not how it is declared. It’s also influenced by execution context: global, function, object method, arrow functions, and classes.

//Q: Does the this keyword ever care about var, let, or const?
//answer: No, this is not affected by the keyword used (var, let, or const) to declare a variable. 
//It depends on how the function is invoked, not how variables are declared.


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



//questions---

//  var  a = 10;
//  function OuterFun(a){
//      function Inner(){
//          var b=20;
//          console.log(a+b)//30//Reason:because a is primitive datatype here and already used now we can't mutates
//      }
//      return Inner;
//  }
//  var varFn = OuterFun(a)
//   a = 30;
//   varFn();


//  var  a = {values:{c:10}};
//  function OuterFun(a){
//      function Inner(){
//          var b=20;
//          console.log(a.values.c+b)//50//Reason:because a is non primitive(reference type) datatype here and already used now we can mutates because it still point the same memory
//      }
//    return Inner;
//  }
//  var varFn = OuterFun(a)
//   a.values.c = 30;
//   varFn();//50





// //-----------------------------///////


// const obj = {
//   name: 'sanju',

//   regular: function () {
//     return this.name;
//   },

//   arrorwFn: function () { //or// arrorwFn (){
//     return {
//       arrow: () => {
//         return this.name;
//       }
//     };
//   },

//   arrow: () => {
//     return this.name;
//   }
// };
// ✅ obj.regular()
// Regular function binds this to the calling object, so this.name refers to obj.name.

// ✅ obj.arrorwFn().arrow()
// Arrow function inherits this from its enclosing regular function, which is called by obj, so this.name is obj.name.

// ❌ obj.arrow()
// Arrow function doesn’t have its own this and inherits it from the global scope, not obj, so this.name is undefined.




// //SUMMERY----------------------------------------
// So to summarize:

// Regular functions get this from how they're called — in this case, obj.regular() binds this to obj.

// Arrow functions get this from where they are defined — 
// and since arrow was defined directly inside the object 
// (but not using a regular function), it inherits this from the outer lexical scope (which is not obj), so this.num is undefined.


//-----------

// const obj = {
//   num: 100,

//   regular: function () {
//     return this.num;
//   },

//   arrow: () => {//In this case, the surrounding scope is the global context, not the obj. sothat 's why this.num inside the arrow function doesn’t point to obj.num, but instead to undefined (or window.num in browsers.)
//     return this.num;
//   }
// };

// console.log(obj.regular()); // ✅ 100
// console.log(obj.arrow());   // ❌ undefined/window.num


//---------CORRECT VERSION--------------

// const obj={
//     name:'sanju',
//     regular: function (){
//       return this.name
//     },
//      arrorwFn : function() {
//          return {
//        arrow: () => {
//       return this.name
//     }  
//  }
//   }
    
// }
// console.log(obj.regular())//sanju// here we can say regular function called as an object method in javascript.
// console.log(obj.arrorwFn().arrow())//sanju



//NOTE----

////arrorwFn is a regular function, so when called like obj.arrorwFn(),  returns an object

// {
//   arrow: () => { return this.name; }
// }
// this inside arrorwFn refers to obj.
// So, this inside the arrow function is same as this inside arrorwFn, which is obj.



/////---REASON----------------------
// This is a regular function.

// When called as obj.regular(), the value of this is bound to the object obj.

// So this.num becomes obj.num → 100.

// ✅ Output: 100



// This is an arrow function, and arrow functions do not have their own this.

// Instead, they capture this from the surrounding (lexical) scope where the function was defined.

// Here, this is not bound to obj, but to the outer scope (likely window or undefined in strict mode).

// So this.num → undefined.

// ❌ Output: undefined


//-------Experiments------------


// const obj = {
//   num: 100,

//   regular: function () {
//     return this.num;
//   }
// };

// // Create a separate lexical scope where `this` refers to `obj`
// const objArrow = {
//   arrow: () => {
//     return obj.num;  // explicitly use `obj` since `this` won't point to obj
//   }
// };

// console.log(obj.regular());       // ✅ 100
// console.log(objArrow.arrow());   // ✅ 100



//-----✅ Alternate (Using Lexical this Correctly):

// const obj = {
//   num: 100,
  
//   getArrow() {
//     return () => this.num; // arrow inherits `this` from getArrow()
//   }
// };

// const arrowFn = obj.getArrow();
// console.log(arrowFn()); // ✅ 100




// ✅ 3. Reference Sharing in Arrays

// let a = [1, 2, 3];
// let b = a;
// a.push(4);
// console.log(a); // [1, 2, 3, 4]
// console.log(b); // [1, 2, 3, 4] → b references same array as a
// They point to the same memory.

//----------
// let a = [1, 2, 3];
// let b = [...a]; // or Array.from(a), or a.slice()
// a.push(4);
// console.log(a)//[ 1, 2, 3, 4 ]
// console.log(b)//[ 1, 2, 3 ]


//------NOTES-------------
// let a = [1, 2, 3];

// a is a reference to a memory location where the array [1, 2, 3] is stored.

// let b = a;

// Now, b doesn’t create a new copy of the array.

// Instead, b just points to the same memory location as a.

// a.push(4);

// Since both a and b point to the same array in memory, modifying the array through a also affects what b sees.

    
//----------IMPORTANT NOTES -----------------
//  In short:
// Arrays (and objects) are reference types in JavaScript.

// When you assign them to a new variable (let b = a), you're copying the reference, not the actual data.

// So any changes made via one reference (a.push(4)) will be visible to the other (b).



//=====INTERVIEWER ASKED QUESTIONS=====================//

// function test() {
//   var a = 1;
//   let b = 2;
//   const c = 3;

//   console.log(this.a); // ❌ undefined
//   console.log(this.b); // ❌ undefined
//   console.log(this.c); // ❌ undefined
// }

// test();
// ✅  this does not refer to local variables, no matter how they are declared.



//QUESTION--- With var, let, and const in Global Scope:

// var x = 10;
// let y = 20;
// const z = 30;

// console.log(window.x); // ✅ 10 (attached to global `window`)
// console.log(window.y); // ❌ undefined
// console.log(window.z); // ❌ undefined
// ✅ Explanation:

// var is function-scoped and attached to the global object (window in browser).

// let and const are block-scoped and are not added to the global object.


// {
//   var innerVar = 'a';
//   let innerLet = 'b';
//   const innerConst = 'c';
// }
// console.log(innerVar);     // 'a' (because var is function-scoped)
// console.log(innerLet);     // ❌ ReferenceError
// console.log(innerConst);   // ❌ ReferenceError



//QUESTION---
//  console.log("what is the name" , name)
//  var name;
//   console.log("what is the name" , name)
//   name="sanju"
//   console.log("what is the name" , name)
   
   
//   what is the name undefined
// what is the name undefined
// what is the name sanju

//QUESTION---

// const str = "Sanju";
// const mystery = [...str]
// console.log(mystery);//[ 'S', 'a', 'n', 'j', 'u' ]


// const str = "Sanju";
// const mystery = {...str}
// console.log(mystery)//{ '0': 'S', '1': 'a', '2': 'n', '3': 'j', '4': 'u' }


// function App(obj){
//     const array = [];
//     for(let key in obj){
//      array.push(obj[key])
//     //console.log(array)
// }
// return array;
// }

// const obj = { '0': 'S', '1': 'a', '2': 'n', '3': 'j', '4': 'u' }
// const mystery = App(obj)
// console.log(mystery)//[ 'S', 'a', 'n', 'j', 'u' ]


// const arr =[23,4,55,6]
// const myarr = [...arr]
// console.log(myarr)//[ 23, 4, 55, 6 ]


// const array = [9,8,7,6,3,5,4]
// const myobj = {...array}
// console.log(myobj)//{ '0': 9, '1': 8, '2': 7, '3': 6, '4': 3, '5': 5, '6': 4 }


//QUESTION---

// console.log(a);
// //  var a = 10;/undefined

//QUESTION---

// console.log(a);
//  let a = 10;//ReferenceError: Cannot access 'a' before initialization


//QUESTION---

// let x = 5;
// let y = ++x;//This is a pre-increment operation. It means:
// //x is incremented first → x becomes 6
// console.log(y);//6
// console.log(x)//6


// let x = 5;
// let y = x++;//x++ returns the original value of x (then increments),
// // console.log(y);//5
// // console.log(x)//6


//  or-- both are same
// let x = 5;
// let y = x + x;
// console.log(y); // 6
// console.log(x); // 6

// 🔹 x++ → Post-increment  =>x++ returns the original value of x (then increments),
// 🔹 ++x → Pre-increment  =>++x increments x first, then returns the new value.
