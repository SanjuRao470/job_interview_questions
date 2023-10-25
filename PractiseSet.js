//##OBJECTS
//Question 1


// let user = [{
//     fname:"piya",
//     lname:"sharma"
// }]

// let user1 =[...user ,{age:30}]  
//console.log(user1)  // [{fname:"piya",lname:"sharma"},{age:30}]

// let user1= [...user]
// user1.fname = 'anisha'
//console.log(user1) [ { fname: 'piya', lname: 'sharma' }, fname: 'anisha' ]

//  let key = "fname" 
// console.log(user[key]) //piya

//  let key = prompt ("fname") 
// console.log(user[key]) //fname



//##STRINGS
///Question-----------------
// let store = "Hello"
// console.log(store.length) //5
// console.log(store[3]) //l
// console.log(store[-2]) //The square brackets always return undefined for negative indexes, for instance:
// alert(store.at(-2));   //l


//Question_______________--
// for (let char of "Hello"){
//     console.log(char)
// }
// H
// e
// l
// l
// o

// //STRING
// let str = "asdfghjk"

// for (let char of str){
//     console.log(char)
// }
// a
// s
// d
// f
// g
// h
// j
// k
// a
// s
// d
// f
// g
// h
// j
// k
// //OR
// for (let char of "asdfghjk"){
//     console.log(char)
// }
//*************************************
//Strings can’t be changed in JavaScript
//The usual workaround is to create a whole new string and assign it to str instead of the old one.

//  let name ="Nia"
//  newname = "Pi" + name[2] 
//  console.log(newname) //Pia

//Question************************
// let products = "DataRequired"
// console.log("DataRequired".toLowerCase()) //datarequired
// console.log("DataRequired"[4].toLowerCase()) //r
// console.log("management"[0].toUpperCase()) //M


//EXAMPLE********************************
//let str = "this is the best product in  the india"
// console.log(str.length) //37
// console.log(str.length) //38
// console.log(str[5]) //i
// console.log(str[7]) //whiteSpace
// console.log(str[40]) //undefined

// str1= 'Thi' + str[3]
// console.log(str1)//This

// position =0
//  let finalStr =str.slice(0,position) + str1 +str.slice(position)
//  console.log(finalStr)//Thisthis is the best product in  the india

// console.log("this is the best product in  the india".toUpperCase())
// console.log("this is the best product in  the india"[0].toUpperCase())
//THIS IS THE BEST PRODUCT IN  THE INDIA
//T
// console.log("Mine"[0].toLowerCase())
// console.log("Mine".toLowerCase())
//m
//mine



//TOPIC
//Searching for a substring
//There are multiple ways to look for a substring within a string.

// 1- str.indexOf(substr, pos).
//Example
// let str = 'Widget with id';
// alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
// alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
// alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

// 2-str.lastIndexOf(substr, position)
// 3-includes, startsWith, endsWith //The more modern method str.includes(substr, pos) returns true/false depending on whether str contains substr within.
//Example
// alert( "Widget".includes("id") ); // true
// alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"
// alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
// alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"


//EXAMPLES

 // indexOf, includes, startsWith, endSWith,lastIndexOf
//let str = "this is the best product in  the india"
//  console.log(str.length) //38
//  console.log(str.indexOf('is'))//2
//  console.log(str.indexOf('am'))//-1
//  console.log(str.indexOf('india'))//33
  //console.log(str.includes("india"))//true
  //   console.log(str.includes("usa"))//false
// console.log(str.startsWith('this'))//true
//  console.log(str.endsWith("in"))//false
//   console.log(str.lastIndexOf("india"))//33
 


//GET A SUBSTRING
 // slice,  substring,  substr

//  let str = "this is the best product in  the india"
//  //slice not include end
//  // in case of slice always start<end if it is not like that the swap the   parameter
//  console.log(str.slice(3,8))//s is 
//  console.log(str.slice(3))// s is the best product in  the india
//  console.log(str.slice(6,3))// empty
// console.log(str.slice(3,6)) //by swap s i

// Q- ucFirst ="john"==John
// let ucFirst ="john"
// let newStr = ucFirst[0].toUpperCase() + ucFirst.slice(1)
// console.log(newStr)//John




//TOPIC
//To get a substring, use: slice or substring.




//ARRAYS
//Array is an object and thus behaves like an object.
//arr[0]  //actually come from the object syntax.That’s essentially the same as obj[key], 
//where arr is the object, while numbers are used as keys.

// contiguous memory area :refers to a block of memory where elements or data are stored in
//  consecutive or sequential locations. This means that the elements are stored one after another
//  in memory without any gaps or spaces between them.


//let fruits = ["Apple", "Orange","aa","qwe"]
//method-1
//So new elements are added or taken always from the “end”.that is push ,pop
//alert( fruits.pop() ); //qwe
//fruits.push("banana")
//console.log(fruits)//[ 'Apple', 'Orange', 'aa', 'qwe', 'banana' ]

//1-shift
//console.log(fruits.shift())//Apple
//console.log(fruits)//[ 'Orange', 'aa', 'qwe' ]

//2-unshift
//fruits.unshift('ttt')
//console.log(fruits)//[ 'ttt', 'Apple', 'Orange', 'aa', 'qwe' ]
// we can extract/get  any index elements without using any formula
// positive array counting from 0 to .....
// negetive array counting from -1 to .....
// console.log(fruits.at(-3))//orange
// fruits[2] = "assd"
//console.log(fruits)//[ 'Apple', 'Orange', 'assd', 'qwe' ]
//console.log(fruits.length)//4

//EXAMPLES
// let order = ["bb"]
// order.unshift("aa")// add at beginning 
// order.push("cc")// add at end 
// console.log(order)//[ 'aa', 'bb', 'cc' ]

// let lists =["01","02","03","04","05","06"]
// console.log(lists.pop())//Extracts at end   ///06
// console.log(lists.shift())//Extracts at beginning   ///01
// console.log(lists)//[ '02', '03', '04', '05' ]

//Qusetion
// let list =["abc"]
// let arr =list
// console.log(list ===arr)//true
// arr.push("bca") // // modify the array by reference
// console.log(list)//[ 'abc', 'bca' ]

//QUESTION
// let list =["abc"]// Array is also a special kind of an object
// list.age=26
// console.log(list)//[ 'abc', age: 26 ]
// console.log(list.age)//26

//QUESTION
//ARRAY
// let arr = ["Apple", "Orange", "Pear"];

// for (let i = 0; i < arr.length; i++) {
//   console.log( arr[i] );
// }

// Apple
// Orange
// Pear

//QUESTION
// let arr =[]
// arr[99]="apple"
// console.log(arr.length)//100

