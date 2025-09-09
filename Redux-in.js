 // Here’s a simple breakdown of the three concepts and how they differ from each other: 
 //---/// Context API      ///useContext Hook    //Props Drilling

//1. Context API
// What it is: A tool in React that allows you to create a "global" state that can be shared across any component without manually passing props.
// Role: The Context API creates a central place to store data (like a user object or theme) that can be accessed by any component in the app.
// Without Context API: You would need to pass props down manually through multiple components (this is called props drilling).

// 2. useContext Hook
// What it is: A hook in React used specifically in functional components to access the values stored in the Context API.
// Role: useContext makes it easy to retrieve the value provided by Context API without needing to write extra code.


// 3. Props Drilling
// What it is: The process of passing data through multiple components via props, even if only the deeply nested component needs it.
// Role: Props drilling is the "manual" way of sharing data from a parent component to a deeply nested child component.
// Without props drilling: You would use the Context API to share the data directly without having to pass it through each level manually.

 
//-------With Context API (Avoiding Props Drilling)

// import React, { createContext, useContext } from 'react';

// // Create a context
// const UserContext = createContext();

// function App() {
//   const user = "Sanju Rao";

//   return (
//     <UserContext.Provider value={user}>
//       <ParentComponent />
//     </UserContext.Provider>
//   );
// }

// function ParentComponent() {
//   return <ChildComponent />;
// }

// function ChildComponent() {
//   return <GrandChildComponent />;
// }

// function GrandChildComponent() {

//   // Use useContext to access the shared value
//   const user = useContext(UserContext);

//   return <div>User: {user}</div>;
// }

// export default App;



///----Without Context API (Props Drilling)

// import React from 'react';

// function App() {
//     const user = "Sanju Rao";
//     return (
//       <div>
//         <ParentComponent user={user} />
//       </div>
//     );
//   }
  
//   function ParentComponent({ user }) {
//     return <ChildComponent user={user} />;
//   }
  
//   function ChildComponent({ user }) {
//     return <GrandChildComponent user={user} />;
//   }
  
//   function GrandChildComponent({ user }) {
//     return <div>User: {user}</div>;
//   }
  
//   export default App;
  
 
 
 //Redux-Toolkit
//First create a folder call redux  which contains all files.
//redux this is the folder
// 1-Provider.js
// 2-Slice.js
// 3-store.js


//Provider.js
// "use client"
// import { store } from "./store";
// const { Provider } = require("react-redux");
// export function Providers({ children }) {
//     return <Provider store={store}>
//         {children}
//     </Provider>
// }

// import { createSlice, nanoid, current, createAsyncThunk } from '@reduxjs/toolkit'

// const initialState = {
//     userApiData: [],
//     users: JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : []
// }

//  export const fetchapiUser = createAsyncThunk('fetchapiUser', async () => {
//     const result = await fetch('https://jsonplaceholder.typicode.com/users');
//     return result.json();
// })

// //createSlice is called with an object containing three properties:
// //name  ://this is the name of the slice
// //initialState //define here initial state
// //reducers :An object containing reducer functions that define how the state can be updated.

// const Slice = createSlice({
//     name: "addUserSlice",  //this is the name of the slice
//     initialState,

//     reducers: {  // reduce contain an object in which we write reducer functions // addUser // removeUser //extraReducers
//         addUser: (state, action) => {
//             console.log("%%%%-----", action)
//             const data = {
//                 id: nanoid(),
//                 name: action.payload
//             }
//             state.users.push(data);
//             let userData = JSON.stringify((current(state.users)))
//             localStorage.setItem('users', userData)

//         },
//         removeUser: (state, action) => {
//             const data = state.users.filter((item) => {
//                 return item.id !== action.payload
//             })
//             state.users = data;
//             // let userData= JSON.stringify((current(state.users)))
//             // localStorage.removeItem('users',userData)
//         }
//     },
//     extraReducers: (builder) => {
      
//         builder.addCase(fetchapiUser.fulfilled, (state, action) => {
//             console.log("reducer", action)
//             state.isLoading = false,
//                 state.userApiData = action.payload
//         })

//     }
// })

// export const { addUser, removeUser } = Slice.actions   //This line exports the action creators generated by createSlice for each reducer. These action creators can be used to dispatch actions.
// export default Slice.reducer // This line exports the reducer function generated by createSlice. This reducer can be used to configure the Redux store.


//store.js
// import { configureStore } from '@reduxjs/toolkit'
// import reducer from "./slice"

// export const store = configureStore({
//   reducer
//   // reducer: {reducer},
// })



//useSelector/useDispatch both are hook provided by reduxtookit

//useSelector: use to access the state data from redux store  //const counter = useSelector(state => state.counter);
//useDispatch : provide a reference call Dispatch function that allow a react component to
// dispatch the action to update the redux state

// const dispatch = useDispatch();
//     const handleIncrement = () => {
//         dispatch(increment()); // Dispatching the 'increment' action
//     };
//     const handleDecrement = () => {
//         dispatch(decrement()); // Dispatching the 'decrement' action
//     };
//actions are plain object:{ type: 'INCREMENT' }


//INTERVIEW QUESTION
// HERE IS THE EXAMPLE OF UPDATING SALARY

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   salary: 50000, // Example initial salary
// }

// const salarySlice = createSlice({
//   name: 'salary',
//   initialState,

//   reducers: {
//     updateSalary: (state, action) => {
//       state.salary = action.payload
//     },`
//   },
// })

// // Action creators is A function that returns an action object and are generated for each case reducer function
// export const { updateSalary } = salarySlice.actions

// export default salarySlice.reducer


//Action :  it is plain javascript object that contain the type and payload

// {
//     type: 'salary/updateSalary', ///slice name/reducer function
//     payload: 60000
//   }
  
// type: 'salary/updateSalary' – This indicates that the action is meant to update the salary.
// payload: 60000 – This is the new salary value that the state should be updated with.

// salarySlice is a variable that holds the output of calling createSlice.
// This variable represents the Redux slice specific to managing salary-related state.





//EXAMPLE : ANOTHER EXAMPLE--

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

//  const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export default counterSlice.reducer

///--NOTES---------
// This matches the common Redux Toolkit pattern where you export the actions for dispatching, and the reducer for configuring the store.

// So yes — you export both the actions and the reducer from the slice.



// //Reducer Functions
// The code defines three reducer functions inside the counterSlice:

// increment
// decrement
// incrementByAmount
// Each of these reducer functions can be associated with an action.


//Example Actions
//Here’s what the action objects would look like when dispatched:

// {
//     type: 'counter/increment'
//   }

//   {
//     type: 'counter/decrement'
//   }

//   {
//     type: 'counter/incrementByAmount',
//     payload: 10 // Example payload
//   }

// in payload you have define the value  that what you have to updated vaule.

//counterSlice is a variable that holds the output of calling createSlice
  


// ===== WITH USING REDUX-------------


//------QUESTION------
// To write a reducer function in Redux to update an existing salary, you'll need to follow these steps:

// Define the action type.and created it.
// Write the reducer to handle the action.
// Update the salary based on the payload passed.
// To pass a new salary in Redux, Dispatching the action to update salary


//1. Define the Action Type
//const UPDATE_SALARY = 'UPDATE_SALARY';


//2. Action Creator (optional, but typically used)

// const updateSalary = (newSalary) => {
//     return {
//       type: UPDATE_SALARY,
//       payload: newSalary
//     };
//   };
  
//3. Write the Reducer

// const initialState = {
//     salary: 50000  // Example initial salary
//   };
  
//   const salaryReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case UPDATE_SALARY:
//         return {
//           ...state,
//           salary: action.payload  // Updating the salary with the new value
//         };
//       default:
//         return state;
//     }
//   };


//another:'''''''''
// const reducer = (state, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return { count: state.count + 1 };
//       case 'DECREMENT':
//         return { count: state.count - 1 };
//       default:
//         return state;
//     }
//   };
  


//Explanation:
// Action Type (UPDATE_SALARY): This defines the type of action we're dealing with.
// Action Creator: A function that returns an action object with the new salary.
// Reducer (salaryReducer): This listens for the UPDATE_SALARY action, and when triggered, 
// it updates the salary in the state with the value provided in the action's payload.
  

// We use a switch to check the action type and decide what to do with the state.

//To pass a new salary in Redux, you would dispatch the updateSalary action with the new salary value as the payload.
//// Dispatching the action to update salary
//store.dispatch(updateSalary(60000));  // Updating salary to 60,000


//----STEPS--------
//1-

/////////////////////-----------------------------------IMPORTANT QUESTIONS------------------/////////////////////////////////////////

// ✅ Conceptual & Theoretical Questions
// What are the key differences between Redux and Redux Toolkit, and why would you choose one over the other?

// Trick: Don’t just list differences—explain practical use cases. Mention how Redux is for legacy systems and RTK is for modern applications.

// Can you use Redux Toolkit in an existing Redux project? What are the challenges?

// Trick: Yes, but you’ll need to gradually replace createStore() with configureStore() and migrate reducers to createSlice() while ensuring backward compatibility.

// Why is createSlice() considered better than traditional reducers?

// Trick: It auto-generates action creators, reduces boilerplate, and uses Immer for immutable updates behind the scenes.

// What happens if you mutate the state directly in Redux vs. Redux Toolkit?

// Trick: In Redux, direct mutation breaks immutability—causing unexpected behavior. In RTK, Immer allows you to write "mutating" code, but it produces an immutable copy.

// Why is middleware important in Redux, and how is it handled differently in Redux Toolkit?

// Trick: Middleware manages side effects. Redux requires manual setup using applyMiddleware(), while RTK automatically applies redux-thunk and allows custom middleware.

// 🧑‍💻 Practical & Coding Questions
// How do you handle asynchronous actions in Redux and Redux Toolkit?

// Trick: In Redux, you need to use middleware like redux-thunk or redux-saga. RTK provides createAsyncThunk() for easier async handling.

// What is extraReducers, and why is it useful in Redux Toolkit?

// Trick: It’s used to handle actions outside the slice—such as async thunks or actions from other slices.

// ✅ Follow-up: Can you show an example of handling an asyncThunk using extraReducers?

// Can you explain how createEntityAdapter() works and when to use it?

// Trick: It helps manage normalized data structures (e.g., a list of items) and provides CRUD operations efficiently.

// What will happen if you dispatch an unknown action in Redux and Redux Toolkit?

// Trick: If no reducer handles the action, Redux will return the current state without changes.

// How do you persist Redux state in both Redux and Redux Toolkit?

// Trick: Use redux-persist in both, but RTK integrates with it more smoothly using configureStore().

// 🔍 Edge Case & Optimization Questions
// How do you optimize performance in a large-scale Redux/RTK application?

// Trick: Use memoized selectors (reselect in Redux, createSelector() in RTK), normalize state, split slices, and leverage lazy loading.

// Can you combine Redux reducers with Redux Toolkit slices?

// Trick: Yes, you can combine traditional reducers with RTK slices using combineReducers().

// Is Redux Toolkit slower due to Immer?

// Trick: No, Immer is highly optimized for immutability and has negligible performance overhead for most applications.

// What happens if you dispatch multiple async thunks simultaneously?

// Trick: Each thunk runs independently—handle race conditions using abort() or use-case-specific logic.

// How do you handle error states in createAsyncThunk()?

// Trick: Use the rejected lifecycle and action.error.message to capture and display errors.

// 📊 Behavioral & Design Questions
// If your application only has local state, would you still use Redux/RTK? Why or why not?

// Trick: No, for simple local states (useState() or useContext() is better). Redux is ideal for global and complex states shared across multiple components.

// If you have multiple slices sharing the same data, how would you design your state?

// Trick: Normalize the data using createEntityAdapter() and share it between slices or use extraReducers.

// What problems does Redux Toolkit solve that classic Redux does not?

// Trick: It solves boilerplate reduction, async handling simplification, better developer experience, and performance optimizations.



//////////////////////////////////////// MCQ QUESTIONS---------------------------//////////////////////////////////////////////

// ✅ Conceptual & Theoretical Questions
// What is a key difference between Redux and Redux Toolkit?

// A) Redux requires less boilerplate code.

// B) Redux Toolkit automatically sets up middleware like redux-thunk.

// C) Redux allows for mutable state updates.

// D) Redux Toolkit is better for legacy codebases.
// ✅ Answer: B

// Can you integrate Redux Toolkit into an existing Redux project?

// A) No, Redux and Redux Toolkit are incompatible.

// B) Yes, but you must rewrite all reducers manually.

// C) Yes, by gradually migrating createStore() to configureStore() and reducers to createSlice().

// D) Yes, but only for new features.
// ✅ Answer: C

// Why is createSlice() better than traditional reducers?

// A) It supports only synchronous actions.

// B) It auto-generates action creators and uses Immer for immutability.

// C) It is faster than the useReducer() hook.

// D) It allows direct mutations in Redux.
// ✅ Answer: B

// What happens if you directly mutate the state in Redux?

// A) It works without any issues.

// B) Redux automatically fixes mutations.

// C) It breaks state immutability and causes unexpected behavior.

// D) Redux ignores the mutation.
// ✅ Answer: C

// How is middleware handled differently in Redux Toolkit?

// A) Middleware is not required in RTK.

// B) RTK uses applyMiddleware() like Redux.

// C) RTK automatically applies redux-thunk and allows custom middleware.

// D) RTK does not support asynchronous middleware.
// ✅ Answer: C

// 🧑‍💻 Practical & Coding Questions
// How do you handle asynchronous actions in Redux Toolkit?

// A) With redux-saga.

// B) Using the createAsyncThunk() function.

// C) By writing async/await directly in reducers.

// D) Using the dispatchAsync() method.
// ✅ Answer: B

// What is the purpose of extraReducers in Redux Toolkit?

// A) It manages local component states.

// B) It allows handling actions outside of the slice.

// C) It optimizes store performance.

// D) It merges multiple reducers into one slice.
// ✅ Answer: B

// How does createEntityAdapter() help in Redux Toolkit?

// A) It creates action types automatically.

// B) It manages normalized data and provides CRUD operations.

// C) It simplifies store configuration.

// D) It reduces memory consumption.
// ✅ Answer: B

// What happens if you dispatch an unknown action in Redux?

// A) Redux throws an error.

// B) The current state is returned unchanged.

// C) Redux deletes the unknown action.

// D) Redux logs a warning in the console.
// ✅ Answer: B

// How do you persist the Redux state in both Redux and RTK?

// A) Using redux-thunk.

// B) By calling saveState() manually.

// C) With the redux-persist library.

// D) Using persistStore() in slices.
// ✅ Answer: C

// 🔍 Edge Case & Optimization Questions
// What’s the best way to optimize performance in a Redux/RTK application?

// A) Use memoized selectors and normalize the state.

// B) Use plain reducers instead of createSlice().

// C) Disable Redux DevTools.

// D) Avoid using middleware.
// ✅ Answer: A

// Can you combine Redux reducers with Redux Toolkit slices?

// A) No, they are incompatible.

// B) Yes, using combineReducers().

// C) Only in legacy projects.

// D) Yes, but only for asynchronous reducers.
// ✅ Answer: B

// Is Redux Toolkit slower due to Immer?

// A) Yes, it adds significant overhead.

// B) No, Immer is optimized for performance.

// C) Only when handling large datasets.

// D) It depends on how reducers are written.
// ✅ Answer: B

// What happens if you dispatch multiple async thunks simultaneously?

// A) Redux processes them sequentially.

// B) Each thunk runs independently.

// C) Redux cancels the first thunk.

// D) The latest thunk overrides previous ones.
// ✅ Answer: B

// How do you handle errors in createAsyncThunk()?

// A) By catching exceptions in reducers.

// B) Using the onError() callback.

// C) Via the rejected lifecycle and action.error.

// D) Dispatching a custom ERROR action.
// ✅ Answer: C

// 📊 Behavioral & Design Questions
// Would you use Redux/RTK for managing local component state? Why or why not?

// A) Yes, it’s always better to use a global store.

// B) No, useState() or useContext() is simpler for local state.

// C) Only if the local state is deeply nested.

// D) Yes, because it prevents prop drilling.
// ✅ Answer: B

// If multiple slices share the same data, how would you design the state?

// A) Duplicate the data in each slice.

// B) Use extraReducers to sync state changes.

// C) Use createEntityAdapter() to normalize and share data.

// D) Merge all slices into a single reducer.
// ✅ Answer: C

// What major problems does Redux Toolkit solve compared to Redux?

// A) It replaces the Redux store.

// B) It only simplifies API handling.

// C) It reduces boilerplate, simplifies async logic, and improves DX.

// D) It removes the need for reducers.
// ✅ Answer: C







////////////////////////------------------- components syntax----------------------------//////////////////////////////////////
// 📝 Key Components of Redux and Redux Toolkit

// 📌 Redux Components

// 1. Store

// Centralizes application state.

// import { createStore } from 'redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);

// 2. Actions

// Plain JavaScript objects describing state changes.

// // actionTypes.js
// export const INCREMENT = 'INCREMENT';

// // actions.js
// export const increment = () => ({ type: INCREMENT });

// 3. Reducers

// Pure functions defining how state changes in response to actions.

// import { INCREMENT } from './actionTypes';

// const initialState = { count: 0 };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, count: state.count + 1 };
//     default:
//       return state;
//   }
// };

// export default counterReducer;

// 4. Middleware

// Enhances Redux by handling asynchronous logic (e.g., redux-thunk, redux-saga).

// import thunk from 'redux-thunk';
// import { applyMiddleware, createStore } from 'redux';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// 📌 Redux Toolkit (RTK) Components

// 1. configureStore()

// Simplifies store creation with built-in middleware (e.g., redux-thunk).

// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';

// const store = configureStore({
//   reducer: { counter: counterReducer },
// });

// 2. createSlice()

// Combines reducers, actions, and action creators in a single function.

// import { createSlice } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: { count: 0 },
//   reducers: {
//     increment: (state) => { state.count += 1; },
//   },
// });

// export const { increment } = counterSlice.actions;
// export default counterSlice.reducer;

// 3. createAsyncThunk()

// Handles asynchronous operations (e.g., API calls).

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const fetchData = createAsyncThunk('data/fetchData', async () => {
//   const response = await fetch('/api/data');
//   return response.json();
// });

// const dataSlice = createSlice({
//   name: 'data',
//   initialState: { items: [], loading: false },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => { state.loading = true; })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       });
//   },
// });

// export default dataSlice.reducer;

// 4. createEntityAdapter()

// Simplifies CRUD operations and manages normalized state.

// import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

// const usersAdapter = createEntityAdapter();

// const usersSlice = createSlice({
//   name: 'users',
//   initialState: usersAdapter.getInitialState(),
//   reducers: {
//     addUser: usersAdapter.addOne,
//     updateUser: usersAdapter.updateOne,
//   },
// });

// export const { addUser, updateUser } = usersSlice.actions;
// export default usersSlice.reducer;


// ✅ Redux: Suitable for legacy systems, full control over customization.

// ✅ Redux Toolkit: Ideal for modern apps, reduces boilerplate, and simplifies async logic.

