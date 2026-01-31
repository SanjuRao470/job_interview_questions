//QUESTION

// WHAT RAE THE DEIFFRENCE BETWEEN ----- HOW THEY WORKS IN REACT SCNERIO---

//--QUESTION  React.memo  vs useMemo


//React.memo is HOC

// React.memo prevents unnecessary child re-renders by doing a shallow comparison of props.
// So even if the parent re-renders, the child will re-render only when its props change.

//Example


// const UserProfile = React.memo(({ name }) => {
//   console.log("Profile rendered");
//   return <h2>{name}</h2>;
// });

// function App() {
//   const [age, setAge] = useState(25);

//   return (
//     <>
//       <UserProfile name="Sanju" />
//       <button onClick={() => setAge(age + 1)}>Update Age</button>
//     </>
//   );
// }


//What’s happening

// UserProfile renders once
// Updating age does not re-render UserProfile
// Props didn’t change → render skipped


//When I use it

// Pure components
// Frequently re-rendering child components



 //useMemo --- is Hook


// useMemo caches the result of a calculation so
//  React doesn’t recompute it on every render unless its dependencies change.


// 🔧 How it Works (Internals – Simple)

// Component renders
// React checks the dependency array
// If dependencies are unchanged:
// React returns the cached value
// If dependencies changed:
// React re-runs the function and updates the cache


// const value = useMemo(() =>
//  computeExpensiveValue(data), [data]);


// 📌 When I Use useMemo

// Expensive calculations (reduce, filter, sort)
// Preventing unnecessary recalculations in large lists


// 🧠 Real Example
// const filteredUsers = useMemo(() => {
//   return users.filter(user => user.isActive);
// }, [users]);


// ✔ Filtering runs only when users change
// ✔ Component may still re-render



//  useCallback

// useCallback caches a function reference so it doesn’t get recreated on every render.

// 🔧 How it Works (Internals – Simple)

// Component renders
// React stores the function reference
// On next render:
// If dependencies are same → return same function
// If changed → create a new function


//  // ✅ useCallback keeps function reference same
//   const handleClick = useCallback(() => {
//     console.log("Child button clicked");
//   }, []);

//--“This function does not depend on any changing value”
// Result:
// ✅ Function is created once
// ✅ Same function reference reused forever


// WITH dependency change
// const handleClick = useCallback(() => {
//   console.log(count);
// }, [count]);


    //   {/* Passing function to child */}
    //   <Child onClick={handleClick} />


// 📌 When I Use useCallback

//Passing a function to a child component
//Child is wrapped with React.memo



//-----USEEFFECT

//--onMount/CDM
// useEffect(() => {
//   console.log("Component mounted");
// }, []);

//runs: Only once after the after initial render

//onUpdate/CDU
// useEffect(() => {
//   console.log("Count updated");
// }, [count]);

// runs: Every time the component updates, when state or props change.

//On Unmount/ComponentWillUnmount
// useEffect(() => {
//   return () => {
//     console.log("Component unmounted");
//   };
// }, []);

//runs: Right before the component is removed from the DOM

//On Every Render
// useEffect(() => {
//   console.log("Runs after every render");
// });



//question -- useState  vs UseRef

// useState is used to store data that persists across renders 
// and triggers a re-render when the state is updated.

// useRef is used to store mutable data that persists across renders
// and does not trigger a re-render when the value is updated.


 //QUESTION 
//---  How setState works internally (simple language)

// it works asynchrously
// When you call setState, React does not update the value immediately.
// React puts the state update in a queue.
// Multiple state updates are batched together for better performance.
// React then re-runs the component function with the new state.
// A new Virtual DOM is created.
// React compares the old Virtual DOM with the new one.
// Only the changed parts of the real DOM are updated.
// The UI is updated on the screen.