///-----------------------REACT.MEMO-------------------------------

// import React, {useState} from 'react'

// export default function app(){
//   const [count, setCount] = useState(0)
//     const [name, setName] = useState('Engineer--')
// console.log('parent Rendered')

//   return(
//       <div>
//       <p>----Parent--- ==== {count}</p>
//      <button onClick={()=>setCount(count+1)}>parent button</button>
//      <Child name={name}  setName= {setName}/>
//       </div>
//   )
// }

// const Child = React.memo(function Child({name,setName }) {
//   console.log("Child Rendered");
//    console.log("----------",name);
//   return (
//     <div>
//       <p>---CHILD----==00000{name}</p>
//        <button  onClick={()=>setName('developer')}>CHILD button</button>
//     </div>
//   );
// });


///------------------
//IMPORTANAT CASES---
{/* <Child name={name} /> //------- changes child
<Child name='DEVELOPER' /> //---- not changes child
<Child  /> */}   //---- not changes child

//---------------------------------------------
//<Child name={name}  setName= {setName}/> //--- props are passing to parent to child
// function Child({name,setName }) //--------- we are receving--- state ki current value as a prop and setter function as a prop
//  setName --- to update child's props's value

//--------------------------------------------------------------------//


//--------------------useCallback-----------------

// import React, {useState, useCallback} from 'react'


// export default function app(){
// const [count, setCount] = useState(0)
// console.log('parent Rendered')


// const handlerClick = useCallback(() => {
//   console.log('click me')
// },[])


//   return(
     
//       <div>

//       <h1>----app--- {count} </h1>
//       <button onClick={()=>setCount(count+1)}>parent button</button>
//       <Child onClick={handlerClick}/>

//       </div>

//   )
// }

//  const Child = React.memo(function Child({onClick}){
//   console.log('Child Rendered')
//   return(
//       <div>
//       <h1>----Child---000 </h1>
//             <button onClick={onClick}>child button</button>

    
//       </div>
//   )
// })



//-------------------------------------------------------------------------------






// import React from "react";

// export default function Parent() {
//   const [name , setName] = useState('john')
//   return (
//     <div >
//       <button onClick={()=>setName('devi')}>Hello CodeSandbox</button>
//       <Child  name={name} />
//     </div>
//   );
// }

// //first way

// import React from "react";

// function Child({name}){

//   return (
//     <div >
//       <h1>Hello CodeSandbox</h1>
//       <h2>{name}</h2>
//     </div>
//   );
// }

// export default React.memo(Child)


// //--another ways

// const Child = React.memo(function Child({ name }) {
//   console.log("Child Render");

//   return (
//     <div>
//       <h2>{name}</h2>
//     </div>
//   );
// });

// export default Child;



//--- here Child will not re-render


// export default function Parent() {
//   const [count , setCount] = useState(0)
//   return (
//     <div >
//       <button onClick={()=>setName(count+1)}>Hello CodeSandbox</button>
//       <Child  name='sanu'/> /// child's props is not changing that's whay 
//     </div>
//   );
// }




//====================

// Rule yaad rakho
// Primitive
// <Child name="Sanju" />

// ✅ React.memo enough.


// Object
// <Child user={{ name: "Sanju" }} />

// ✅ React.memo + useMemo


// Function
// <Child onClick={() => {}} />

// ✅ React.memo + useCallback



//-----QUESTION NO-1
//-----Object---

// function App() {
//   const [count, setCount] = useState(0);

// //   const user = {
// //     name: "Sanju"
// //   };


// // Object A === Object B
// // false.// child will  re render because  reference is  diffrenet
// // Child render .





// // const user = useMemo(() => ({
// //   name: "Sanju"
// // }), []);

// //Object A === Object A
// // True.// child will not re render because  reference is same 
// // Child render skip.


//   return (
//     <>
//       <Child user={user} />

//       <button onClick={() => setCount(count + 1)}>
//         +
//       </button>
//     </>
//   );
// }

// const Child = React.memo(({ user }) => {
//   console.log("Child Render");
//   return <h1>{user.name}</h1>;
// });





//------ Function

//always rememer ()=>{}  creats new  function object 

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     console.log("Hello");
//   };

//  on initial render function A created and stored in memory
// on state change state change  again  function B created
// React.memo compare  both functions
//function A === function B become false because of has diffrenet reference
////child  render



// const handleClick = useCallback(() => {
//   console.log("Hello");
// }, []);

//  on initial render function A created and stored in memory
// on state change state change  again  function A created
// React.memo compare  both functions
//function A === function A become true because of has same reference
//child skip render


//   return (
//     <>
//       <Child onClick={handleClick} />

//       <button onClick={() => setCount(count + 1)}>
//         +
//       </button>
//     </>
//   );
// }

// const Child = React.memo(({ onClick }) => {
//   console.log("Child Render");
//   return <button onClick={onClick}>Click</button>;
// });


//-- NOTE-----

// () => {}
// Har baar ek naya function object create karta hai.

// Example

// const a = () => {};
// const b = () => {};

// console.log(a === b);


//---- IMPORTANAT NOTE--------

// React.memo sabhi prop types ke liye kaam karta hai.

// Primitive ✔️
// Object ✔️
// Array ✔️
// Function ✔️

// Lekin...

// Object aur Function ke case me reference har render badal jata hai, isliye React.memo ko lagta hai ki prop change ho gaya.

// Isliye unke saath useMemo ya useCallback use kiya jata hai.

// Isko aise yaad rakho
// Tool	Kaam

// React.memo	Props compare karta hai aur decide karta hai render skip karna hai ya nahi.
// useMemo	Object/Array ka reference stable rakhta hai.
// useCallback	Function ka reference stable rakhta hai.

// Answer: React.memo ko same props nahi milte. in case of Object/Array and Function
// Usko har render par naye props milte hain.




//------------------------HOC-----------------------------


// import React from 'react'

// function  Dashbroad({text}) {
 
//   return (
//     <div>
//       <p>---Dashbroad---0000000000000-///////////////////////{text}</p>
     
//     </div>
//   );
// };

// function  Profile({name}) {
 
//   return (
//     <div>
//       <p>---Profile----0000000000000-///////////////////////{name}</p>
     
//     </div>
//   );
// };


// function  withAuth(Component) {
//  return function AuthencticatedDashbroad( props){
//   const Authentication = true
// if(!Authentication){
//   return <p>please sign!</p>
// }

// return <Component {...props}/>
//  }
 
// };


// const ProtectedDashbroad = withAuth(Dashbroad)
// const ProtectedProfile = withAuth(Profile)

// export default function app(){

//   return(
//       <div>
//       <h1>----app--- </h1>
//       <ProtectedDashbroad text='Dash props---'/>
//       <ProtectedProfile name = 'Alice props-----------'/>
    
//       </div>
//   )
// }



//---------------------------CUSTOM HOOK-------------------------------


// import React, { useMemo, useState } from "react";

// function useFrequency(str) {
//   return useMemo(() => {
//     const result = {};

//     for (const char of str) {
//       result[char] = (result[char] || 0) + 1;
//     }

//     return result;
//   }, [str]);
// }

//  export default function App() {
//   const [text, setText] = useState("");

//   const frequency = useFrequency(text);

//   return (
//     <div>
//       <h1>Character Frequency</h1>

//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter text"
//       />

//       <h2>Frequency:</h2>

//       //<pre>{JSON.stringify(frequency, null, 2)}</pre> or
//        <p>{JSON.stringify(frequency)}</p>
//     </div>
//   );
// }


