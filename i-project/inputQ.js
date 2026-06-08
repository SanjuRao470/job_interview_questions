// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [items, setItems] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editValue, setEditValue] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   console.log(editId);

//   useEffect(() => {
//     const fetchApis = async () => {
//       try {
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
//       }
//     };

//     fetchApis();
//   }, []);

//   const handlerDelete = (id) => {
//     const filtred = items.filter((item) => item.id !== id);
//     setItems(filtred);
//   };

//   const handlerEdit = (item) => {
//     setEditId(item.id);

//     setEditValue({
//       name: item.name,
//       email: item.email,
//       phone: item.phone,
//     });
//   };

//   const handlerSave = (item) => {
//     const updatedRow = items.map((item) => {
//       if (item.id === editId) {
//         return {
//           ...item,
//           ...editValue,
//         };
//       }

//       return item;
//     });

//     setItems(updatedRow);
//     setEditId(null);
//   };

//   return (
//     <div>
//       <h1>Hello CodeSandbox</h1>
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>email</th>
//             <th>phone</th>
//             <th>control</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <tr key={item.id}>
//               <td>
//                 {editId === item.id ? (
//                   <input
//                     type="text"
//                     name="name"
//                     value={editValue.name}
//                     onChange={(e) =>
//                       setEditValue({ ...editValue, name: e.target.value })
//                     }
//                   />
//                 ) : (
//                   item.name
//                 )}
//               </td>
//               <td>
//                 {editId === item.id ? (
//                   <input
//                     type="text"
//                     name="email"
//                     value={editValue.email}
//                     onChange={(e) =>
//                       setEditValue({ ...editValue, email: e.target.value })
//                     }
//                   />
//                 ) : (
//                   item.email
//                 )}
//               </td>
//               <td>
//                 {editId === item.id ? (
//                   <input
//                     type="text"
//                     name="phone"
//                     value={editValue.phone}
//                     onChange={(e) =>
//                       setEditValue({ ...editValue, phone: e.target.value })
//                     }
//                   />
//                 ) : (
//                   item.phone
//                 )}
//               </td>
//               <td>
//                 {editId === item.id ? (
//                   <button onClick={() => handlerSave(item)}>save</button>
//                 ) : (
//                   <button onClick={() => handlerEdit(item)}>edit</button>
//                 )}
//               </td>
//               <td>
//                 <button onClick={(id) => handlerDelete(item.id)}>delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }






//---------------------------------


// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [items, setItems] = useState([]);
//   const [input, setInput] = useState("");
 
//   const handlerSubmit = (e) => {
//     e.preventDefault();
//     if (!input.trim) return null;
//     // setItems([...items, input]);

//     setItems([...items, { id: Date.now(), text: input, completed: false }]);
//     setInput("");
//   };

//   const handlerMarkTask = (id) => {
//     const filtered = items.map((item) =>
//       item.id === id ? { ...item, completed: true } : item
//     );
//     setItems(filtered);
//   };

//   return (
//     <div>
//       <h1>Hello CodeSandbox</h1>
//       <form onSubmit={handlerSubmit}>
//         <input
//           type="text"
//           placeholder="type here......"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           required
//         />
//         <button type="submit">submit</button>
//       </form>

//       <ul>
//         {items.map((item) => (
//           <span>
//             <li key={item.id}>
//               <span
//                 style={{
//                   textDecoration: item.completed ? "line-through" : "none",
//                 }}
//               >
//                 {item.text}
//               </span>

//               <button
//                 onClick={(id) => handlerMarkTask(item.id)}
//                 disabled={item.completed}
//               >
//                 completed
//               </button>
//             </li>
//           </span>
//         ))}
//       </ul>
//     </div>
//   );
// }



///------------------------------------------------------------




// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [items, setItems] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editValue, setEditValue] = useState({ name: "" });

//   const handlerSubmit = (e) => {
//     e.preventDefault();

//     setItems([
//       ...items,

//       {
//         id: Date.now(),
//         ...editValue,
//       },
//     ]);
//     setEditValue({ name: "" });
//   };

//   const handlerEdit = (item) => {
//     setEditId(item.id);
//     setEditValue({
//       name: item.name,
//     });
//   };

//   const handlerSave = (item) => {
//     const updatedRow = items.map((item) => {
//       if (item.id === editId) {
//         return {
//           ...item,
//           ...editValue,
//         };
//       }
//       return item;
//     });
//     setItems(updatedRow);
//     setEditId(null);
//     setEditValue({
//       name: "",
//     });
//   };

//   const handlerDelete = (id) => {
//     const filtered = items.filter((item) => item.id !== id);
//     setItems(filtered);
//   };

//   return (
//     <div>
//       <h1>Hello CodeSandbox</h1>
//       <form onSubmit={handlerSubmit}>
//         <input
//           type="text"
//           placeholder="type here......"
//           name="name"
//           value={editValue.name}
//           onChange={(e) => setEditValue({ ...editValue, name: e.target.value })}
//           required
//         />
//         <button type="submit">submit</button>
//       </form>

//       <ul>
//         {items.map((item) => (
//           <span>
//             <li key={item.id}>
//               {item.name}
//               {item.id === editId ? (
//                 <button onClick={() => handlerSave(item)}>save</button>
//               ) : (
//                 <button onClick={() => handlerEdit(item)}>edit</button>
//               )}

//               <button onClick={() => handlerDelete(item.id)}>delete</button>
//             </li>
//           </span>
//         ))}
//       </ul>
//     </div>
//   );
// }

