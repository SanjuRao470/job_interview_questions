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
// CWU                           // CDM                                       // CDU

// or  this is also know as CWU
// useEffect(()=>{
//     return ()=>{} cleanup function used to reduce the memory leak
//     hook can return cleanup function as its return value
// })

//IMPORTANT NOTES-------
//Can We Call These "Side Effects"?
// Yes! In React, side effects refer to anything that affects something outside of the component’s local 
// execution—like modifying the DOM, fetching data, or setting timers. Since React’s rendering should remain pure and predictable, 
// side effects are handled inside useEffect instead of directly in the component body.

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

//useRef Hook allows you to persist values between renders.
//It can be used to store a mutable (being changed) value that does not cause a re-render when updated.
//It can be used to access a DOM element directly.
//useRef Hook can also be used to keep track of previous state values.

//useRef() only returns one item. It returns an Object called current.
//const count = {current: 0}. We can access the count by using count.current.

//const ref = useRef(initialValue);



//Purpose:

// useRef: Used to create a reference to a DOM element or a value that persists across renders. only returns one item that is an Object called current.
// forwardRef: Used to forward a ref from a parent component to a child component.

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














//------REDUX-----


//------DOM-----//Recociliation//React Fiber//diffing//batches updates

//DOM: virtual representation of real dom.
//why we need to use the VDOM?
//Because we wants to makes the application's performance faster.



// Flux: A unidirectional data flow architecture for managing state in React application.
// Event: A user interaction in React that triggers a function or state update.(like clicks, key presses, etc.) 
//OR=== a signal in React, as it indicates a user interaction or action that triggers a function or state change.