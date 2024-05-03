//QUESTION### most  top  asking interview question of react ,node, html5,css3,javasript

// Certainly! Below are some frequently asked interview questions for React, Node.js, HTML5, CSS3, and JavaScript:

// React:
// What is React and what are its main features?
// What are the differences between Class Components and Functional Components?
// Explain Virtual DOM and how does React use it to improve performance?
// What is JSX? How is it different from HTML?
// What is the significance of keys in React?
// What is the purpose of setState() in React?
// Explain the component lifecycle methods in React.
// What are Higher-Order Components (HOCs) in React?
// What is Redux and how does it work with React?
// What is React Router and how does it work?





// Node.js:
// What is Node.js and why would you use it?
// Explain the event-driven architecture of Node.js.
// What is npm?
// What are callbacks in Node.js?
// What is Express.js and why would you use it with Node.js?
// What is middleware in Express.js?
// Explain the differences between process.nextTick() and setImmediate() in Node.js.
// How does Node.js handle asynchronous operations?
// What is npm init?
// Explain the purpose of package.json in Node.js projects.



// HTML5:
// What are the new features introduced in HTML5?
// What is the semantic meaning of HTML5 elements like <header>, <footer>, <article>, <section>, etc.?
// What is Canvas in HTML5?
// What is the purpose of the <!DOCTYPE html> declaration?
// Explain the difference between localStorage and sessionStorage.
// What is the <video> and <audio> tag in HTML5 and how do they work?
// What is the purpose of the placeholder attribute in HTML5?
// What are data attributes in HTML5?
// Explain the difference between <div> and <span> tags in HTML5.
// What is the purpose of the contenteditable attribute in HTML5?



// CSS3:
// What are the new features introduced in CSS3?
// Explain the box model in CSS.
// What are CSS selectors and how do they work?
// Explain the difference between position: relative, position: absolute, and position: fixed in CSS.
// What is the purpose of the display property in CSS?
// What is Flexbox and how does it work?
// What is the CSS box-shadow property used for?
// What is the CSS z-index property used for?
// What is the purpose of media queries in CSS?
// What is CSS Grid Layout and how does it work?




// JavaScript:
// What are the data types in JavaScript?
// Explain the difference between == and === operators in JavaScript.
// What is hoisting in JavaScript?
// Explain closures in JavaScript.
// What is the purpose of the this keyword in JavaScript?
// What are JavaScript Promises and how do they work?
// Explain the concept of prototypal inheritance in JavaScript.
// What is event bubbling and event capturing in JavaScript?
// What are arrow functions in JavaScript?
// What is AJAX and how does it work in JavaScript?














//QUESTION### most  top  asking interview question of react ,node, html5,css3,javasript for 3 years

// Certainly! Here are some frequently asked interview questions for React, Node.js, HTML5, CSS3, and JavaScript over the span of three years:

// React:
// 2019:

// What is the significance of React Fiber?
// Explain the concept of Context in React and its use cases.
// What are React Hooks and how do they change the way we write React components?
// How does React handle server-side rendering?
// What is the purpose of the useMemo and useCallback hooks?
// Explain the differences between React.Component and React.PureComponent.
// What is the role of Error Boundaries in React?
// How can you optimize performance in React applications?

// 2020:

// What are the new features introduced in React 16 and 17?
// Explain the concept of Concurrent Mode in React.
// How does React.lazy() and Suspense work for code splitting?
// What is React.memo() and when would you use it?
// What are the advantages of using React.Fragment?
// Explain the concept of portals in React.
// How does React handle accessibility?
// What is the significance of the React DevTools?

// 2021:

// What are the changes introduced in React 18?
// Explain the role of React Server Components.
// How does React reconcile the virtual DOM?
// What are the benefits of using React Server Components over traditional client-side rendering?
// Explain the concept of Relay in React.
// How does Suspense for Data Fetching work in React?
// What are some best practices for styling in React applications?
// How do you handle forms in React?



// Style of asking questions in react

// 1. Component Lifecycle Methods
// Explain the lifecycle methods of a React component.
// How would you use componentDidMount and componentWillUnmount methods?

// 2. State Management
// Describe how state works in React.

// What's the difference between props and state?
// ANS: already know the answer


// 3. Handling Events
// How do you handle events in React?
//ANS
// Event Parameters and Synthetic Events:

// In event handlers like onClick, onChange, etc., React provides a synthetic event (e) that wraps 
// the native browser event. You can access properties like e.target, e.currentTarget, etc., to interact with the event.

// Remember to use e.preventDefault() to prevent the default behavior of 
// certain events (e.g., form submission, link click) when necessary.

//Summary:
// Event handling in React involves attaching event handlers to JSX elements.
// Use arrow functions or regular functions to define event handlers.
// Access event properties using e (synthetic event) to interact with user input.
// Handle form submissions, input changes, button clicks, etc., using appropriate event handlers and state management techniques in React components.


//Event Handling in Class Components:

// import React, { Component } from 'react';

// class ButtonClick extends Component {
//   handleClick = () => {
//     console.log('Button clicked!');
//   };

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Click me
//       </button>
//     );
//   }
// }

// export default ButtonClick;

//Event Handling in Functional Components:
// import React from 'react';

// const ButtonClick = () => {
//   const handleClick = () => {
//     console.log('Button clicked!');
//   };

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// };

// export default ButtonClick;

//Common Event Handling Patterns:
//1. onClick Event (Button Click):

// import React from 'react';

// const ButtonClick = () => {
//   const handleClick = () => {
//     console.log('Button clicked!');
//   };

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// };

// export default ButtonClick;

//onChange Event (Input Change):
// import React, { useState } from 'react';

// const InputField = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <input
//       type="text"
//       value={inputValue}
//       onChange={handleInputChange}
//       placeholder="Type something..."
//     />
//   );
// };

// export default InputField;

//onSubmit Event (Form Submission):
// import React, { useState } from 'react';

// const FormSubmit = () => {
//   const [formData, setFormData] = useState({ username: '', password: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted with data:', formData);
//     // Add logic to submit form data to server, validate, etc.
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="username"
//         value={formData.username}
//         onChange={handleInputChange}
//         placeholder="Username"
//       />
//       <input
//         type="password"
//         name="password"
//         value={formData.password}
//         onChange={handleInputChange}
//         placeholder="Password"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormSubmit;

// Explain the difference between using arrow functions and regular functions when handling events.
//OR
//arrow functions (() => {}) and regular functions (function() {}) 
//ANS

// Interview Explanation Example:
// Interviewer Question: "Can you explain the difference between using arrow functions and regular functions 
// when handling events in React?"

// Candidate Response:

// "Arrow functions in JavaScript capture the this value from their surrounding lexical 
// scope, which is useful for maintaining the correct this context in React
//  components without explicit binding. This can simplify event handling and reduce the risk of this context errors."

// "On the other hand, regular functions have their own this context,
//  which needs to be explicitly bound to the component instance in React
//   class components to ensure correct behavior. This often involves using
//    methods like bind in the constructor or defining class properties for event handlers."

// "In terms of performance, using arrow functions directly within JSX can 
// lead to unnecessary re-renders if not managed properly, whereas regular functions
//  can also cause performance issues if this context is not handled correctly in class components."

// Multiple-Choice Questions:
// Question 1:
// Which of the following correctly describes the behavior of arrow functions versus regular
//  functions in React event handling?

// A) Arrow functions automatically bind this to the component instance.
// B) Regular functions inherit this from the component's lexical scope.
// C) Arrow functions require explicit binding of this within React class components.
// D) Regular functions capture the correct this context without any additional configuration.

// answer : A) Arrow functions automatically bind this to the component instance.

// Explanation:
// Arrow functions capture the this value from their surrounding lexical scope, 
// which means they automatically inherit the this context of the component. 
// This behavior is especially useful in React components for maintaining the
//  correct this context without requiring explicit binding.

// Question 2:
// What can be a potential performance concern when using arrow functions for event handling in React?

// A) Arrow functions automatically optimize rendering performance.
// B) Arrow functions can cause unnecessary re-renders if defined within JSX.
// C) Arrow functions are more efficient than regular functions in class components.
// D) Arrow functions have no impact on performance when used for event handling.

// Answer 2:
// B) Arrow functions can cause unnecessary re-renders if defined within JSX.

// Explanation:
// When arrow functions are defined inline within JSX (e.g., as event handlers),
//  a new function is created on each render. This can lead to unnecessary re-renders, impacting performance 
//  if not managed properly.


// Question 3:
// Which function type is commonly used for event handling in functional components in React?

// A) Regular functions
// B) Arrow functions
// C) Class methods
// D) Higher-order functions

// Answer 3:
// B) Arrow functions

// Explanation:
// Arrow functions are commonly used for event handling in functional components due to 
// their ability to automatically capture the correct this context from the surrounding 
// scope, simplifying event handling in functional components.



// 4. Conditional Rendering
// How would you conditionally render components in React?
//ANS:
// In React, you can conditionally render components or elements based on certain conditions using
//  JavaScript expressions or conditional statements within your JSX code. This allows you to dynamically 
// show or hide components based on the state of your application. 

// Provide examples of conditional rendering techniques.
// 1. Using Conditional Statements (if/else)
//You can use standard JavaScript if statements to conditionally render components within your JSX:
// import React from 'react';

// function MyComponent({ isLoggedIn }) {
//   if (isLoggedIn) {
//     return <p>Welcome, user!</p>;
//   } else {
//     return <p>Please log in to continue.</p>;
//   }
// }

// export default MyComponent;

// 2. Using the Ternary Operator
//The ternary operator (condition ? trueValue : falseValue) is a concise way to conditionally
// render components based on a condition:
// import React from 'react';

// function MyComponent({ isLoggedIn }) {
//   return (
//     <div>
//       {isLoggedIn ? <p>Welcome, user!</p> : <p>Please log in to continue.</p>}
//     </div>
//   );
// }

// export default MyComponent;

//3.Using Logical && Operator
//You can use the logical AND (&&) operator to conditionally render components:
// import React from 'react';

// function MyComponent({ isLoggedIn }) {
//   return (
//     <div>
//       {isLoggedIn && <p>Welcome, user!</p>}
//       {!isLoggedIn && <p>Please log in to continue.</p>}
//     </div>

//OR
// {isLoggedIn && <LoggedInComponent />}
// If isLoggedIn is true, <LoggedInComponent /> is rendered.
// If isLoggedIn is false, nothing is rendered after the &&.


//   );
// }

// export default MyComponent;

//4 . Using Element Variables
//You can use variables to conditionally render different components:
// import React from 'react';

// function MyComponent({ isLoggedIn }) {
//   let greeting;

//   if (isLoggedIn) {
//     greeting = <p>Welcome, user!</p>;
//   } else {
//     greeting = <p>Please log in to continue.</p>;
//   }

//   return <div>{greeting}</div>;
// }

// export default MyComponent;

//5 .Rendering Null or Nothing
//You can also choose to render null or nothing to conditionally hide components:
// import React from 'react';

// function MyComponent({ shouldRender }) {
//   return shouldRender ? <p>Hello!</p> : null;
// }

// export default MyComponent;


//6 .Using Switch Statements

// import React from 'react';

// function MyComponent({ userType }) {
//   switch (userType) {
//     case 'admin':
//       return <AdminComponent />;
//     case 'user':
//       return <UserComponent />;
//     default:
//       return <GuestComponent />;
//   }
// }

//example, the JSX code:   <div>Hello, {name}!</div>



// 5. Component Communication
// How can components communicate in React?
// there are few ways to components communicates with each other

//1- using props (from parent to child component)
// Parent to Child Communication: Parent components can pass data down to child components through props. 
// Props are read-only and help in making child components predictable and reusable.

// Parent Component
// function ParentComponent() {
//     const data = "Hello from Parent!";
//     return <ChildComponent message={data} />;
//   }
  
//   // Child Component
//   function ChildComponent(props) {
//     return <p>{props.message}</p>; // Receives data via props
//   }

// 2. Callbacks (Functions as Props)
// Child to Parent Communication: Parent components can pass callback functions as 
// props to child components, allowing child components to communicate with parents.

// function ParentComponent() {
//     const handleChildClick = () => {
//       console.log("Button in child clicked");
//     };
  
//     return <ChildComponent onClick={handleChildClick} />;
//   }
  
//   function ChildComponent(props) {
//     return <button onClick={props.onClick}>Click me</button>;
//   }

// 3-question::  how do  the data or components communicate with each other if they do not have relation with each other
//ans: context api and redux
  

//4- Context API
// Avoid Prop Drilling: Context API provides a way to pass data through the component
//  tree without having to pass props manually at every level.

// const MyContext = React.createContext();

// function ParentComponent() {
//   return (
//     <MyContext.Provider value="Data from Context">
//       <ChildComponent />
//     </MyContext.Provider>
//   );
// }

// function ChildComponent() {
//   const data = useContext(MyContext);
//   return <p>{data}</p>;
// }

// 5- State Lifting
// Parent Component
// function ParentComponent() {
//     const [count, setCount] = useState(0);
  
//     const incrementCount = () => {
//       setCount(count + 1);
//     };
  
//     return (
//       <div>
//         <p>Count: {count}</p>
//         <ChildComponent increment={incrementCount} />
//       </div>
//     );
//   }
  
//   // Child Component
//   function ChildComponent(props) {
//     return <button onClick={props.increment}>Increment</button>;
//   }

// 6-Refs
// function ParentComponent() {
//     const childRef = useRef(null);
  
//     const handleClick = () => {
//       childRef.current.focus();
//     };
  
//     return (
//       <div>
//         <ChildComponent ref={childRef} />
//         <button onClick={handleClick}>Focus Child</button>
//       </div>
//     );
//   }
  
//   const ChildComponent = React.forwardRef((props, ref) => {
//     return <input ref={ref} />;
//   });
  
  

// Explain different methods for parent-child component communication.
//ANS
// 1. Props (Properties)
// Direction: Parent to Child

// 2. Callback Functions
// Direction: Child to Parent

// 3. State Lifting
// Direction: Child to Parent

// Context API
// Direction: Any (Global State Management)

// Event Emitters (Third-party Libraries  like redux)
// Direction: Any 

// 6. Refs
// Direction: Any

// 6. Lists and Keys
// How do you render lists of items in React?
//ANS:
// Rendering lists of items in React involves using the map() 
// function to transform an array of data example like: const items={[]} into an array of React elements <li key={item.id}></li>.

//example
{/* <ul>
{items.map(item => (
  <li key={item.id}>{item.name}</li>
)
)}
</ul> */}

// What are keys in React and why are they important when rendering lists?
//ANS:
//this example, item.id is used as the key because it uniquely identifies each item in the list.
//importance
//Identifying Added or Removed Items:
//Efficient Reconciliation:
//Optimizing DOM Manipulation:
// suppose if we dont provide a key what kind of error will come??
//Warning: Each child in a list should have a unique "key" prop.


// 7. Forms and Controlled Components
// How do you create forms in React?
//ANS:
// Example of  controlled components

// import React, { useState } from 'react';

// function MyForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); to prevent the default form submission behavior
//     console.log(formData); // Handle form submission logic here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         First Name:
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Last Name:
//         <input
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MyForm;
//NOTE
// The spread operator (...) is used to create a new object that includes all the properties
//  (firstName, lastName, email, etc.) from the current formData state.
//EXAMPLE  setFormData({ ...formData, [name]: value });

// What are controlled components and why are they useful?
//ANS 
//note   above form is example of  controlled components 

// Controlled components in React refer to components where form elements like inputs,
//  textarea, and select elements are controlled by React state.
//  This means that the value of the form element is managed by React
//  state and any changes to the input are handled by React through state updates.

//Comparing Controlled vs Uncontrolled Components:

// Controlled Components: Values of form elements are controlled by React state. All changes to the
// input value go through React and are managed centrally.

// Uncontrolled Components: Values of form elements are managed by the DOM itself using refs or are
// stored within the component using defaultValue or defaultChecked.
//  React doesn't track changes to these elements, and they are managed by the browser.

// EXAMPLE OF Uncontrolled Components
// import React, { useRef } from 'react';

// function UncontrolledInput() {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     const inputValue = inputRef.current.value;
//     console.log('Input Value:', inputValue);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         defaultValue="Default Value" // Uncontrolled input value
//         ref={inputRef} // Ref used to access DOM element
//       />
//       <button onClick={handleClick}>Get Value</button>
//     </div>
//   );
// }

// export default UncontrolledInput;


// 8. React Hooks
// What are React Hooks and how do they work?
// Explain the useState and useEffect hooks.

// 9. Component Optimization
// How can you optimize performance in React components?
// Describe techniques such as memoization and PureComponent.
// ANS: already know the answer

// 10. Error Handling
// How do you handle errors in React?
//ANS:
//Handling errors in React involves implementing error boundaries to gracefully manage and display
//errors that occur within components.

//Notes on Error Boundaries:
//Explain the usage of Error Boundaries.
//1-Error boundaries only catch errors that occur in their child components during rendering. 
//2-Errors that occur in event handlers (e.g., onClick) or in asynchronous code (e.g., setTimeout)
//cannot be caught by error boundaries.
//3-Each error boundary component manages errors independently.If multiple error boundaries are nested, 
//the closest boundary will catch the error first.



// To create an error boundary in React,
// there are two step to create error boundary in React
//step-1 you need to define a class component that implements either componentDidCatch(error, info) or the
//  new static getDerivedStateFromError(error) lifecycle method.

//step-2 Wrap Components with Error Boundary:
//question  : can we use the  error boundary with Hooks?
//ANS:
// Error handling with error boundaries isn't directly supported by React hooks
//  like useState or useEffect. However, you can encapsulate error handling logic within a custom hook to provide 
// a similar pattern of error handling across multiple functional components.



// Node.js:
// 2019:

// What is the event loop in Node.js?
// Explain the differences between process.nextTick(), setImmediate(), and setTimeout().
// What is the role of middleware in Express.js?
// How does error handling work in Node.js?
// Explain the concept of streams in Node.js.
// How do you handle authentication and authorization in Node.js applications?
// What are the advantages of using npm over other package managers?
// How do you manage dependencies in a Node.js project?


// 2020:

// What are the new features introduced in Node.js 12 and 14?
// Explain the use of worker threads in Node.js.
// How does Node.js handle clustering?
// What are the best practices for securing a Node.js application?
// Explain the concept of npm scripts.
// How do you handle file uploads in Node.js?
// What is the purpose of the package-lock.json file?
// How can you improve the performance of a Node.js application?


// 2021:

// What are the changes introduced in Node.js 16?
// Explain the concept of ESM (ECMAScript Modules) in Node.js.
// How does Node.js handle memory management?
// What are some common security vulnerabilities in Node.js applications and how do you mitigate them?
// How do you handle database operations in Node.js applications?
// What are some popular Node.js frameworks apart from Express.js?
// Explain the concept of middleware chaining in Express.js.
// How do you handle sessions in a Node.js application?


// HTML5:
// 2019:

// What are the new features introduced in HTML5?
// Explain the differences between localStorage and sessionStorage.
// How do you handle audio and video elements in HTML5?
// What are Web Workers and how do they work in HTML5?
// How does HTML5 improve web accessibility?
// Explain the purpose of the <canvas> element in HTML5.
// What are data attributes in HTML5?
// How do you handle offline storage in HTML5?


// 2020:

// What are the semantic elements introduced in HTML5?
// Explain the purpose of the <picture> element in HTML5.
// How do you handle responsive images in HTML5?
// What are the differences between SVG and Canvas in HTML5?
// How does HTML5 Geolocation API work?
// Explain the purpose of the <details> and <summary> elements in HTML5.
// How do you handle drag and drop in HTML5?
// What are some best practices for SEO in HTML5?


// 2021:

// What are the changes introduced in HTML5.1 and HTML5.2?
// Explain the concept of Web Components in HTML5.
// How do you handle form validation in HTML5?
// What is the significance of the <template> element in HTML5?
// How does HTML5 improve form input types and attributes?
// Explain the concept of microdata in HTML5.
// How do you handle server-sent events (SSE) in HTML5?
// What are some common compatibility issues with HTML5 and how do you address them?


// CSS3:
// 2019:

// What are the new features introduced in CSS3?
// Explain the concept of CSS Grid Layout.
// How does CSS Flexbox work?
// What is the purpose of CSS Transitions and Animations?
// How do you handle responsive design in CSS3?
// Explain the concept of CSS preprocessors like Sass and Less.
// What are CSS Sprites and how do they improve performance?
// How do you handle browser compatibility issues with CSS3?


// 2020:

// What are the differences between CSS Grid Layout and Flexbox?
// Explain the concept of CSS Variables.
// How does CSS specificity work?
// What are CSS pseudo-classes and pseudo-elements?
// How do you handle vendor prefixes in CSS3?
// Explain the purpose of the box-sizing property in CSS3.
// What are some best practices for organizing CSS code?
// How do you handle CSS resets and normalizations?


// 2021:

// What are the changes introduced in CSS4?
// Explain the concept of CSS-in-JS.
// How do you handle layout shifts in CSS3?
// What are CSS frameworks and how do they help in web development?
// How do you handle responsive typography in CSS3?
// What are some common techniques for optimizing CSS performance?
// Explain the purpose of the will-change property in CSS3.
// How do you handle browser-specific CSS hacks?



// JavaScript:
// 2019:

// What are the data types in JavaScript?
// Explain the differences between null and undefined in JavaScript.
// What is the difference between == and === operators in JavaScript?
// How do you handle asynchronous programming in JavaScript?
// Explain the concept of closures in JavaScript.
// What are JavaScript Promises and how do you use them?
// How does hoisting work in JavaScript?
// What are the different ways to create objects in JavaScript?


// 2020:

// What are the new features introduced in ECMAScript 6?
// Explain the concept of arrow functions in JavaScript.
// How does destructuring assignment work in JavaScript?
// What are the benefits of using modules in JavaScript?
// How do you handle errors in JavaScript?
// Explain



// Multiple-Choice Questions (MCQs):


// What does the following code snippet output?

// javascript
// Copy code


// console.log(typeof 42);
// A) "number"
// B) "string"
// C) "undefined"
// D) "object"


// Which method is used to add an element to the end of an array?

// A) push()
// B) add()
// C) append()
// D) insert()


// What is the result of the expression 3 + '3'?

// A) 6
// B) "33"
// C) 33
// D) TypeError


// Which method is used to split a string into an array of substrings based on a specified separator?

// A) split()
// B) slice()
// C) concat()
// D) join()


// What is the purpose of the setTimeout() function in JavaScript?

// A) Executes a function repeatedly
// B) Sets a timer that executes a function after a specified delay
// C) Stops the execution of a function
// D) None of the above



// What does the !== operator in JavaScript do?

// A) Checks for strict inequality
// B) Checks for strict equality
// C) Checks for inequality
// D) None of the above


// What is the purpose of the splice() method in JavaScript?

// A) Removes elements from an array and returns them
// B) Adds elements to an array at a specified index
// C) Replaces elements in an array with new elements
// D) All of the above


// Which keyword is used to declare a block-scoped variable in JavaScript?

// A) var
// B) let
// C) const
// D) block


// What does the filter() method in JavaScript do?

// A) Returns a new array with elements that pass a test
// B) Modifies the original array by removing elements
// C) Adds elements to the end of an array
// D) None of the above


// What does the Math.random() function in JavaScript do?

// A) Returns a random integer
// B) Returns a random floating-point number between 0 (inclusive) and 1 (exclusive)
// C) Rounds a number to the nearest integer
// D) None of the above


