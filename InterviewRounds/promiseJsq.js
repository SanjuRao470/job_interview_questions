// function demoPromise() {
//   return new Promise((resolve, reject) => {
//     console.log("Promise is pending...");
// //const success = true;//fulfilled
// const success = false;//rejected
//     setTimeout(() => {
//       if (success) {
//         resolve("Promise fulfilled!");
//       } else {
//         reject("Promise rejected!");
//       }
//     }, 2000);
//   });
// }

// // Usage for fulfilled:
// demoPromise()
//   .then(result => console.log(result))   // Logs: Promise fulfilled!
//   .catch(error => console.error(error));



// another ways

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success!");
//   }, 1000);
// });

// promise
//   .then(result => console.log(result))
//   .catch(error => console.error(error));


//-------  another ways

// fetchData()
//   .then(res => process(res))
//   .then(data => save(data))
//   .catch(err => console.error(err));



//--async/await

// async function getData() {
//   return "Hello";
// }


// async function loadData() {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }


// ❌ Wrong

// const result = await fetchData(); // outside async ❌


// ✅ Correct

// async function test() {
//   const result = await fetchData();
// }



//--promise chaining

// getUser()
//   .then(user => {
//     return getOrders(user.id);   // returns a promise
//   })
//   .then(orders => {
//     return getPayment(orders[0]);
//   })
//   .then(payment => {
//     console.log(payment);
//   })
//   .catch(err => {
//     console.error(err);
//   });



//❌ Wrong (Breaks Chain)

// .then(user => {
//   getOrders(user.id); // not returned ❌
// })


// ✅ Correct

// .then(user => {
//   return getOrders(user.id); // returned ✅
// })



//-----------------

// ✅ How Callback Hell is Solved

// Promises
// Async / Await

// 🟢 Same Code Using Promise
// getUser(id)
//   .then(user => getOrders(user.id))
//   .then(orders => getPayment(orders[0]))
//   .then(payment => getInvoice(payment.id))
//   .then(invoice => console.log(invoice))
//   .catch(err => console.error(err));


// 🟢 Using Async/Await
// async function getInvoiceData(id) {
//   try {
//     const user = await getUser(id);
//     const orders = await getOrders(user.id);
//     const payment = await getPayment(orders[0]);
//     const invoice = await getInvoice(payment.id);
//     console.log(invoice);
//   } catch (err) {
//     console.error(err);
//   }
// }

//---callback Hell

//WRITE CALLBACK HELL CODE

// function step1(callback) {
//     setTimeout(() => {
//       console.log("Step 1 completed");
//       callback();
//     }, 1000);
//   }
  
//   function step2(callback) {
//     setTimeout(() => {
//       console.log("Step 2 completed");
//       callback();
//     }, 1000);
//   }
  
//   function step3(callback) {
//     setTimeout(() => {
//       console.log("Step 3 completed");
//       callback();
//     }, 1000);
//   }
  
//   function step4(callback) {
//     setTimeout(() => {
//       console.log("Step 4 completed");
//       callback();
//     }, 1000);
//   }
  
//   // Calling each function in a nested way (Callback Hell)
//   step1(() => {
//     step2(() => {
//       step3(() => {
//         step4(() => {
//           console.log("All steps completed");
//         });
//       });
//     });
//   });

//RESULT:===========
// Step 1 completed
// Step 2 completed
// Step 3 completed
// Step 4 completed
// All steps completed



//--callback

// function getUser(callback) {
//      console.log("start fetching data---");
//   setTimeout(() => {
//     const data = { id: 1, name: "Sanju" };
//     callback(data);
//   }, 1000);
// }

// getUser((receivedData) => {
//   console.log("receivedData:", receivedData);
// });