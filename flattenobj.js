//question

// const obj = {
//     a: { b: "jitendra" },
//     c: { d: "Vishwakarma" },
//     e: "address"
// };

// function flattenObject(obj) {
//     const flattened = {};  //step-1

//     // Iterate over each key in the original object
//     for (let key in obj) {  //step-2
//         if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//             // If the value is an object (and not an array), flatten its nested keys
//             const nestedObj = obj[key];    //{ b: "jitendra" } &  { d: "Vishwakarma" }
//             for (let nestedKey in nestedObj) {
//                 // Construct the flattened key by joining parent key and nested key with a dot
//                 const flattenedKey = `${key}.${nestedKey}`; //a.b &  c.d
//                 // Assign the value to the flattened key in the result object
//                 flattened[flattenedKey] = nestedObj[nestedKey]; /// jitendra & Vishwakarma or we can say {'a.b':'jitendra', 'c.d':'Vishwakarma' ,e:'address'}
//             }
//         } else {
//             // If the value is not an object (primitive value), simply assign it to the result object
//             flattened[key] = obj[key];  // {key:value} like this we get answer

//         }
//     }

//     return flattened;
// }

// const flattenedObj = flattenObject(obj);
// console.log(flattenedObj);

// //output
// {
//     'a.b': 'jitendra',
//     'c.d': 'Vishwakarma',
//     e: 'address'
// }



//EXAMPLE
//For example, the nested object:
// {
//     a: {
//         b: "jitendra"
//     },
//     c: {
//         d: "Vishwakarma"
//     },
//     e: "address"
// }


//Would be flattened to:
// {
//     'a.b': 'jitendra',
//     'c.d': 'Vishwakarma',
//     e: 'address'
// }



//QUESTION--2

// const obj ={
//     a:'12',
//     b : 23,
//     c:{
//         d: 56
//     },
//     e:{
//         f:'manisha'
//     },
    
    
// }
// //output {a:'12', b:23 , 'c.d':56, 'e.f':'manisha'}

// function flattenObject(obj){
    
//     const finalObj ={}
    
//     for(let key in obj){
//         if(typeof obj[key] === "object" && !Array.isArray(obj[key])){
//             const nestedObj = obj[key]
            
//             console.log("ppp",nestedObj)
            
//             for(let nestedkey in  nestedObj){
//                 const flattenedkey =`${key}.${nestedkey}`
//                  finalObj[flattenedkey] = nestedObj[nestedkey]
//             }
//         }else{
//             finalObj[key]= obj[key]
//         }
        
//     }
//     return finalObj
// }
// const  flattenobjresult =flattenObject(obj)
// console.log("yyyy=======",flattenobjresult)
// OUTPUT= yyyy======= { a: '12', b: 23, 'c.d': 56, 'e.f': 'manisha' }



// Key Differences
// Independence: Shallow copy maintains references to nested objects or arrays, so changes to nested properties
//  affect both the shallow copy and the original object. Deep copy creates independent 
// copies of all nested objects or arrays, ensuring changes do not propagate back to the original object.

//deep copy
// const originalObj = {
//     a: 1,
//     b: { c: 2 }
// };

// const deepCopy = JSON.parse(JSON.stringify(originalObj));
// deepCopy.b.c = 10;

// console.log(originalObj); // { a: 1, b: { c: 2 } }
// console.log(deepCopy); // { a: 1, b: { c: 10 } }

//why we are using??
// The method JSON.parse(JSON.stringify(originalObj)) 
// is commonly used to create a deep copy of a JavaScript object 
// because it leverages the built-in JSON (JavaScript Object Notation)
//  serialization='{"a":1,"b":{"c":2}}' and deserialization ={ a: 1, b: { c: 10 } } functionality available in JavaScript.

//shellow copy
// const originalObj = {
//     a: 1,
//     b: { c: 2 }
// };

// const shallowCopy = { ...originalObj };
// shallowCopy.b.c = 10;

// console.log(originalObj); // { a: 1, b: { c: 10 } }
// console.log(shallowCopy); // { a: 1, b: { c: 10 } }
