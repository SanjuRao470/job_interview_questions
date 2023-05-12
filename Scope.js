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

//===============immediate invoke function (IIF)
// (()=>{

// })(); //===== Anonymous Function


// ###==========================Regular Function.
// 1- with arguments binding always gives result in form of array.

// let myFunc = {
//     showArgs() {
//         console.log(arguments);
//     }
// };
// myFunc.showArgs(1, 2, 3, 4);


//  ###===================Another

// function showArgs(){
//     console.log(arguments);
//    };
//    showArgs(1, 2, 3, 4);

// ##==============Arrow Function

// let myFunc = { 
//     showArgs : () => {
//     console.log(arguments);
//    }
//   };
//   myFunc.showArgs(1, 2, 3, 4);
//Uncaught ReferenceError: arguments is not defined
// at Object.showArgs

// ##=================ANOTHER
//    const showArgs = () => {
//         console.log(arguments);
//        };
//       showArgs(1, 2, 3, 4)
//Uncaught ReferenceError: arguments is not defined
// at showArgs


// ###=============== use of this keyword.
// let me = { 
//     name: "Ashutosh Verma", 
//     thisInArrow:() => { 
//     console.log("My name is " + this.name); // no 'this' binding here 
//     }, 
//     thisInRegular(){ 
//     console.log("My name is " + this.name); // 'this' binding works here 
//     } 
//    };
//    me.thisInArrow(); 
//    me.thisInRegular();

// ###====================== use of new keyword

// function getName(a,b){

//      this.a = a,
//      this.b = b
//     //  console.log('hjdshj', a,b)
// }
// getName()

// let person = new getName('mohan','sandeep')
// console.log('hjdshj', a,b)


// Constructor
// function User() {
//     this.n = n
//     console.log('dhjfdghjf',this.n)
// }
// User()
// var user = new User('babita');

// let add = (x, y) => console.log(x + y);
// new add(2,3);

// No duplicate named parameters

// function App(X,X){
//     console.log('jhdhjhjd', X+X)
// }
// App(1,2)
//  in case of regular function, if we pass same parameters it will be override.

//   let App = (y,y) =>{
//     console.log('bhjdghdsdh',y+y)
//   }
//   App(5,5)
// Because of arrow function it will gives errors.

//========== OPTIONAL CHAINING =======
//  optional chaining  is a feature in javascript that allows you to access proprties of an object.
// or elements of an array without having to check whether the object or array is null or undefined first. it  is represented by the ?. operator
// and can be used to concisely access deeply nested properties without having to write a long chain of if  statement
// to check for null or undefied values.
//The optional chaining ?. is a safe way to access nested object properties, 
//  even if an intermediate property doesn’t exist.

//  const ProductList={

//     wire:'AA23',
//     board:'electric',
//     desk:'tabledesk23',
//     waterbottle:'jaal',

//     property:{

//         road:{
//             name:"jiiiiiiiiiiiiiiiii"
//         },
//         address:  'A23,dadar',
//         age: 45,
//     }

//  };
//  console.log(ProductList.property.road.name.kkk?.jhjj)


// ###================this Context
// When used in a function, the this keyword simply points to an object to which it is bound.
//  It answers the question of where it should get some value or data from:
//But how do you know ###== which object the function is bound to?###===== How do you find out what this is referring to?

// EXAMPLE

// function Alert(C,C,K,K) { 

//   this.name='sdghgdh'
//   this.num='785786'
//   this.case='ASDFGHJMK,L'
//   this.roll='3456789MNBVCXZ'

// console.log(this.name ,C+C-K+K ,'is calling');

// }
// Alert(5,7,4,2)
//A function with a "this" reference.


// 1. Default binding | Direct invocation

// function alert() { 
//   console.log(this.name + ' is calling'); 
// }

// const name = 'Kingsley'; 
// alert(); // Kingsley is calling

// STANDALONE FUNCTION
// One of the first rules to remember is that if the function housing a this reference is a standalone function,
//  then that function is bound to the global object.
//As you can see, name() is a standalone, unattached function, so it is bound to the global scope.
//As a result, the this.name reference resolves to the global variable const name = 'Kingsley'.
// This rule, however, doesn't hold if name() were to be defined in strict mode:

// PART 2
// function alert() { 
//   'use strict'; 
//   // this.baba ='dhs';
//   console.log(this.name + ' is calling'); //undefined in strict mode
// }

// const name = 'Kingsley'; 
// alert(); // TypeError: `this` is `undefined`######======
// TypeError: Cannot read properties of undefined (reading 'name')
//When set in strict mode, the this reference is set to undefined.

// 2. Implicit binding | Method invocation
// HAVE TWO METHODS 1 : SEPARATED,2: NESTED

//  EXAMPLE -1
// function alert() { 
//   console.log(this.age + ' years old'); 
// }

// const myObj = {
//   age: 22,
//   alert: alert
// }

// myObj.alert() // 22 years old
// when you call a function using dot notation,
//  this is implicitly bound to the object the function is being called from.


//  EXAMPLE -2
// function alert() { 
//   console.log(this.age + ' years old'); 
// }

// const myObj = {
//   age: 22,
//   alert: alert,  //  putting a property function reference on the object?
//   nestedObj: {
//     age: 26,
//     // alert: alert
//   }
// }

// 2a: Method separated from the object
// const newFunction = myObj.alert
// newFunction();    // Window {}

// 2b: Nested Function
// myObj.nestedObj.alert(); // 26 years old

//IMPORTANT POINTS=============
//myObj.alert(); // `this` is bound to `myObj` -- 22 years old
// myObj.nestedObj.alert(); // `this` is bound to `nestedObj` -- 26 years old

// 3. Explicit binding | Indirect invocation

// we want to force a function to use an object as its context without
//  putting a property function reference on the object?
//We have two utility methods to achieve this: call() and apply().
// To explicitly bind a function call to a context, you simply have to invoke the call()
//  on that function and pass in the context object as parameter.

// EXAMPLE -1
// function alert() { 
//   console.log(this.lastname, this.age + ' years old'); 
// }

// const myObj = {
//   age: 22,
//  lastname: 'jghgh'
// }
// alert.call(myObj); // 22 years old

// EXAMPLE -2

// function myFunction(param1, param2) {
//   console.log(this)     
// }

// const obj = {
// someKey: 1, 
// }

// const param1 = 1, param2 = 2;
// myFunction.call(obj, param1, param2)                  // {someKey: 1}
// myFunction.apply(obj, [param1, param2])            // {someKey: 1}

//  DIFFERENCE B/W call() and apply()

//call(): Pass in the required object as the first parameter during the function call.
//  The actual parameters are passed after the object.

// apply(): Similar to call() with a difference in the way the actual arguments are passed.
//  Here, the actual arguments are passed as an array.

//EXAMPLE-2

// function myFunction() {
//   console.log(this)     
// }

// const obj = {
// someKey: 1, 
// }

// const boundFunction = myFunction.bind(obj)
// boundFunction();      // {someKey: 1}

// bind(): In this method, you create a new function with a fixed this. 
// These types of functions created using bind() are commonly known as bound functions.

//4. New binding | Constructor invocation
// we create an object using Function Constructors.

// 4.a Function without Return

// function myFunction(){
//   // JS internally creates an object and refers it as this

//   // User explicitly adds required properties and methods to the object
//   this.someKey = 1;
//   this.inner = function(){
//     console.log(this);
//   }

//   // JS internally returns the object
// }

// const obj = new myFunction();
// obj.inner()           // {someKey: 1, inner: ƒ} with myFunction prototype


//4.b Function with Return

// The returned object is assigned to the LHS variable at the function call and
//  the prototype of the constructor function is NOT inherited.

// function myFunction(){
//   return {
//     someKey: 1,
//   }
// }

// const obj = new myFunction();
// console.log(obj);    // {someKey: 1} without myFunction prototype.

//CLOSURES=====================



//Closures are functions that refer to independent (free) variables.
// In other words, the function defined in the closure ‘remembers’ the environment in which it was created.
// Note: Free variables are variables that are neither locally declared nor passed as parameter.
//  CLOSURE MEANS: a function along with its an environment or we can call lexical environment. 


//A closure is the combination of a function bundled together (enclosed)
// with references to its surrounding state (the lexical environment)

//Example 1:
// function numberGenerator() {        //// this part is lexical environment.
//   // Local “free” variable that ends up within the closure
//   var num = 1;
//   function checkNumber() { 
//     console.log(num);      /// this part is closure
//   }
//   num++;
//   return checkNumber;
// }

// var number = numberGenerator();
// number(); // 2


// function foo() {
//   // The function scope
//   let count = 0;
//   // console.log(count); // logs 0
// }
// foo();
// console.log(count); // ReferenceError: count is not defined

// function Closure() {
//   fname = 'sakshi'    //
//   console.log('@@@@@@@@@@@@@@@', fname)

//   let c = function Show() {
//     lname = 'tanwar'
//     console.log('###############', lname)
//   }
//   console.log(fname)
//   return c
// }
// let char = Closure()
// char()


// case-1 Array.reduce()
// let arr=[1,3,4,56,7,]
// let sum = arr.reduce((a,b)=>a+b)
// console.log(sum)
//output  71

// let duplicateEle = [1,3,4,1,2,6,3,44,6,8,2,7,6]
// console.log(duplicateEle)

// output: simple arrray

// ii#### output: {'1':2,'3':5............. }  in key value pair


/// to find frequency
// let duplicateEle = [1,3,4,1,2,6,3,44,6,8,2,7,6]
// let frequency = duplicateEle.reduce((freqObj,ele)=>{
//        freqObj[ele] ? ++freqObj[ele] :  freqObj[ele]=1
      
//      return freqObj;
//    },{})
//   console.log(frequency)


// case-2 syntax: Object.keys(obj)
// important point: 1- Object.keys: return only array of key,    2-Object.value: return only array of values
// but in case both FILTER and MAP it will gives the result in array.

// 1- Object.keys : only array of key
// 1- Object.value : only array of value
// 1- Object.entries  : array of an indiviual pair of


//let obj = {a:12,b:32,c:98}
// console.log(Object.keys(obj)) // [a,b,c]
// output:['a','b','c'] only keys


//let obj = {a:12,b:32,c:98}
 //console.log( Object.values(obj))
  // output:[ 12, 32, 98 ] only values


  // EXTRA POINT:
  //Object.keys(obj).map((val)=> obj[val]*2 )
 // Object.values(obj).filter((val)=> val > 34)


 // ### for map
//  let obj = {a:12,b:32,c:98}
// let res = Object.keys(obj).map((val)=> obj[val]*2 )
// console.log(res)
 
// output:[ 24, 64, 196 ]

//case-3  i-FILTER RETURN A NEW ARRAY
//ii- if condition has not matched in that case it return empty array.
// iii- on bases on condition filter return element of array.

// let arr = [3,5,1,6,7,45]
// let filres = arr.filter((val)=> val > 50)
// console.log(filres)
// output:[ 45 ]
// output:[  ]  if condition has not matched

//let obj = {a:12,b:32,c:98}
//let objRes = Object.values(obj).filter((val)=> val > 34)
//console.log(objRes)
//output:[ 98 ]


// starts sorting
// The sort() method sorts the elements of an array in place and returns the reference to the same array,
// now sorted. The default sort order is ascending,

// Functionless
// sort()

// Arrow function
// sort((a, b) => { /* … */ } )

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);

const array1 = [1,2,3,4,5,6];
array1.sort();
console.log(array1);
