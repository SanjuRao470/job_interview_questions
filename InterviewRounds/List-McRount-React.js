// ✔ (/)Division gives the whole units
// (example: total seconds → hours)

// ✔(%) Modulo gives the remaining part
// (example: leftover seconds after removing hours)



// function formTime(givenTime) {
//   // const h = Math.floor(givenTime / 3600);
//   // const m = Math.floor((givenTime % 3600) / 60);
//   // const s = givenTime % 60;

//   const d = Math.floor(givenTime / 86400);
//   const h = Math.floor((givenTime % 86400) / 3600);
//   const m = Math.floor((givenTime % 3600) / 60);
//   const s = givenTime % 60;

//   return (
// `
//  ${String(d)}:${String(h)}: ${String(m)}: ${String(s)}

//${String(h).padStart(2,'0')}: ${String(m).padStart(2,'0')}: ${String(s).padStart(2,'0')}
    
    //     `;
//    )
// }
// const givenTime = 5400;
// const result = formTime(givenTime);
// console.log(result);



//QUESTION---
//Hands ON Task :
// Typical Interview Requirements
// The stopwatch must display elapsed time in HH:MM:SS format.
// It should have Start, Pause, and Reset controls that work instantly.
// Time should be tracked accurately for every second.
// The UI should show progress visually (a circle or progress bar).
// Should handle starting, pausing, and resetting without time drift or leakage.



// //-----------------SVG=>Scalable Vector Graphics
// The reason the <p> content inside your <svg> is not visible is because HTML elements 
// like <p> cannot be directly rendered inside an SVG element.
//  SVG only supports SVG elements (like <circle>, <rect>, <text>, etc.) as children.

//  <svg>, only SVG elements are allowed, such as:
// <circle>, <rect>, <line>, <text>, <path>, etc. 



// 1. <svg width="150" height="150">
// This is the main container for your SVG graphics.
// It sets the canvas size to 150x150 pixels.
// Inside this container, you place shapes, text, and other SVG elements.



// 2. First <circle>
// <circle cx="75" cy="75" r="70" fill="lightblue" stroke="#eee" strokeWidth="8" />

//   cx="75" cy="75" ========  Draws a circle centered at (75, 75) — the middle of the 150x150 canvas.
//  r="70"  ========  Radius (r) is 70, so it almost fills the container.
//  fill="lightblue" ========  Filled with light blue color.
// stroke="#eee" ========  Stroke (border color) is a light gray #eee with width 8.
//  strokeWidth="8"  ========  This forms the background circle of your stopwatch.

// 3. Second <circle>

// <circle
//   cx="75"
//   cy="75"
//   r="70"
//   stroke="green"
//   strokeWidth="8"
//   fill="lightblue"
//   strokeDasharray={440}
//   strokeDashoffset={440 - progress}
//   strokeLinecap="round"
//   transform="rotate(-90 75 75)"
// />

// Also centered at (75,75) with radius 70 — overlays the first circle.
// Has a green stroke and same light blue fill.
// The key here is the strokeDasharray and strokeDashoffset:
// strokeDasharray={440} sets the pattern length for the stroke's dashes and gaps.
// strokeDashoffset={440 - progress} offsets the dash pattern to create a "progress" effect.
// Essentially, this makes the green circle appear partially drawn depending on progress.
// strokeLinecap="round" makes the stroke ends round for a smooth look.
// transform="rotate(-90 75 75)" rotates the circle by -90 degrees around its center, so the progress starts from the top rather than the default right side.
// This circle acts as the progress indicator of your stopwatch.


// 4. <text>

// <text
//   x="50%"
//   y="50%"
//   dominantBaseline="middle"
//   textAnchor="middle"
//   fontSize="20"
//   fill="black"
// >
//   {hours} : {minutes} : {seconds}
// </text>
// Displays the stopwatch time inside the circle.
// x="50%" and y="50%" centers the text horizontally and vertically relative to the SVG canvas.
// dominantBaseline="middle" vertically aligns the text so its center aligns with y.
// textAnchor="middle" horizontally centers the text at x.
// fontSize="20" sets readable text size.
// fill="black" colors the text in black for visibility.


// import React, { useState, useRef, useEffect } from "react";

// export default function StopWatch() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const timerRef = useRef(null);

//   const handlerStart = () => {
//     if (!isRunning) {
//       setIsRunning(true);
//       timerRef.current = setInterval(() => {
//         setTime((prev) => prev + 1);
//       }, 1000);
//     }
//   };

//   const handlerPause = () => {
//     clearInterval(timerRef.current);
//     setIsRunning(false);
//   };

//   const handlerReset = () => {
//     clearInterval(timerRef.current);
//     setIsRunning(false);
//     setTime(0);
//   };

//   useEffect(() => {
//     return () => {
//       clearInterval(timerRef.current); // avoid memory leakage-
//     };
//   }, []);


/// 1 hours  => 60min * 60sec = 3600
//   const hours = String(Math.floor(time / 3600)).padStart(2, "0");
//   const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
//   const seconds = String(time % 60).padStart(2, "0");

//   const progress = (seconds / 60) * 440;


//   return (
//     <>
//       <div>StopWatch-------</div>

//       <div>
//         <svg width="150" height="150">
//           <circle
//             cx="75"
//             cy="75"
//             r="70"
//             fill="lightblue"
//             stroke="#eee"
//             strokeWidth="8"
//           ></circle>
//           <circle
//             cx="75"
//             cy="75"
//             r="70"
//             stroke="green"
//             strokeWidth="8"
//             fill="lightblue"
//             strokeDasharray={440}
//             strokeDashoffset={440 - progress}
//             strokeLinecap="round"
//             transform="rotate(-90 75 75)"
//           ></circle>

//           <text
//             x="50%"
//             y="50%"
//             dominantBaseline="middle"
//             textAnchor="middle"
//             fontSize="20"
//             fill="black"
//           >
//             {hours} : {minutes} : {seconds}
//           </text>
//         </svg>
//       </div>

//       <button onClick={() => handlerStart()}>start</button>
//       <button onClick={() => handlerPause()}>pause</button>
//       <button onClick={() => handlerReset()}>reset</button>
//     </>
//   );
// }

//---- along with CSS
//  return (
//     <>
//       <div
        
//         style={{//inline css
//           display: "flex", // activates flexbox layout
//           flexDirection: "column", // stack children vertically
//           justifyContent: "center", // center children vertically
//           alignItems: "center", // center children horizontally
//           // height: "90vh", // full viewport height to center vertically
//           // width: "90vw", // full viewport width
//           // textAlign: "center", // center text inside children
//         }}
//       >
//         <h1>StopWatch-------</h1>

//         <div>
//           <svg width="150" height="150">
//             <circle
//               cx="75"
//               cy="75"
//               r="70"
//               fill="lightblue"
//               stroke="#eee"
//               strokeWidth="8"
//             ></circle>
//             <circle
//               cx="75"
//               cy="75"
//               r="70"
//               stroke="green"
//               strokeWidth="8"
//               fill="lightblue"
//               strokeDasharray={440}
//               strokeDashoffset={440 - progress}
//               strokeLinecap="round"
//               transform="rotate(-90 75 75)"
//             ></circle>

//             <text
//               x="50%"
//               y="50%"
//               dominantBaseline="middle"
//               textAnchor="middle"
//               fontSize="20"
//               fill="black"
//             >
//               {hours} : {minutes} : {seconds}
//             </text>
//           </svg>
//         </div>

//       </div>

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row", // stack children vertically
//           justifyContent: "center", // center children vertically
//           alignItems: "center", // center children horizontally
//           gap: "10px", // space between buttons
//         }}
//       >
//         <button onClick={handlerStart}>start</button>
//         <button onClick={handlerPause}>pause</button>
//         <button onClick={handlerReset}>reset</button>
//       </div>
//     </>
//   );


// //--NOTES
// Math.floor() → remove decimals (only whole hours/minutes/seconds).
// String() → convert number → string.
// .padStart(2, "0") → make sure it always has 2 digits.


//--------
// import React, { useState, useRef, useEffect } from "react";

// export default function Stopwatch() {
//   const [time, setTime] = useState(0); // seconds
//   const [isRunning, setIsRunning] = useState(false);
//   const timerRef = useRef(null);

//   const start = () => {
//     if (!isRunning) {
//       setIsRunning(true);
//       timerRef.current = setInterval(() => setTime(prev => prev + 1), 1000);
//     }
//   };

//   const pause = () => {
//     setIsRunning(false);
//     clearInterval(timerRef.current);
//   };

//   const reset = () => {
//     setIsRunning(false);
//     clearInterval(timerRef.current);
//     setTime(0);
//   };

//   useEffect(() => {
//     return () => clearInterval(timerRef.current); // cleanup
//   }, []);

//   const hours = String(Math.floor(time / 3600)).padStart(2, "0");
//   const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
//   const seconds = String(time % 60).padStart(2, "0");

//   return (
//     <div>
//       <h2>Stopwatch</h2>
//       <div>{hours}:{minutes}:{seconds}</div>
//       <button onClick={start} disabled={isRunning}>Start</button>
//       <button onClick={pause}>Pause</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }



///--QUESTION-------

// import React, { useState } from "react";

// const options = [
//   { id: 1, label: "Neeraj" },
//   { id: 2, label: "Vikas" },
//   { id: 3, label: "Rahul" },
// ];

// export default function SimpleMultiSelect() {
//   const [selected, setSelected] = useState([]);

//   const toggleSelect = (id) => {
//     if (selected.includes(id)) {
//       setSelected(selected.filter((i) => i != id));
//     } else {
//       setSelected([...selected, id]);
//     }
//   };

//   const removeTag = (id) => {
//     setSelected(selected.filter((i) => i != id));
//   };

//   return (
//     <div>
//       {/* Selected tags */}
//       <div>
//         {selected.length === 0 && <div>Select names</div>}
//         {selected.map((id) => {
//           const option = options.find((o) => o.id === id);
//           return (
//             <span key={id} onClick={() => removeTag(id)}>
//               {option.label} ×{" "}
//             </span>
//           );
//         })}
//       </div>

//       {/* Options list */}
//       <div>
//         {options.map(({ id, label }) => (
//           <label key={id}>
//             <input
//               type="checkbox"
//               checked={selected.includes(id)}
//               onChange={() => toggleSelect(id)}
//             />
//             {label}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// }



////--------------------------
// import React, { useState, useEffect } from "react";

// export default function App() {
//   // const options = [
//   //   { id: 1, label: "mohan" },
//   //   { id: 2, label: "alice" },
//   //   { id: 3, label: "john" },
//   // ];


//   const [items, setItems] = useState([]);
//   const [selected, setSelected] = useState([]);

//   const fetchApisData = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       if (!response.ok) {
//         throw new Error("response is not ok!");
//       }
//       const responseData = await response.json();
//       setItems(responseData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchApisData();
//   }, []);

//   const handlerSelectedCheckbox = (id) => {
//     if (selected.includes(id)) {
//       setSelected(selected.filter((item) => item !== id));
//     } else {
//       setSelected([...selected, id]);
//     }
//   };

//   const handlerRemoveTag = (id) => {
//     setSelected(selected.filter((item) => item !== id));
//   };

//   return (
//     <div>
//       <h1>Hello stopWatch......</h1>
//       <div>
//         {selected.length === 0 && <span>select tag:</span>}
//         {selected.map((id) => {
//           const option = items.find((o) => o.id === id);
//           return (
//             <span key={id} onClick={() => handlerRemoveTag(id)}>
//               {option.name} *{" "}
//             </span>
//           );
//         })}
//       </div>

//       <div>
//         {items.map(({ id, name }) => (
//           <label key={id}>
//             <input
//               type="checkbox"
//               checked={selected.includes(id)}
//               onChange={() => handlerSelectedCheckbox(id)}
//             />
//             {name}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// }



// ---CODING TASK-----------------------------------------

// import React, { useState } from "react";

// export default function App() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState("");

//   const handlerTask = (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;
//     //if user enters nothing and only contain space then stop execution.

//     setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
//     setInput("");
//   };

//   const handlerMarkedTask = (id) => {
//     const markedTask = tasks.map((task) =>
//       task.id === id ? { ...task, completed: true } : task
//     );
//     setTasks(markedTask);
//   };

//   return (
//     <div>
//       <h1>Hello CodeSandbox</h1>
//       <form onSubmit={handlerTask}>
//         <input
//           type="text"
//           placeholder="add new task here..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           required
//         />
//         <button type="submit"> {input ? "add" : "add task"} </button>
//       </form>

//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             <span
//               style={{
//                 textDecoration: task.completed ? "line-through" : "none",
//               }}
//             >
//               {task.text}
//             </span>
//             <button
//               onClick={() => handlerMarkedTask(task.id)}
//               disabled={task.completed}
//             >
//               complete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// //--------------------PAGINATION
// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [items, setItems] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemPerPage, setItemPerPage] = useState(5);

//   const fetchApiData = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/albums"
//       );
//       if (!response.ok) {
//         throw new Error("response is not good!");
//       }
//       const responseData = await response.json();
//       setItems(responseData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchApiData();
//   }, []);

//   const totalPage = Math.ceil(items.length / itemPerPage);// always give round up to whole number

//   const handlerNextPage = () => {
//     if (currentPage < totalPage) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlerPreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const indexOfLastItem = currentPage * itemPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemPerPage;
//   const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div>
//       <h1>Hello CodeSandbox</h1>

//       <ul>
//         {currentItem.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>

//       <button
//         onClick={() => handlerPreviousPage()}
//         disabled={currentPage === 1}
//       >
//         previous Page
//       </button>
//       {[...Array(totalPage)].map((item, index) => (
//         <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
//           <span style={{ color: "blue" }}>{index + 1}</span>
//         </button>
//       ))}

//       <button
//         onClick={() => handlerNextPage()}
//         disabled={currentPage === totalPage}
//       >
//         Next Page
//       </button>
//     </div>
//   );
// }

//------
//alternative working fine
// Math.max  and  Math.min   We want to move between pages safely — not go below page 1 and not go beyond totalPage.


//if items.length =0 then  Math.max(1, 0) // → returns 1 not 0 otherwise its show invalid
//Math.max(prev - 1, 1)// So this prevents the page number from ever going below 1.
//Math.min(prev + 1, totlePage)//So this prevents going beyond the last page.

//  Math.ceil Rounds up to the nearest integer 4.2=>5
// Math.floor Rounds down to the nearest integer 4.2=>4



// const totlePage = Math.max(1, Math.ceil(items.length / itemPerPage));
//   console.log("000000-----", totlePage);


//   const handlerPrevButton = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };


//   const handlerNextButton = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totlePage));
//   };



//--------------------
// import React, { useState } from "react";

// export default function App() {
//   const [pairs, setPairs] = useState([{ num1: "", num2: "", sum: 0 }]);

//   const handlerSumOfInput = (index, field, values) => {
//     const numPairs = [...pairs];
//     numPairs[index][field] = values;
//     numPairs[index].sum =
//       Number(numPairs[index].num1 || 0) + Number(numPairs[index].num2 || 0);
//     setPairs(numPairs);
//   };

//   const handlerPairAdd = () => {
//     setPairs([...pairs, { num1: "", num2: "", sum: 0 }]);
//   };

//   return (
//     <>
//       <h2>Add Two Numbers</h2>
//       {pairs.map((pair, index) => (
//         <div key={index}>
//           <input
//             type="number"
//             placeholder="add new number"
//             value={pair.num1}
//             onChange={(e) => handlerSumOfInput(index, "num1", e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="add new number"
//             value={pair.num2}
//             onChange={(e) => handlerSumOfInput(index, "num2", e.target.value)}
//           />
//           {pair.sum}
//         </div>
//       ))}

//       <button onClick={() => handlerPairAdd()}>Add</button>
//     </>
//   );
// }





// ✅ Scenario 2 — Identify Which Item Is Open (using id)
// When to use:
// When you have multiple items and you need to know which one is open.
// Example: Accordion items, FAQ list, collapsible menu sections

// Why?
// Because here the question is not open or closed, it's:
// "Which one is open?"
// So you store the id of the open item.



// import React, { useState } from "react";

// export default function App() {
//   const [openId, setOpenId] = useState(null);

//   const data = [
//     { id: 1, title: "T-shirt", description: "Cotton round-neck T-shirt" },
//     { id: 2, title: "Jeans", description: "Slim-fit blue denim jeans" },
//     { id: 3, title: "Hoodie", description: "Fleece-lined winter hoodie" },
//     { id: 4, title: "Jacket", description: "Water-resistant zip jacket" },
//     { id: 5, title: "Sneakers", description: "Comfortable everyday sneakers" },
//   ];

//   const handlerClick = (id) => {
//     setOpenId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div>
//       <h1>Accordion Example</h1>
//       {data.map((item) => (
//         <div key={item.id}>
//           <button
//             style={{ background: "black", color: "white" }}
//             onClick={() => handlerClick(item.id)}
//           >
//             {item.title} <span>{openId === item.id ? "u" : "d"}</span>
//           </button>

//           {openId === item.id && <p>{item.description}</p>}
//         </div>
//       ))}
//     </div>
//   );
// }



// ✅ Scenario 1 — Boolean Toggle State (true/false)

// When to use:
// When you have one single UI element that opens and closes
// Example: Sidebar, modal, dropdown, hamburger menu, alert box


//------------------------------------
// import React, { useState } from "react";

// export default function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   const toogleVisibility = () => {
//     setIsVisible((prev) => !prev);
//   };
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <button onClick={toogleVisibility}>{isVisible ? "hide" : "show"}</button>
//       <div>{isVisible && <p> I AM VISIBLE!</p>}</div>
//     </div>
//   );
// }



// //5️⃣ Passing state & toggling hidden value (button click → “I’m visible”)
//-------data is passed from parent to child here:

// import React, { useState } from "react";

// // Child component receives state & toggle function
// function Child({ isVisible, toggleVisibility }) {
//   return (
//     <div>
//       <button onClick={toggleVisibility}>
//         {isVisible ? "Hide" : "Show"}
//       </button>
//       {isVisible && <p>I'm visible!</p>}
//     </div>
//   );
// }


// // Parent component holds the state
// export default function ParentToggle() {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => setIsVisible(prev => !prev);

//   return (
//     <div>
//       <h2>Passing State & Toggling</h2>
//       <Child isVisible={isVisible} toggleVisibility={toggleVisibility} />
//     </div>
//   );
// }



//---------------- COUNTER TASK    -----------------
// import React, { useState } from "react";

// export default function App() {
//   const [counter, setCounter] = useState(0);

//   const handlerClick = (id) => {
//     setOpenId((prev) => (prev === id ? null : id));
//   };

//   const handlerIncrement = () => {
//     setCounter((prev) => prev + 1);
//   };

//   const handlerDecrement = () => {
//     setCounter((prev) => prev - 1);
//   };

//   const handlerReset = () => {
//     setCounter(0);
//   };

//   return (
//     <div>
//       <h1>Counter Example</h1>
//       <div>
//         <button onClick={handlerIncrement}>+</button>
//         {counter}
//         <button onClick={handlerDecrement}>-</button>
//         <button onClick={handlerReset}>reset</button>
//       </div>
//     </div>
//   );
// }



//---------------- DROPDOWN TASK    -----------------
// import React, { useState } from "react";

// export default function Dropdown() {
//   const [open, setOpen] = useState(false);

//   const data = [
//     { id: 1, title: "T-shirt" },
//     { id: 2, title: "Jeans" },
//     { id: 3, title: "Hoodie" },
//     { id: 4, title: "Jacket" },
//     { id: 5, title: "Sneakers" },
//   ];

//   return (
//     <div>
//       <button onClick={() => setOpen((prev) => !prev)}>
//         Select Product {open ? "▲" : "▼"}//This is Ternary Conditional Rendering
//       </button>

//       {open && (//Conditional Rendering
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// This means:
// If openId is true → show "u"//"▲"
// If openId is false → show "d"//"▼"


//{open && (ui)}
// If openId is true → show/render the UI inside (...)
// If openId is false → show nothing





//------Theme Toggle (Dark / Light Mode) using localStorage ---------


//---Inline Style Object with Dynamic (Conditional) Properties
//NOTES---
// const pageStyle = {
//   backgroundColor: theme === "light" ? "white" : "black",
//   color: theme === "light" ? "black" : "white",
//   height: "100vh",
//   padding: "20px",
// };

// <div style={pageStyle}></div>


// ✔ Why “Dynamic / Conditional”?
// Because the values in the style object depend on logic:
// theme === "light" ? "white" : "black"



// import React, { useState, useEffect } from "react";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState("light");

//   const handleToggle = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   const pageStyle = {
//     backgroundColor: theme === "light" ? "white" : "black",
//     color: theme === "light" ? "black" : "white",
//     height: "100vh",
//     padding: "20px",
//   };

//   return (
//     <div style={pageStyle}>
//       <h2>Theme: {theme}</h2>
//       <button onClick={handleToggle}>
//         Switch to {theme === "light" ? "dark" : "light"} mode
//       </button>
//     </div>
//   );
// }


////---------------- MODEL  TASK    -----------------

// import React, { useState } from "react";

// export default function ModalExample() {
//   const [open, setOpen] = useState(false);

//   const openModal = () => setOpen(true);
//   const closeModal = () => setOpen(false);

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>

//       {open && (
//         <div
//           onClick={closeModal}
//           style={{
//             position: "fixed",
//             inset: 0,
//           }}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               background: "white",
//               margin: "100px",
//               padding: "20px",
//               border: "1px solid black",
//             }}
//           >
//             <h3>Modal Title</h3>
//             <p>This is modal content.</p>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


//////---------------- TAB  TASK    -----------------

// import React, { useState } from "react";

// export default function Tabs() {
//   const [activeTab, setActiveTab] = useState("tab1");

//   return (
//     <div>
//       {/* Tab Buttons */}
//       <div>
//         <button onClick={() => setActiveTab("tab1")}>Tab 1</button>
//         <button onClick={() => setActiveTab("tab2")}>Tab 2</button>
//         <button onClick={() => setActiveTab("tab3")}>Tab 3</button>
//       </div>

//       {/* Tab Content */}
//       {activeTab === "tab1" && <p>This is content of Tab 1</p>}
//       {activeTab === "tab2" && <p>This is content of Tab 2</p>}
//       {activeTab === "tab3" && <p>This is content of Tab 3</p>}
//     </div>
//   );
// }




//////---------------- SEARCH FILTER    -----------------

// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");


//   const fetchApiData = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       if (!response.ok) {
//         throw new Error("response is not ok");
//       }
//       const responseData = await response.json();
//       setData(responseData);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchApiData();
//   }, []);

//   const searchFilteredItem = data.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );


//   //case-2
//   //must use return along with {}
//   // const searchFilteredItem = data.filter((user) =>{
//   //    return user.name.toLowerCase().includes(search.toLowerCase())
//   // });

//   return (
//     <div>
//       <h1>Hello CodeSandbox</h1>

//       <input
//         type="text"
//         placeholder="search by name......"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <ul>
//         {[...searchFilteredItem].map((item) => (
//           <li key={item.id}>
//             {item.name}-{item.city}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



//------------TASK CAROSUEL-----

// This is a ternary operator. for applying condition =>     condition ? ' ' : ' '   //condition ? valueIfTrue : valueIfFalse

//It is a logical AND (&&) condition used for conditional rendering.
// {condition && (JSX) }  and  {condition && (JSX) : (shows nothing) }  //{condition && (true) : (false) }
// means:

// 👉 If condition is true → React returns the JSX
// 👉 If condition is false → React returns false (shows nothing)


// import React, { useState } from "react";

// export default function App() {
//   const [startIndex, setStartIndex] = useState(0);
//   const cardsPerView = 2;
//   const data = [
//     { id: 1, name: "john", city: "mumbai" },
//     { id: 2, name: "alice", city: "goa" },
//     { id: 3, name: "price", city: "delhi" },
//     { id: 4, name: "andrew", city: "pune" },
//     { id: 5, name: "john", city: "mumbai" },
//     { id: 6, name: "alice", city: "goa" },
//     { id: 7, name: "price", city: "delhi" },
//     { id: 8, name: "andrew", city: "pune" },
//   ];

//   const cradStyle = {
//     backgroundColor: "#fff",
//   };

//   const mainStyle = {
//     backgroundColor: "orange",
//     padding: "10px 10px",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "15px",
//   };

//   const visibleCards = data.slice(startIndex, startIndex + cardsPerView);

//   const handlerPrev = () => {
//     setStartIndex((prev) =>
//       prev - cardsPerView < 0 ? prev : prev - cardsPerView
//     );
//   };

//   const handlerNext = () => {
//     setStartIndex((prev) =>
//       prev + cardsPerView >= data.length ? prev : prev + cardsPerView
//     );
//   };

//   return (
//     <div>
//       <div style={mainStyle}>
//         <button onClick={handlerPrev} disabled={startIndex === 0}>
//           {" "}
//           prev
//         </button>
//         {visibleCards.map((item) => (
//           <div key={item.id} style={cradStyle}>
//             <h1>{item.name}</h1>
//             <p>{item.city}</p>
//           </div>
//         ))}
//         <button
//           onClick={handlerNext}
//           disabled={startIndex + cardsPerView >= data.length}
//         >
//           {" "}
//           next
//         </button>
//       </div>
//     </div>
//   );
// }


/// for HIDE/SHOW BUTTON---

//  {/* 👈 Hide Prev Button */}
//         {startIndex > 0 && <button onClick={handlerPrev}>Prev</button>}
        

//         {/* 👉 Hide Next Button */}
//         {startIndex + cardsPerView < data.length && (
//           <button onClick={handlerNext}>Next</button>
//         )}





//---------------------------TIME BASED FEATURES-----
//Timing / Interval Pattern Used when UI updates with time. 
// setTimeout/setInterval/clearInterval/clearTimeout
// useState/useEffect/useRef
//String/Math.floor/ceil/pad.Start(2,'0')
// `${}`



//-------TIMER

// import { useState, useEffect, useRef } from "react";

// export default function App() {
//   const [seconds, setSeconds] = useState(0);
//   const timerRef = useRef(null);
//   console.log(timerRef);

//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(timerRef.current);
//   }, []);

//   return <h1>Time: {seconds} sec</h1>;
// }




//------- OTP TIMER


// import React, { useState, useEffect, useRef } from "react";

// export default function OtpTimer() {
//   const [counter, setCounter] = useState(10);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     if (counter === 0) return;

//     timerRef.current = setInterval(() => setCounter((prev) => prev - 1), 1000);

//     return () => clearInterval(timerRef.current);
//   }, [counter]);

//   return (
//     <div>
//       <h1>Resend OTP in: {counter}s</h1>

//       {counter === 0 && <button>Resend OTP</button>}
//     </div>
//   );
// }

//-----------------COUNTDOWN------

// import React, { useState, useEffect ,useRef } from "react";

// export default function Countdown() {
//   const [time, setTime] = useState(10);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     if (time === 0) return;
//     timerRef.current  = setInterval(() => {
//       setTime((prev) => prev - 1);
//     }, 1000);

//     return () => clearInterval( timerRef.current );
//   }, [time]);

//   return <h1>Countdown: {time}</h1>;
// }


//----------------------

// import React, { useState, useEffect, useRef } from "react";

// export default function Countdown() {
//   const [time, setTime] = useState(0);
//   const timerRef = useRef(null);

//   const hours = String(Math.floor(time / 3600)).padStart(2, "0");
//   const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
//   const seconds = String(time % 60).padStart(2, "0");

//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(timerRef.current);
//   }, []);

//   return (
//     <h1>
//       Countdown: {hours} : {minutes} : {seconds}
//     </h1>
//   );
// }



////------------STOPWATCH---
//--------
// import React, { useState, useRef, useEffect } from "react";

// export default function Stopwatch() {
//   const [time, setTime] = useState(0); // seconds
//   const [isRunning, setIsRunning] = useState(false);
//   const timerRef = useRef(null);

//   const start = () => {
//     if (!isRunning) {//!isRunning means only start the timer if it is NOT running.
//       setIsRunning(true);//Updates the state isRunning to true.
//       timerRef.current = setInterval(() => setTime(prev => prev + 1), 1000);
//     }
//   };

//   const pause = () => {
//     setIsRunning(false);
//     clearInterval(timerRef.current);
//   };

//   const reset = () => {
//     setIsRunning(false);
//     clearInterval(timerRef.current);
//     setTime(0);
//   };

//   useEffect(() => {
//     return () => clearInterval(timerRef.current); // cleanup
//   }, []);

//   const hours = String(Math.floor(time / 3600)).padStart(2, "0");
//   const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
//   const seconds = String(time % 60).padStart(2, "0");

//   return (
//     <div>
//       <h2>Stopwatch</h2>
//       <div>{hours}:{minutes}:{seconds}</div>
//       <button onClick={start} disabled={isRunning}>Start</button>
//       <button onClick={pause}>Pause</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }





//---------------------------------------



// import React, { useState } from "react";

// export default function App() {
//   const data = [
//     { id: 1, name: "Sanju", role: "Frontend", age: 25 },
//     { id: 2, name: "Aman", role: "Backend", age: 28 },
//     { id: 3, name: "Riya", role: "Frontend", age: 24 },
//     { id: 4, name: "Ankit", role: "Backend", age: 18 },
//     { id: 5, name: "Rupa", role: "Frontend", age: 14 },
//   ];

//   const [users, setUsers] = useState(data);
//   const [search, setSearch] = useState("");
//   const [sortAsc, setSortAsc] = useState(true);

//   const [editId, setEditId] = useState(null);

//   const [editForm, setEditForm] = useState({
//     name: "",
//     role: "",
//     age: "",
//   });

//   const filteredUser = users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const sortedUser = [...filteredUser].sort((a, b) =>
//     sortAsc ? a.age - b.age : b.age - a.age
//   );

//   const deletedUser = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   const startEdit = (user) => {
//     setEditId(user.id);
//     setEditForm({
//       name: user.name,
//       role: user.role,
//       age: user.age,
//     });
//   };

//   const saveEdit = (id) => {
//     setUsers(
//       users.map((user) => (user.id === id ? { ...user, ...editForm } : user))
//     );
//     setEditId(null);
//   };

//   return (
//     <div>
//       <h1>Table</h1>

//       <div>
//         <input
//           placeholder="seach by name"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button onClick={() => setSortAsc(!sortAsc)}>sort by age</button>

//         <table border="1">
//           <thead>
//             <tr>
//               <th>name</th>
//               <th>role</th>
//               <th>age</th>
//               <th>action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {sortedUser.map((user) => (
//               <tr key={user.id}>
//                 <td>
//                   {editId === user.id ? (
//                     <input
//                       value={editForm.name}
//                       onChange={(e) =>
//                         setEditForm({ ...editForm, name: e.target.value })
//                       }
//                     />
//                   ) : (
//                     user.name
//                   )}
//                 </td>

//                 <td>
//                   {editId === user.id ? (
//                     <input
//                       value={editForm.role}
//                       onChange={(e) =>
//                         setEditForm({ ...editForm, role: e.target.role })
//                       }
//                     />
//                   ) : (
//                     user.role
//                   )}
//                 </td>
//                 <td>
//                   {editId === user.id ? (
//                     <input
//                       value={editForm.age}
//                       onChange={(e) =>
//                         setEditForm({ ...editForm, age: e.target.age })
//                       }
//                     />
//                   ) : (
//                     user.age
//                   )}
//                 </td>
//                 <td>
//                   {editId === user.id ? (
//                     <button onClick={() => saveEdit(user.id)}>save</button>
//                   ) : (
//                     <>
//                       <button onClick={() => startEdit(user)}>edit</button>
//                       <button onClick={() => deletedUser(user.id)}>
//                         delete
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
