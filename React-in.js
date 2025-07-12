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



//Hooks: hooks are re-useable functions.
//why we use Hooks?
//Beacuse it provide a very easily understandable and much cleaner way of writing code.
// useState
// useEffect
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

//useSelector is a React-Redux hook used to read (or select)  / access data from the Redux store in a functional component.
// useReducer is a React hook for local state management;
// useDispatch is a function provided by Redux to dispatch actions to a global store.



//============ useState ======
//useState Hook allows us to track state in a function component.
// useState accepts an initial state and returns two values:

// The current state.
// A function that updates the state.

//const [state, setState] = useState(initialState);



//============ useEffect ======
//useEffect Hook allows you to perform side effects in your components.
// e.g fetching data, directly updating the DOM, and timers,subscriptions.
//useEffect accepts two arguments. The second argument is optional.

//useEffect(<function>, <dependency>)

// useEffect(() => {
//     // effect
//     return () => {
//       // cleanup ////   ---Some effects require cleanup to reduce memory leaks.
//     };
//   }, [dependencies]);


// three cases---------------
//1-useEffect(()=>{})          2-useEffect(()=>{},[])                    3-useEffect(()=>{},[props])
//runs on every render       //runs only on the first render           //in this case useEffect will only runs when any of the dependency have changed b/w the renders.
// CWU                          // CDM  // run only once mount                                     // CDU   ====it will first render and if also runs when any of the dependency have changed b/w the renders

// //useEffect runs side effects in functional components.
// It replaces:

// componentDidMount → useEffect(() => {}, [])

// componentDidUpdate → useEffect(() => {}, [deps])

// componentWillUnmount → return cleanup function.


//mount means:(appears on the screen)



// ✅ 1. useEffect(() => {})
// 🔁 Runs after every render — including:

// Initial mount ✅

// Any re-render caused by state/props change ✅

// ❗ No dependency array = run always



// ✅ 2. useEffect(() => {}, [])
// This version means:

// “Run this code only once — after the component first renders and appears on the screen (mounting).”

// 🔄 Step-by-step Timeline:
// ✅ Component mounts → React renders the JSX to the screen

// ✅ Browser paints the UI (i.e., user sees the page)

// ✅ Then useEffect runs — runs the function you gave it

// ✅ It will never run again, unless the component unmounts and mounts again



// ✅ 3. useEffect(() => {}, [props])
// ✅ Runs once on mount

// 🔁 Also runs again whenever props changes

//NOTE:
//  Real-world analogy:
// Think of a popup:

// It appears → mounting  //When a component is rendered and added to the DOM for the first time.

// It disappears → unmounting  //When a component is removed from the DOM.

// //Example: You navigate away or conditionally hid




// or  this is also know as CWU
// useEffect(()=>{
//     return ()=>{} cleanup function used to reduce the memory leak
//     hook can return cleanup function as its return value when props and state changed
// })

 //OUTPUT QUESTION-----
//  Yes, useEffect(() => {}, [props]) does run on the first render, and then again only when props changes.

// 🔹 Answer 1: Does useEffect run on the first render?
// ✅ Yes, it runs after the initial render, once the DOM is painted.

// 🔹 Answer 2: Does it only run when the dependency changes?
// ✅ Yes, for subsequent renders, it only runs if the value of props in the dependency array has changed (based on shallow comparison).


// "Subsequent renders" simply means:
// 🟢 Any render that happens after the initial (first) render of a React component.

// 🔁 Breakdown:
// ✅ First render: When the component loads for the first time.

// 🔁 Subsequent renders: When the component re-renders due to:

// a state change (useState)

// a prop change

// a context update

// or a parent component re-rendering

// 📌 Example:

// const [count, setCount] = useState(0);
// First render: count is 0.

// User clicks a button → setCount(1) is called.

// React re-renders → this is a subsequent render.



///---IMPORTANT NOTES--------/////
// is it exist in the case when do pass empty dependency array and when we does not pass empty dependecy array?

// Yes, the cleanup function exists in both cases — whether you pass an empty dependency array or not.

// 🔹 When [] is passed (runs once on mount):

// useEffect(() => {
//   // setup code
//   return () => {
//     // ✅ cleanup code
//   };
// }, []);
// ✅ Cleanup runs once on unmount.

// 🔸 When no dependency array is passed:

// useEffect(() => {
//   // setup code
//   return () => {
//     // ✅ cleanup code
//   };
// });
// ✅ Cleanup runs on every render before the next effect.

// 🔸 When dependency array is [deps]:

// useEffect(() => {
//   // setup code
//   return () => {
//     // ✅ cleanup code
//   };
// }, [someValue]);
// ✅ Cleanup runs before re-running effect when someValue changes and on unmount.

// Summary:
// ✅ Cleanup function works in all useEffect cases — it's just a matter of when it runs.




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
// Why?
// console.log("line1") and console.log("line4") run during every render, because they're in the body of the component.

// console.log("line2") runs after the render, inside useEffect.

// On subsequent renders (when value changes):

// React runs the cleanup function from the previous useEffect → console.log("line3").

// Then it runs the new effect again → console.log("line2").

// So the full timeline:
// Initial render:Expected Console Output on Initial Render:

// line1      // during render
// line4
// line2      // after render (useEffect)


// On value update:Now, when setValue is called and value changes:
//You’ll get this:

// line1      // render again
// line4
// line3      // cleanup from previous effect
// line2  

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


//IMPORTANT NOTES-------
//Can We Call These "Side Effects"?
// Yes! In React, side effects refer to anything that affects something outside of the component’s local 
// execution—like modifying the DOM, fetching data, or setting timers. Since React’s rendering should remain pure and predictable, 
// side effects are handled inside useEffect instead of directly in the component body.


//====OR
//  In React, useEffect lets you perform side effects —
//   which are operations that interact with the outside world or something outside the component's render process.




// what is the memoization?
// it is an optimization techanique that can be used to reduce time consuming calculation by saving
// previous input to something call cache and returning the result from it.

//How to Implement memoization in React
//both FC abd CC take the benefit from memoization.React offers HOCs and hooks to implement this feature. 
//by implementing HOCs call React.memo and Hooks like use.Memo and use.Callback in FC. and We can use React.PureComponent within class components.


// There are key differences:

// useMemo: Memoizes the result of a computation to avoid re-calculating it on every render.

// React.memo: Memoizes a whole component to prevent unnecessary re-renders when the props haven't changed.

// useCallback: Memoizes a callback function to prevent it from being recreated on every render,
//  which is useful for passing stable references to child components.


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
// forwardRef is used to forward a ref from a parent component to a child component’s DOM node. It allows the parent to directly access the child’s internal DOM—
// //for example, focusing an input element from the parent."

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
