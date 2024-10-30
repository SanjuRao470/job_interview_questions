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
//     },
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
// To pass a new salary in Redux,Dispatching the action to update salary


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


//Explanation:
// Action Type (UPDATE_SALARY): This defines the type of action we're dealing with.
// Action Creator: A function that returns an action object with the new salary.
// Reducer (salaryReducer): This listens for the UPDATE_SALARY action, and when triggered, 
// it updates the salary in the state with the value provided in the action's payload.
  

//To pass a new salary in Redux, you would dispatch the updateSalary action with the new salary value as the payload.
//// Dispatching the action to update salary
//store.dispatch(updateSalary(60000));  // Updating salary to 60,000


//----STEPS--------
//1- 