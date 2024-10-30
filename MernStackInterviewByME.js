///---  FILTER---------

// import React, { useState, useEffect } from "react";
// export default function SearchComponent() {
//   const [items, setItems] = useState([]);
  

//   console.log("itema---", items);

//   const FetchApisData = () => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => {
//         return response.json();
//       })
//       .then((responseData) => {
//         setItems(responseData);
//       })
//       .catch((error) => {
//         console.log("catched error ", error);
//       });
//   };

//   useEffect(() => {
//     FetchApisData();
//   }, []);

//   const FilteredItems = items.filter((item) => item.price > 100);

//   return (
//     <>
//       <h1>Filter Data-----</h1>

//       <ul>
//         {[...FilteredItems].map((item) => (
//           <li key={item.id}>{item.price}</li>
//         ))}
//       </ul>
//     </>
//   );
// }




// --QUESTION------- FILTER AND SORTED

// import React, { useState, useEffect } from "react";

// export default function FilterComponent() {
//   const [items, setItem] = useState([]);
//   const [sortOrder, setSortOrder] = useState(''); 
///NOTES-------------const [sortOrder, setSortOrder] = useState('asc'); --to set by default high rating

//   console.log(items);

//   const FetchApisData = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const responseData = await response.json();
//     setItem(responseData);
//   };

//   useEffect(() => {
//     FetchApisData();
//   }, []);

//   // const FilteredItems = items.filter((item) => item.price < 100);

//   const FilteredItems = items.filter((item) => item.rating.rate < 5);

//   const SortedItems = [...FilteredItems].sort((a, b) => {
//     if (sortOrder === "asc") {
//       return a.rating.rate - b.rating.rate;
//     } else {
//       return b.rating.rate - a.rating.rate;
//     }
//   });

//   return (
//     <>
//       <h1>Filter Data----</h1>
//       <div>
//         <select
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//         >
//           <option value="">Sort by Rating</option>
//           <option value="asc">Sort by high Rating</option>
//           <option value="desc">Sort by low Rating</option>
//         </select>
//       </div>

//       <ul>
//         {[...SortedItems].map((item) => (
//           <li key={item.id}>
//             {/* {item.price} */}
//             <p>{item.rating.rate}</p>
//           </li>
//         ))}
//       </ul>

///////--------------- another ways-----------------

{/* <button onClick={() => setSortOrder("asc")}>ascending</button>
<button onClick={() => setSortOrder("desc")}>descending</button> */}

//     </>
//   );
// }


//--QUESTION FILTER THEN SEARCH------------

// import React, { useState, useEffect } from "react";
// export default function SearchComponent() {
//   const [items, setItems] = useState([]);
//   const [serachTerm, setSerachTerm] = useState("");

//   console.log("itema---", items);

//   const FetchApisData = () => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => {
//         return response.json();
//       })
//       .then((responseData) => {
//         setItems(responseData);
//       })
//       .catch((error) => {
//         console.log("catched error ", error);
//       });
//   };

//   useEffect(() => {
//     FetchApisData();
//   }, []);

//   const FilteredItems = items.filter((item) =>
//     item.category.toLowerCase().includes(serachTerm.toLowerCase())
//   );

//   return (
//     <>
//       <h1>Search Data-----</h1>
//       <input
//         type="text"
//         placeholder="serach by name..."
//         value={serachTerm}
//         onChange={(e) => setSerachTerm(e.target.value)}
//       />

//       <p>Query Search : {serachTerm}</p>

//       <ul>
//         {[...FilteredItems].map((item) => (
//           <li key={item.id}>{item.category}</li>
//         ))}
//       </ul>
//     </>
//   );
// }


//QUESTION --- COUNTER AND COUNTER BAR

// import React, { useState } from "react";

// export default function CounterWithProgress() {
//   // Define state variables for the counter and progress
//   const [count, setCount] = useState(0);
//   const maxCount = 52; // Set the maximum count for the counter

//   // Function to start the counter
//   const startCounter = () => {
//     let counter = 0;
//     const interval = setInterval(() => {
//       counter += 1;
//       setCount(counter);
//       if (counter >= maxCount) {
//         clearInterval(interval); // Stop the counter at maxCount
//       }
//     }, 50); // Update every 50 milliseconds for faster counting
//   };

//   // Calculate the progress as a percentage of the max count
//   const progressPercentage = (count / maxCount) * 100;

//   return (
//     <>
//       <h1>Counter: {count}</h1>
//       <div
//         style={{
//           width: "100%",
//           backgroundColor: "#e0e0e0",
//           height: "30px",
//           marginBottom: "10px",
//         }}
//       >
//         <div
//           style={{
//             width: `${progressPercentage}%`,
//             backgroundColor: "red",
//             height: "100%",
//           }}
//         ></div>
//       </div>
//       <button onClick={startCounter}>Start Counter</button>
//     </>
//   );
// }



///--------------------------
// import React, { useState, useEffect } from "react";

// export default function CounterButton() {
//   // Define a state variable for the counter
//   const [count, setCount] = useState(0);

//   // Function to start the counter
//   const startCounter = () => {
//     let counter = 0;
//     const interval = setInterval(() => {
//       counter += 1;
//       setCount(counter);
//       if (counter >= 52) {
//         clearInterval(interval); // Stop the counter at 42
//       }
//     }, 50); // Update every 50 milliseconds for faster counting
//   };

//   return (
//     <>
//       <h1>Counter: +{count}</h1>
//       <button onClick={startCounter}>Start Counter</button>
//     </>
//   );
// }



// QUESTION-------------------CRUDOPERATION WITHTABLE--------------------------------

// import React, { useState, useEffect } from "react";

// export default function CrudOperationWithTable() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "",
//     status: "",
//     profile: "",
//   });
//   const [tableData, setTableData] = useState([]); // To store the data in the table
//   const [columnVisibility, setColumnVisibility] = useState({
//     name: true,
//     email: true,
//     role: true,
//     status: true,
//     profile: true,
//   });
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Load data from local storage when the component mounts
//   useEffect(() => {
//     const storedData = localStorage.getItem("tableData");
//     if (storedData) {
//       setTableData(JSON.parse(storedData));
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add the new entry to tableData
//     const updatedTableData = [...tableData, formData];
//     setTableData(updatedTableData);

//     // Store updated data in local storage
//     localStorage.setItem("tableData", JSON.stringify(updatedTableData));

//     // Reset the form fields
//     setFormData({
//       name: "",
//       email: "",
//       role: "",
//       status: "",
//       profile: "",
//     });
//   };

//   const handleColumnVisibilityChange = (e) => {
//     const { name, checked } = e.target;
//     setColumnVisibility((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <h1>Table-----</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Role:</label>
//           <input
//             type="text"
//             name="role"
//             value={formData.role}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Status:</label>
//           <input
//             type="text"
//             name="status"
//             value={formData.status}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Profile :</label>
//           <input
//             type="text"
//             name="profile"
//             value={formData.profile}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit">Add to Table</button>
//       </form>
//       <div style={{ marginTop: "20px", position: "relative" }}>
//         <button onClick={toggleDropdown}>Toggle Columns</button>
//         {isDropdownOpen && (
//           <div
//             style={{
//               position: "absolute",
//               top: "100%",
//               left: "0",
//               border: "1px solid #ccc",
//               backgroundColor: "#fff",
//               padding: "10px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             {Object.keys(columnVisibility).map((col) => (
//               <label key={col} style={{ display: "block" }}>
//                 <input
//                   type="checkbox"
//                   name={col}
//                   checked={columnVisibility[col]}
//                   onChange={handleColumnVisibilityChange}
//                 />
//                 {col.charAt(0).toUpperCase() + col.slice(1)}
//               </label>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Display the data in a table */}
//       <h2>Table Data</h2>
//       {tableData.length > 0 ? (
//         <table border="1" style={{ marginTop: "20px" }}>
//           <thead>
//             <tr>
//               {columnVisibility.name && <th>Name</th>}
//               {columnVisibility.email && <th>Email</th>}
//               {columnVisibility.role && <th>Role</th>}
//               {columnVisibility.status && <th>Status</th>}
//               {columnVisibility.profile && <th>Profile</th>}
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((entry, index) => (
//               <tr key={index}>
//                 {columnVisibility.name && <td>{entry.name}</td>}
//                 {columnVisibility.email && <td>{entry.email}</td>}
//                 {columnVisibility.role && <td>{entry.role}</td>}
//                 {columnVisibility.status && <td>{entry.status}</td>}
//                 {columnVisibility.profile && <td>{entry.profile}</td>}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data in the table yet.</p>
//       )}
//     </>
//   );
// }
