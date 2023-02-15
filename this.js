console.log(this)  // refers to the global object / window object 

console.log(this == window)  // true 

function a(){
    console.log(this) // if used independently refers to the global/window object
}
a()

let b = ()=>{
    // doesnot have own this binding;
    console.log(this)  // takes this from its parent function
}

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
let obj1 = {
    firstname:"ankit",
    getName:()=>{
        console.log(this) // refers to the global object
    }
}

obj1.getName();


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

