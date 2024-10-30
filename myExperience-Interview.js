// function app(){
//    x=10;
//    var x= 10
//    console.log(x)
   
// }
// app()//10


// I used with let  // this asked INTERVIEWER interview // what you get if you use let instead of var
//  function app(){
   
//      x=10;
//      let x= 10  //ReferenceError: Cannot access 'x' before initialization
//      console.log(x)
   
//  }
//  app()


//QUESTION----
// // Timer question //144days|hours|min|sec
// given date :"December,31,2024"

//QUESTION----  make a input  that only accept number 
// if empty should show error---
// only accept number 
// there also increament button  to increase number



//questions---

// var a = 10;
// function app(){
//    console.log(a)
//     var a = 20;
// }
// app();

// answer  reason =========== 
//  var a = 10;
// function app() {
//     var a; // This is hoisted
//     console.log(a); // 'a' is undefined here
//     a = 20; // This is the assignment
// }
// app()

//------------------------
// var y=2;
// function app(){
//     console.log(x)//undefined
//     console.log(y)//2
//     var x=10;  
// }
// app()



// closure----------

// function app(){
//     var x=10;
    
//     function foo(){
//         let y=3;
//         console.log(x)//10
//          console.log(y)//3
//     }
//     foo()
//        console.log(x)//10
    
// }
// app()

///------or-------------
// function outer() {
//     var name = "Sanju";
//     function inner() {
//         console.log(name);
//     }
//     return inner;
// }

// var closureFunc = outer();
// closureFunc(); //Sanju


//Question------
//difference between var ,let ,const
 // let , var ,cost


//  function App1(){
//     var x 
//     var x = 10

//     var x=30
//     console.log(x)//30

//     let y = 10
//     y=20
//    console.log(y)//20


//    const z = 10
 
//   console.log(z)//10
    
//  }

//  App1()
//  30
// 20
// 10

//---1. var Example:

// function testVar() {
//     // Scope Example
//     if (true) {
//       var a = 10; // function-scoped       //// First assignment and declaration
//     }
//     console.log(a); // 10 - accessible because 'var' is function-scoped
  
//     // Assignment and Redeclaration
//     var a = 40; // allowed - 'var' can be reassigned and redeclared 
//     console.log(a); // 40 - reassigned value for 'var'
  
//     // Hoisting Example
//     console.log(b); // undefined - 'var' is hoisted but initialized as 'undefined'
//     var b = 50;
//     console.log(b); // 50
//   }
  
//   testVar();
  
//---2. let Example:

// function testLet() {
//     // Scope Example
//     if (true) {
//       let b = 20; // block-scoped
//       console.log(b); // 20 - accessible inside block
//     }
//     // console.log(b); // Error - 'let' is block-scoped, not accessible outside
  
//     // Assignment
//     let c = 30;
//     c = 40; // allowed - 'let' can be reassigned
//     console.log(c); // 40 - reassigned value
  
//     // Redeclaration
//     // let c = 50; // Error - 'let' cannot be redeclared in the same scope
  
//     // Hoisting Example
//     // console.log(d); // Error - 'let' is hoisted but in Temporal Dead Zone (TDZ)
//     let d = 60;
//     console.log(d); // 60
//   }
  
//   testLet();
  
////---3. const Example:

// function testConst() {
//     // Scope Example
//     if (true) {
//       const e = 30; // block-scoped
//       console.log(e); // 30 - accessible inside block
//     }
//     // console.log(e); // Error - 'const' is block-scoped, not accessible outside
  
//     // Assignment and Redeclaration
//     const f = 40;
//     // f = 50; // Error - 'const' cannot be reassigned
//     console.log(f); // 40
  
//     // Redeclaration
//     // const f = 60; // Error - 'const' cannot be redeclared
  
//     // Hoisting Example
//     // console.log(g); // Error - 'const' is hoisted but in Temporal Dead Zone (TDZ)
//     const g = 70;
//     console.log(g); // 70
//   }
  
//   testConst();
  
//NOTES-------------
///---- Temporal Dead Zone (TDZ)
// TDZ applies to variables declared with let and const.
// It prevents the variable from being used before it's initialized.
// If you try to use the variable in the TDZ, you'll get a ReferenceError.