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


//TOPIC
//To get a substring, use: slice or substring.