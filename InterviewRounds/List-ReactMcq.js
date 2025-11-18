//QUESTION NO-1  how do you prevent this rendering---

//  const Parent = () => {
// const [msg, setMsg] = useState("Hi")
 
// return (
// <A msg={msg} setMsg={setMsg}/>
// <B/>
// <C/>
// )
// }
 
// const A = ({msg, setMsg}) => {
//   return (
// <>
//    <div>{msg}</div>
//    <button onClick= {() => setMsg("Bye")}> </button>
// </>
// )
// } 

//answer--
// 2. Optimizing Components B & C (Avoid Unnecessary Re-renders)
// In your code, Parent manages state, but B and C don’t depend on msg. If A triggers a re-render (e.g. on button click),
// the whole Parent re-renders by default. Here’s how to optimize:
// Wrap B and C in React.memo so they re-render only if their props change.
// Use useCallback for functions or avoid passing props unless necessary.

// const B = React.memo(() => { /*...*/ });
// const C = React.memo(() => { /*...*/ });



//Question -2 there all three lifecircle method
// now my quesion is, i only want to CDU(useEffect) on runs only when props will change not on mount phase
//-- how do you prevent this

//1- //--CDM 
// useEffect(()=>{

// },[])//on mount

//2- //--CDU
// useEffect(()=>{

// },[PROPS])//on update

//3- //--CWUM
// useEffect(()=>{

// },[])//on will unmount


// 3. useEffect: Only Run on Props Change (ComponentDidUpdate Equivalent)
// To mimic componentDidUpdate (run only when props change, never on mount):
// Use a useRef to track mount status and a dependency array of the prop(s) you watch.

// Example:

// const isFirstRender = useRef(true);

// useEffect(() => {
//   if (isFirstRender.current) {
//     isFirstRender.current = false; // skip on mount
//     return;
//   }
//   // code here runs ONLY when props/state change and NOT on initial mount
// }, [props.myProp]);
// This keeps your effect focused only on prop changes after mount.


//---only when props have change not on mount

// import React, { useState, useEffect, useRef } from "react";
// export default function App() {
//   const [myProp, setMyProp] = useState("initialValue");
//   const isInitialMount = useRef(true);

//   useEffect(() => {
//     if (isInitialMount.current) {
//       isInitialMount.current = false; // Skip this effect on initial mount
//     } else {
//       console.log("myProp changed to:", myProp); // Runs only on updates
//     }
//   }, [myProp]);

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={() => setMyProp("changedValue")}>Change myProp</button>
//       <p>Current myProp value: {myProp}</p>
//     </div>
//   );
// }


//---works  on both when on mount  and  props have change --

// import React, { useState, useEffect } from "react";
// export default function App() {
//   const [myProp, setMyProp] = useState("initialValue");

//   useEffect(() => {
//     console.log("myProp changed to:", myProp);
//     // This runs on mount (initial render) and whenever myProp changes
//   }, [myProp]);

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={() => setMyProp("changedValue")}>Change myProp</button>
//       <p>Current myProp value: {myProp}</p>
//     </div>
//   );
// }



//Question--how to update the name "Neeraj" to "Neeraj Sharma" in the Redux store with users 
// //like {id: 1, name: 'Neeraj'}, {id: 2, name: 'Vikas'}, a concise way to answer is:


// // Action
// const updateUserName = {
//   type: 'user/updateName',
//   payload: { id: 1, name: 'Neeraj Sharma' }
// };

// // Reducer fragment
// function usersReducer(state = [], action) {
//   switch(action.type) {
//     case 'user/updateName':
//       return state.map(user =>
//         user.id === action.payload.id
//           ? { ...user, name: action.payload.name }
//           : user
//       );
//     default:
//       return state;
//   }
// }

// Approach to update Redux store value:

// Dispatch an action with type like 'user/updateName' and payload containing the id and new name.
// In the reducer, use .map() on the users array to find the matching user by id.
// Return a new array with all users, replacing the matched user by a new object that spreads the old user but updates the name.
// This immutable update ensures the Redux store state is replaced with a fresh copy with the updated user name.
// The Redux store updates and connected components re-render with the new name.