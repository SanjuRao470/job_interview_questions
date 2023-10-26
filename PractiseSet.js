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

//QUESTION
//let arr =[0,1,2,3,4,5,6]
// arr.length =2
// console.log(arr)//[ 0, 1 ]

//QUESTION
// let arr =[
//     [1,2,3],// 0 index
//     [4,5,6],// 1 index
//     [7,8,9] // 2 index
// ]
//console.log(arr.length)//3
//console.log(arr[2])//[ 7, 8, 9 ]
// console.log(arr[0][1])//2 second element of 0 index

//OUTPUT BASED QUESTIONS
// toString

//  let arr = [1,2,3,4]
//   console.log(String(arr) ==="1234")//false
//       console.log(String(arr) ==="1,2,3,4")//true

//OUTPUT BASED QUESTIONS
// they implement only toString conversion, so here [] becomes an empty string, [1] becomes
//  "1" and [1,2] becomes "1,2".

    // console.log([1]+1) //11
    //   console.log([1,4]+3) //"1,43"
    //       console.log(["1"]+1) //"11"   
    //       console.log([1,8]+"1") //"1,81"
    //     console.log([0]+0) //"00" 
    //   console.log([0]+"1") //"01"
    //       console.log(["1,5"]+"1,9")//"1,51,9"    
    //       console.log(["1"]+1,7) //"1,17"
    //  console.log([]+1,7) //1 7
    //  console.log([]+"1,7") //1,7
    //  console.log([""]+1,7) //1 7

 //RULES
// alert( [] + 1 ); // "1"             
// alert( [1] + 1 ); // "11"
// alert( [1,2] + 1 ); // "1,21"

//alert( "" + 1 ); // "1"
//alert( "1" + 1 ); // "11"
//alert( "1,2" + 1 ); // "1,21"

//OUTPUT BASED QUESTIONS
//Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.
// This operator has no special treatment for arrays, it works with them as with any objects.(becoz of it we can not use array compared with operator ==. )
//So, how to compare arrays?
//That’s simple: don’t use the == operator. Instead, compare them item-by-item in a loop or using iteration methods

// console.log(0 == []) //true
// console.log(0 == '') //true
// console.log('0' == []) //false
// console.log('0' == '') //false

//OUTPUT BASED QUESTIONS
// alert( [] == [] ); // false
// alert( [0] == [0] ); // false

//OUTPUT BASED QUESTIONS
//QUESTION Is array copied? 

// let arr =['ab','bc','cd','ed','ef']
// let newarr = arr
// newarr.push('fg')
// console.log(newarr.length)//6
// console.log(newarr)//[ 'ab', 'bc', 'cd', 'ed', 'ef', 'fg' ]

//OUTPUT BASED QUESTIONS
// let arr =['Jazz', 'Blues']
// //point-1
// arr.push( 'Rock-n-Roll')
// //console.log(arr)//[ 'Jazz', 'Blues', 'Rock-n-Roll' ]
// //point-2
// arr[1] ='Classics'
// //console.log(arr)//[ 'Jazz', 'Classics', 'Rock-n-Roll' ]
// arr.shift('Jazz')
// //console.log(arr)//[ 'Classics', 'Rock-n-Roll' ]
// arr.unshift('Rap, Reggae')
// console.log(arr)//[ 'Rap, Reggae', 'Classics', 'Rock-n-Roll' ]

//OUTPUT BASED QUESTIONS
// let arr =['Jazz', 'Blues']
// let newarr =arr or  newarr =arr
// newarr.push('ab')
// console.log(newarr)//[ 'Jazz', 'Blues', 'ab' ]
// console.log(arr)//[ 'Jazz', 'Blues', 'ab' ]


///ARRAY METHODS
//IMP FOR INTERVIEW
//The element was removed, but the array still has 3
// elements, we can see that arr.length == 3.
//That’s natural, because delete obj.key removes a value by the key.
//becoz array behave like an object here

// let arr =['ab','bc','ca']
// delete arr[1]
// console.log(arr[1])//undefined
// console.log(arr)// [ 'ab', <1 empty item>, 'ca' ]
// console.log(arr.length)// 3
// console.log(arr.length == 3)//true


//FOR ARRAY
//The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

// Slice:
// Extracts a portion of an array.
// Creates a new array without modifying the original.
// Typically used for selecting elements.
//  syntax:arr.slice(start,end) last element is not included.
//example:
// let originalarr = ['ab','bc','ca','de','ef','fg']
//   newarr = originalarr.slice(2,4)
// console.log(newarr)//[ 'ca', 'de' ] created an new array and take out a portion of an array.
//  console.log(originalarr)//[ 'ab', 'bc', 'ca', 'de', 'ef', 'fg' ] original array is as it is ,no changes!


// Splice:
// Adds or removes elements within an array.
// Modifies the original array.
// Used for inserting or deleting elements from an array.
//  syntax:arr.splice(start,end)
//example:
// start counting from given index to , remove given elements like arr.splice(2,5) so here including  at index 2 element ,remove total 5 elements,and return remaining elements in an array.
// let originalarr = ['ab','bc','ca','de','ef','fg' ]
// originalarr.splice(3,2)
// console.log(originalarr)// ['ab','bc','ca','fg']
// originalarr.splice(1,5)
// console.log(originalarr)//[ 'ab' ]
// originalarr.splice(2,4)
// console.log(originalarr)//['ab','bc']

//To Store removal arrays
// array1 = originalarr.splice(1,4)
//  console.log(array1)//['bbc','ca','de','ef'' ] to store removal arrays

//QUESTION-(without deleting any array's element instead of shift the array)
// let originalarr = ['ab','bc','ca','de','ef','fg' ]
// // here to set delete 0  and also defined the position 1 where ypu want to place the new word!
// // originalarr.splice(1,0, 'cnbc')
// //  console.log(originalarr)//[
// //   'ab', 'cnbc',
// //   'bc', 'ca',
// //   'de', 'ef',
// //   'fg'
// // ]
// //OR
// originalarr.splice(4,0,'drd','rsr')
// console.log(originalarr)
// [
//   'ab', 'bc',  'ca',
//   'de', 'drd', 'rsr',
//   'ef', 'fg'
// ]

//QUESTION-( deleting  array's elements then add elements)
// let originalarr = ['ab','bc','ca','de','ef','fg' ]
// originalarr.splice(2,4,'drd','rsr')
// console.log(originalarr)
