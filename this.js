//  =====MOST IMPORTANT POINTS ABOUT 'this'=======
//1- In JavaScript, the this keyword refers to an object.

// 2-Which object depends on how this is being invoked (used or called).

// 3-The this keyword refers to different objects depending on how it is used:

// 4-In an object method, this refers to the object.
// 5-Alone, this refers to the global object.
// 6-In a function, this refers to the global object.
// 7-In a function, in strict mode, this is undefined.
// 8-In an event, this refers to the element that received the event.
// 9-Methods like call(), apply(), and bind() can refer this to any object.
// Note
// 10-this is not a variable. It is a keyword. You cannot change the value of this.



console.log(this)  // refers to the global object / window object 

console.log(this == window)  // true 

// CASE-1===========================
function a(){
    console.log(this) // if used independently refers to the global/window object
}
a()

// CASE-2============================
let b = ()=>{
    // does not have  its own this binding;
    console.log(this)  // takes this from its parent function
}

// CASE-3=================================
//  Method in an object : 
let obj = {
    firstname:"ankit",
    getName(){
        console.log(this) // refers to the owner object
    }
    // getName:function(){
    //     console.log(this) // refers to the owner object
    // }
};

obj.getName()

// CASE-4==========================
let obj1 = {
    firstname:"ankit",
    getName:()=>{
        console.log(this) // refers to the global object
    }
}

obj1.getName();

// CASE-5==============================
let obj3 = {
    firstname:"ankit yadav",
    getName:function(){
        // console.log(this) // refers to the owner object
        let ar = ()=>{
            console.log(this); // takes this from parent regular function 
        }
        ar();
    }
}
obj3.getName();

// CASE-6===========================
let obj4 = {
    firstname:"ankit yadav",
    getName:()=>{
        // console.log(this) // refers to the owner object
        let ar = ()=>{
            // takes this from parent regular function , but since no parent regular function is present , so it refers to window/g;lobal object
            console.log(this); 
        }
        ar();
    }
}

obj4.getName()

// CASE-7=================================
let obj5= {
    firstname:"ankit yadav",
    getName(){
        console.log("==========",this) // refers to the owner object
        function ar(){
            // regular function inside a regular function refers to the global / window object
            console.log("=======????????",this); 
        }
        ar();
    }
}

obj5.getName()

