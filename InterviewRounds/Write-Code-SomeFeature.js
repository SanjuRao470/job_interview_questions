
// ✅ 🔹 Interview-Ready Answer (Functional Component, JS)

// 📌 Step-by-step:
// “Sure! I’ll write a reusable React button component that accepts props like label, onClick, variant, type, and disabled. This way, it can be used consistently across the app with different styles and behaviors.”


// //----
// import React from "react";
// import ResuableComponent from "./ResuableComponent";
// import ResuableButton from "./ResuableButton";

// export default function App() {
//   return (
//     <div>
//       <div>
//         <ResuableComponent
//           title="Info Card"
//           content="This is an informational card."
//           type="info"
//         />
//         <ResuableComponent
//           title="Warning Card"
//           content="This is a warning card."
//           type="warning" // you can take either danger
//         />
//       </div>



//       <div>
//         <ResuableButton
//           type="primary"
//           label="Primary Button"
//           onClick={() => alert("Primary clicked")}
//         />

//         <ResuableButton
//           type="secondary"
//           label="Secondary Button"
//           onClick={() => alert("Secondary clicked")}
//         />

//         <ResuableButton
//           type="danger"
//           label="Delete"
//           onClick={() => alert("Delete clicked")}
//         />
//       </div>
//     </div>
//   );
// }



///--------------------------

// import React from "react";

// export default function ResuableButton({ type, label, onClick }) {
//   // styles based on type
//   const styles = {
//     base: {
//       padding: "10px 16px",
//       margin: "8px",
//       borderRadius: "8px",
//       border: "none",
//       cursor: "pointer",
//       fontSize: "14px",
//       fontWeight: "bold",
//     },
//     primary: {
//       backgroundColor: "blue",
//       color: "white",
//     },
//     secondary: {
//       backgroundColor: "grey",
//       color: "white",
//     },
//     danger: {
//       backgroundColor: "red",
//       color: "white",
//     },
//   };

//   // merge base style + type style
//   const buttonStyle = { ...styles.base, ...styles[type] };

//   return (
//     <button style={buttonStyle} onClick={onClick}>
//       {label}
//     </button>
//   );
// }



///---------------------------
// import React from "react";
// export default function ResuableComponent(props) {
//   console.log("Received props:", props);

//   const { title, content, type } = props;

//   const cardStyle = {
//     border: "1px solid #ccc",
//     padding: "20px",
//     borderRadius: "10px",
//     backgroundColor: type === "info" ? "orange" : "green",
//     color: type === "info" ? "white" : "red",
//   };

//   return (
//     <>
//       <h1>Resuable Button---</h1>
//       <div style={cardStyle}>
//         <h3>{title}</h3>
//         <p>{content}</p>
//       </div>
//     </>
//   );
// }






// ✅ Code: ReusableButton.jsx

// App.js
// import React from "react";
// import ResuableButton from "./ResuableButton";

// export default function App() {
//   return (
//     <div>
//       <h1>Parent Component</h1>

//       <ResuableButton
//         type="primary"
//         label="Primary Button"
//         onClick={() => alert("Primary clicked")}
//       />

//       <ResuableButton
//         type="secondary"
//         label="Secondary Button"
//         onClick={() => alert("Secondary clicked")}
//       />

//       <ResuableButton
//         type="danger"
//         label="Delete"
//         onClick={() => alert("Delete clicked")}
//       />
//     </div>
//   );
// }




// ✅ Usage Example


// // ReusableButton.js
// import React from "react";

// export default function ResuableButton({ type, label, onClick }) {

//   // styles based on type
//   const styles = {
//     base: {
//       padding: "10px 16px",
//       margin: "8px",
//       borderRadius: "8px",
//       border: "none",
//       cursor: "pointer",
//       fontSize: "14px",
//       fontWeight: "bold",
//     },
//     primary: {
//       backgroundColor: "blue",
//       color: "white",
//     },
//     secondary: {
//       backgroundColor: "grey",
//       color: "white",
//     },
//     danger: {
//       backgroundColor: "red",
//       color: "white",
//     },
//   };

//   // merge base style + type style
//   const buttonStyle = { ...styles.base, ...styles[type] };

//   return (
//     <button style={buttonStyle} onClick={onClick}>
//       {label}
//     </button>
//   );
// }

// 🧠 Bonus (what to say if asked why it's reusable):
// "It accepts props to customize the label, type, disabled state, 
// //click handler, and variant. That makes it flexible and usable for multiple button types across the application."



///QUESTION--------------------------------
//--Create form component  in react which have some input filed and label



///MAKE EXAMPLE OF HOC--------------
//  here we need at least two component and the third one is App.js so total three component.

//App.js
// import React from "react";
// import Counter from "./Counter";
// import HOC from "./HOC";

// export default function App() {
//   // HOC(Counter) returns a new component!
//   const EnhancedCounter = HOC(Counter);
//   return (
//     <div>
//       <h1>Hello CodeSandbox</h1>
//       <EnhancedCounter />
//     </div>
//   );
// }



//Input component---
// import React, { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       {count}
//       <button onClick={() => setCount(count + 1)}> update</button>
//     </div>
//   );
// }




// // HOC.js
// import React from "react";

// // HOC expects a component and returns a new one
// export default function HOC(WrappedComponent) {
//   // Return a new component that renders WrappedComponent twice with added styles
//   return function EnhancedComponent(props) {
//     return (
//       <div>
//         <p style={{ backgroundColor: "red", width: "100px", height: "100%" }}>
//           <WrappedComponent {...props} />
//         </p>
//         <p style={{ backgroundColor: "blue", width: "100px" }}>
//           <WrappedComponent {...props} />
//         </p>
//       </div>
//     );
//   };
// }


//------------------------------------------


// npm install react-error-boundary
// import { ErrorBoundary } from "react-error-boundary";
//  import MyComponent from './MyComponent'

// export default function App(){

//   function ErrorComponent ({error}){
//     return <div>Error: {error.message}</div>
//   }

//   return(
//<div>
//     <ErrorBoundary FallbackComponent={ErrorComponent} or fallback= {<div>Something went wrong</div>}>
//       <p>Code-----</p>
//       <MyComponent/>
//     </ErrorBoundary>
//</div>
//   )
// }



//-------------------------------------

//no installation required
// import React from "react";
// import { lazy, Suspense } from "react";

// const LazyComponent = lazy(() => import("./LazyComponent"));

// export default function App() {
//   return <div>
//     <Suspense  fallback={<div>Loading...</div>}>
//       <LazyComponent/>
//     </Suspense>
//   </div>;
// }



//---------------------------------------
//npm install styled-components
// import React from "react";
// import styled from 'styled-components';

//create a style component-------

// const Button = styled.button

// `background-color : #fff;
// color : #02311;
// font-size:5px;
// font-weight:20px;
// `

// const StyledParagraph = styled.p

// `background-color : #fff;
// color : #02311;
// font-size:5px;
// font-weight:20px;
// `

// export default function App(){
//   return(
//     <div>
//       <Button>click me<Button>
//         <StyleParagraph> this is the only page.</StyleParagraph>
//     </div>
//   )
// }


//------------------------------------
//fetching apis
+
//  const fetchApiData = async () => {
//     try {
//       const response = await fetch("https://fakestoreapi.com/users");
//       if (!response.ok) {
//         throw new Error("response is not good");
//       }
//       const responseData = await response.json();
//       setData(responseData);
//     } catch (err) {
//       console.error(err);
//     }
//   };


// //----------
// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [data, setData] = useState([]);
//   const [errorMessage, setErrorMessage] = useState(null);
//   console.log(data);

//   const fetchApisData = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       if (!response.ok) {
//         throw new Error("response is not ok.");
//       }
//       const responseData = await response.json();
//       setData(responseData);
//     } catch (error) {
//       setErrorMessage(error);
//     }
//   };

//   useEffect(() => {
//     fetchApisData();
//   }, []);

//   return (
//     <>
//       <h1>stop watch---------</h1>;
//       {data.length ? (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       ) : errorMessage ? (
//         <p style={{ color: "red" }}>{errorMessage.message}</p>
//       ) : (
//         <p>loading....</p>
//       )}
//     </>
//   );
// }


//===============
// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [data, setData] = useState("");

//   const fetchApisData = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       if (!response.ok) {
//         throw new Error("response is not ok.");
//       }
//       const responseData = await response.json();
//       setData(responseData);
//     } catch (error) {
//       setErrorMessage(error);
//     }
//   };

//   useEffect(() => {
//     fetchApisData();
//   }, []);

//   return (
//     <>
//       <h1>stop watch---------</h1>;
//       {data.length ? data[0].name :'not found'}
//     </>
//   );
// }





///-----   EXECEPTION HANDLING CODE ------------------------
// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);//can't use useState([])
//   console.log("00--", data); //during rendering two times call/show

//   const FetchApiData = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       if (!response.ok) {
//         throw new Error("response is not good");
//       }
//       const responseData = await response.json();
//       setData(responseData);
//       console.log(responseData);
//     } catch (err) {
//       console.error("api response failed");
//       setError(err);
//     }
//   };

//   useEffect(() => {
//     FetchApiData();
//   }, []);
  //- 2 times on mount 
  // -2 times on willunmount
  // total display 4 times data

//   return (
//     <div>

//  <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>

//       <h1>Hello CodeSandbox </h1>

//       {/* JSX syntax error in: {data.length ? {data.name} : "not found"} */}

//       {/* Problems:
// data is an array, not an object. You can't do data.name.
// You're using {} inside {} → invalid in JSX.
// You're not showing any valid content from the data. */}

//       <p>Hello CodeSandbox {data.length ? data[1].name : "not found"}</p>
//     </div>
//   );
// }

//----FINAL RESULT----
// "00--" []
// "00--" []
// "00--" [{INSIDE DATA}]
// "00--" [{INSIDE DATA}]
// "00--" [{INSIDE DATA}]
// "00--" [{INSIDE DATA}]

//NOTES--------------------
// Key Point
// Strict Mode: In React 18 development, React deliberately invokes mount, unmount, and remount logic twice for each newly mounted component 
// (effects run twice, cleanups twice),  to catch potential problems, but keeps state as if the user just tabbed away and back.

// Production Mode: This does NOT happen—only one mount/cycle, so only one set of logs per normal change.

// So, React 18 Strict Mode does simulate two mounts/unmounts in development, causing your logs and renders to appear multiple times. 
// This does not happen in production. Your understanding is correct.



//----NODE EXECEPTION HANDLING----

// const mongoose = require('mongoose');
// async function ConnectDb(){
//     try{
//           await mongoose.connet('url')
//           console.log("DB is successfully connected")
//     }catch(error){
//         console.log.error("DB is failed" ,error.message)
//     }
//   }



//-------------------------------------

//-------INTERVIEW QUESTION------------
// const  ReturnAllPromise = async () =>{
//     try{
//         const apis = [p, p2, p3 ]
   
//    const apisCall = apis.map((url)=> fetch(url).then(res => res.json())) 
//    const [user,api,todo] = await Promise.all(apisCall)
   
//    console.log('api user result', user)
//      console.log('api api result', api)
//        console.log('api todo result', todo)
   
//     }catch(error){
//         console.error("apis rejected", error)
//     }
// }
// ReturnAllPromise() 



//=========================
// ✅ Problem:
// Promise.all() fails entirely if even one promise rejects.

// So if one URL fails, all your state values stay empty, and no partial data is shown.

// ✅ Solution:
// To prevent complete failure, use Promise.allSettled() instead of Promise.all()

//------INTERVIEW IMPORTANT---------//
// import React, { useEffect } from "react";
// import "./styles.css";

// export default function App() {
//   const fetchApiData = async () => {
//     try {
//       const api = [
//         "https://jsonplaceholder.typicode.com/users",
//         "https://jsonplaceholder.typicode.com/todos",
//         "https://jsonplaceholder.typicode.com/albums",
//       ];
//       const apiCalls = api.map((url) => fetch(url).then((res) => res.json()));
//       const [user, todo, list] = await Promise.allSettled(apiCalls);
//        const [user, todo, list] = await Promise.all(apiCalls);
//       console.log("00-", user);
//       console.log("111-", todo);
//       console.log("22-", list);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     fetchApiData();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }



//----------Promise====

//Question --Write simple promise function

// function demoPromise() {
//   return new Promise((resolve, reject) => {
//     console.log("Promise is pending...");
// //const success = true;//fulfilled
// const success = false;//rejected
//     setTimeout(() => {
//       if (success) {
//         resolve("Promise fulfilled!");
//       } else {
//         reject("Promise rejected!");
//       }
//     }, 2000);
//   });
// }

// // Usage for fulfilled:
// demoPromise()
//   .then(result => console.log(result))   // Logs: Promise fulfilled!
//   .catch(error => console.error(error));


// QUESTION -----

// function callBackFunction(callback) {
//   setTimeout(() => {
//     const data = { name: 'Sanju', age: 34 };
//     callback(data);
//   }, 2000);
// }

// callBackFunction((receivedData) => {
//   console.log("Callback Data:", receivedData);
// });



// QUESTION -----

// WRITE CALLBACK HELL CODE
// function step1(callback) {
//     setTimeout(() => {
//       console.log("Step 1 completed");
//       callback();
//     }, 1000);
//   }
  
//   function step2(callback) {
//     setTimeout(() => {
//       console.log("Step 2 completed");
//       callback();
//     }, 1000);
//   }
  
//   function step3(callback) {
//     setTimeout(() => {
//       console.log("Step 3 completed");
//       callback();
//     }, 1000);
//   }
  
//   function step4(callback) {
//     setTimeout(() => {
//       console.log("Step 4 completed");
//       callback();
//     }, 1000);
//   }
  
//   Calling each function in a nested way (Callback Hell)
//   step1(() => {
//     step2(() => {
//       step3(() => {
//         step4(() => {
//           console.log("All steps completed");
//         });
//       });
//     });
//   });

// RESULT:===========
// Step 1 completed
//  Step 2 completed
//  Step 3 completed
//  Step 4 completed
//  All steps completedmpiler

// console.log("Try programiz.pro");




//--EXAMPLE--------------

// function passByValue(a){
//     a=8;
//     console.log("inside",a)//8
// }

// let num = 10;
// passByValue(num)
//   console.log("outside",num)//10


// function passByReference(obj) {
//   obj.name = "Updated"; // modifies the original object
//   console.log("Inside function:", obj.name);//Updated
// }

// let user = { name: "Sanju" };
// passByReference(user);

// console.log("Outside function:", user.name);//Updated



//--------
// function safeUpdate(obj) {
//   let copy = { ...obj }; // clone the object
//   copy.name = "Updated";
//   console.log("Inside:", copy.name); // Updated
// }

// let user = { name: "Sanju" };
// safeUpdate(user);
// console.log("Outside:", user.name); // still "Sanju"



//QUESTION -----


//Controlled Component:

// import { useState } from 'react';

// function ControlledInput() {
//   const [value, setValue] = useState('');

//   return (
//     <input 
//       type="text" 
//       value={value} 
//       onChange={(e) => setValue(e.target.value)} 
//     />
//   );
// }
// Input is controlled by React state (value).

// Updates are handled via onChange.



// Uncontrolled Component:

// import { TextField, Button } from '@mui/material';
// import { useRef } from 'react';

// function MuiUncontrolledInput() {
//   const inputRef = useRef();

//   const handleSubmit = () => {
//     console.log('Value:', inputRef.current.value);
//   };

//   return (
//     <>
//       <TextField inputRef={inputRef} label="Your Name" />
//       <Button onClick={handleSubmit}>Submit</Button>
//     </>
//   );
// }

//--QUESTION
//--Event Delegation

// import React from "react";

// export default function DelegationDemo() {
//   const items = ["Apple", "Banana", "Cherry"];

//   // Handle all clicks on <ul> and check if target was an <li>
//   function handleListClick(event) {
//     if (event.target.tagName === "LI") {
//       alert(`You clicked: ${event.target.textContent}`);
//       event.stopPropagation(); // Prevent event from bubbling further
//     }
//   }

//   return (
//     <div>
//       <h1>Event  Delegation</h1>
//       <ul onClick={handleListClick}>
//         {items.map((fruit) => (
//           <li key={fruit}>{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }



//-QUESTION PRACTICAL Diffrence between useEffect and useLayoutEffect

// import React, { useState, useLayoutEffect, useEffect } from "react";

// export default function UseEffectFlicker() {
//   const [text, setText] = useState("code improve.................");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {// visual glitches happens here/ flicker
//     console.log("useEffect code");
//     if (!loading) {
//       setText("useEffect improved");
//     } else {
//       setText("useEffect welcome with else");
//     }
//   });

//   useLayoutEffect(() => {
//     console.log("useLayoutEffect code");
//     if (!loading) {
//       setText("useLayoutEffect improved");
//     } else {
//       setText("useLayoutEffect welcome with else");
//     }
//   });

//   // console.log("synchronouse called");

//   return (
//     <div>
//       <h1>useEffect flicker example</h1>
//       <p>Measured width: {text}</p>
//     </div>
//   );
// }

