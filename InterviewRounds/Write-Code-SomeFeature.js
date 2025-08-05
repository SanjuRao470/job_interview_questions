
// ✅ 🔹 Interview-Ready Answer (Functional Component, JS)
// 📌 Step-by-step:
// “Sure! I’ll write a reusable React button component that accepts props like label, onClick, variant, type, and disabled. This way, it can be used consistently across the app with different styles and behaviors.”

// ✅ Code: ReusableButton.jsx

// import React from "react";
// import "./ReusableButton.css"; // Optional for styling

// const ReusableButton = ({
//   label,
//   onClick,
//   type = "button",
//   variant = "primary",
//   disabled = false,
//   className = "",
//   children,
// }) => {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className={`btn ${variant} ${className}`}
//     >
//       {label || children}
//     </button>
//   );
// };

// export default ReusableButton;



// ✅ Sample CSS: ReusableButton.css

// .btn {
//   padding: 10px 20px;
//   font-size: 1rem;
//   border-radius: 6px;
//   border: none;
//   cursor: pointer;
//   transition: background 0.3s ease;
// }

// .btn.primary {
//   background-color: #007bff;
//   color: white;
// }

// .btn.secondary {
//   background-color: #6c757d;
//   color: white;
// }

// .btn:disabled {
//   background-color: #ccc;
//   cursor: not-allowed;
// }


// ✅ Usage Example


// import ReusableButton from "./ReusableButton";

// function App() {
//   return (
//     <div>
//       <ReusableButton
//         label="Save"
//         onClick={() => alert("Saved!")}
//         variant="primary"
//       />

//       <ReusableButton
//         variant="secondary"
//         onClick={() => alert("Cancelled")}
//       >
//         Cancel
//       </ReusableButton>

//       <ReusableButton
//         label="Delete"
//         onClick={() => alert("Deleted!")}
//         variant="danger"
//       />
//     </div>
//   );
// }

// 🧠 Bonus (what to say if asked why it's reusable):
// "It accepts props to customize the label, type, disabled state, 
// //click handler, and variant. That makes it flexible and usable for multiple button types across the application."



///QUESTION--------------------------------
//--Create form component  in react which have some input filed and label



//------------------------------------------


// npm install react-error-boundary
//  import {ErrorBoundary} from 'react';
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
//     <Suspense  fallback={{<div>Loading...</div>}}>
//       <LazyComponent/>
//     </Suspense>
//   </div>;
// }



//---------------------------------------
//npm install styled-components
// import React from "react";
// import styled from "styled-components";

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



///-----   EXECEPTION HANDLING CODE ------------------------
// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);//can't use useState([])
//   console.log("00--", data);

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
