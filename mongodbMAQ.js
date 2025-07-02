// 🔥 Most Likely MongoDB Interview Questions (Simplified)
// If they ask about MongoDB & Database Design, expect questions on:

// 1️⃣ Aggregation Framework
// ✔ What is MongoDB Aggregation Framework?
// ✔ How does $match and $group work in aggregation?

// 📌 Simplified Answer:

// Aggregation → Used to process & transform data (like SQL GROUP BY).

// Example: Find total sales per category:

// js
// Copy
// Edit
// db.sales.aggregate([
//     { $group: { _id: "$category", totalSales: { $sum: "$amount" } } }
// ])
// 2️⃣ Indexing
// ✔ Why do we use indexes in MongoDB?
// ✔ How do you create an index on a field?

// 📌 Simplified Answer:

// Indexing speeds up queries. Without it, MongoDB scans every document.

// Example: Create an index on email:

// js
// Copy
// Edit
// db.users.createIndex({ email: 1 })  // 1 = Ascending, -1 = Descending
// 3️⃣ Replication
// ✔ What is replication in MongoDB?
// ✔ How does a replica set work?

// 📌 Simplified Answer:

// Replication → Copies data across multiple servers for high availability.

// Replica Set → 1 Primary, Multiple Secondary nodes.

// 4️⃣ Schema Design & Data Transactions
// ✔ How do you design a schema in MongoDB?
// ✔ How do you handle transactions in MongoDB?

// 📌 Simplified Answer:

// Schema Design → Use embedded documents for one-to-few relationships, references for one-to-many.

// Transactions (like SQL transactions) → session.startTransaction() to ensure all operations succeed or fail together.

// Example: Atomic transaction across multiple collections

// js
// Copy
// Edit
// const session = db.getMongo().startSession();
// session.startTransaction();
// try {
//     db.accounts.updateOne({ _id: 1 }, { $inc: { balance: -100 } }, { session });
//     db.accounts.updateOne({ _id: 2 }, { $inc: { balance: 100 } }, { session });
//     session.commitTransaction();
// } catch (error) {
//     session.abortTransaction();
// }
// 5️⃣ Relationships in NoSQL Databases
// ✔ How do you handle relationships in MongoDB?
// ✔ When should you use embedding vs referencing?

// 📌 Simplified Answer:

// Embedding → Stores related data inside the same document (faster reads).

// Referencing → Uses ObjectId references (better for large data sets).

// Example: Embedding

// js
// Copy
// Edit
// {
//    _id: 1,
//    name: "John",
//    address: { city: "Delhi", country: "India" }
// }
// Example: Referencing


// {
//    _id: 1,
//    name: "John",
//    addressId: ObjectId("617d3b9...")
// }
// 6️⃣ Query Optimization
// ✔ How do you optimize queries in MongoDB?
// ✔ How do you check if a query is using an index?

// 📌 Simplified Answer:

// Optimize by: Using indexes, avoiding $lookup in large collections, and limiting results.

// Check query performance:


// db.users.find({ email: "test@example.com" }).explain("executionStats")

// 💡 Final Tips:
// Expect coding tasks like writing queries using Aggregation, Indexing, or Transactions.

// Practice explaining your database choices (why you used embedding or referencing).

// Keep answers short & clear unless asked for more details.