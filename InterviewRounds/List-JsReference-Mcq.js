//valueOf() is a built-in JavaScript method that returns the primitive value of an object.
//It tells JavaScript: “Give me the actual value of this object, not the object itself.”

//ToNumber --- js internally used to do type conversion(implicit/automatic happened)

// (123).toString();    // "123"  (number → string)
// (true).toString();   // "true" (boolean → string)
// ({}).toString();     // "[object Object]" (object → string)
// [1, 2].toString();   // "1,2"  (array → string)

// (123).();     // 123    (number → primitive)
// ('abc').valueOf();   // "abc"  (string → primitive)
// ({}).valueOf();      // {}     (object itself, no primitive)


//---Example-----

// const obj = {a:2,name:'abd'}
// console.log(typeof obj.valueOf())//objectvalueOf
// console.log(typeof obj.toString())//string
// console.log(obj.valueOf())//{ a: 2, name: 'abd' }
// console.log(obj.toString())//"[object Object]" or [object Object]


// const Person = {
//   name: 'abc',
//   age: 30,
//   valueOf() {
//     return this.age; ///obj.valueOf()
//   },
//   toString() {
//     return `${this.name}`;
//   }
// };

// console.log(Person + 6);     // Outputs: 36 (age 30 + 6)
// console.log(Person + 'efg'); // Outputs: "abcefg" (name 'abc' + 'efg')



//=====================

// Equality and Type Coercion Output Questions
// console.log(5 == "5"), console.log(5 === "5")//true,false
// console.log(true == 1), console.log(true === 1)//true,false
// console.log(null == undefined), console.log(null === undefined)//true,false
// console.log("0" == false), console.log("0" === false)//true,false
// console.log([] == 0), console.log([] === 0)//true, false
// console.log( == 1), console.log( === 1)// here we can use null and undefined// false,false
// console.log( == "1,2,3"), console.log( === "1,2,3")//similar here also// false,false

// by this rrule:::: JavaScript tries to convert both sides to comparable types (using coercion rules).

//reason behind   // console.log([] == 0), console.log([] === 0)//true,false
// [].valueOf() → []  // still object, no help
// [].toString() → "" // empty string
//Now one side is a string (""), the other is a number (0).


 //reason behind   //  // console.log(true == 1), console.log(true === 1)//true,false
// Number(true) → 1
// Number(false) → 0


//✅ Both [] and {} are truthy values.  means [] =>true  and means {} =>true 
// 1. console.log([] == ![])
// ![] converts the array [] (which is truthy) to false.
// The expression becomes [] == false.
// When comparing an object and a boolean using ==, JavaScript converts:
// The boolean false to number 0.
// The array [] is converted to a primitive via .toString(), which results in an empty string "".
// Then "" == 0.
// The empty string is coerced to number 0.
// So the comparison boils down to 0 == 0, which is true.


//----![]  → !true → false

//console.log([] == ![]) => true
//--console.log([] === ![]) =>false  ==> ![] convert into !true  ==>false
// [] === false is false because type must be true.


// 2. console.log(['x'] == 'x')
// The array ['x'] coerces to a string via .toString(), which gives "x".
// So this is "x" == "x", which is true.



// 3. console.log(false == 'false'), console.log(false === 'false')
// false == 'false':
// 'false' as a string does not convert to a meaningful number (NaN).
// false converts to number 0.
// 0 == NaN is false.


// false === 'false':
// Strict equality compares types and values without coercion.
// Boolean vs string types differ, so false.



//console.log(true == 'true') false // console.log(true === 'true')//false
// 'true' convert into NaN that why



// 4. console.log(null == '')
// null only loosely equals undefined.
// null does not equal an empty string ''.
// So it returns false.

// 5. console.log(undefined == false)
// undefined is only loosely equal to null.
// It does not equal false.
// So returns false.


// 6. console.log(" " == 0)
// The string " " (space) is coerced to "" (empty string) when trimmed.
// The empty string "" is coerced to number 0.
// So the expression becomes 0 == 0, which is true.



//IMPORTANT------- Notes--------------

//console.log([] == ![]);//true
//console.log([] == false);//true
//console.log(false == 'false')//false//NaN
//console.log(true == 'true')false
//console.log(" " == 0)//true
//console.log([] == 0)//true
//console.log([] == "")//true
//console.log([] + []);// ''
//console.log({} + {}); //[object Object][object Object]
// console.log(0 || "hello");//"hello"
// console.log("hello" && 0);//0
//console.log(['x'] == 'x')//true





//-------------------------[] → toString([]) → ""

// console.log([] == "")//true
// console.log(""== []) //true


//--- after conversion  "" == ""        why because space is still there both side same


// console.log([] == " ")//false
// console.log(" "== []) //false


//-----//--- after conversion  "" == " "  why because space is still there both side diffrent


// console.log(0 == "")//true
// console.log(0 == " ")//true

//--- after conversion  0 == 0      Kyunki JavaScript whitespace-only string ko numeric conversion mein 0 maanta hai.


// console.log(""== 0) //true
// console.log(" "== 0) //true

//--- after conversion  0 == 0    Kyunki JavaScript whitespace-only string ko numeric conversion mein 0 maanta hai.





//--------
// console.log(4 + 1 + "9")
// Left to right evaluation.

//------
//This works because assignment happens from right to left.
// b = [1,2,3];
// const a = b; //--- takes reference

//  const a =  b =  [1,2,3];


//[object Object]  ===>[part1 part2]
//part1 = > object => value of objcet type
//part2 = > Object => built-in object type (constructor/tag)
//like---[object Object]
// [object Array]
// [object Date]
// [object Map]
// [object Set]


//=================

// Two distinct {} create two distinct objects in memory — different references.

// Two distinct [] create two distinct arrays in memory — different references.

//strict equality (===) means it checks types
//but here in JavaScript to compare objects or arrays, the check is not based on their structure or content, 
//but on their reference or identity. This means even if two objects or arrays have exactly the same content,
//they are considered unequal unless they refer to the exact same instance.


// console.log( typeof {} ==  typeof {})//true  
// console.log({} == {})//false     \\due to different references.
// console.log({} === {})//false     \\due to different references.
// console.log([] == [])//false      \\due to different references.
// console.log([] === [])//false      \\due to different references.



// console.log([] + []);   // ""
// console.log([] + {});   // "[object Object]"
// console.log({} + []);   // "[object Object]"
// console.log( {} + {} );  // "[object Object][object Object]"



//----- REASON-----
// [] + []	"" + ""   	""
// [] + {}	"" + "[object Object]"   	"[object Object]"
// { } + []	block + +[]   → 0	             0
// ({} + [])	object + string	        "[object Object]"


// 3️⃣ { } + [] → ❗ Tricky one
// if we does not wrap inside paranthese { } treated as empty block  , ignored it
// block + []=>0


// const obj = {}
// const arr =[]
// console.log( obj === obj)//true      //due to same instance
// console.log(obj == obj)//true       //due to same instance
// console.log( arr === arr)//true    //due to same instance
// console.log(arr == arr)//true      //due to same instance



//console.log({ "a": "b" } === { "c": "d" });//false
//console.log(typeof { "a": "Hey" } === typeof ["a", "Hey"])//true

//console.log( typeof {a:1} == typeof {a:1}) //true
// console.log({a:1} == {a:1})//false     
// console.log({a:'ab'} === {a:'ab'})//false
// console.log([1,2] == [1,2])//false
// console.log(['1,2,3'] === ['1,2,3'])//false


// How NaN Behaves---------
// NaN is never equal to itself in both == and ===.

// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false
//typeof NaN === "number"//"number" === "number" => true


//-----------------
// For objects, both loose equality (==) and strict equality (===) compare by reference, not content.
// This means a == b behaves the same as a === b for objects.

// const a = {};
// const b = a;
// const c = {};

// console.log(a === b);  // true, same reference/ instance
// console.log(a === c);  // false, different reference


// console.log(a == b);  //true
// console.log(a == c);  //false


//----------------------
// const c  = [1,2,3,4];
// const d = c
// d.push(6)
// console.log(c);//[ 1, 2, 3, 4, 6 ]
// console.log(d);//[ 1, 2, 3, 4, 6 ]
// console.log(d == c);//true


//---------------------------------------

// const a = {
//     name: "name 1",
//     age: 20
// };

// const b = a;
// b.name = "name 2";

// console.log(a);
// console.log(b);

// //----ANSWER
// { name: 'name 2', age: 20 }
// { name: 'name 2', age: 20 }




//----------------
// This works because assignment happens from right to left.
// b = [1,2,3];
// const a = b; //--- takes reference


//  const a =  b =  [1,2,3];
// b.push(5)
// console.log(a);//[ 1, 2, 3, 5 ]
// console.log(b);//[ 1, 2, 3, 5 ]
// console.log(a == b);//true


//------
// const arr = [1, 2];
// const a = arr;
// const b = arr;


// console.log(a === b); // Output: true


//---------------REASON------------------
//diffrence between let and const

//--const
// const arr2 = [1, 2];
// arr2 = [3, 4]; // ❌ Error

// const variable ko reassign nahi kar sakte.



// Lekin object/array ko mutate kar sakte ho:

// const arr2 = [1, 2];
// arr2.push(3);
// console.log(arr2);
// // [1, 2, 3]


// //--let
// let arr2 = [1, 2];
// arr2 = [3, 4]; // ✅ Allowed
//---- with let re-assigment is allowed.



//------------------------------------------------------------------------------------


// const arr1 = [1, 2];
// const arr2 = arr1;

// arr1 = [3, 4];
//arr1 is declare with const (it  allow  only  mutation not re-assigment )
// console.log(arr2)//TypeError: Assignment to constant variable.
// //Error if arr1 declared with const, or reassignment if let


//------------
// let arr1 = [1, 2];
// const arr2 = arr1;

// arr1 = [3, 4]; //re-assignment
// console.log(arr1)//[ 3, 4 ]
// console.log(arr2)//[ 1, 2 ]


//----------------------------

// let arr1 = [1, 2];
// let arr2 = arr1;

// arr1 = [3, 4];  //re-assignment
// console.log(arr1)//[ 3, 4 ]
// console.log(arr2)//[ 1, 2 ]


//here in  both case arr1 is declare with let not const

//---------------------

// const arr1 = [1, 2];
// let arr2 = arr1;

// arr1 = [3, 4];
// console.log(arr1)
// console.log(arr2)
// //TypeError: Assignment to constant variable.


//--//here  arr1 is declare with const





//------------------
// const arr1 = [];
// const arr2 = arr1;

// console.log(arr1 == arr2);  // true
// console.log(arr1 === arr2); // true

// const obj1 = {};
// const obj2 = obj1;

// console.log(obj1 == obj2);  // true
// console.log(obj1 === obj2); // true


//----------------
// Example 1: Difference between copying arrays using spread operator vs assignment

// const arr1 = [1, 2, 3];
// const arr2 = arr1;       // assignment copies reference
// const arr3 = [...arr1];  // spread operator creates a shallow copy

// arr1.push(4);

// console.log(arr2); // Output: [1, 2, 3, 4] (same reference as arr1)
// console.log(arr3); // Output: [1, 2, 3] (copy unaffected by arr1)



//  let obj = {a:1}
//  let ref = obj
//  obj.x = obj ={a:2}//Rule 2: Property access (obj.x) is decided before assignment
//  (old object).x = { a: 2 }
//  console.log(ref)//{ a: 1, x: { a: 2 } }
//  console.log(ref.x)//{ a: 2 }
//  console.log(obj.x)//undefined
//  console.log(obj)//{ a: 2 }



//   //The object is not destroyed yet because ref1 is still pointing to it.
//  let obj1 = {a:1}
//  let ref1 = obj1
//  obj1 = null//Object ki value {a:1} change nahi hui. Sirf obj1 ka reference change hua.
//  console.log(ref1.a)//1
//  console.log(obj1)//null




//---QUESTION---
//  const a = { ab: { cd: { ef: true } } };
//  const b = a; 
//  const c = { ...a };
//  console.log(a === b);//true
//  console.log(a === c);//false
//  a.ab.cd.ef = false;
//  console.log(b.ab.cd.ef);//false
//  console.log(c.ab.cd.ef); //false



//--------------
// console.log([1,2,3] + [4,5,6]); // "1,2,34,5,6" (arrays → strings → concatenated)

//For arrays, .toString() converts the array elements into a comma-separated string.
// In JavaScript, when the + operator is used with strings, it performs string concatenation, not arithmetic addition.
// It simply joins the two strings end to end without adding any space or separator.

// [1,2,3].toString() +[4,5,6].toString()
//"1,2,3" + "4,5,6" = "1,2,34,5,6"

//----------------
// console.log([1,2,3] + " ," +[4,5,6]);//1,2,3,4,5,6
// console.log([1,2,3] + [4,5,6]); // "1,2,34,5,6"
//-----------------

// console.log("1,2,3" + "," + "4,5,6");  // "1,2,3,4,5,6"
// console.log("1,2,3" + " " + "4,5,6");  // "1,2,3 4,5,6"


// console.log("1,2,3" + "4,5,6");  // "1,2,34,5,6"
// console.log("1,2,3" + "4,5,6");  // "1,2,34,5,6"


//-------------------
// REASON-----
// ✔ If any operand is a string, + will concatenate
// ✔ All other operators (-, *, /, %) will convert strings to numbers

// console.log(1+"1");//11
// console.log(1-"1");//0




////------------------------
// Why does JavaScript do this?

// Because operators like -, *, /, % always expect numbers.
// So JavaScript forces the string to become a number.

// Only the + operator behaves differently, because 
// it can perform string concatenation as well.



// ✅ Examples
// 1. Subtraction (-)
// console.log("10" - "2");  


// ✔ "10" → 10
// ✔ "2" → 2
// Output: 8

// 2. Multiplication (*)
// console.log("5" * "3");


// ✔ "5" → 5
// ✔ "3" → 3
// Output: 15

// 3. Division (/)
// console.log("20" / "4");


// ✔ "20" → 20
// ✔ "4" → 4
// Output: 5

// 4. Modulus (%)
// console.log("10" % "3");


// ✔ "10" → 10
// ✔ "3" → 3
// Output: 1




// console.log(4 + 1 + "9")

// Left to right evaluation.

// 4 + 1 is numeric addition → 5.
// Then 5 + "9": number + string → coerces number to string "5" + "9" → "59".
// Output: "59" (string).

//------------------------
// console.log("number" + 15 + 3), console.log(15 + 3 + "number")

// "number" + 15 + 3:
// "number" + 15 → string concat → "number15"
// "number15" + 3 → string concat → "number153"
// Output: "number153"


//-------------------------------
// 15 + 3 + "number":

// 15 + 3 → numeric addition → 18
// 18 + "number" → string concat "18number"
// Output: "18number"


//------------------------------
//console.log(true + false)//1+0=>1


//---------------------------

// Relational operators (<, >) return booleans,
// and booleans are coerced to numbers when compared with numbers.

// JavaScript evaluates 1 < 2 < 3 left to right.
// 1 < 2 becomes true, which is coerced to 1, and 1 < 3 is true.

// console.log(1 < 2 < 3);//true

// 1 < 2  return true < 3 => 1 < 3  return true

// console.log(3 < 2 < 1);//true

//// 3 < 2  return false < 3 => 0 < 3  return true


//console.log(3 > 2 > 1);

//// 3 > 2  return true > 1 => 1  > 1  return false



//-------------------------
//Reason: Because var does not create a new variable inside {}.There is still only one x.

//  function Test(){
//      var x = 10;
     
//      if(true){
//          var x = 99
//          console.log(x)
//      }
//         console.log(x)
//  }
//  Test() //99 99
 
 
//  function Test() {
//     let x = 10;

//     if (true) {
//         let x = 99;
//         console.log(x);
//     }

//     console.log(x);
// }

// Test();// 99 10



//----

//  function a() { 
//            console.log(1); 
//            setTimeout(() => { 
//                   console.log(2); 
//             }, 0); 
//             new Promise(resolve => { 
//                    console.log(3); 
//                    resolve(4); 
//                    console.log(5); 
//              }); 
//              new Promise(resolve => resolve(6)).then(console.log);  
//              console.log(7); 
         
//           }
//  a()

// 1
// 3
// 5
// 7
// 6
// 2

//reason :  
// Promise executor runs immediately (synchronously).
// resolve(4) settles the promise, but no .then() is attached, so nothing else happens (no return )


//--------------------------

        // { let a = 10; 
        //     { let a = 20;  
        //         { console.log(a); 
        //            let a = 30; 
        //            console.log(a); 
        //           } console.log(a); 
        //      } 
        //  }
         //ReferenceError: Cannot access 'a' before initialization 


  //---INTERVIEW-------//

//QUESTION-----
 //-----------------
  //  var module = {
//      a:1,
//      getA: function(){
//          return this.a
//      }
//  }
//  const getFn = module.getA
//  console.log(getFn.call(module))


//QUESTION-----
// without using 
// loops
// forEach
// if-else


//const a=1 change a=1 to a=2
// const a=2
//  if a =1 print "Hello"
//   if a =2 print "world"


//-- this is call lookup
// const obj = {
//     1:'Hello',
//     2:'world'
    
// }
//   console.log(obj[a])
  

//--------------//------------------

// 2000 = sabhi ko 2 second baad chalao
// i * 2000 = har iteration ka delay alag banao, isliye values ek-ek karke print hoti hain.


// for(let i=0; i<5 ; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i *1000)
//     }
    
//     for(let i=0; i<5 ; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }


//---- WHEN WE USE--------
// Rule: Remember only one rule

// Set → when we want unique value
// Map → when we want to associte value with key

//---- make unique array [1,2,2,4,3,3,5,4]

//use  new Set

// Set → constructor
// new → naya Set instance/object create karo means object
// () → koi value pass nahi ki
// Set(0) → Set ke andar 0 values hain == obkcet ka size
// {} → DevTools ka Set ko display karne ka format

// console.log(new Set(arr)) = > Set(3) {1,2,3,4,5}
// if we want to take out into the array use spread oprator along with take array == pehle felyega then store in  array => 1 2 3 4 5 => put into []
// console.log([new Set(arr)]) ==> take array
// console.log([...new Set(arr)]) ==> then use spread ==> [1,2,3,4,5]


///-----
// it store collection od key data but diffrenece is Map allow any type of key

// const map = new Map()
// map.set('apple', 100)
// console.log(map)//Map(1) { 'apple' => 100 }
// map.set(true, 102)//Map(2) { 'apple' => 100, true => 102 }
// console.log(...map)//[ 'apple', 100 ]
// console.log([...map])//[ [ 'apple', 100 ] ]
// console.log(map.get('apple'))//100 // -- getting key
// console.log(map.has('apple'))//true // -- return true if key exist
// console.log(map.size)//2 //-- size of object
//map.delete(key)


//----
// const map = new Map([
//   ["id", 101],
//   ["name", "Sanju"],
//   ["city", "Delhi"]
// ]);
// // console.log(map.get("city")) //delhi
// console.log(map)//Map(3) { 'id' => 101, 'name' => 'Sanju', 'city' => 'Delhi' }


//----------------------------------------

//Function Declaration — works ✅

//  App()
//  function App(){
//     console.log('DDD')
//  }
/// App()



//const + function expression — ReferenceError ❌

//function expression assigned to a const variable

//ReferenceError:
//Cannot access 'F' before initialization

//   F()
//   const  F =  function App(){
//     console.log('EEEEE')
//  }
// F()




//---------------Reason

//during memory creation phase what happend

// Memory Creation Phase

// App → function App() { ... }//JavaScript initializes the entire function declaration in memory before execution starts.


//-------------------------------------------


// Memory Creation Phase
//JavaScript mein const F memory mein create hota hai, lekin initialize nahi hota.


// F → uninitialized ❌//In JavaScript, const F is created in memory, but it is not initialized yet.



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

