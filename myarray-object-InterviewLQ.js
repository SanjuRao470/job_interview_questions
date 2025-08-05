
///----------------------------///
//  1. split() Method
// 🔹 split(' ') – Split by space (for words)
// const str = "my name is sanju";
// const result = str.split(' ');
// console.log(result); 
// // ➤ ['my', 'name', 'is', 'sanju']
// 🔸 Use when you want to split a sentence into words.



// 🔹 split('') – Split by character
// const str = "sanju";
// const result = str.split('');
// console.log(result); 
// // ➤ ['s', 'a', 'n', 'j', 'u']
// 🔸 Use when you want to split a string into individual characters.




// 🔗 2. join() Method
// 🔹 join(' ') – Join with space
// const words = ['my', 'name', 'is', 'sanju'];
// const result = words.join(' ');
// console.log(result); 
// // ➤ "my name is sanju"
// 🔸 Use to combine words into a sentence.




// 🔹 join('') – Join without space
// const chars = ['s', 'a', 'n', 'j', 'u'];
// const result = chars.join('');
// console.log(result); 
// // ➤ "sanju"
// 🔸 Use to combine characters into a word.




//QUESTION-------------

//  const arr = [3,4,5,6]
//  const arr1 = [4,5,67,7]
 
 ////------------- 1- way
 
//  const array = [...arr , ...arr1]
//  console.log(array)// [ 3, 4,  5, 6, 4, 5, 67, 7]

//-------------  2-way
// const array = arr.concat(arr1) 
// console.log(array)// [ 3, 4,  5, 6, 4, 5, 67, 7]

// --------------- 3-way

// function MergeArray(arr ,arr1){
    
//     for(let i=0; i<arr1.length; i++){
//         arr.push(arr1[i])
//          }
//   return arr; 
// }
// const result = MergeArray(arr,arr1)
// console.log(result)// [ 3, 4,  5, 6, 4, 5, 67, 7]


//QUESTION============

// const obj1 = {name:'shobha', age:25}
// const obj2 = {city:'pune', country:'india'}

// function MergeObject(obj1 ,obj2){
    
//     //There are four ways to merge object
    
//     //1   return Object.assign({},obj1,obj2)
    
//     //2  return {...obj1, ...obj2}
    
//     //3 for(let key in obj2){
//     //     obj1[key] = obj2[key]
//     // }
//     // return obj1; 
    

//     //4 Object.entries(obj2).forEach(([key , value])=>{
//     //     obj1[key] =value
//     // })
//     // return obj1


// }
// const result = MergeObject(obj1 ,obj2)
// console.log(result)//{ name: 'shobha', age: 25, city: 'pune', country: 'india' }


//QUESTION=================ARRAY

// const arr =[3,4,5,6]
// //arr.push(10)
// //console.log(arr) //[ 3, 4, 5, 6, 10 ]
// //arr.unshift(10)
// //console.log(arr) //[ 10, 3, 4, 5, 6 ]

// arr[200] = arr 
// console.log(arr.length)//201
// console.log(arr)//<ref *1> [ 3, 4, 5, 6, <196 empty items>, [Circular *1] ]



//QUESTION================= OBJECTS

//const obj2 = {city:'pune', country:'india'}

//ADD

// obj2.name ='shobha'
// console.log(obj2)//{ city: 'pune', country: 'india', name: 'shobha' }


// obj2['age'] = 30
// console.log(obj2)//{ city: 'pune', country: 'india', age: 30 }


//UPDATE

// obj2.city = 'mumbai'
// console.log(obj2)//{ city: 'mumbai', country: 'india' }

//EXTRACT

 //console.log(obj2['city'])//pune


// const {city,country} =obj2 
// console.log(city)//pune
// console.log(country)//india


// Dynamically Getting a Property
//  const propertyName = "city"
//  console.log(obj2[propertyName])//pune
 
 
 // Dynamically setting a Property
//  const  propertyName = 'country'
//  obj2[propertyName] = 'america'
//  console.log(obj2.country)//america

// const keys = Object.keys(obj2)
// console.log(keys)//[ 'city', 'country' ]

// const values = Object.values(obj2)
// console.log(values)//[ 'pune', 'india' ]

// const entries = Object.entries(obj2)
//  console.log(entries)//[ [ 'city', 'pune' ], [ 'country', 'india' ] ]


// for(let key in obj2){
//     console.log(` ${key} : ${obj2[key]}` )
// }
//  city : pune
//  country : india


// const obj ={person: {subject:'code'}}
// console.log(obj.person?.subject)//code
// console.log(obj.person?.age)//undefined

//QUESTION=============
// const name ='sanju' //Sanju
// const result = name[0].toUpperCase() + name.slice(1)
// console.log(result)//Sanju