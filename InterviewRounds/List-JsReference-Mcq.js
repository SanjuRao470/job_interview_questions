//ToNumber --- js internally used to do type conversion(implicit/automatic happened)

// (123).toString();    // "123"  (number → string)
// (true).toString();   // "true" (boolean → string)
// ({}).toString();     // "[object Object]" (object → string)
// [1, 2].toString();   // "1,2"  (array → string)

// (123).valueOf();     // 123    (number → primitive)
// ('abc').valueOf();   // "abc"  (string → primitive)
// ({}).valueOf();      // {}     (object itself, no primitive)


//---Example-----

// const obj = {a:2,name:'abd'}
// console.log(typeof obj.valueOf())//object
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
// console.log([] == 0), console.log([] === 0)//true,false
// console.log( == 1), console.log( === 1)// here we can use null and undefined// false,false
// console.log( == "1,2,3"), console.log( === "1,2,3")//similar here also// false,false


// 1. console.log([] == ![])
// ![] converts the array [] (which is truthy) to false.
// The expression becomes [] == false.
// When comparing an object and a boolean using ==, JavaScript converts:
// The boolean false to number 0.
// The array [] is converted to a primitive via .toString(), which results in an empty string "".
// Then "" == 0.
// The empty string is coerced to number 0.
// So the comparison boils down to 0 == 0, which is true.


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



//=================

// Two distinct {} create two distinct objects in memory — different references.

// Two distinct [] create two distinct arrays in memory — different references.

//strict equality (===) means it checks types
//but here in JavaScript to compare objects or arrays, the check is not based on their structure or content, 
// but on their reference or identity. This means even if two objects or arrays have exactly the same content,
//  they are considered unequal unless they refer to the exact same instance.



// console.log({} == {})//false     \\due to different references.
// console.log({} === {})//false     \\due to different references.
// console.log([] == [])//false      \\due to different references.
// console.log([] === [])//false      \\due to different references.


// const obj = {}
// const arr =[]
// console.log( obj === obj)//true      //due to same instance
// console.log(obj == obj)//true       //due to same instance
// console.log( arr === arr)//true    //due to same instance
// console.log(arr == arr)//true      //due to same instance


// console.log({a:1} == {a:1})//false     
// console.log({a:'ab'} === {a:'ab'})//false
// console.log([1,2] == [1,2])//false
// console.log(['1,2,3'] === ['1,2,3'])//false


// How NaN Behaves---------
// NaN is never equal to itself in both == and ===.

// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false


//-----------------
// For objects, both loose equality (==) and strict equality (===) compare by reference, not content.
// This means a == b behaves the same as a === b for objects.

// const a = {};
// const b = a;
// const c = {};

// console.log(a === b);  // true, same reference
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



//----------------
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


//---------------------------------
// const arr1 = [1, 2];
// const arr2 = arr1;

// arr1 = [3, 4];
// console.log(arr2)//TypeError: Assignment to constant variable.
// //Error if arr1 declared with const, or reassignment if let


//------------
// let arr1 = [1, 2];
// const arr2 = arr1;

// arr1 = [3, 4];
// console.log(arr1)//[ 3, 4 ]
// console.log(arr2)//[ 1, 2 ]



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




