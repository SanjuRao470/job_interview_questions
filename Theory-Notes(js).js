//Javascript is single threaded (it can handle one task at a time) synchronous(blocking code) language.

//Event Loop:
//The event loop is a fundamental concept in asynchronous programming,
//particularly in environments like JavaScript running in a web browser or Node.js. 
//It allows for non-blocking operations, which is essential for handling tasks like I/O
//operations, user interactions, and timers without freezing the program.

//Like operation setTimeout,setTimeInterval, fetching Apis

//Event Loop: 
//The event loop continuously checks the call stack and the callback queue.
//If the call stack is empty, it moves the first callback from the callback queue to the call stack and executes it.

// QUESTION-1
//(will explore the differences between the JavaScript event loop(client side environment)
// and the Node.js event loop.(server side environment)?)

// One important feature of the JavaScript(browser)event loop is that it is single-threaded, 
// meaning that it can only execute one task at a time. 
// This can lead to performance issues when dealing with large or complex applications

// One key difference between the Node.js event loop and the JavaScript event loop is that
//Node.js uses a thread pool to handle long-running tasks,
//allowing the event loop to continue processing other events in the meantime. 
//This can greatly improve the performance and scalability of Node.js applications, 
//especially when dealing with I/O-heavy workloads

