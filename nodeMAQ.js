// 🔥 Most Likely Questions Based on Key Topics

// Here are the most probable questions based on the topics you listed:

// 1️⃣ Event-Driven Architecture & Non-Blocking I/O
// ✔ What is event-driven architecture?
// ✔ How does Node.js handle non-blocking I/O?

// 📌 Simplified Answer:

// Event-driven → Uses events & callbacks instead of waiting.

// Non-blocking I/O → Handles multiple requests without waiting for one to finish.

// Example: Node.js uses event loop & callbacks to handle thousands of requests at once.

// 2️⃣ Asynchronous Programming (Promises, async/await)
// ✔ What is the difference between Promises and async/await?
// ✔ Why is async/await preferred over callbacks?

// 📌 Simplified Answer:

// Promises → Handle async tasks (.then().catch()).

// async/await → Cleaner way to handle promises, avoids callback hell.

// Example:


// async function fetchData() {
//   let data = await fetch("https://api.example.com");
//   return data.json();
// }
// 3️⃣ Middleware & Express.js Lifecycle
// ✔ What is middleware in Express.js?
// ✔ Explain the request-response lifecycle in Express.js.

// 📌 Simplified Answer:

// Middleware → Functions that run before the request reaches the route. Used for authentication, logging, etc.

// Lifecycle → Request → Middleware → Route Handler → Response

// Example:


// app.use((req, res, next) => { console.log("Request received"); next(); });
// 4️⃣ RESTful APIs & Microservices Architecture
// ✔ What makes an API RESTful?
// ✔ How do microservices communicate?

// 📌 Simplified Answer:

// RESTful API → Uses HTTP methods (GET, POST, PUT, DELETE) & follows stateless principles.

// Microservices communication → Uses REST APIs or Message Queues (Kafka, RabbitMQ).

// 5️⃣ Authentication & Security Best Practices (JWT, OAuth)
// ✔ What is JWT, and how does it work?
// ✔ How does OAuth authentication work?

// 📌 Simplified Answer:

// JWT (JSON Web Token) → A token-based authentication method used for securing APIs.

// OAuth → Secure authentication using third-party providers (Google, Facebook login).

// Example: JWT is passed in the request headers (Authorization: Bearer <token>).

// 6️⃣ WebSockets & Real-Time Communication
// ✔ What is WebSocket, and how is it different from HTTP?
// ✔ How do you implement real-time features in Node.js?

// 📌 Simplified Answer:

// WebSockets → Full-duplex communication (server & client talk in real-time).

// Used for → Chat apps, live notifications, stock price updates.

// Example: Socket.io in Node.js enables real-time communication.


// io.on("connection", (socket) => { console.log("User connected"); });
// 7️⃣ Performance Optimization & Clustering
// ✔ How can you improve Node.js performance?
// ✔ What is clustering in Node.js?

// 📌 Simplified Answer:

// Performance tricks → Caching, using async code, optimizing queries, using Redis.

// Clustering → Uses multiple CPU cores to handle more requests in parallel.

// Example:


// const cluster = require("cluster");
// if (cluster.isMaster) { cluster.fork(); }
// 💡 Final Tip:
// 👉 Expect short coding tasks related to middleware, JWT auth, WebSockets, or async programming.
// 👉 Use real-world examples (like Netflix, Uber) to explain answers.
// 👉 Keep answers short and clear unless asked for more details.

// Do you need coding practice questions on any of these? 🚀

// Yes! Since you have limited time, here are quick coding challenges based on the topics you might be asked in the interview. Try solving these before your interview!

// 🔥 1️⃣ Event-Driven Architecture & Non-Blocking I/O

// ❓ Question: Create an event-driven system in Node.js where an orderPlaced event triggers a function that logs "Order received!".

// 💡 Hint: Use Node.js events module.


// const EventEmitter = require('events');

// const eventEmitter = new EventEmitter();

// // Event listener
// eventEmitter.on('orderPlaced', () => {
//     console.log('Order received!');
// });

// // Trigger event
// eventEmitter.emit('orderPlaced');
// 🔥 2️⃣ Asynchronous Programming (Promises, async/await)

// ❓ Question: Write an async function that fetches data from a fake API and logs the response.

// 💡 Hint: Use fetch() and async/await.


// async function fetchData() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// fetchData();
// 🔥 3️⃣ Middleware & Express.js Lifecycle

// ❓ Question: Create an Express.js middleware that logs the request method and URL before handling the request.

// 💡 Hint: Use app.use() for middleware.


// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//     console.log(`${req.method} request to ${req.url}`);
//     next(); // Pass to next middleware or route
// });

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));

// 🔥 4️⃣ RESTful APIs & Microservices Architecture

// ❓ Question: Write an Express.js route that returns a list of products in JSON format when a user makes a GET request.

// 💡 Hint: Use res.json().

// const express = require('express');
// const app = express();

// app.get('/products', (req, res) => {
//     res.json([
//         { id: 1, name: 'Laptop' },
//         { id: 2, name: 'Phone' }
//     ]);
// });

// app.listen(4000, () => console.log('Server running on port 4000'));

// 🔥 5️⃣ Authentication & Security Best Practices (JWT, OAuth)
// ❓ Question: Generate a JWT token in Node.js for user authentication.

// 💡 Hint: Use jsonwebtoken package.


// const jwt = require('jsonwebtoken');

// const user = { id: 123, username: 'testUser' };
// const secretKey = 'mySecretKey';

// // Generate Token
// const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

// console.log("JWT Token:", token);

// 🔥 6️⃣ WebSockets & Real-Time Communication
// ❓ Question: Implement a simple WebSocket server using socket.io.

// 💡 Hint: Install socket.io and express.

// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// io.on('connection', (socket) => {
//     console.log('User connected');
    
//     socket.on('message', (msg) => {
//         console.log('Message received:', msg);
//     });
// });

// server.listen(5000, () => console.log('WebSocket server running on port 5000'));

// 🔥 7️⃣ Performance Optimization & Clustering
// ❓ Question: Use Node.js clustering to run multiple instances of your app on multiple CPU cores.

// 💡 Hint: Use cluster module.


// const cluster = require('cluster');
// const os = require('os');
// const express = require('express');

// if (cluster.isMaster) {
//     console.log(`Master process ${process.pid} is running`);

//     for (let i = 0; i < os.cpus().length; i++) {
//         cluster.fork(); // Create a worker process for each CPU core
//     }
// } else {
//     const app = express();

//     app.get('/', (req, res) => {
//         res.send(`Handled by worker ${process.pid}`);
//     });

//     app.listen(3000, () => console.log(`Worker ${process.pid} started`));
// }
// 💡 Final Tips for Your Interview:
// ✔ Practice these questions to feel confident in writing code.
// ✔ Explain your thought process clearly while coding.
// ✔ Expect small modifications to these questions during the interview.