//DEBOUNCING

// ✅ Where This Is Useful (Real Use Cases):
// Search Input:

// Prevents sending API calls on every keystroke.

// Only sends a search request after the user stops typing.

// Auto-saving Forms:

// Save data to a server 2 seconds after user stops typing (not after every letter).

// Live Filters:

// Filter lists or products after user finishes typing.




// // Build a textarea that updates data after 2 seconds.
// import React, { useState, useEffect } from "react";

// export default function DebounceComponent() {
//   const [input, setInput] = useState("");
//   const [debounceValue, setDebounceValue] = useState("");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebounceValue(input);
//       console.log("debounceValue value====", debounceValue);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, [input]);

//   return (
//     <div>
//       <textarea
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="type here...."
//       ></textarea>
//       <p> debounce Value: {debounceValue}</p>
//     </div>
//   );
// }

// or;

// //
// // Auto-saving Forms:
// import { useState, useEffect } from "react";

// function DebounceExample() {
//   const [text, setText] = useState("");
//   const [saved, setSaved] = useState("");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setSaved(text); // pretend API save
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [text]);

//   return (
//     <>
//       <textarea onChange={(e) => setText(e.target.value)} />
//       <p>Saved: {saved}</p>
//     </>
//   );
// }
