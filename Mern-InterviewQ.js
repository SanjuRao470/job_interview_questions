//IMP - NOTES --

// Sorting and Filter: Filter items first, then arrange them in a specific order.
// Search and Filter: Filter items first, then search within the filtered results.
// Only Filter: Simply reduce the dataset based on specific conditions.



//QUESTION----- TPO DO CRUD OPRATION----

// import React, { useState } from 'react';

// export default function CrudOpration() {
//   const [items, setItems] = useState([]); // State to store list items
//   const [input, setInput] = useState(''); // State to store current input value
//   const [editIndex, setEditIndex] = useState(null); // State to track which item is being edited

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();// prevents the page from reloading when the form is submitted.
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
//     setInput(''); // Clear input field
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
//         <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
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


//////COUNTER-TIMER--------------

// import React, { useState, useEffect } from "react";

// export default function ConuterTime() {
//   //const [timeLeft, setTimeLeft] = useState(CountTimeApp());

//   const CountTimeApp = () => {
//     const targetData = new Date("December 31 ,2024 23:59:59").getTime();
//     const now = new Date().getTime();
//     const difference = targetData - now;

//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(CountTimeApp());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(CountTimeApp());
//     }, 1000);
//     return () => clearInterval(timer); //cleans up the timer when the component unmounts, ensuring no memory leaks or unnecessary updates.
//   }, []);

//   return (
//     <>
//       <h1>first conter timer</h1>
//       {timeLeft.days !== undefined ? (
//         <p>
//           {timeLeft.days} | {timeLeft.hours} | {timeLeft.minutes} |{" "}
//           {timeLeft.seconds}{" "}
//         </p>
//       ) : (
//         <p> that is the time</p>
//       )}
//     </>
//   );
// }



//QUESTION : Input questions---------------

// import React, { useState } from "react";

// export default function App() {
//   const [number, setNumber] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     if (value === "" || /^[0-9\b]+$/.test(value)) {
//       setNumber(value);
//       setErrorMessage("");
//     } else setErrorMessage("it only accept a valid number");
//   };

//   const handleButtonClick = () => {
//     if (number === "") {
//       setErrorMessage("Input is empty! Please enter a number.");
//     } else {
//       setNumber((prevNumber) =>
//         prevNumber === "" ? 1 : parseInt(prevNumber) + 1
//       );
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Number Incrementor</h1>
//       <input
//         type="text"
//         value={number}
//         onChange={handleInputChange}
//         placeholder="Enter a number"
//       />
//       <button onClick={handleButtonClick}>Increment</button>
//       {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//       <br></br>
//       <br></br>
//       {number}
//     </div>
//   );
// }


//// IN DIFFERENT WAYS --------------------------

// import React, { useState } from "react";

// export default function InputComponent() {
//   const [number, setNumber] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handlerInput = (e) => {
//     const value = e.target.value;
//     if (value === "" || /^[0-9\b]+$/.test(value)) {
//       setNumber(value);
//       setErrorMessage("");
//     } else {
//       setErrorMessage("only number is accepted!");
//     }
//   };

//   const handlerPlusButton = () => {
//     if (number === "") {
//       setErrorMessage("please enter valid number!");
//     } else {
//       setNumber((preNumber) =>
//         preNumber === "" ? 1 : parseInt(preNumber) + 1
//       );
//     }
//   };

//   const handlerMinusButton = () => {
//     if (number === "") {
//       setErrorMessage("please enter valid number!");
//     } else {
//       setNumber((preNumber) =>
//         preNumber === "" ? 1 : parseInt(preNumber) - 1
//       );
//     }
//   };

//   return (
//     <>
//       <h1> Coding----------</h1>
//       <button onClick={handlerPlusButton}>plus</button>

//       <input
//         type="text"
//         placeholder="enter valid input here....."
//         value={number}
//         onChange={handlerInput}
//       />
//       <button onClick={handlerMinusButton}>minus</button>

//       <p>{number}</p>
//       {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//     </>
//   );
// }



//QUESTION------------------ Filter Data

// Create a React component that displays a list of items
// and allows users to filter the list based on a search input.

// import React, { useState } from "react";

// export default function SearchFunction() {
//   const [searchData, setSearchData] = useState("");

//   const data = [
//     { id: 1, name: "user1", age: 20 },
//     { id: 2, name: "user3", age: 30 },
//     { id: 3, name: "User2", age: 40 },
//     { id: 4, name: "user5", age: 50 },
//     { id: 5, name: "User1", age: 20 },
//     { id: 6, name: "user3", age: 30 },
//     { id: 7, name: "user2", age: 40 },
//     { id: 8, name: "User5", age: 50 },
//   ];

//   const filteredData = data.filter((item) =>
//     item.name.toLowerCase().includes(searchData.toLowerCase())

//   //// --another-- //const filteredData = data.filter((item) => item.age > 30);
//   );

//   const HandlerSearchData = (e) => {
//     const value = e.target.value;
//     setSearchData(value);
//   };

//   return (
//     <>
//       <h1> code</h1>

//       {filteredData.length > 0 ? (  //conditional rendering
//         <ul>
//           {filteredData.map((item) => (
//             <li key={item.id}>
//               Name: {item.name} - Age : {item.age}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No matching data found</p> 
//       )}

//       <p>Search Query:{searchData} </p>

//       <input
//         type="text"
//         placeholder="search name.........."
//         value={searchData}
//         onChange={HandlerSearchData}
//       />
//     </>
//   );
// }


//-- CONDITIONAL RENDERING----
    // {filteredData.length > 0 ? (
    //also check if items array contains data, it renders a list of items. {filteredData > 0 ? (    
        // <ul>
        //           {filteredData.map((item) => (
        //             <li key={item.id}>
        //               Name: {item.name} - Age : {item.age}
        //             </li>
        //           ))}
        //         </ul>
    //       ) : (
    //         <p>No matching data found</p> 
    //       )}


///---QUESTION ---- REUSEABLE COMPONENT------------

 //-1- THERE ARE TWO COMPONENT  1-App, that's parent component  2- ResuableComponent


//1-App, that's parent component

//  import React from "react";
// import ResuableComponent from "./components/ResuableComponent";

// export default function App() {
//   return (
//     <div>
//       <div>
//         <ResuableComponent
//           title="Info Card"
//           content="This is an informational card."
//           type="info"
//         />
//         <ResuableComponent
//           title="Warning Card"
//           content="This is a warning card."
//           type="warning"  // you can take either danger
//         />
//       </div>
//     </div>
//   );
// }



 //2- ResuableComponent
//  import React from "react";

//  export default function ResuableComponent({ title, content, type }) {
//    const cardStyle = {
//      border: "1px solid #ccc",
//      padding: "20px",
//      borderRadius: "10px",
//      backgroundColor: type === "info" ? "orange" : "green",
//      color: type === "info" ? "white" : "red",
//    };
 
//    return (
//      <>
//        <h1>Resuable Button---</h1>
//        <div style={cardStyle}>
//          <h3>{title}</h3>
//          <p>{content}</p>
//        </div>
//      </>
//    );
//  }
 

//QUSETION===== another way of fetching api


// import React, { useState, useEffect } from "react";

// export default function SearchItemsComponent() {
//   const [items, setItems] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Use a constant value for items per page
//   console.log(items);

//   const FetchData = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const responseData = await response.json();
//     setItems(responseData);
//   };

//   useEffect(() => {
//     FetchData();
//   }, []);

//   const FilterItems = items.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>SearchItems Example</h1>
//       <ul>
//         {FilterItems.map((item) => (
//           <li key={item.id}>{item.title}</li> // Display current items
//         ))}
//       </ul>

//       <input
//         type="text"
//         placeholder="search items here....."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//     </div>
//   );
// }



//QUESTION==== // Fetch data from your API and show them in list  in a React component 
// async/await and .then()

//https://reqres.in/api/users?page=2

// import React, { useState, useEffect } from "react";

// export default function CrudOpration() {
//   const [data, setData] = useState([]);
  

//   const responseData = async () => {
//     const response = await fetch("https://reqres.in/api/users?page=2");
//     const resultdata = await response.json();
//     setData(resultdata.data); //REMEMBER THIS
//     console.log(resultdata);
//   };

//========or============
// const FetchData = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const responseData = await response.json();
//     setItems(responseData);
//     console.log(responseData);
//   };


// using ----- then()
// const FetchData = () => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => {
//         return response.json();
//       })
//       .then((responseData) => {
//         setItems(responseData);  //--Or
 // Assuming responseData has a "data" property
// setItems(responseData.data); // Update state with the items
//       })
//       .catch((error) => {
//         console.log("error ----", error);
//       });
//   };
  


//   useEffect(() => {
//     responseData();
//   }, []);

//   return (
//     <>
//       <h1> code---</h1>
//       <ul>
       
//         {data?.map((item) => (
//           <li key={item.id}>{item.id}</li>
//         ))}
//       </ul>
//     </>
//   );
// }


//--Question==


//Purpose of items?.map(...)=============//It makes the code safer and cleaner 
//The optional chaining operator ? is used here to ensure that if items is undefined or null, the .map() function will not be executed.
//If items is not defined (i.e., it’s still in its initial state of [] or hasn't been fetched yet),
// using items?.map(...) will safely return undefined instead of throwing an error.


//Reason===============

// == "https://fakestoreapi.com/products"

// [
//     { "id": 1, "title": "Product 1", ... },
//     { "id": 2, "title": "Product 2", ... }
//   ]

//// For fakestoreapi.com/products, the response is an array directly, so you use setItems(responseData).

  
//==  "https://reqres.in/api/users?page=2"
//   {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//       { "id": 7, "email": "user1@example.com", ... },
//       { "id": 8, "email": "user2@example.com", ... }
//     ]
//   }
  
// For reqres.in/api/users?page=2, the response is an object with the data inside the "data" field,
// so you need to use setItems(responseData.data) to get the array of users.


//=========================///


// 
// const axios = require('axios');
// const express = require('express');
// const app = express();
// const Port = 5000;

// app.use(express.json());

// function GetApi() {
//   app.get('/', async (req, res) => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users/1'); // External API
//       res.json(response.data); // Send the external API response as your API response
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching data' });
//     }
//   });
// }

// GetApi();

// app.listen(Port, () => {
//   console.log(`Server is running at ${Port}`);
// });


// ALL IMPORTANT QUESTIONS -----------------------
// Math.ceil() always rounds up to the nearest whole number, even if the decimal part is very small.
// Math.floor() always rounds down, ignoring the decimal part.
// Math.ceil(4.3);   // Output: 5
// Math.floor(4.3);  // Output: 4
//new Date().getTime() --- new Date().getTime() is a method in JavaScript that returns the number of milliseconds.
//new Date(): Creates a new Date object representing the current date and time (when the code is executed).
//getTime(): Retrieves the time represented by that Date object as the number of milliseconds



//QUESTION === Pagination=====
//---IMP NOTES:
// (_, index)   :to indicate that the first argument (which usually represents the current item in the array) is intentionally ignored or not used.
//  In this case, the actual array element isn't important, so it's replaced with _ to show it's not needed.

// index :  It's used here to assign a unique key to each <button> and to display the button number.

// import React, { useState, useEffect } from "react";

// export default function PaginationComponent() {

//   const [items, setItems] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(5); // Use a constant value for items per page
//   console.log(items);

//   const FetchData = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const responseData = await response.json();
//     setItems(responseData);
//   };

//   useEffect(() => {
//     FetchData();
//   }, []);


// //   // Calculate the number of pages
// //   const totalPages = Math.ceil(items.length / itemsPerPage);

//   // Function to handle pagination
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber); // Update the current page
//   };

//   // Calculate the index of the first and last item of the current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem); // Get items for the current page

//   return (
//     <div>
//       <h1>Pagination Example</h1>
//       <ul>
//         {currentItems.map((item, index) => (    ///{[...currentItems].map((item, index) => (  we can also write like this--
//           <li key={index}>{item.title}</li> // Display current items
//         ))}
//       </ul>
//       <div>
//         {/* Using spread operator to create an array and map to buttons */}
//         {[...Array(Math.ceil(items.length / itemsPerPage))].map((_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => paginate(index + 1)} // Call paginate on button click
//             style={{ margin: "0 5px" }}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>


//      {/* <div>
//           {Array(Math.ceil(items.length / itemsPerPage))
//             .fill()
//             .map((_, index) => (
//               <button key={index + 1} onClick={() => paginate(index + 1)}  style={{ margin: "0 5px" }}>    
// {index + 1}
//               </button>
//            ))}
//         </div> */}

//     </div>
//   );
// };



// PAGINATION ALONG WITH NEXT AND PREVIOUS BUTTON-----------

// import React, { useState, useEffect } from "react";
// export default function PaginationCompomnent() {
//   const [items, sretItems] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemPerPage, setItemPerPage] = useState(5);
//   console.log(items);

//   const FetchApisData = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const responseData = await response.json();
//     sretItems(responseData);
//   };

//   useEffect(() => {
//     FetchApisData();
//   }, []);

//   const indexOfLastItem = currentPage * itemPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemPerPage;
//   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

//   const Paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const TotalPage = Math.ceil(items.length / itemPerPage);

//   const handlerPreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   const handlerNextPage = () => {
//     if (currentPage < TotalPage) {
//       setCurrentPage((prevPage) => prevPage + 1);  //// Use functional update or prevPage refers to the latest state,
// which guarantees you're working with the latest state value:
//     }
//   };

//   return (
//     <>
//       <h1>Pagination-----</h1>
//       <ul>
//         {[...currentItems].map((item) => (
//           <li key={item.id}>{item.price}</li>
//         ))}
//       </ul>
//       <div>
//         <button
//           onClick={handlerPreviousPage}
//           disabled={currentPage === 1}
//           // style={{ color: "white", backgroundColor: "blue" }}
//         >
//           previous
//         </button>
//         {[...Array(TotalPage)].map((_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => Paginate(index + 1)}
//             style={{ margin: "0 5px" }}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           onClick={handlerNextPage}
//           disabled={currentPage === TotalPage}
//           // style={{ color: "white", backgroundColor: "blue" }}
//         >
//           next
//         </button>
//       </div>
//     </>
//   );
// }


////QUESTION === Sorting data=====

//import React, { useState, useEffect } from "react";

// export default function PaginationComponent() {
//   const [items, setItems] = useState([]);
//   const [sortOrder, setSortOrder] = useState("asc");

//   // Use a constant value for items per page
//   console.log(items);

//   const FetchData = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");//// gets you the raw response that is {}
//     const responseData = await response.json(); //parses the raw response into usable JSON
//     setItems(responseData);
//   };

//   useEffect(() => {
//     FetchData();
//   }, []);

//     //localeCompare is a method in JavaScript used to compare two strings
//   //meaning based on the alphabetical order.

//   const sortedItems = items.sort((a, b) => {
//     if (sortOrder === "asc") {
//       return a.title.localeCompare(b.title); // Ascending order
//     } else {
//       return b.title.localeCompare(a.title); // Descending order
//     }
//   });

//   // with price----

//   // const sortedItems = items.sort((a, b) => {
//   //   if (sortOrder === "asc") {
//   //     return a.price - b.price; // Ascending order by price
//   //   } else {
//   //     return b.price - a.price; // Descending order by price
//   //   }
//   // });

//   return (
//     <div>
//       <h1>Pagination Example</h1>
//       <ul>
//         {sortedItems.map((item, index) => (
//           <li key={item.id}>{item.title}</li> // Display current items
//         ))}
//       </ul>
//       <button onClick={() => setSortOrder("asc")}>ascending</button>
//       <button onClick={() => setSortOrder("desc")}>descending</button>
//     </div>
//   );
// }


// QUESTION ===== both filtering and sorting of data fetched from an API and filter products by name and sort them alphabetically.

// import React, { useState, useEffect } from "react";

// export default function  FilterAndSortExample() {
//   // State for items and search term
//   const [items, setItems] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc"); // State for sorting order (asc or desc)

//   const fetchData = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const responseData = await response.json();
//     setItems(responseData);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Function to handle filtering based on the search term
//   const filteredItems = items.filter(item =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Function to handle sorting based on sort order
//   const sortedItems = [...filteredItems].sort((a, b) => {
//     if (sortOrder === "asc") {
//       return a.title.localeCompare(b.title); // Ascending order
//     } else {
//       return b.title.localeCompare(a.title); // Descending order
//     }
//   });

//   return (
//     <div>
//       <h1>Filter and Sort Example</h1>

//       {/* Search input for filtering */}
//       <input
//         type="text"
//         placeholder="Search by name..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)} // Update search term
//       />

//       {/* Buttons to sort items */}
//       <button onClick={() => setSortOrder("asc")}>Sort Ascending</button>
//       <button onClick={() => setSortOrder("desc")}>Sort Descending</button>

//       <ul>
//         {sortedItems.map((item) => (
//           <li key={item.id}>{item.title}</li> // Display item title
//         ))}
//       </ul>
//     </div>
//   );
// };

///=== FORM HANDLING =================

// import React, { useState } from "react";

// export default function HandleFormComponent() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [formErrors, setFormErrors] = useState({});

//   const handlerChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handlerValidation = () => {
//     const newError = {};
//     if (!formData.name) {
//       newError.name = "name is required";
//     } else {
//       const firstLetter = formData.name.charAt(0);
//       if (firstLetter !== firstLetter.toUpperCase()) {
//         newError.name = "Name must start with an uppercase letter";
//       }
//     }
//     if (!formData.email.includes("@")) {
//       newError.email = "email is invalid";
//     }
//     if (formData.password.length < 6) {
//       newError.password = "password must be at least 6 characters";
//     }
//     return newError;
//   };

//   const handlerSubmit = (e) => {
//     e.preventDefault();
//     const formErrors = handlerValidation();

//     if (Object.keys(formErrors).length === 0) {
//       console.log("Form submitted successfully:", formData);
//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//       });
//       setFormErrors({});
//     } else {
//       setFormErrors(formErrors);
//     }
//   };

//   return (
//     <>
//       <h1>Form Handling---</h1>
//       <div>
//         <form onSubmit={handlerSubmit}>
//           <div>
//             <label>Name :</label>
//             <input
//               type="text"
//               placeholder="enter  name..."
//               name="name"
//               value={formData.name}
//               onChange={handlerChange}
//               required
//             />
//             {formErrors.name && (
//               <span style={{ color: "red" }}>{formErrors.name}</span>
//             )}
//           </div>
//           <div>
//             <label>Email :</label>
//             <input
//               type="text"
//               placeholder="enter  email..."
//               name="email"
//               value={formData.email}
//               onChange={handlerChange}
//               required
//             />
//             {formErrors.email && (
//               <span style={{ color: "red" }}>{formErrors.email}</span>
//             )}
//           </div>
//           <div>
//             <label>Password :</label>
//             <input
//               type="text"
//               placeholder="enter  password..."
//               name="password"
//               value={formData.password}
//               onChange={handlerChange}
//               required
//             />
//             {formErrors.password && (
//               <span style={{ color: "red" }}>{formErrors.password}</span>
//             )}
//           </div>

//           <div>
//             <button type="submit">submit</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

