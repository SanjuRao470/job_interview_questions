//1- keywords
// var, let, const
//var is Functional and let , const are Block scope.

// Functional scope
// can be ReDeclare,Resign
//function getUser(){
// var userName = 'masaba';
//var userId= 20;
//   userId= 50;

// console.log('my name is :',userName)
// console.log('my id is :',userId)
//}
//console.log('my name is :',userName)  ** shown referenceError: userName is not defined
//getUser()

// var b = "Hello"         *** can see variable “b” with var keyword is declared globally.
//         function Checkb(){      **and we tried to get value two times one time inside function and second time globally (outside the function)
//             console.log(b)   **so both the ways we get the correct result
//         }
//     Checkb();
//     console.log(b);


//Block scope
// only can console inside the Block scope not inside the functional scope.

//let
// can not be Redeclare but can be Resign the value.

//function getData() {

//  let rollNo=2; {console.log('######',rollNo)}
// let c = 10
//if (c == 10) {
//let a = "hi"
// console.log(a)   ** can be console only inside the block scope. example: inside the curly braces.
//}
// console.log(a)  ** here shown ReferenceError: a is not defined.


//}
//getData()

//const
//Using const keyword you can not reassign the value nor you can redeclare the variable with const .
//If you do it will give you error .
// must be assign a value while declaration.

//example  const a=10; ** correct
//const a;  ** wrong
 //a = 10

 //const
//const b = "red"
//b = "blue"       // give you error because can't be updated


//### HOISTING
// App()
//  function App(){

//    console.log('@@@', number)  
//  }
//  var number;
//   number=10;
//   console.log(number)   

//  Important points:  javascript only hoists declaration not initialization.
// Execution of code is in sequential ways.
// It gives only two Errors. Undefined and Reference error .
//declaration of functions, variables or classes to the top of their scope, prior to execution of the code. 


 
// function Doc(){

//     // console.log('$$$$',a)
// }
// Doc()
// a =5;                    case-1 consider a as global variable and can access anywhere in program.
//  it will give the result 5



// var a;
// console.log(a)           case-2
//  a =20;
// here is also run and the result is undefined.



//  console.log(a)
// var a;                       case-3    
// a =6;
// but here gives reference error : a is not defined.
// because have to write console.log(a) right after declaration like in case-2



//  const a =3 ;      case-1
//  console.log(a)
 
// let a;
//console.log(a)    case-2   Typescript error: cannot access 'a' before initialization
// a= 5;


// a = 6;
//console.log(a)  case-3  it works!
// let a;



// function Doc(){

    // console.log('$$$$',a)
// }
// a = 4;
// var a; 
// console.log(a)
// Doc() 

// var a;
// a =4;           1- it works!
// console.log(a)

// var a;
// console.log(a)  2-  initialized by undefined  
// a = 4;

// a = 4;
// var a;           3- it will give result
// console.log(a)

// a = 4;
// console.log(a)    4 -initialized by undefined  
// var a;  
         
//  console.log(a)
//  var a;          5- undefined
//  a = 4;




// Regular Functions

// getApp(8,9,6,5)
// function getApp(x,y,z,w){

//     console.log(y+w,x*z)
 
// }

// getApp(8,9,6,5)   regular functions are hoisted.


// let square = function(x){   ##  here,it will treat a veriable as a  function. 
//     return (x*x);
//   };
//   console.log(square(10));

// QUESTION NO-1 all questions done by https://dev.to/midasxiv/scopes-hoisting-closures-tricky-questions-4c85
// var variable = 10;
// (()=>{
//    var variable;
//    console.log(variable);   // undefined
//     variable = 30;
//    console.log(variable);   // 30
// })();
// console.log(variable)    // here, 10 has treated  as global variable. 

 // QUESTION NO-2
//  var variable = 20;
// (()=>{
// //    console.log(variable);   // Cannot access 'variable' before initialization. Because  it will not initialized by undefied and  enter something called 'the temporal  dead zone
//    let variable = 40;
//    console.log(variable);   // 40
// })()
// console.log(variable)   /// here, 10 has treated  as global variable. 

 // QUESTION NO-3

//  var variable = 10;
// (()=>{
//    console.log(variable);   // undefined
//    variable = 20;
//    console.log(variable);   // 20
// })();
// var variable = 30;
// console.log(variable);
// result:10,20,30

//  ###$$$OR CASE
// var variable = 10;
//  console.log(variable);
// (()=>{
//    console.log(variable);   // undefined
//    variable = 20;
//    console.log(variable);   // 20
// })();
// var variable = 30;
// console.log(variable);

// result:10,10,20,30

 // QUESTION NO-4

//  var variable;
// variable = 10;   // 10 replaced by 5
// variable = 5;
// (()=>{
//     var variable
//    console.log(variable);   // undefined
//    variable = 20;
//    console.log(variable);   // 20
// })();
// variable = 10;
// variable = 8;        // 10 replaced by 8
// console.log(variable);

// result:undefined,20,5,8

// QUESTION NO-5
// var variable = 10;
// (()=>{
//    console.log(variable);   // undefined
//    var variable = 20;
//    console.log(variable);   // 20
// })();

// console.log(variable);
// var variable = 30;

 //NOTE: Always remember, first hoisting will happen inside scope after that outside the scope.  see above in given example.
//  result: undefined,20,10  

// var variable;
// variable = 10;
// (()=>{
//    console.log(variable);   // undefined
//    variable = 20;
//    console.log(variable);   // 20
// })();
// variable = 30;
// console.log(variable);

//===============immediate invoke function
// (()=>{

// })(); //===== Anonymous Function
