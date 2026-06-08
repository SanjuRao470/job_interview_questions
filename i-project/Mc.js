// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [data, setData] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editValue, setEditValue] = useState({
//     name: "",
//     category: "",
//     price: "",
//   });

//   console.log(data);

//   const products = [
//     {
//       id: 1,
//       name: "Laptop",
//       category: "Electronics",
//       price: 55000,
//       stock: 12,
//     },
//     {
//       id: 2,
//       name: "Keyboard",
//       category: "Accessories",
//       price: 1200,
//       stock: 30,
//     },
//     {
//       id: 3,
//       name: "Mouse",
//       category: "Accessories",
//       price: 800,
//       stock: 25,
//     },
//   ];

//   const handleDelete = (id) => {
//     const filteredItem = data.filter((item) => item.id !== id);
//     setData(filteredItem);
//   };

//   const handleEdit = (item) => {
//     setEditId(item.id);

//     setEditValue({
//       name: editValue.name,
//       category: editValue.category,
//       price: editValue.price,
//     });
//   };

//   const handlerSave = (id) => {
//     const updatedRow = data.map((item) => {
//       if (item.id === editId) {
//         return {
//           ...item,
//           ...editValue,
//         };
//       }
//       return item;
//     });
//     setData(updatedRow);
//     setEditId(null);
//   };

//   useEffect(() => {
//     setData(products);
//   }, []);

//   return (
//     <>
//       <h1>App------</h1>

//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>name</th>
//             <th>category</th>
//             <th>price</th>
//             <th>control</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>
//                 {editId === item.id ? (
//                   <input
//                     value={editValue.name}
//                     onChange={(e) =>
//                       setEditValue({
//                         ...editValue,
//                         name: e.target.value,
//                       })
//                     }
//                   />
//                 ) : (
//                   item.name
//                 )}
//               </td>
//               <td>
//                 {editId === item.id ? (
//                   <input
//                     value={editValue.category}
//                     onChange={(e) =>
//                       setEditValue({
//                         ...editValue,
//                         category: e.target.value,
//                       })
//                     }
//                   />
//                 ) : (
//                   item.category
//                 )}
//               </td>
//               <td>
//                 {editId === item.id ? (
//                   <input
//                     value={editValue.price}
//                     onChange={(e) =>
//                       setEditValue({
//                         ...editValue,
//                         price: e.target.value,
//                       })
//                     }
//                   />
//                 ) : (
//                   item.price
//                 )}
//               </td>
//               <td>
//                 {editId === item.id ? (
//                   <button onClick={() => handlerSave(item)}>save</button>
//                 ) : (
//                   <button onClick={() => handleEdit(item)}>edit</button>
//                 )}
//                 <button onClick={() => handleDelete(item.id)}>delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }



//--------------------------------------------------------------------------


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

//------------------------------------------------------------------

// import React, { useState } from "react";

// export default function CrudOpration() {
//   const [items, setItems] = useState([]); // State to store list items
//   const [input, setInput] = useState(""); // State to store current input value
//   const [editIndex, setEditIndex] = useState(null); // State to track which item is being edited

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevents the page from reloading when the form is submitted.
//     if (editIndex !== null) {
//       // Update existing item
//       const updatedItems = items.map((item, index) =>
//         index === editIndex ? input : item
//       );
//       setItems(updatedItems);
//       setEditIndex(null); // Reset edit index
//     } else {
//       // Create new item
//       setItems([...items, input]);
//     }
//     setInput(""); // Clear input field
//   };

//   // Function to delete an item
//   const handleDelete = (index) => {
//     const filteredItems = items.filter((_, i) => i !== index); // _ represent current item in an array , i represent index of current item.
//     setItems(filteredItems);
//   };

//   // Function to edit an item
//   const handleEdit = (index) => {
//     setInput(items[index]); // Set input to the item being edited
//     setEditIndex(index); // Set edit index//This stores the position (index) of the item you're editing. It helps the app remember which item to update when you submit the form.
//   };

//   return (
//     <>
//       <h1>CRUD Operations Example</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)} // Update input state
//           placeholder="Add a new item"
//           required // Ensure input is not empty
//         />
//         <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
//       </form>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => handleEdit(index)}>Edit</button>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }


//--------------------------

// import React, { useEffect, useState } from "react";

// export default function App() {
//   const [items, setItems] = useState([]);
//   const [searchItem, setSearchItem] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(null);

//   useEffect(() => {
//     const fetchApis = async () => {
//       try {
//         setLoading(true);

//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );

//         if (!response.ok) {
//           throw new Error("Response was not ok");
//         }

//         const responseData = await response.json();

//         setItems(responseData);
//       } catch (err) {
//         console.error(err);
//         setErrorMessage(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApis();
//   }, []);

//   const filtered = items.filter((item) =>
//     item.name.toLowerCase().includes(searchItem.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Hello CodeSandbox</h1>

//       <input
//         type="text"
//         placeholder="type here..."
//         value={searchItem}
//         onChange={(e) => setSearchItem(e.target.value)}
//       />

//       <p>search item : {searchItem}</p>

//       {/* Loading */}
//       {loading && <h3>Loading...</h3>}

//       {/* Error */}
//       {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}

//       {/* Data */}
//       {!loading &&
//         !errorMessage &&
//         filtered.map((item) => <li key={item.id}>{item.name}</li>)}
//     </div>
//   );
// }

