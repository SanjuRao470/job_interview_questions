//NOTES: 
//The addition assignment operator, +=, is a shorthand way to add a value to a variable. 
// The code x+=y is equivalent to x=x+y. 




let name = ""
let lastName= "kapoor"

// console.log(!!name)  // false:   the string does not exist .  // true:   the string does exist.

// let intro = "my name is " +name+ " " + lastName 
// console.log(intro)

// let newIntro = `my name is ${name ? name : "kumar"} ${lastName}`
// console.log(newIntro)
//(?:)	Conditional Operator returns value based on the condition. It is like if-else


// let newIntro = `my name is ${name ,"kumar"} ${lastName}`
// console.log(newIntro) //// ========= here direct takes the value of kumar and unable to understand name.

// if(!name){
//     console.log("pppppppppppp")
// }

// if(undefined){
//     console.log("poooooooouuuurrr")
// }


//Template literal =====================Template literals use back-ticks (``) to define a string
//With back-ticks, you can use both single and double quotes inside a string
// EXAMPLE==================

// let str = `Template literal in ES6`;

// console.log(str);// Template literal in ES6  //Using the backticks, you can freely use the single or double quotes in the template literal without escaping.
// console.log(str.length); // 23
// console.log(typeof str);// string

// EXAMPLE==================

// let anotherStr = `Here's a template literal`;
// console.log(anotherStr)


// EXAMPLE==================

// let strWithBacktick = `Template literals use backticks \` insead of quotes`;
// console.log(strWithBacktick)

// EXAMPLE==================

// let msg = 'Multiline \n\
// string';

// console.log(msg);
// //Multiline
// //string


// EXAMPLE==================
// let msg = ['This text' ,     //result: in vertical format.
//          'can',
//          'span multiple lines'].join('\n');
// console.log(msg)


// // EXAMPLE==================
// let msg = ['This text' ,        /// result: in horizontal format.
//          'can',
//          'span multiple lines'];
// console.log(msg)

// // EXAMPLE==================
// let p =
// `This text
// can23423
// span multiple lines`;
// console.log(p)

// Interpolation
// Template literals provide an easy way to interpolate variables and expressions into strings.

// The method is called string interpolation.

// The syntax is:  ${...}

