//NOTES-----------
//MONGO SHELL KNOWN AS CLIENT/ APPLICATION
//mongodb provide a router called mongos

//interview questions

//1- How can you find a document with an array containing a specific value in MongoDB?
//it is Projection Operators
//Both the $ operator and the $elemMatch operator project the first matching element from an array based on a condition.

// You can use the $elemMatch operator to find a document with an array containing a specific value 
// in MongoDB. For example, to find documents in the "collection" collection with an array 
// field "field1" containing the value "value1",

//example
// you can use the following query:

// db.collection.find({ field1: { $elemMatch: { $eq: "value1" } } })
//OR--------
// db.schools.find( { zipcode: "63109" },
//     { students: { $elemMatch: { school: 102, age: { $gt: 10} } } } )
//OR--------
//{ "_id" : 4, "students" : [ { "name" : "ruth", "school" : 102, "age" : 16 } ] }/// THIS IS CALL DOCUMENT  {}
 // HOW TO USE THIS { "_id" : 4, "students" : [ $elemMatch: { "name" : "ruth", "school" : 102, "age" : 16 } ] }

// 

//Question:

// why do you choose mongoDB?
// because it offers greater flexbility and schema less design and making it easier to handle unstructured DataSet.


//what do you think to choose  between mongodb and  other database like Mysql and Post greSql?

// When choosing between MongoDB, MySQL, and PostgreSQL, it depends on the use case:

// MongoDB: Best for unstructured or rapidly changing data, scalability, and flexibility. (e.g., real-time apps).
// MySQL: Ideal for structured data, simple queries, and transactions. (e.g. e-commerce, banking).
// PostgreSQL: Best for complex queries, strong data integrity, and extensibility. (e.g., analytics, geospatial apps).

// Choose MongoDB for flexibility, MySQL for simplicity, and PostgreSQL for complexity and reliability.


 //2- diff b/w MySQL and MongoDB
 //MySQL and MongoDB are both popular database management systems,
 // but they differ in their architectures and Use Cases.


    //MYSQL                                                                //MONGODB
//  MySQL is a relational database management                        MongoDB, on the other hand, is a NoSQL database
//  system (RDBMS) that uses structured query language               management system that uses a document-oriented 
//  (SQL) for managing and manipulating data.                       data model.It stores data in flexible, JSON-like documents,

//Schema:

// SQL: Fixed schema with predefined tables and columns. 
 //For example, if you create a users table with columns name, email, and age, every entry in the table must have these fields.

 // MongoDB: Flexible schema with JSON-like documents.
 //For example, one document might have name and email, while another might have name, email, and age.

// Scalability:

// SQL: Vertical scaling.
//SQL  scale by adding more power like (CPU, RAM, etc.) to a single server

// MongoDB: Horizontal scaling.
//MongoDB scales by distributing data across multiple servers in mongoDB cluster(which is also known as sharding).

//IMPORTANT NOTES :---
//Both Replication(duplication of dataset) and sharding(distribution of dataset in horizontally) in MongoDB helps in scaling of database.
//Where replication helps in data availability, sharding is useful to horizontally scale large datasets.


//3-Does MongoDB support primary key and foreign key relationship?
// Does MongoDB support primary-key, foreign-key relationships? By default, MongoDB
// doesn't support primary key-foreign key relationships.
// Every document in MongoDB contains an _id key field that uniquely identifies the document.

//4- is there any alternative to foreign key?
//The alternative to foreign keys in MongoDB is to use a technique called "Embedded Documents" or "Document References." Embedded Documents: 
//In this approach, you can embed related data directly within a document.


//5-explanation/diff of JSON and BSON in the context of MongoDB along with example data:

//JSON (JavaScript Object Notation):
// JSON is a lightweight data format that is easy to read and write.
//  It is text-based and is often used for transmitting data in web applications.

//example
// {
//"_id": ObjectId("60d5ec62f10a9e37d7f48b9a"), //this _id make every document unique in mongodb we consider it as primary key
//     "name": "Alice",
//     "age": 30,
//     "email": "alice@example.com",
//     "address": {
//         "street": "123 Maple Street",
//         "city": "Wonderland",
//         "zip": "12345"
//     },
//     "interests": ["reading", "hiking", "coding"]
// }


//BSON (Binary JSON):
//BSON is a binary representation of JSON-like documents. we can say BSON extends JSON with 
//additional data types, including Date and BinData(Creates a binary data object),


//example
// {
//     "name": "Alice",
//     "age": 30,
//     "email": "alice@example.com",
//     "address": {
//         "street": "123 Maple Street",
//         "city": "Wonderland",
//         "zip": "12345"
//     },
//     "interests": ["reading", "hiking", "coding"],
//     "createdAt": {"$date": "2024-06-11T10:00:00Z"},
//     "profilePicture": {"$binary": "R0lGODlhPQBEAPeoAJosM....", "$type": "00"}
// }


//Differences between JSON and BSON
// Format:     JSON is text-based while BSON is binary based.

// Data Types:   BSON supports more data types than JSON,
//  such as Date, Binary, ObjectId, Code, and Decimal128.

// Size and Efficiency:   BSON is designed to be space-efficient
//  and is faster to encode and decode compared to JSON, especially for larger documents.


//important points to know

// Usage in MongoDB
// MongoDB uses BSON internally to represent documents.
// When you insert a JSON document into MongoDB, it is converted into BSON. 
// Similarly, when you retrieve a document from MongoDB, it is converted from BSON back to JSON.


//5- difference b/w collection,document,embedded document
// {
//     "name": "Alice",
//     "age": 30,
//     "email": "alice@example.com",
//     "address": {
//         "street": "123 Maple Street",
//         "city": "Wonderland",
//         "zip": "12345"
//     },
//     " Paramanent address": {
//         "street": "987 Maple Street",
//         "city": "Wonderland road",
//         "zip": "1234567788"
//     },
//     "interests": ["reading", "hiking", "coding"],
//     "createdAt": {"$date": "2024-06-11T10:00:00Z"},
//     "profilePicture": {"$binary": "R0lGODlhPQBEAPeoAJosM....", "$type": "00"}
// }


// Key Points
// Collection: The users collection holds multiple documents.
// Document:   The whole JSON object we inserted is a document.
// Embedded Document(we can say nested document): The address field within the document is an embedded document,
//  containing its own set of key-value pairs.

//6-Here are five key advantages of BSON over JSON in MongoDB:
//OR

// 1-Additional Data Types: BSON supports more data types than JSON,such as Date, Binary, ObjectId, Code, and Decimal128,
//  allowing for richer and more precise data representation.

// 2-Efficient Encoding and Decoding: BSON is designed for efficient encoding and decoding, 
// making it faster to process compared to JSON, especially for larger documents.

// 3-Compact Storage: BSON's binary format is more space-efficient than JSON's text format,
//  resulting in reduced storage requirements and improved performance for database operations.

// 4-Traversable Structure: BSON includes length prefixes for strings and documents, allowing
//  MongoDB to traverse and manipulate documents more efficiently.

// 5-Index Optimization: BSON's structure allows for better indexing capabilities, which improves
//  query performance and speeds up data retrieval in MongoDB.


//7- Define Replication in MongoDB.
// Replication in MongoDB is the process of creating a copy of the same data set in more than one MongoDB server.

// Replication is the process of synchronizing data across multiple MongoDB servers to provide redundancy, 
// increase availability, and improve scalability. In a replicated MongoDB deployment, one server acts as the 
// primary server, while the others act as secondary servers. The primary server receives all write operations 
// and propagates changes to the secondary servers. If the primary server fails, one of the secondary servers is
// automatically elected as the new primary.Replication can be used for backup and disaster recovery, load balancing,
// and improving read performance.
//The set of servers that maintain the same copy of data is known as replica servers or MongoDB instances.

// Key Features of Replication:
// Replica sets are the clusters of N different nodes that maintain the same copy of the data set.
// The primary server receives all write operations and record all the changes to the data i.e, oplog.
// The secondary members then copy and apply these changes in an asynchronous process.
// All the secondary nodes are connected with the primary nodes. there is one heartbeat signal from the primary nodes. 
// If the primary server goes down an eligible secondary will hold the new primary.

//IMPORTANT POINTS
//Replication is also helpful in case of an event like hardware failure or a server crash.
//Replication has several benefits. It increases data availability ,act as a backup and reliability 
//thanks to there being multiple live copies of your data.

// Advantages of Replication
// High Availability of data disasters recovery
// No downtime for maintenance ( like backups index rebuilds and compaction)
// Read Scaling (Extra copies to read from)


//Sharding TOPIC
//Each Shard holds some pieces of data
//8-What is Sharding in MongoDB, and how does it work?
//Sharding is a process of partitioning data across multiple servers in a MongoDB cluster.
//It helps in scaling the database horizontally, by distributing the data across multiple servers.
//In sharding, the data is divided into small chunks called shards, and each shard is stored
//on a different server. MongoDB uses a sharding key to determine
//which shard the data should be stored on, based on the value of the sharding key.


//IMP POINT:A MongoDB cluster refers to a group of MongoDB servers


//Advantages of Sharding
// Sharding adds more server to a data field automatically adjust data loads across various servers.
// The number of operations each shard manage got reduced.
// It also increases the write capacity by splitting the write load over multiple instances.
// It gives high availability due to the deployment of replica servers for shard and config.
// Total capacity will get increased by adding multiple shards.

//Conclusion
//Both Replication(duplication of dataset) and sharding(distribution of dataset in horizontally) in MongoDB helps in scaling of database.
//Where replication helps in data availability, sharding is useful to horizontally scale large datasets.


//9- When should you embed one document within another in MongoDB?

//Embedding one document within another in MongoDB should be done when the two documents have a 
//parent-child relationship, and the child document is always accessed with the parent document.

//Embedding:
// if number of comments per post is not expected to be very large, 
// embedding comments within the blog post document could be a suitable choice
// {
//     "_id": ObjectId("..."),
//     "title": "MongoDB Embedding Example",
//     "content": "This is an example of embedding documents in MongoDB.",
//     "comments": [
//       {
//         "user": "User1",
//         "comment": "Great post!"
//       },
//       {
//         "user": "User2",
//         "comment": "Very informative, thanks!"
//       }
//     ]
//   }


//Referencing:
// if the number of comments per post could be very large,
//  referencing comments from a separate collection might be more appropriate
// {
//     "_id": ObjectId("..."),
//     "title": "MongoDB Embedding Example",
//     "content": "This is an example of embedding documents in MongoDB.",
//     "comments": [
//      {
//     "_id": ObjectId("comment1_id"),
//     "user": "User1",
//     "comment": "Great post!"
//   }
//   {
//     "_id": ObjectId("comment2_id"),
//     "user": "User2",
//     "comment": "Very informative, thanks!"
//   }
//     ]
//   }

  //10-Does MongoDB support Foreign Key constraints?
// A18: No, MongoDB does not support Foreign Key constraints. However,
//  it offers a feature called as manual references/embedded document, which is used to mimic the
//   behavior of Foreign Key constraints.

//11-How can you implement Transactions in MongoDB?
// MongoDB supports multi-document transactions in versions 4.0 and later.
// Transactions can be implemented using the following steps:

// Remember,transactions in MongoDB are only available
//  replica set deployments and cannot be used with standalone servers

// here are all the steps to implement transactions in MongoDB:

// 1-Set up a replica set if you haven't already.
//2- Start a session. You can start a session using the startSession() method
//3- Begin a transaction within the session using the startTransaction() method.
//4- Perform CRUD operations within the transaction.
// 5-If all operations within the transaction are successful and you want to
//  make the changes permanent, commit the transaction using the commitTransaction() method.
//6- Abort the transaction (rollback) if any operation fails.abort the transaction using the abortTransaction() method.
//7- End the session when finished.
// Once you're done with the transaction and associated operations, end the session using the endSession() method.
  
//12-aggregation pipeline in MongoDB
// The aggregation pipeline in MongoDB is a powerful framework for performing 
// data aggregation operations on collections of documents. It allows you to process and transform
//  documents in multiple stages to produce aggregated results. Each stage in the pipeline 
//  a specific operation on the input documents and passes the results to the next stage.

//1- Input Stage:   The aggregation pipeline starts with an input stage
//  where you specify the collection from which to retrieve documents.

// 2-Pipeline Stages:  After the input stage, you can add multiple pipeline
//  stages, each performing a specific operation on the documents.

// pipeline stages include:

// $match: Filters documents based on specified criteria.
// $group: Groups documents by a specified key and performs aggregation operations within each group.
// $project: Reshapes documents by including, excluding, or transforming fields.
// $sort: Sorts documents based on specified criteria.
// $limit: Limits the number of documents passed to the next stage.
// $lookup: Performs a left outer join with another collection to add related documents.

// Q-13 When should you choose Redis over MongoDB, or vice versa?
// Redis is often a better choice for applications that require high-speed data access, 
// such as real-time messaging systems or caching layers, while MongoDB is better suited 
// for applications that require more complex queries and support for a wider range of data types.



///INDEXING

// Indexing in MongoDB improves query performance by creating a data structure that
//  allows faster data retrieval without scanning the entire collection.

// Indexing in MongoDB is a process that improves query performance by allowing the database to 
// quickly locate and retrieve specific data. An index is a special data structure that stores
// a portion of the data in a way that makes queries more efficient. Without an index, MongoDB
// must scan every document in a collection, resulting in slower queries. Indexes can be created on fields
// (e.g., single-field, compound-field) to optimize searches, sorting, and filtering.


//EXAMPLE :  db.collection.createIndex({ name: 1 });

//const users =[
// {
//   "_id": 1,
//   "name": "John",
//   "age": 25
// },
// {
//   "_id": 2,
//   "name": "Alice",
//   "age": 30
// },
// {
//   "_id": 3,
//   "name": "Bob",
//   "age": 22
// }
//]

// //create an index
// db.users.createIndex({ age: 1 }) // 1 for ascending order
// db.users.find({ age: 25 })

// MongoDB would have to scan all documents to find the matching ones. However, 
// if you create an index on age, MongoDB will use this index to quickly locate the relevant documents.


// Why it works
// The index structure allows MongoDB to skip irrelevant documents.
// Queries with filters, sorting, or range conditions on indexed fields become faster because they don't need to scan all records.



//Here are some commonly asked Mongoose methods in interviews:

// save() - Saves a document to the database.
// find() - Retrieves multiple documents that match a query.
// findOne() - Retrieves a single document that matches a query.
// findById() - Finds a document by its _id field.
// updateOne() - Updates a single document that matches a query.
// deleteOne() - Deletes a single document that matches a query.
// findByIdAndUpdate() - Finds a document by _id and updates it.
// populate() - Populates referenced documents in a query.
// countDocuments() - Counts documents matching a query.
// aggregate() - Performs aggregation operations on data.


//QUESTION-----
//To merge 5 APIs from Google and 5 from Facebook into MongoDB?

//- Fetch Data: Use axios to call 5 Google and 5 Facebook APIs.
// const googleData = await axios.get('google_api_url');
// const facebookData = await axios.get('facebook_api_url');

//- Merge Data: Combine responses into one array.
//---const mergedData = [...googleData.data, ...facebookData.data];

//-Insert Data into MongoDB: Use the insertMany() method to insert the combined data into a MongoDB collection.
//await YourModel.insertMany(mergedData);



//------ AGGREGATION FRAMEWORK----------

// MongoDB Aggregation Framework → A set of tools and methods in MongoDB for processing and transforming data. such as grouping, sorting,filtering

// Aggregation Pipeline → A step-by-step data processing method within the Aggregation Framework, where data flows through multiple transformation stages. 🚀

//SERIES OF STAGES------
// $match: Filters documents based on specified criteria.
// $group: Groups documents by a specified key and performs aggregate computations.
// $project: Reshapes documents by including, excluding, or adding new fields.
// $sort: Sorts documents by specified fields.
// $limit: Limits the number of documents passed to the next stage.
// $skip: Skips a specified number of documents.
// $unwind: Deconstructs an array field into multiple documents.
// $lookup: Performs a left outer join with another collection.


//EXAMPLE-------

// documents in a sales collection:

// [
//   { "item": "apple", "quantity": 10, "price": 1.0, "date": "2023-05-01" },
//   { "item": "banana", "quantity": 5, "price": 0.5, "date": "2023-05-01" },
//   { "item": "apple", "quantity": 7, "price": 1.0, "date": "2023-05-02" },
//   { "item": "banana", "quantity": 10, "price": 0.5, "date": "2023-05-02" }
// ]

//Step 1: $match Stage
//Filter documents to include only those with a quantity greater than 5:


// {
//   $match: { quantity: { $gt: 5 } }
// }


// Step 2: $group Stage
// Group the documents by the item field and calculate the total quantity and total sales:

// {
//   $group: {
//     _id: "$item",
//     totalQuantity: { $sum: "$quantity" },
//     totalSales: { $sum: { $multiply: ["$quantity", "$price"] } }
//   }
// }

//Step 3: $sort Stage
// Sort the results by totalSales in descending order: HIGHEST TO LOWEST

// {
//   $sort: { totalSales: -1 }
// }


// Step 4: $project Stage ///Reshape output to remove _id and rename fields
// Reshape the output documents to include only the fields item, totalQuantity, and totalSales:

// {
//   $project: {
//     _id: 0,
//     item: "$_id",
//     totalQuantity: 1,
//     totalSales: 1
//   }
// }



// Complete Pipeline
// Combining these stages into a complete pipeline:

// db.sales.aggregate([
//   { $match: { quantity: { $gt: 5 } } },
//   { $group: { _id: "$item", totalQuantity: { $sum: "$quantity" }, totalSales: { $sum: { $multiply: ["$quantity", "$price"] } } } },
//   { $sort: { totalSales: -1 } },
//   { $project: { _id: 0, item: "$_id", totalQuantity: 1, totalSales: 1 } }
// ])
// Output: The result of running this pipeline might be:

// [
//   { "item": "banana", "totalQuantity": 15, "totalSales": 7.5 },
//   { "item": "apple", "totalQuantity": 17, "totalSales": 17.0 }
// ]


//NOTES------
//Here, "$quantity" and "$price" represent the values of the quantity and price fields.
// $fieldName	Refers to a field’s value in a document
// $operatorName	Performs an operation (e.g., $match, $group, $sum)

// Similar Operators
// Operator	Meaning
// $gt	Greater than (> in SQL)
// $gte	Greater than or equal to (>= in SQL)
// $lt	Less than (< in SQL)
// $lte	Less than or equal to (<= in SQL)
// $eq	Equal to (= in SQL)
// $ne	Not equal to (!= in SQL)


//SORTING-----
// { $sort: { fieldName: 1 or -1 } }

// 1 → Sorts in ascending order (smallest to largest).
// -1 → Sorts in descending order (largest to smallest).


//====== PROJECT------
// {
//   $project: {
//     _id: 0,          // Exclude the default `_id` field
//     item: "$_id",    // Rename `_id` to `item`
//     totalQuantity: 1, // Include `totalQuantity`
//     totalSales: 1     // Include `totalSales`
//   }
// }
// 🔹 What This Does
// _id: 0 → Removes the _id field from the output.

// item: "$_id" → Renames _id (which was created in the $group stage) to item.

// totalQuantity: 1 → Keeps the totalQuantity field in the output.

// totalSales: 1 → Keeps the totalSales field in the output.


//1 → Include the field in the output
//0 → Exclude the field from the output