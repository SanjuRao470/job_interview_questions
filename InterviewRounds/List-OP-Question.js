//Interview Exprience--------
//=====INTERVIEWER ASKED QUESTIONS=====================//
//js-- single thread --- by default synchronouse but suports asynchronouse
//Node-- single thread but we make multiple thread using worker thread --- be default asynchronouse


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



//-----------

// const obj = {
//   num: 100,

//   regular: function () {
//     return this.num;
//   },

//   arrow: () => {
//     return this.num;
//   }
// };

// console.log(obj.regular()); // ✅ 100
// console.log(obj.arrow());   // ❌ undefined



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



//=====INTERVIEWER ASKED QUESTIONS=====================//

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
