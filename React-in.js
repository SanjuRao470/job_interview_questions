//------------------DURING INTERVIEW FACED THE PROBLEM----------------------------
// Interviewer: How do you determine which components should update in a React application?

// You: To determine and control which components should update in a React application, I use several strategies:

// React DevTools: I use this tool to inspect and profile component re-renders, which helps identify unnecessary updates.
// shouldComponentUpdate: For class components, I implement the shouldComponentUpdate lifecycle method to control updates based on state and prop changes.
// React.memo: For functional components, I use React.memo to prevent re-renders when props haven't changed.
// useMemo and useCallback: I optimize expensive calculations and callbacks within functional components using useMemo and useCallback.
// PureComponent: For class components, I extend React.PureComponent to enable shallow comparison of props and state, reducing unnecessary re-renders.



//in React everthing treated as component that component contain state and if state change component will render than dom has created.

//React has been complete cycle in among -----//Hooks---//Redux----//Dom------!

//------HOOKS-----



//Hooks:  Hook is a feature which react provide us 
// hooks they  are re-useable functions.usen in FC and some of the hooks are alternative of or can mimic the lifecycle methods.
//why we use Hooks?
//Beacuse it provide a very easily understandable and much cleaner way of writing code.


//-----THEY ARE HOOKS---

// useState
// useEffect
//useLayoutEffect
// useCallback
// useMemo
// (HOC)React.Memo/forwardRef  // used to wrap React Function components to prevent re-renderings //  Memoize entire component.
// useReducer
// useContext
// useRef
// forwardRef
// createRef
// customHook(useFetch)
// useActionState
// useFormStatus 
// useOptimistic
//useSelector
//diffrence b/w useDispatch and useReducer
//diffrence b/w useContext and useReducer

// useSelector is a React-Redux hook used to read (or select)  // access data from the Redux store in a functional component.
// useReducer is a React hook for local state management;
// useDispatch is a function provided by Redux to dispatch actions to a global store.



//============ useState ======
//useState Hook allows us to track state in a function component.
// useState accepts an initial state and returns two values:

// The current state.
// A function that updates the state.

//const [state, setState] = useState(initialState);

////--INTERVIEW ASKED QUESTION
//--1. Can we swap state like this: const [setState, state]?

// ✅ Concept:
// In React, useState returns [state, setState], not [setState, state].
//  The first value is the current state, the second is the updater function.

// ✅ Ideal answer:
// "No, this is incorrect. useState returns [state, setState]. 
// Reversing the order would make your state updates and reads fail or behave unexpectedly. and type error"

/////----How setState works in batching and updating

////  What does “batching” mean in React?
// Batching means React groups multiple state updates together and performs a single re-render instead of one for each update.

//which follow two form 1-regular form and 2-functional form
//regular form  may take stale state value with cause re-render but funcyional form always take fresh value
// setState(value+1) it increment by 1 and  setState(prev => prev + 1) it incremented by 2


//============ useEffect ======
//useEffect Hook allows you to perform side effects in your components.
// e.g fetching data, directly updating the DOM, and timers,subscriptions.
//useEffect accepts two arguments. The second argument is optional.

//useEffect(<function>, <dependency>)


//IMPORTANT NOTES-------
//Can We Call These "Side Effects"?
// Yes! In React, side effects refer to anything that affects something outside of the component’s local 
// execution—like modifying the DOM, fetching data, or setting timers. Since React’s rendering should remain pure and predictable, 
// side effects are handled inside useEffect instead of directly in the component body.


//example---
// Data fetching

// DOM manipulation

// Subscriptions

// Timers

//====OR
//  In React, useEffect lets you perform side effects —
//   which are operations that interact with the outside world or something outside the component's render process.



///QUESTION FORMATION DESIGN-----

// - during render (when they are inside the body of the component not inside the useEffect)
// - on mount
// -on update
//  on WillUnMount





// three cases---------------appear/update/disappear

// ✅ 2. Syntax Examples for CDM, CDU, CDUM in useEffect

// 🔵 A. componentDidMount (CDM)
// ✅ Runs only once on mount
// ❌ No cleanup

// useEffect(() => {
//   console.log("componentDidMount");
// }, []);


// 🟡 B. componentDidUpdate (CDU)
// ✅ Runs on mount and whenever value changes
// ❌ No cleanup

// useEffect(() => {
//   console.log("componentDidUpdate");
// }, [value]);


// 🔴 C. componentDidUpdate + componentWillUnmount (CDUM)
// ✅ Runs on mount
// ✅ Runs on every dependency change (with cleanup)
// ✅ Cleanup runs on unmount or before re-run

// useEffect(() => {
//   console.log("effect runs");

//   return () => {
//     console.log("cleanup runs");
//   };
// }, [value]);


//D. componentDidMount + componentWillUnmount (CDUM)
// ✅ Bonus: componentWillUnmount only
// ✅ Just the cleanup on unmount

// useEffect(() => {
    // console.log("componentDidMount");
//   return () => {
//     console.log("componentWillUnmount");
//   };
// }, []);

//E.
// useEffect(() => {
    // console.log("runs at every render");
// });


//  1-useEffect(() => {}, []) 

//When it runs: Only once after the component is mounted (rendered the first time).//after initial render
//The empty dependency array ([]) ensures it runs only once (like componentDidMount).  
//Example use case: Fetching data when a component first loads.    



// 2-useEffect(()=>{},[props/state])//useEffect(() => {}, [dep])
// When it runs: Every time the component updates, i.e., when state or props change.
//📦 //Used for: Running logic when specific data changes.



  //3-useEffect(() => { return () => {} }, [])   

// When it runs: Right before the component is removed from the DOM.
//📦 Used for: Cleanup — removing listeners, timers, closing WebSocket connections.

//SPECIAL CASE
// ✅ 1. useEffect(() => {})
// 🔁 Runs after every render — including:


//-----IMPORTANT QUESTION 

// CDU AND CDUM BOTH CASES useEffect RUNS AT MOUNT PHASE
// BUT CEANUP FUNCTION RUNS ONLY WHEN VALUE OF DEPENDENCY HAVE CHANGED AND
// THAN useEffect CALL GAIN TO SET NEW VALUE
// CLEANUP FUNCTION CALL ONE LAST TIME TO WHEN COMPONENT IS REOMVED FROM  DOM


//--INTERVIEW ASKED QUESTION
//-------Notes:

//in this case-----
// useEffect(() => {
//   console.log("line2")
// }, [value]) 

// How it works step-by-step:
// On first mount:

// Runs after the component is rendered, prints "line2".

// Whenever value changes:

//   Effect body  runs again, prints "line2".

// On unmount:

// Nothing special happens since there's no cleanup function.


//in this case----
// useEffect(() => {
//   console.log("line2")

//   return () => {
//     console.log("line3")
//   }
// }, [value])

//--interview question : is this case useEffect runs when component is mount? 
// answer is yes

// How it works step-by-step:
// On first mount (initial render):

// React renders the component.

// After rendering, this effect runs because it always runs on mount if the dependency list is non-empty.

// So console.log("line2") runs.

// The cleanup function (line3) does NOT run yet because there is nothing to clean up on first mount.

// Whenever value changes:

// Before running this effect AGAIN for the new value, React first runs the cleanup function from the previous effect (prints "line3").

// Then it runs the effect body again (prints "line2").

// On unmount:

// React runs the cleanup function one last time (prints "line3").

// //
// on mount   → line2
// on update  → line3, line2
// on unmount → line3




//--INTERVIEW ASKED QUESTION

//=====EXAMPLE OF CWU
//If using a WebSocket in a component, you close the socket in the cleanup to avoid leaks when the component unmounts:
// useEffect(() => {
//   const socket = new WebSocket('wss://example.com');
  
//   socket.onclose = () => {
//     console.log('Server disconnected');
//     // Handle reconnect or update state here
//   };

//   return () => {
//     socket.close(); // Cleanup on unmount
//     console.log('Component unmounted and socket closed');
//   };
// }, []);
// The cleanup function (return () => { ... }) inside useEffect runs just before the component is unmounted (removed from the UI).

// This is where you remove side effects like timers, event listeners, or subscriptions to avoid memory leaks.

// Key point:
// React calls the cleanup function when the component is unmounted, 




//mount means:(appears on the screen)
//() => { ... } is the effect body.

//NOTE:
//  Real-world analogy:
// Think of a popup:

// It appears → mounting  //When a component is rendered and added to the DOM for the first time.

// It disappears → unmounting  //When a component is removed from the DOM.

// //Example: You navigate away or conditionally hid



 //OUTPUT QUESTION-----
//  ...react component
 
// Const [value , setValue ] = useState(0)
 
// console.log("line1")
 
// UseEffect(()=>{
 
 
// console.log("line2")
 
// return()=>{
// console.log("line3")
// }
 
 
// },[value])
 
// console.log("line4")

// console.log("line1")
// console.log("line4")
// console.log("line2")
// console.log("line3")

///=========ANSWER  
// line1//during render
// line4
// line2//mount
// line1
// line4
// line3
// line2//update
// line3//WillUnmount

// line1
// line4
//// Why?
// console.log("line1") and console.log("line4") run during every render, because they're in the body of the component.

// line2
// useEFFect runs after component is mounted

//final answer will be:
//line1
//line4
//line2


// -- value changes --

// line3    // react call cleanup function to remove side effect from previous effect
// line2    // effect after new value set

// -- value changes again or unmount --


//On unmount:

//React runs the cleanup function one last time (prints "line3").
// line3    // cleanup from previous effect or unmount cleanup

//----IMportant NOtes-----
//so we can say unmounting does not depend on dependecy changes?
//Yes, you can say component unmounting does not depend on dependency changes.

// Here’s the clear distinction:

// Unmounting happens only when React removes the component from the UI (DOM). This is a result of your app’s logic, such as navigating away from a page, conditional rendering removing that component, or the whole app unmounting the component.

// Dependency changes in useEffect cause React to:

// Run the cleanup function of the previous effect.

// Then run the effect function again with updated dependencies.

// But this is not the same as unmounting. The component still stays mounted; it just updates or re-runs the effect.




// ///QUESTIONS-------

// Case 1: With dependency → [value]

// useEffect(() => {
//   console.log("line2");

//   return () => {
//     console.log("line3");
//   };
// }, [value]);

// Correct Behavior

// On Mount: effect runs → line2

// On Update (when value changes):

// Cleanup from previous effect → line3

// New effect runs → line2

// On Component Will Unmount (CWU): cleanup runs → line3

// ✅ Correct sequence:

// on mount   → line2
// on update  → line3, line2
// on unmount → line3


// 👉 Your answer here is ✅ correct.




// Case 2: With empty dependency → []

// useEffect(() => {
//   console.log("line2");

//   return () => {
//     console.log("line3");
//   };
// }, []);

// Correct Behavior

// On Mount: effect runs once → line2

// On Update: does not run again (because no dependency).

// On Unmount: cleanup runs → line3

// ✅ Correct sequence:

// on mount   → line2
// on unmount → line3


///----QUESTION-----

// console.log("line1")

// useEffect(() => {
//   console.log("line2")

//   return () => {
//     console.log("line3")
//   }
// }, [])


// Execution Flow

// During render (synchronous in function body):
// → console.log("line1") ✅ prints line1

// After first paint (mount, because [] dependency runs only once):
// → console.log("line2") ✅ prints line2

// On component unmount (cleanup of the effect):
// → console.log("line3") ✅ prints line3

// ✅ Correct Sequence
// during render → line1
// on mount      → line2
// on unmount    → line3


//WHAT WILL BE ANSWER---
//line1 print immediately during render
//line2 --- when component is mounted
//line3  ---The cleanup function (which logs "line3") runs only when the component actually unmounts — i.e., when React removes this component from the UI.

//Does the cleanup function run when useEffect(() => { ... }, []) is used?
// ✅ What happens:
// console.log("line1"): Runs every render.

// console.log("line2"): Runs once on mount.

// console.log("line3"): Cleanup runs only on unmount — ✅ Yes, it does run, but only once, during unmount.


//----------------------------///
// import React, { useEffect, useState } from 'react';

// const MyComponent = () => {
//   const [value, setValue] = useState(0);

//   console.log("line1");

//   useEffect(() => {
//     console.log("line2");

//     return () => {
//       console.log("line3");
//     };
//   }, [value]);

//   console.log("line4");

//   return <div>{value}</div>;
// };


//---EXAMPLE=====

// import React, { useEffect, useState } from "react";

// function DemoComponent({ count }) {
//   useEffect(() => {
//     // componentDidMount
//     console.log("Mounted");

//     return () => {
//       // componentWillUnmount
//       console.log("Unmounting...");
//     };
//   }, []);

//   useEffect(() => {
//     // componentDidUpdate for count
//     console.log("Count updated:", count);
//   }, [count]);

//   return <div>Count: {count}</div>;
// }



///------------------//useLayoutEffect// --------

// What is useLayoutEffect?

// useLayoutEffect runs synchronously, immediately after DOM updates but before the browser paints.

// It is blocking → React waits for it to finish before updating the screen.

// Good for DOM measurements and synchronous mutations (like measuring element sizes/positions, scroll adjustments, animations).

// useLayoutEffect(() => {
//   console.log("useLayoutEffect runs before paint");
//   const height = document.getElementById("box").offsetHeight;
//   console.log("Box height:", height);
// }, []);




// what is the memoization?-------

// it is an optimization techanique that can be used to reduce time consuming calculation by saving
// previous input to something call cache and returning the result from it.

//How to Implement memoization in React
//both FC abd CC take the benefit from memoization.React offers HOCs and hooks to implement this feature. 
//by implementing HOCs call React.memo and Hooks like use.Memo and use.Callback in FC. and We can use React.PureComponent within class components.


// There are key differences:
//they are optimization tool---

//----which means when component doesn't received any props.
// React.memo: Memoizes a whole component to prevent unnecessary re-renders when the props haven't changed. 


// --when component accept props and state--
// useMemo: Memoizes the result of a computation to avoid re-calculating it on every render.

// useCallback: Memoizes a callback function to prevent it from being recreated on every render,
//  which is useful for passing stable references to child components.

//-------------------IMPORTANT------------------------
// Nested Child Re-render Prevention Strategy:

// To prevent re-renders in nested children:

// Wrap child components with React.memo

// Use useCallback for functions passed as props

// Use useMemo for derived data passed as props


//------------------------#####################-------------------
// 📌 Who Accepts Props vs. Who Doesn't?
// React.memo-wrapped components still accept props. It just skips re-rendering if the props haven't changed.

// useMemo/useCallback  don’t accept or reject props; they support memoization of values/functions passed as props to child component.


//============ useCallback ======
//The useMemo and useCallback Hooks are similar. 

//useCallback Hook returns a memoized callback function.              (just Think of memoization as caching a value so that it does not need to be recalculated.)
//The useCallback Hook only runs when one of its dependencies update.

// const memoizedCallback = useCallback(() => {
//     // callback
//   }, [dependencies]);
  


//============ useMemo ======
//useMemo Hook returns a memoized value.            (just Think of memoization as caching a value so that it does not need to be recalculated.)
//The useCallback Hook only runs when one of its dependencies update.
 

// const memoizedValue = useMemo(() => {
//     // computation
//     return value;
//   }, [dependencies]);


//============ React.memo ============
//const MemoizedComponent = React.memo(Component);

// //const Counter = React.memo(({ value }) => {
//     console.log('Counter component re-rendered');
//     return <div>Counter: {value}</div>;
//   });


//============ useReducer ======
//useReducer Hook is similar to the useState Hook.
//keeping track of multiple pieces of state that rely on complex logic within a single component

// The useReducer Hook accepts two arguments.

// useReducer(<reducer>, <initialState>)

//The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.

//The useReducer Hook returns the current state and a dispatch method.

//const [state, dispatch] = useReducer(reducer, initialState);


//Notes------
// One-liner to Remember:
// 🔁 useState is for simple state updates, useReducer is for structured, complex logic with multiple actions.
//example like a to-do list or shopping cart using useReducer!



// Why Is useReducer Different from useState?

// Feature	          useState	                                                       useReducer
// Simplicity	Good for simple state (like a number or string)          	Good for complex state logic
// Structure	No need to define a reducer function	                        Needs a reducer function
// Updates	You set the new state directly	                                 You dispatch actions
// Best for	Simple forms, toggles, flags	                             State with many conditions or updates like to do list, shopping cart



//============ useContext ============
//useContext is a way to manage or sharing state across multiple components without passing props down manually.

//const value = useContext(Context); or we can say const user = useContext(UserContext)

//snecrio where we use--------
//State should be held by the highest parent component in the stack that requires access to the state.
//we have many nested components. The component at the top and bottom of the stack need access to the state.

//To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling"  


//useReducer: Best for managing complex state logic within a single component.
//useContext: Best for sharing state across multiple components without passing props down manually.


//============ useRef ============
// why we use ?  we want to let React handle all DOM manipulation.|| accessing dom elements.

//useRef Hook allows you to persist values between renders. OR useRef creates a mutable reference that persists across renders.
//It can be used to store a mutable (being changed) value that does not cause a re-render when updated.
//It can be used to access a DOM element directly.
//useRef Hook can also be used to keep track of previous state values.

// Use Cases:
// Access DOM elements.
// Store previous values.
// Avoid re-renders (like a global variable).


//----Practical Use Case=-----------
// “In my e-commerce project, I used useRef for the product image slider (carousel) so I could directly control the scrolling smoothly.”

// “I also used it to store a WebSocket connection, so it stays the same across re-renders and doesn’t reconnect every time.”


//useRef() only returns one item. It returns an Object called current.
//const count = {current: 0}. We can access the count by using count.current.

//const ref = useRef(initialValue);


// clear and short difference:

// ✅ ref (in JSX)
// It's an attribute used to attach a reference to a DOM element or component.

// You usually use it like this:


// <input ref={inputRef} />
// ✅ useRef() (a React hook)
// It's a hook used to create a reference that persists across renders.

// You call it like:


// const inputRef = useRef(null);
// 📌 When to use them together:
// You create a ref using useRef()

// Then assign it using the ref attribute in JSX


// const inputRef = useRef(null);

// return <input ref={inputRef} />;



//Purpose:

// useRef: Used to create a reference to a DOM element or a value that persists across renders. only returns one item that is an Object called current.
// forwardRef is used to forward a ref from a parent component to a child component’s DOM node. 
// It allows the parent to directly access the child’s internal DOM—
// //for example, focusing an input element from the parent."


// forwardRef is not a hook. It's a higher-order function that lets you pass refs to child components.

// React components don’t accept refs by default. forwardRef allows a parent to access child DOM or component refs.

// useRef: const ref = useRef(initialValue);
// forwardRef: const Component = forwardRef((props, ref) => {...});


// In summary, useRef is for creating references within a component,
//  while forwardRef is for passing references from parent to child components.


//question : is forwardRef  hook?
// No,forwardRef is not a hook. It is a higher-order component (HOC)  or utility function in React.


//============ Custom Hook (useFetch)  ============

//where it need to use?
//Suppose you have a piece of logic to fetch data from an API that you want to use in multiple components.

// Benefits in this Example:

// The useFetch custom hook handles(encapsulates) the data fetching logic.
// Any component can use useFetch to get data from an API, making the code reusable.
// Components stay clean and focused on displaying data, while the fetching logic is kept separate.


// What is the custom hook?
//Definition: A custom hook in React is a function that starts with "use" and allows you
// to reuse stateful logic across multiple components.

//Custom Hook for Making API Requests:

// import { useState, useEffect } from 'react';

// function useFetch(url) {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//useEffect(() => {
// const abortController = new AbortController(); // to create new instance associated with signal , this signal used to cancel ongoing request
// const signal = abortController.signal;

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url , { signal });
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const responseData = await response.json();
//                 setData(responseData);
//             } catch (error) {
//                 if (error.name !== 'AbortError') {
//                  setError(error.message);
//              }
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();

//         // Cleanup function (optional)
//         return () => {
//            // Cleanup function to cancel the fetch request
//         abortController.abort();
//         };

//     }, [url]); // Trigger useEffect when 'url' changes

//     return { data, loading, error };
// }

// export default useFetch;



// useActionState()
//const [state, action] = useActionState(actionFunction, initialState);


// Purpose: Manages the state of an async server action (loading, success, error).
// Use Case: Complex forms with custom error handling and multi-step submissions.

// useFormStatus()
//const { pending, data, method, action } = useFormStatus();


// Purpose: Tracks the submission status of a form (e.g., pending state).
// Use Case: Disable buttons or show loading indicators during form submission.

// useOptimistic()
//const [optimisticState, updateOptimistic] = useOptimistic(initialState, updaterFunction);


// Purpose: Provides instant UI updates while waiting for a server action.
// Use Case: Real-time interactions like counters, likes, or optimistic updates.


//difference b/w controlled and uncontrolled components
// Controlled Component: A component where form data is handled by React state. Input value is controlled via useState or this.state.

// Uncontrolled Component: A component where form data is handled by the DOM. Accessed using ref.



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
//"In MUI, I used inputRef with TextField to directly access the value, making it an uncontrolled component."





//------REDUX-----


//------DOM-----//Recociliation//React Fiber//diffing//batches updates

//DOM: virtual representation of real dom.
//why we need to use the VDOM?
//Because we wants to makes the application's performance faster.



// Flux: A unidirectional data flow architecture for managing state in React application.
// Event: A user interaction in React that triggers a function or state update.(like clicks, key presses, etc.) 
//OR=== a signal in React, as it indicates a user interaction or action that triggers a function or state change.




// ------ ErrorBoundry------------
