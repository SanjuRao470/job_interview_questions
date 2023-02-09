//1- keywords
// var, let, const
//var is Functional and let , const are Block scope.

// Functional scope
// can be ReDeclare,Resign
//function getUser(){
// var userName = 'masaba';
//var userId= 20;
//   userId= 50;

// console.log('my name is :',userName)
// console.log('my id is :',userId)
//}
//console.log('my name is :',userName)  ** shown referenceError: userName is not defined
//getUser()


//Block scope
// only can console inside the Block scope not inside the functional scope.

//let
// can not be Redeclare but can be Resign the value.

function getData() {

    //  let rollNo=2; {console.log('######',rollNo)}
    let rollNo = 2;
    
    
    
}


getData()