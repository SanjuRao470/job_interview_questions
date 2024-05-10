//question

// const obj = {
//     a: { b: "jitendra" },
//     c: { d: "Vishwakarma" },
//     e: "address"
// };

// function flattenObject(obj) {
//     const flattened = {};  //step-1

//     // Iterate over each key in the original object
//     for (let key in obj) {  //step-2
//         if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//             // If the value is an object (and not an array), flatten its nested keys
//             const nestedObj = obj[key];    //{ b: "jitendra" } &  { d: "Vishwakarma" }
//             for (let nestedKey in nestedObj) {
//                 // Construct the flattened key by joining parent key and nested key with a dot
//                 const flattenedKey = `${key}.${nestedKey}`; //a.b &  c.d
//                 // Assign the value to the flattened key in the result object
//                 flattened[flattenedKey] = nestedObj[nestedKey]; /// jitendra & Vishwakarma or we can say {'a.b':'jitendra', 'c.d':'Vishwakarma' ,e:'address'}
//             }
//         } else {
//             // If the value is not an object (primitive value), simply assign it to the result object
//             flattened[key] = obj[key];  // {key:value} like this we get answer

//         }
//     }

//     return flattened;
// }

// const flattenedObj = flattenObject(obj);
// console.log(flattenedObj);

// //output
// {
//     'a.b': 'jitendra',
//     'c.d': 'Vishwakarma',
//     e: 'address'
// }



//EXAMPLE
//For example, the nested object:
// {
//     a: {
//         b: "jitendra"
//     },
//     c: {
//         d: "Vishwakarma"
//     },
//     e: "address"
// }


//Would be flattened to:
// {
//     'a.b': 'jitendra',
//     'c.d': 'Vishwakarma',
//     e: 'address'
// }



//QUESTION--2

// const obj ={
//     a:'12',
//     b : 23,
//     c:{
//         d: 56
//     },
//     e:{
//         f:'manisha'
//     },


// }
// //output {a:'12', b:23 , 'c.d':56, 'e.f':'manisha'}

// function flattenObject(obj){

//     const finalObj ={}

//     for(let key in obj){
//         if(typeof obj[key] === "object" && !Array.isArray(obj[key])){
//             const nestedObj = obj[key]

//             console.log("ppp",nestedObj)

//             for(let nestedkey in  nestedObj){
//                 const flattenedkey =`${key}.${nestedkey}`
//                  finalObj[flattenedkey] = nestedObj[nestedkey]
//             }
//         }else{
//             finalObj[key]= obj[key]
//         }

//     }
//     return finalObj
// }
// const  flattenobjresult =flattenObject(obj)
// console.log("yyyy=======",flattenobjresult)
// OUTPUT= yyyy======= { a: '12', b: 23, 'c.d': 56, 'e.f': 'manisha' }

//quetion

// const obj = {
//     a: '12',
//     b: 23,
//     c: {
//         d: 56,
//         n: {
//             k: 45
//         },
//         g: [1, 2]
//     },
//     e: {
//         f: 'manisha'
//     }
// };

//solution

// function flattenObject (obj){
//     const finalObj ={};
//     for(let key in obj){
//         if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
//             const nestedObj = obj[key];
//            for(let nestedKey in nestedObj){
//                flattenkey =`${key}.${nestedKey}`
//                finalObj[flattenkey] =nestedObj[nestedKey] 
//            }
//         }
//          else{
//                finalObj[key]=obj[key]
//            }
//     }
//     return finalObj;
// }
// const flatten =flattenObject(obj)
// console.log(flatten)

//SOLVING STEPS---
// 1- initializes an empty object finalObj that will hold the flattened key-value pairs of the input obj.
// 2-Iterate Through Keys of obj:
//3- Check Type of Value for Each Key
//4- Inside the loop, we check the type of value associated with the current key
//5- If the value associated with key is a nested object, we iterate through each property 
//(nestedKey) of this nested object (nestedObj).
//6- We construct a flattened key (flattenKey) by combining the key of the outer object with
// the nestedKey using dot notation ('.').
//7- We then assign the value of the nested property (nestedObj[nestedKey]) to the corresponding flattened key 
//(finalObj[flattenKey]).
// 8- Return the Flattened Object:


//output
// {
//     a: '12',
//     b: 23,
//     'c.d': 56,
//     'c.n': { k: 45 },
//     'c.g': [ 1, 2 ],
//     'e.f': 'manisha'
//   }


// Key Differences
// Independence: Shallow copy maintains references to nested objects or arrays, so changes to nested properties
//  affect both the shallow copy and the original object. Deep copy creates independent 
// copies of all nested objects or arrays, ensuring changes do not propagate back to the original object.

//deep copy
// const originalObj = {
//     a: 1,
//     b: { c: 2 }
// };

// const deepCopy = JSON.parse(JSON.stringify(originalObj));
// deepCopy.b.c = 10;

// console.log(originalObj); // { a: 1, b: { c: 2 } }
// console.log(deepCopy); // { a: 1, b: { c: 10 } }

//why we are using??
// The method JSON.parse(JSON.stringify(originalObj)) 
// is commonly used to create a deep copy of a JavaScript object 
// because it leverages the built-in JSON (JavaScript Object Notation)
//  serialization='{"a":1,"b":{"c":2}}' and deserialization ={ a: 1, b: { c: 10 } } functionality available in JavaScript.

//shellow copy
// const originalObj = {
//     a: 1,
//     b: { c: 2 }
// };

// const shallowCopy = { ...originalObj };
// shallowCopy.b.c = 10;

// console.log(originalObj); // { a: 1, b: { c: 10 } }
// console.log(shallowCopy); // { a: 1, b: { c: 10 } }



//TOPIC CUSTOM HOOK
// CUSTOM HHOK : TO RESUABLE COMPONENT'S LOGIN IN ACROSS COMPONENT
//EXAMPLE

// import { useState } from 'react';
// // Custom hook to manage a counter
// function useCounter(initialValue = 0) {
//     const [count, setCount] = useState(initialValue);

//     const increment = () => {
//         setCount(count + 1);
//     };

//     const decrement = () => {
//         setCount(count - 1);
//     };

//     return { count, increment, decrement };
// }
//export default useCounter




// // Usage of the custom hook in a component
// function CounterComponent() {
//     const { count, increment, decrement } = useCounter(0);

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     );
// }




// ANOTHER EXAMPLE
//Custom Hook for Making API Requests:

// import { useState, useEffect } from 'react';

// function useFetch(url) {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
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
// abortController.abort();
//         };
//     }, [url]); // Trigger useEffect when 'url' changes

//     return { data, loading, error };
// }

// export default useFetch;




//USED  useFetch IN THIS COMPONENT
// //import React from 'react';
// import useFetch from './useFetch';

// function MyComponent() {
//     const { data, loading, error } = useFetch('https://api.example.com/data');

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     return (
//         <div>
//             <h1>Data from API:</h1>
//             {data && (
//                 <ul>
//                     {data.map(item => (
//                         <li key={item.id}>{item.name}</li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

// export default MyComponent;


// TOPIC REDUX-TOOLKIT
// FOLDER STRUCTURE: 
//redux=> 
//=>providers  :<Provider store={store}></App></Provider>
// => slice:create reducer and action with createSlice
// => store : create redux store

//process step:
//1-npm install @reduxjs/toolkit
//2-Set Up Redux Store:
// src/app/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers'; // Import your root reducer

// const store = configureStore({
//   reducer: rootReducer,
//   // Optionally add additional middleware, enhancers, etc.
// });

// export default store;

//3- Define Reducers with createSlice:
// src/features/counterSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   value: 0,
// };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment(state){
//       state.value += 1;
//     },
//     decrement(state){
//       state.value -= 1;
//     },
//     // Other reducers can be defined here
//   },
// });

// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;

//4-Combine Reducers in Root Reducer:
// src/reducers/index.js
// import { combineReducers } from 'redux';
// import counterReducer from '../features/counterSlice';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   // Add other reducers here
// });

// export default rootReducer;


//5- 
{/* <Provider store={store}>
<App />
</Provider>, */}
//6-useSelector/useDispatch both are hook provided by reduxtookit
//useSelector: use to access the state data from redux store  // const counter = useSelector(state => state.counter);
//useDispatch : provide a reference call Dispatch fucnction that allow a react component to
// dispatch the action to update the redux state

// const dispatch = useDispatch();

//     const handleIncrement = () => {
//         dispatch(increment()); // Dispatching the 'increment' action
//     };
//     const handleDecrement = () => {
//         dispatch(decrement()); // Dispatching the 'decrement' action
//     };
//actions are plain object:{ type: 'INCREMENT' }









