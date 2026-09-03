
// function debounce(fn,delay){
// let timer;

// return function(...arg){
//   clearTimeout(timer)
//   timer= setTimeout(() => {
//     fn(...args)
//   }, delay);
// }
// }


// function Greet({name}){
//   console.log("---", name)
// }


// const generatedDebounce = debounce(Greet,1000)
// console.log('mohan')
// console.log('alice')
// console.log('john')



// function demoPromise(){
//   return Promise((resolve,reject)=>{
//     console.log("--- promise pending")
// const status = true
// setTimeout(() => {
//   if(status){
//     resolve("promise resolved---")
//   }else{
//     reject("promise resolved---")
//   }
// }, 1000);
//   })
// }
// demoPromise()
// .then((result) =>console.log(result))
// .catch((error) =>console.log(error))




// function closureFn(){
//   let count=0;

// return function(){
// count++
// console.log(count)
// }
// }
// const counter = closureFn()
// counter()
// counter()
// counter()


// function  memoryLeakage(){
//   let timer = [];


//   function Start(){
//     for(let i=0; i<=6; i++){
//     const id = setTimeout(() => {
//       console.log(i)
//     }, 1000);
//     timer.push(id)
// }
// }


// function Stop(){
// for(let i=0; i<=6; i++){
//  timer.forEach(()=> clearTimeout(id))
//  timer = 0
// }
// }

// }

// const logger =  memoryLeakage()
// logger.start()




// function delayFn(){
//   let timer;

//   function Start(){
//         for(let i=0; i<8; i++){
// timer =setTimeout(()=>{
// console.log(i)
// }, 2000)
//   }

//   }
//   return {Start}
// }
// const logger = delayFn()
// logger.Start()






// function curryingFn(a){
//   return function(b){
//     return function(c){
//       return c*b-a;
//       }
//   }
// }

// console.log(curryingFn(1)(2)(4))




 
// function demoIIFE(){
//   for(var i=0; i<5; i++){
//      (function(i){
//            setTimeout(()=>{
//        console.log(i)
//    },1000)
// })(i)
   
//   }
// }
// demoIIFE()



// //-------------------

// function demoNOIIFE(){
//   for(var i=0; i<=7; i++){
//        setTimeout(()=>{
//        console.log(i)
//    },1000)
//  }
// }
// demoNOIIFE()



// //-------------------------------
// function demoFnIIFE(){
//   for(let i=0; i<=3; i++){
//   setTimeout(()=>{
//        console.log(i)
//    },1000)
//   }

// }
// demoFnIIFE()



// function demoCallback(callback){
  
//   setTimeout(()=>{
// const data = {name:'alice' , age:45}
// callback(data);
//   },1000)

// }
// demoCallback((received) => console.log('---',received))



// function Step1(callback){
//  console.log("step1---")
//   callback()
// }

// function Step2(callback){
//   console.log("step2---")
//     callback()
// }

// function Step3(callback){
//   console.log("step3---")
//    callback()
// }

// function Step4(callback){
//   console.log("step4---")
//     callback()
// }

// function Step5(callback){
//   console.log("step5---")
//     callback()
// }

// Step1(()=>{
//   Step2(()=>{
//     Step3(()=>{
//       Step4(()=>{
//         Step5(()=>{
//   console.log("all collection callback-----")
//         })
//       })
//     })
//   })
// })


//------JAVASCRIPT  BASIC UNDERSTANDING---------------/////

//----------- HOC ---------------------------------

// import React from "react";
// // all three compoenent are need same logic that authentication logic
// //  so jsut avoid to duplicate code , i created HOC
// important part ye hai Dashboard,Profile,Orders === Component and
// AuthComponent === ProtectedDashboard,ProtectedProfile,ProtectedOrders

// // Original Component
// function Dashboard({ text, username }) {
//   return (
//     <div>
//       <h1> {text} --Dashboard</h1>
//       <p>Welcome to your dashboard {username}</p>
//     </div>
//   );
// }

// function Profile({ text }) {
//   return <h1> {text} --Profile</h1>;
// }

// function Orders({ text }) {
//   return <h1> {text} -- Orders</h1>;
// }

// // HOC
// function withAuth(Component) {
//   return function AuthComponent(props) {
//     const isAuthenticated = true;

//     if (!isAuthenticated) {
//       return <h2>Please Login</h2>;
//     }

//     return <Component {...props} />;
//   };
// }

// // Enhanced Component
// const ProtectedDashboard = withAuth(Dashboard);
// const ProtectedProfile = withAuth(Profile);
// const ProtectedOrders = withAuth(Orders);

// // App
// function App() {
//   return (
//     <>
//       <ProtectedDashboard text="Dashboard"  username="Sanju!" />;
//       <ProtectedProfile text="Profile" />;
//       <ProtectedOrders text="Orders" />;
//     </>
//   );
// }

// export default App;


//--- IMPORTANT ------

//  const ProtectedDashboard  =  function withAuth(Component) {
//   return function AuthComponent(props) {
//     const isAuthenticated = true;

//     if (!isAuthenticated) {
//       return <h2>Please Login</h2>;
//     }

//     return <Component {...props} />;
//   };
// }




//-------------------------------React.memo--------------


// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("🔵 App Rendered");

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Count: {count}</button>

//       <Child />
//     </div>
//   );
// }

// function Child() {
//   console.log("🟢 Child Rendered");

//   return <h2>Child Component</h2>;
// }

// export default App;

// Initial render:

// 🔵 App Rendered
// 🟢 Child Rendered

// Button click:
// // both  re-render by checking   shellow comparision  Object.is(previousProp, nextProps)

// 🔵 App Rendered
// 🟢 Child Rendered



//------------------------------------------------------


// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("🔵 App Rendered");

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Count: {count}</button>

//       <Child name="Sanju" />
//     </div>
//   );
// }

// const Child = React.memo(function Child({ name }) {
//   console.log("🟢 Child Rendered");

//   return <h2>Hello {name}</h2>;
// });

// export default App;

//initial Render
// 🔵 App Rendered
// 🟢 Child Rendered

//when click only parent re-render not child
// 2 App Rendered



//-----------------------useCallback--------------------------------------------
//when re- redering causing

//import React, { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     console.log("Button clicked");
//   };

//   console.log("🔵 App Rendered");

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Count: {count}</button>

//       <Child onClick={handleClick} />
//     </div>
//   );
// }

// const Child = React.memo(function Child({ onClick }) {
//   console.log("🟢 Child Rendered");

//   return <button onClick={onClick}>Child Button</button>;
// });

// initial Render
// 🔵 App Rendered
// 🟢 Child Rendered

// when Count button  handleClick = () => {}; create new referernce on every render of app()

// //Render 1

// handleClick → Function A

// Render 2

// handleClick → Function B
//Function A !== Function B reference are not same child will re-render

// 🔵 App Rendered
// 🟢 Child Rendered

//when  you click child button only   console.log("Button clicked"); prints




//------------------------------------------------------------------------------------------
// when preventing re- rendering

// instaed of using React.memo , you can use useCallback

// import React, { useState, useCallback } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);

// const handleClick = useCallback(() => {
//   console.log("Button clicked");
// }, []);

//   const handleClick = useCallback(() => {
//     console.log("Button clicked");
//   }, []);

//   console.log("🔵 App Rendered");

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Count: {count}</button>

//       <Child onClick={handleClick} />
//     </div>
//   );
// }

// const Child = React.memo(function Child({ onClick }) {
//   console.log("🟢 Child Rendered");

//   return <button onClick={onClick}>Child Button</button>;
// });

// initial Render
// 🔵 App Rendered
// 🟢 Child Rendered

// handleClick → Function B
//Function A == Function B reference are not same child will  not re-render

// 🔵 App Rendered




///--------------------------useMemo-----------------------------------------


// import React, { useState, useMemo } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [search, setSearch] = useState("");

//   console.log("🔵 App Rendered");

//   const result = expensiveCalculation(search);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Count: {count}</button>
//       <br></br>

//       <input value={search} onChange={(e) => setSearch(e.target.value)} />

//       <h2>{result}</h2>
//     </div>
//   );
// }

// function expensiveCalculation(search) {
//   console.log("🟡 Expensive Calculation Running");

//   let total = 0;

//   for (let i = 0; i < 5; i++) {
//     total += i;
//   }

//   return `${search} - ${total}`;
//   //return `${total}`;
// }


// initial Render
// 🔵 App Rendered
// 🟢 Expensive Calculation Running


// when Count button  onClick={() => setCount(count + 1)}; create new referernce on every render of app()

// //Render 1

// handleClick → Function A

// Render 2

// handleClick → Function B
//Function A !== Function B reference are not same child will re-render


// 🔵 App Rendered
// 🟢 Expensive Calculation Running


///-------------------------


// import React, { useState, useMemo } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [search, setSearch] = useState("");

//   console.log("🔵 App Rendered");


//   const result = useMemo(() => {
//     return expensiveCalculation(search);
//   }, [search]);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Count: {count}</button>
//       <br></br>

//       <input value={search} onChange={(e) => setSearch(e.target.value)} />

//       <h2>{result}</h2>
//     </div>
//   );
// }

// function expensiveCalculation(search) {
//   console.log("🟡 Expensive Calculation Running");

//   let total = 0;

//   for (let i = 0; i < 5; i++) {
//     total += i;
//   }

//   return `${search} - ${total}`;
//   //return `${total}`;
// }


// initial Render
// 🔵 App Rendered
// 🟢 Expensive Calculation Running


// when Count button  onClick={() => setCount(count + 1)}; create new referernce on every render of app()

// //Render 1

// handleClick → Function A

// Render 2

// handleClick → Function B
//Function A == Function B reference are not same child will not re-render


// 🔵 App Rendered



//----------------------CUSTOM HOOK-----------------------------

// import React, { useState } from "react";

// function useCharacterFrequency(text) {
//   const result = {};

//   for (const char of text) {
//     result[char] = (result[char] || 0) + 1;
//   }

//   return result;
// }

// function App() {
//   const [text, setText] = useState("");

//   const frequency = useCharacterFrequency(text);

//   return (
//     <div>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       {/* <p>{JSON.stringify(frequency)}</p>//{"j":10,"k":1,"n":4,"m":4,"g":5,"h":7} */}

//       <pre>{JSON.stringify(frequency, null, 2)}</pre>
//       {/* {
//   "j": 10,
//   "k": 1,
//   "n": 4,
//   "m": 4,
//   "g": 5,
//   "h": 7
// } */}
//     </div>
//   );
// }

// export default App;



//------------------JS=====JS--------------------

// function app() {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 2000);
//   }
// }

// app();

//--As we know JS runs on single thread and execute code on synchronusely line by line in call stack
//--- fisrt app() function called, put in the call stack, then app() goes inside the loop and start with first 
// itration where i define with let keyword which create diffrent binding on every itration
// setTimeout register the timer  for iteration 0 to <5   and after timer expire  it place inside callback queue
// then event loop check if  call stack is empty ,  if empty , it take callback from  callback queue ans pushed inside call stack
 // and finally return 0,1,2,3,4



//------------------------------
// .then(() => {
//   console.log("promise resolved value");
// })

// ka callback Microtask Queue mein chala jata hai.


// Promise.resolve().then((result) => console.log(result));

// Flow:

// Promise.resolve()
//  ↓
// already fulfilled Promise
//  ↓
// .then()
//  ↓
// microtask
//  ↓
// console.log(result)


//-------------------------------------------

// function demo() {
//   return new Promise((resolve) => {
//     console.log("promise created");
//     resolve("success");
//   });
// }

// demo().then((result) => console.log(result));

// Output:
// promise created
// success


//------------------------------------

// console.log('developer1')
// setTimeout(()=>{
// console.log("engineer")
// },0)
// new Promise(()=>console.log('promise created'))
// console.log('developer2')
//  Promise.resolve().then(()=> {
// console.log('promise resolved vaule')
//  })

//  //ANSWER----

//  developer1
// promise created
// developer2
// promise resolved vaule
// engineer





//-------------------------------------

// console.log("Start"); 
// Promise.all([ Promise.resolve("A"), 
// Promise.resolve("B"), 
// newPromise(resolve => 
// { 
// setTimeout(() => resolve("C"), 0); 
// }) 
// ]) .then(result => 
// { console.log(result); 
// }); 
// console.log("End");


//--ANSWER:-- ReferenceError: newPromise is not defined


///////////------------------------------------

// console.log("Log 1");
// new Promise(() => {console.log("Promsie")});
// setTimeout(() => {console.log("Timeout")}, 0);
// console.log("Log 2");

// //----ANSWER

// Log 1
// Promsie
// Log 2
// Timeout

//---EXPLANATION--
// Promise ka executor function immediately/synchronously execute hota hai.  

// Promise create karna asynchronous nahi hota. 

// () => {
//   console.log("Promise");
// }
// wo synchronously execute hota hai. 




// 🔥 Question 1 — Promise + setTimeout + Microtask

// console.log("A");

// setTimeout(() => {
//   console.log("B");

//   Promise.resolve().then(() => {
//     console.log("C");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("D");
// });

// console.log("E");

// A
// E
// D
// B
// C

//---🔥 Question 2 — async/await + Promise + Timer

// async function app() {
//   console.log("A");

//   await Promise.resolve();

//   console.log("B");

//   setTimeout(() => {
//     console.log("C");
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log("D");
//   });

//   console.log("E");
// }

// console.log("F");

// app();

// console.log("G");

// F
// A
// G
// B
// E
// D
// C



//-----🔥 Question 3 — Closure + var + let + Timer

// function app() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log("var:", i);//3,3,3
//     }, 0);
//   }

//   for (let j = 0; j < 3; j++) {
//     setTimeout(() => {
//       console.log("let:", j);//0,1,2
//     }, 0);
//   }
// }

// app();


//-----🔥 Question 4 — Nested Event Loop Challenge

// console.log("1");

// setTimeout(() => {
//   console.log("2");

//   Promise.resolve().then(() => {
//     console.log("3");
//   });

//   setTimeout(() => {
//     console.log("4");
//   }, 0);
// }, 0);

// Promise.resolve().then(() => {
//   console.log("5");

//   setTimeout(() => {
//     console.log("6");
//   }, 0);
// });

// console.log("7");


// 1
// 7
// 5
// 2
// 3
// 6
// 4


///------Question 5 — Boss Level

// console.log("A");

// setTimeout(() => {
//   console.log("B");

//   Promise.resolve().then(() => {
//     console.log("C");
//   });

//   queueMicrotask(() => {
//     console.log("D");
//   });

// }, 0);

// (async function () {
//   console.log("E");

//   await Promise.resolve();

//   console.log("F");

//   setTimeout(() => {
//     console.log("G");
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log("H");
//   });
// })();

// Promise.resolve().then(() => {
//   console.log("I");

//   setTimeout(() => {
//     console.log("J");
//   }, 0);
// });

// console.log("K");




// A
// E
// K
// F
// I
// H
// B
// C
// D
// G
// J