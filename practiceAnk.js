// Interview Qusetions =========

// React working flow
// High order components
// Dom, virtual dom
// State lifestyle methods
// Functional components
// Usememo
// Redux
// Redux working flow
// Middleware
// Useffect hook
// Difference between functional and class components 
// Asked about the projects mentioned in resume



// Question-1 ==========
// function App() {
//     //  const [name , setName] = useState('ankit')
//     // it rerenders the components whenever state is changes
//     let content1 =' this is the data for the content 1 button'
//     let content2 = 'this is the data for the content 2 button'

//   const [content,setContent] =useState("c1")


//   // function handleChange(event){
//   //   let val = event.target.value
//   //   setName(val);
//   // }
//   const handleClick = (value)=>{
//        setContent(value);
//   }
//     return (<>

//      <button onClick={()=>handleClick('c1')}>content 1</button>
//      <button onClick={()=>handleClick('c2')}>content2</button>
//     {/* {  content === 'content1'  ? <p>this is the data for the content 1 button</p> : <p>this is the data for the content 2 button</p> } */}

//     {content === 'c1' && <p>{content1}</p>}
//     {content === 'c2' && <p>{content2}</p>}


//     </>
//     );
//   }

//   export default App;


//Question -2 ========
// import React,{useEffect, useState} from 'react'

//  const Callapi = () => {
//   const[data,setData]=useState(0)
//   const [apiData,setApiData] = useState([])
//   useEffect(()=>{
//           getData();
//   },[]) 

//   async function getData(){
//     let resData = await fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json() )
//     setApiData(resData)
//   }



//   // console.log("================",apiData)
//    return (
//     <>
//       {/* <h1>Hello world it is working</h1>
//       <button onClick={()=>setData(data+1)} style={{width:'200px',color:'red',height:'50px'
//       ,borderRadius:'23px',cursor:'pointer'}}>update me</button> <h1>{data}</h1>
//     </> */}
//     {apiData.map((item)=>
//        <>
//     <div>{item.name}</div>
//     <p>{item.id}</p>
//     </>

//     )

//     }
//     </>

//    )
//  }

//  export default Callapi



//QUESTION 
 //diff. b/w spread oprator, rest oprator, destructring.
// Spread operator spreads iterable elements(arrays and object). OR , is primarily used for expanding iterables like arrays into an individual elements.
// Key Points:
// Used for combining arrays or objects into new arrays or objects.
// Can be used to clone arrays or objects quickly. 
//IMPORTANT: COPY ,CONCAT IF WE CHECK  arr === arr1 result will be false because store in memory seperatly


//REST =  used to collect multiple function arguments into an array.
//example
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
//   }
//   sum(1, 2, 3); // Returns 6
  

//Destructure: add/extraxt elements from array/object
//example
// const person = { name: 'John', age: 30 };
// const { name, age } = person;
// console.log(name); // "John"
// console.log(age); // 30

// const numbers = [1, 2, 3];
// const [first, second] = numbers;
// console.log(first); // 1
// console.log(second); // 2



// Here are some multiple-choice questions (MCQs) based on the spread operator in JavaScript:

// What will be the output of the following code snippet?
// javascript
// Copy code
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergedArray = [...arr1, ...arr2];
// console.log(mergedArray);

// a) [1, 2, 3, 4, 5, 6]
// b) [[1, 2, 3], [4, 5, 6]]
// c) [1, 2, 3, [4, 5, 6]]
// d) [1, 2, 3, ...arr2]

// Answer: a) [1, 2, 3, 4, 5, 6]//spread opreator create new array /object

// What does the following code snippet output?
// javascript
// Copy code
// const str = 'hello';
// const chars = [...str];

// console.log(chars);
// a) ['h', 'e', 'l', 'l', 'o']
// b) 'h', 'e', 'l', 'l', 'o'
// c) ['hello']
// d) SyntaxError: Unexpected token '...'

// Answer: a) ['h', 'e', 'l', 'l', 'o']

// What will be the output of the following code?
// javascript
// Copy code
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// const arr4 = arr1.concat(arr2);

// console.log(arr3 === arr4);
// a) true
// b) false
// c) undefined
// d) ReferenceError: arr3 is not defined

// Answer: a) false   reason: because of both having the same value but created different memory location for new array or we can say object===array
// every new array stored in memory as an object 

// What does the following code snippet output?
// javascript
// Copy code
// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3 };
// const mergedObj = { ...obj1, ...obj2 };

// console.log(mergedObj);
// a) { x: 1, y: 2, z: 3 }
// b) { { x: 1, y: 2 }, { z: 3 } }
// c) { ...obj1, ...obj2 }
// d) SyntaxError: Unexpected token '...'

// Answer: a) { x: 1, y: 2, z: 3 }

// What will be the output of the following code?
// javascript
// Copy code
// const numbers = [1, 2, 3];

// const copyNumbers = [...numbers];

// console.log(copyNumbers === numbers);   object===array

// a) true
// b) false
// c) undefined
// d) ReferenceError: copyNumbers is not defined

// Answer: b) false
// //ReasonIn JavaScript, arrays are reference types. When you create a new array using the 
// spread operator ([...numbers]), you are creating a new array instance 
// with the same elements as the original array (numbers), but it is a separate object in memory.

// Key Points:
// Used in array literals, function calls, object literals, etc.
// Creates a shallow copy of the original array/string.

// Rest parameter gathers function arguments into an array.
// Key Points:
// Used only in function parameters.
// Collects all remaining arguments into an array.

// Destructuring extracts values from arrays/objects into separate variables.

// Question -3 =========
// [13:01, 2/6/2023] Ankit Sir: 

//let obj = {name:"ankit",lastName:"yadav", role:"developer"}
// let arr =["ankit",'yadav','kumar']
// let {name,...remaining} = obj
// let [myName,...remainingArr] = arr
// console.log(remaining,remainingArr)//{ lastName: 'yadav', role: 'developer' } [ 'yadav', 'kumar' ]

//Q---
// let newArr = ["hp","dell","acer","lenovo","macbook"]
// let [,,l1,,l2] = newArr
// console.log(l1,l2) //acer macbook

// function foo(firstVal,...rest){
//     console.log(firstVal,rest)
// }

// foo("a","b","c","d")
// [16:18, 2/6/2023] Ankit Sir:

 // destructuring operator ;
// let obj = {name:"ankit",lastName:"yadav",role:"developer"}
// let arr = ["ankit",'yadav','kumar']
// let {name:ak,...remaining} = obj
// let [myName,...remainingArr] = arr
// console.log(remaining,remainingArr,"===",ak)

// let newArr = ["hp","dell","acer","lenovo","macbook"]

// let [,,l1,,l2] = newArr
// console.log(l1,l2)

// function foo(firstVal,...rest){
//     console.log(firstVal,rest)
// }

// foo("a","b","c","d")
// let obj1 ={}
// const {g=2,f=5} =obj1

// console.log(g,f)

// const foo1 = ['one', 'two'];

// const [red, yellow, green='', blue=''] = foo1;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // undefined
// console.log(blue);  //undefined

// // ======spread operator ==========
// let  dell = {memory:"256gb",ram:"8gb"}
// let mobile = {brand:"samsung"}

// let newVar = {...dell,...mobile}
// console.log(newVar)  //{ memory: '256gb', ram: '8gb', brand: 'samsung' }


// // deepcopy And Shallowcopy
//EXAMPLE
// let originalArray= [1, { name: 'Alice' }, [3, 4]];
// shallowCopy= [...originalArray]
// shallowCopy[1].name = 'Bob';

// // Modify the nested array in the shallow copy
// shallowCopy[2][0] = 300;

// console.log(originalArray);//[ 1, { name: 'Bob' }, [ 300, 4 ] ]
// console.log(shallowCopy);//[ 1, { name: 'Bob' }, [ 300, 4 ] ]



// =====  shallow copy ====== 
//const foo1 = ['one', 'two'];
// let copyRef = foo1
// foo1[2] ="three"

// console.log(copyRef ,foo1)

// // =====deep copy ======

// // let copyNew = {...dell}
// let copyNew =  Object.assign({}, dell)


// copyNew.no = 10

// console.log("copyNew",copyNew,dell)


// Qusetion -4 ======
//Object.keys() and Object.values() in JavaScript  : is a built-in JavaScript method that returns an array of a given object

// let obj = {a:12,b:32,c:98}
//console.log(Object.keys(obj)) // [a,b,c]    // Object.keys(obj).map((val) => obj[val]*2  )
//console.log(Object.values(obj)) //[12,32,98]
// let res = Object.keys(obj).map((val)=> obj[val]*2 )
// console.log(res)//[ 24, 64, 196 ]

//QUESTION
// let obj ={a:'A',b:'B',c:'C'}
// //[2A,2B,2C]
// let keys = Object.keys(obj)
// let values = Object.values(obj)
// console.log(keys)//[ 'a', 'b', 'c' ]
// console.log(values)//[ 'A', 'B', 'C' ]

// let values1 = values.map((item) => `2${item}`)
// console.log(values1)//[ '2A', '2B', '2C' ]


// if(Object.values(obj).includes('N')){
//   console.log(" YES ITS TRUE")  
    
// }else{
//    console.log(" YES ITS false")    //YES ITS false
// }

//Question
// let arr = [3,5,1,6,7,45]
// let filres = arr.filter((val)=> val > 100)
// console.log(filres)
//output: []

// let objRes = Object.values(obj).filter((val)=> val > 34)
// console.log(objRes)
//output: [45]

// let arr = [13,5,11,61,17,45]
//  let filres = arr.filter((val)=> val >=11)
//  console.log(filres)
//output: [ 13, 11, 61, 17, 45 ]

//Question--
// arr =[1,2,3,4]
// let sum = arr.reduce((a,b)=>a+b)
// console.log(sum)
//output :10

// scenario
// let sum = arr.reduce((a,b)=>a)
// console.log(sum)
//output :1

//QUESTION
//-------- FIND FREQUENCY OF AN GIVEN ARRAY
// let duplicateEle = [1,3,4,1,2,6,3,44,6,8,2,7,6]
// // output : {1:2,3:2,...}
// let frequency = duplicateEle.reduce((freqObj,ele)=>{
//     freqObj[ele] ? ++freqObj[ele] :  freqObj[ele]=1
//     return freqObj;

// },{})
// console.log(frequency)
//output { '1': 2, '2': 2, '3': 2, '4': 1, '6': 3, '7': 1, '8': 1, '44': 1 }

// solved in diffrent way
// dupli =[1,1,1,2,2,2,2,3,3,3,3,3,4]
// let fre = dupli.reduce((obj,ele)=>{
//     obj[ele] ? ++obj[ele] :obj[ele]=1
//     return obj;

// },{})
// console.log(fre)
//output:{ '1': 0, '2': 0, '3': 0, '4': 0 }

//2nd case  : final output in []

// dupli =[1,1,1,2,2,2,2,3,3,3,3,3,4]
// let fre = dupli.reduce((obj,ele)=>{
//     obj[ele] ? ++obj[ele] :obj[ele]=1
//     return obj;

// },[])
// console.log(fre)
//output:[ <1 empty item>, 3, 4, 5, 1 ]



// ***** Abhishek sir lecture****88

//Question -5 =======
                                         //var                      //let                     //const
//1- scope                               functional                  block                        block
//2-  hoisting                            functional hoisting        no                          no
//3-  re-declare the same variable         yes                        no                          no
//4- re-assign the value                   yes                         yes                         no



//   #. 'var' has function scope // () => {}
//   #. 'var' can re declare the same variable
//   #. 'let', 'const' has the block scope // {}
//   #. 'var', 'function' hoisting
//   #. 'const' have the same properties but can't re assign

// ---- Scope var/let -----------------
//   function foo () {

// 	 if(true) {

// 	  let a = 6;

// 	 }

//      console.log(a);

//      var a = 8;
//   }

//   foo();
//ans:undefined

// ------ Hoisting --------------------

//   let s = 10;

//   function doo() {
//       console.log(s);
//       var s = 5;
//   }
//   doo();
//ans:undefined

// ------- const ----------------------

// const a = {  // constant mean 'a' always be an object (type would be the same)
//     b : 8
// };

//console.log(a.b)  // 8
//console.log(a)  // { a: 8 }

//Question -2 ====
// When ever regular fn get executed independently it always point to the 'window'
// To understand the context we should always look to the execution

// const foo = () =>  {

// }
// foo();


// const obj = {
//     xyz: 123,
//     fn: function() {
//         console.log(this);
//     }
// };

// obj.fn();
//ans { xyz: 123, fn: [Function: fn] }


// const obj = {
//     xyz: 123,
//     fn: function() {
//         console.log(this.xyz);
//     }
// };
// obj.fn();
//ans : 123



// function rfn () {
//   function foo() {
//         console.log(this);
//     } 
//     foo()
// }
// rfn(); 
//ans:  will log the global object (window in a browser) to the console.


// const frfn = () =>  {
//     function foo() {
//         console.log(this);
//     } 
//     foo()
// }
// frfn();
//ans:  will log the global object (window in a browser) to the console.

// function rfn () {
//   this.a = 5;
//   this.foo = () => {
//         console.log(this); // {}
//     } 
// }
// new rfn().foo();

//Question -6 ====

// ---------- Curring -----------------

//----- curring ---------------------

// const foo1 = () => {

//      const foo2 = () => {

//           const foo3 = () => {
//               console.log("#################")
//           }
//           return foo3
//      }

//      return foo2
// }

// const foo1 = () => () => () => {
//     console.log("#################")
// }

// foo1()()();

// Ex: 

// <IconWrap onClick={handleReport(SETTING)}>
//     <SettingOutlined />
// </IconWrap>

// // handleReport = () => () => {}
// const handleReport = (tab) =>{
//       const foo2 = (e) => {
//         console.log('@@@@@@', tab, e);
//         // setTabName(this)
//         // e.stopPropagation();
//       }
//       return foo2;
//   }



// Array, Object

// // Inherirence
// const obj = {
//     a: 1,
//     b: 2,
//     c: 30
// }

// Object.prototype.sum = function() {
//     console.log(eval(Object.values(this).join('+')));
// }

// obj.sum();
// [17:56, 5/11/2023] Abhishek Sir: I this its enough for the day remaining concepts 

//    bubbling/capturing
//    let/cont/var --------------------------------
//    regular/fat arrow fuctiongs -----------------
//    curring -------------------------------------
//    closures ------------------------------------
//    debouncing/throttling 
//    hoisting ------------------------------------
//    this 
//    call/apply/bind
//    prototype ----------------------------------
//    promises


//    Special
//    - BOM
//    - Custom event
//    - dynamic routing

// QUESTION
// // LINEAR SEARCH (to find elements in sequential order in an array)

// Advantage: will perform fast searches in small to medium List.
// 2- the list does not need to sorted.
// 3- not affected by inserted and deletion.

// Disadvantage:
// 1- time consuming

// const a = [54, 26, 9, 80, 47, 71, 10, 24, 45]; // given array  
//    //const val = 71; // value to be searched / num 
//    // const n = 9; // size of array / a.length 

//     const a = [54, 26, 9, 80, 47, 71, 10, 24, 45];

//     function linearSearch(a, val) {                // complixity of this function is really high
//     for (let i = 0; i < a.length; i++) { 

//      if (a[i] == val)  {
//         return i;    
//     } 
//   }
//     return -1; 
//   }
//      const result=linearSearch(a,80)

//      if (result == -1){
//          console.log('element not found');
//      }
//      else{
//          console.log(`element found at index ${result}`);
//      }

//QUESTION 
//BINARY SEARCH : to divide an array into two equal parts
// Required : sorted array( binary search will never works in unsorted array)  L,M,H VALUES 
// IMP POINTS
//1- TWO APPROACH
//ITRATIVE, RECURSIVE
//ITERATIVE: in which we use Loop.(mostly used)
// recursive: we use recursion which will a method or a function call search()
// For even array [1,2,3,4]:  (start+end)/2=( 0+3)/2=1.5=>1, here middle point is 2 // Math.floor // to calculate middle points
// for odd array : (low+high)/2 // this floor removes the decimal points for e.g 5/2 = 2.5 but its give 2

//PROBLEM
// array = [2,3,4,5,6,7,8,9]
// let find =8;
// let start =0;
// let end = array.length-1;
// let position = undefined;
// while(start<=end){
//     let mid=Math.floor((start+end)/2);
//console.log(array[mid]);
//output:5

//     if(array[mid]==find){
//     position=mid;
//       break;
//     }
//     else if(array[mid]<find){
//         start= mid+1;

//     }else{
//         end=mid-1
//     }
// }
//  console.log(position);
//output:find element at index 6


//QUESTION LOOP
//   array = [2,3,4,5,6,7,8,9]
//   let start = 15;
//   let end = 14;
//    let mid = 11;
//  //let arr =array.slice(2,5)
//  //let arr = array.shift(2)
//  //console.log(arr)
//  function foo(){
//      if(start<end){
//          console.log(array.length)
//      }
//      else if(end<=mid){
//          console.log(array.splice(3,4))
//      }else
//          console.log(array.slice(3,4))            
//  }
//  foo(array)


//Rest oprator  // rest porator will always give the answer in array
// function foo(a,b, ...obj){
//   console.log('a',a)
//    console.log('b',b)
//     console.log('obj',obj)
// }
// foo(11,3,4,6,7,8,9,11,12,12)
// output:a 11
// b 3
// obj [
//   4,  6,  7,  8,  //// rest porator will always give the answer in array
//   9, 11, 12, 12
// ]
//imp points
// function foo( ...obj,a,b){
//   console.log('a',a)
//    console.log('b',b)
//     console.log('obj',obj)
// }
// foo(11,3,4,6,7,8,9,11,12,12)
//output:SyntaxError: Rest parameter must be last formal parameter

//spread oprator
// function sum(...nums){
//   console.log(nums);
// }
// sum(4,5);
// sum(5,6,7,8);
//output:[4,5]
//[5,6,7,8]

//Q-2
// let arr1 = [1,2,3,4,5];
// let arr2 = [...arr1,6,7,8];
// console.log(arr1);
//OUTPUT:[1,2,3,4,5,6,7,8]
//Q3
// let arr=[1,5,89,5,900,234,1456];
// console.log(Math.max(...arr));
// output:1456
// console.log(Math.max(arr));
//output: it is giving NaN, Nan is basically not a number. So this is invalid way of passing the data

//Q4
// let arr="abc";
// let arr1="bbc"
// let arr2=`${arr} ${arr1}`
// console.log(arr2)
//OUTPUT: abc bbc

//Q4 DEstructure
// let arr =['riya','siya','piya'];
// let[f,m]=arr;
// console.log(f,m)
// output:riya siya

//OBJECT QUESTIONS
//Q1:Sort object array based on another array of keys

// const arr1 = ['d','a','b','c'] ;
// const arr2 = [{a:1},{c:3},{d:4},{b:2}];
// const sortArray = (arr1, arr2) => {
//    arr2.sort((a, b) => {
//       const aKey = Object.keys(a)[0];
//       //console.log("ttttt",aKey)
//       const bKey = Object.keys(b)[0];
//      console.log("cccc",bKey)
//       return arr1.indexOf(aKey) - arr1.indexOf(bKey);
//    });
// };
// sortArray(arr1, arr2);
// console.log(arr2);
// output:[ { d: 4 }, { a: 1 }, { b: 2 }, { c: 3 } ]


//closure  :  (REMEMBER THE ENVIRONMENT IN WHICH I WAS CREATED)
//Question-1
// var x = 10;
// function foo() {
//   var y = 20;
//   return function boop() {
//     let z = 15;
//     const output = x + y + z;
//     console.log(output)
//     console.log(z)
//     return function () {
//       console.log(y)
//     }
//   }
// }
// var fn = foo();
// var fn1 = fn();
// fn1()


//Question-2
// var x = 10;
// function foo() {
//   var y = 20;
//   function boop() {
//     let z = 15;
//     const output = x + y + z;
//     console.log(output)//45
//     console.log(z)//15
//   }
//   boop()
//  // console.log('vvvv', z) ////ReferenceError: z is not defined
//   console.log(x)
//   function foo1() {
//     console.log('nnnnnn', y)//20
//   }
//   foo1()
// }
// foo();

//ORRRRRRRRRRRRRRRRRRRRRRR
//REASON
//BECAUSE OF  X HAS FUNCTIONAL SCOPE THAT IS WHY  ALL FUNCTION CAN ABLE TO GET ACCESS OF X
// var x = 10;
// function foo() {
//   var y = 20;
//   function boop() {
//     let z = 15;
//     const output = x + y + z;
//     console.log(output)//45
//     console.log(z)   //15
//      console.log("oo",x)
//   }
//   boop()
//   //console.log('vvvv', z)  //ReferenceError: z is not defined
//   console.log(x)//10
//   function foo1() {
//       console.log('n', x)  //20
//     console.log('nnnnnn', y)  //20
//   }
//   foo1()
// }
// foo();
 

// To find comman element

//  let array = [10,20,30,40,50];
//  let arr = [20,30,60,70,90];

//  function CommonItemsArray(array1,arr1) {        // TAKING SCOPE
//     let commonArray = []; 
//    for(let i = 0; i < array.length; i++) {
//       for(let j = 0; j < arr.length; j++) {
//          if(array[i] == arr[j]) { 
//             commonArray.push(array[i]); 
//          }
//       }
//    }
//    return commonArray;
// }
// console.log(CommonItemsArray())
// console.log(arr)