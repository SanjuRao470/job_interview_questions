// 1--- 
// IMPORTANT POINTS ----- scope /hoisting /re-declare
// var x = 10;
// if (true) {
//   var x = 20; // Same variable
//   console.log(x); // 20
// }
// console.log(x); // 20
  
//reason: redeclare same variable because var does have global scope due to this  it affects outer variable as well.
//Re-declaration: Can be re-declared within the same scope.


// --2--
// let y = 10;
// if (true) {
//   let y = 20; // Different variable
//   console.log(y); // 20
// }
// console.log(y); // 10

////reason: redeclare same variable because var does have block scope due to this it does not affects outer variable as well.
//Re-declaration: Can not be re-declared within the same scope.


//===---------------------------------------------------ALL METHODS----------------------------------------//


// const array = [['a',1],['b',2]]
//  const result = Object.fromEntries(array)
//  console.log(result)//{ a: 1, b: 2 }

// const obj = { a: 1, b: 2 }
//  const result = Object.keys(obj)
//  console.log(result)//[ 'a', 'b' ]

// const obj = { a: 1, b: 2 }
//  const result = Object.values(obj)
//  console.log(result)//[ 1, 2 ]

// const obj = { a: 1, b: 2 }
//  const result = Object.hasOwnProperty('c')
//  console.log(result)//false

// const obj = { a: 1, b: 2 }
//  const result = Object.entries(obj)
//  console.log(result)//[ [ 'a', 1 ], [ 'b', 2 ] ]

