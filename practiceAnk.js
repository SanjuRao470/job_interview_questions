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


// Question -3 =========
// [13:01, 2/6/2023] Ankit Sir: let obj = {name:"ankit",lastName:"yadav", role:"developer"}
// let arr =["ankit",'yadav','kumar']
// let {name,...remaining} = obj
// let [myName,...remainingArr] = arr
// console.log(remaining,remainingArr)

// let newArr = ["hp","dell","acer","lenovo","macbook"]

// let [,,l1,,l2] = newArr
// console.log(l1,l2)

// function foo(firstVal,...rest){
//     console.log(firstVal,rest)
// }

// foo("a","b","c","d")
// [16:18, 2/6/2023] Ankit Sir: // destructuring operator ;

// let obj = {name:"ankit",lastName:"yadav", role:"developer"}
// let arr =["ankit",'yadav','kumar']
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
// console.log(newVar)
// // deepcopy And Shallowcopy


// // =====  shallow copy ====== 
// let copyRef = foo1
// foo1[2] ="three"

// console.log(copyRef ,foo1)

// // =====deep copy ======

// // let copyNew = {...dell}
// let copyNew =  Object.assign({}, dell)


// copyNew.no = 10

// console.log("copyNew",copyNew,dell)


// Qusetion -4 ======
// let obj = {a:12,b:32,c:98}

// let arr = [3,5,1,6,7,45]
// console.log(Object.keys(obj)) // [a,b,c]
// let res = Object.keys(obj).map((val)=> obj[val]*2 )
// console.log(res)
// let filres = arr.filter((val)=> val > 100)
// console.log(filres)
// let objRes = Object.values(obj).filter((val)=> val > 34)
// console.log(objRes)



// let sum = arr.reduce((a,b)=>a+b)
// console.log(sum)
// let duplicateEle = [1,3,4,1,2,6,3,44,6,8,2,7,6]
// // output : {1:2,3:2,...}

// let frequency = duplicateEle.reduce((freqObj,ele)=>{
//     freqObj[ele] ? ++freqObj[ele] :  freqObj[ele]=1
//     return freqObj;
    
// },{})
// console.log(frequency)



// ***** Abhishek sir lecture****88

//Question -5 =======

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
   
   
// ------ Hoisting --------------------
   
//   let s = 10;
   
//   function doo() {
//       console.log(s);
//       var s = 5;
//   }
//   doo();

// ------- const ----------------------

// const a = {  // constant mean 'a' always be an object (type would be the same)
//     b : 5
// };

// a.b = 8;

// console.log(a);

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

// function rfn () {
//   function foo() {
//         console.log(this);
//     } 
//     foo()
// }
// rfn(); 


// const frfn = () =>  {
//     function foo() {
//         console.log(this);
//     } 
//     foo()
// }
// frfn();

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