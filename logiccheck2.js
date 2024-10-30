 //QUESTIONS----------------
 //Problem: Given a start time of "8:00" and end time of "15:00" with a 60-minute interval, generate available appointment slots.

 // Math.floor: used to round down a number to the nearest integer
//  75 minutes / 60 = 1.25 hours, but you only want 1 hour, so you round it down with Math.floor().

//  function GenerateTimeSlot( startTime , endTime , interval ){
//     const TimeSlot =[];
    
//     const [startHour ,startMinutes] = startTime.split(":").map(Number)
//     const  [endHour , endMinutes] = endTime.split(":").map(Number)

    
//     let StartTotalMinutes = startHour * 60  + startMinutes
//     const EndTotalMinutes = endHour * 60   + endMinutes
    
// with while loop--case-1
    
//     while(StartTotalMinutes  <=  EndTotalMinutes)  { 
//     const hours = String(Math.floor( StartTotalMinutes / 60)).padStart(2,"0")
//         const minutes = String(StartTotalMinutes % 60).padStart(2 ,"0")
//         TimeSlot.push(`${hours}:${minutes}`)
//         StartTotalMinutes += interval
//     }

//------ with for loop -- case-2
// for(let currentMinutes = StartTotalMinutes; currentMinutes <= EndTotalMinutes; currentMinutes += interval)  { 
//     const hours = String(Math.floor( currentMinutes / 60)).padStart(2,"0")
//         const minutes = String(currentMinutes % 60).padStart(2 ,"0")
//         TimeSlot.push(`${hours}:${minutes}`)
      
//     }

//    return TimeSlot; 
// }

// startTime = "8:00" AM
// endTime = "15:00"  PM always take like 13,14,15, if you provide like '3:00 it will return empty array
// interval = 60

// const result = GenerateTimeSlot( startTime , endTime , interval )
// console.log(result)///  [ '08:00', '09:00','10:00', '11:00','12:00', '13:00','14:00', '15:00']



//Question------------

// Problem: Add tasks to a task list with priorities. If a task with higher priority is added, it should move tasks 
// with lower priority down the list.


// function AddNewTaskPriority(taskList,newTask ){

//     // taskList.push(newTask)
//      taskList.sort((a,b) => a.priority - b.priority)
      
//       let inserted = false;
      
//       for( i=0; i<taskList.length ; i++){
//           if(newTask.priority < taskList[i].priority){
//               taskList.splice(i , 0 , newTask)
//               inserted = true;
//               break;
              
//           }
//            }

//  //it is optional
// // If the new task was not inserted during the loop,add it to the end of the list

//         //   if(!inserted){
//         //       taskList.push(newTask)
//         //   }
     
//     return  taskList;
//  }

// const taskList = [
//     { name: 'task4', priority: 4 },
//     { name: 'task3', priority: 3 },
//     { name: 'task1', priority: 1 },
//     { name: 'task7', priority: 7 }
// ];

// const newTask = { name: 'task0', priority: 0 };
// const result =  AddNewTaskPriority( taskList,newTask )
// console.log(result)

// //output----

// [
//   { name: 'task0', priority: 0 },
//   { name: 'task1', priority: 1 },
//   { name: 'task3', priority: 3 },
//   { name: 'task4', priority: 4 },
//   { name: 'task7', priority: 7 }
// ]



//SORTING-----------------------------------------------------------

//Problem: Same 

// function AddNewTaskPriority(taskList ){
   
//     for(let i= 0; i<taskList.length; i++){
//         for(j=0; j<taskList.length-i-1; j++){
//             if(taskList[j].priority > taskList[j+1].priority){
//                 let temp = taskList[j]
//                 taskList[j] = taskList[j+1]
//                 taskList[j+1]=temp
//             }
            
//         }
        
//     }
      
//      return  taskList;
//   }
//  const taskList = [
//      { name: 'task4', priority: 4 },
//      { name: 'task3', priority: 3 },
//      { name: 'task1', priority: 1 },
//      { name: 'task7', priority: 7 }
//  ];
 
//  const result =  AddNewTaskPriority( taskList )
//  console.log(result)
 
//  //output------------
//  [
//    { name: 'task1', priority: 1 },
//    { name: 'task3', priority: 3 },
//    { name: 'task4', priority: 4 },
//    { name: 'task7', priority: 7 }
//  ]
 
 // COMBINE ANSWER----------------------
 
// function AddNewTaskPriority(taskList,newTask ){
// //sorting
// for(let i=0 ; i<taskList.length ; i++){
//     for(let j=0 ; j<taskList.length-i-1 ;j++){
//         if(taskList[j].priority > taskList[j+1].priority){
//         let temp = taskList[j]
//         taskList[j] = taskList[j+1]
//         taskList[j+1] = temp
//         }
            
//         }
        
//     }
// //inserting
// let inserted = false;

// for(let i=0 ; i<taskList.length ; i++){
//     if(newTask.priority < taskList[i].priority){
//         taskList.splice(i , 0 , newTask)
//         inserted = true;
//         break;
//     }
// }
//  return taskList;
//  }

// const taskList = [
//     { name: 'task4', priority: 4 },
//     { name: 'task3', priority: 3 },
//     { name: 'task1', priority: 1 },
//     { name: 'task7', priority: 7 }
// ];

// const newTask = { name: 'task0', priority: 0 };
// const result =  AddNewTaskPriority( taskList,newTask )
// console.log(result)
// [
//   { name: 'task0', priority: 0 },
//   { name: 'task1', priority: 1 },
//   { name: 'task3', priority: 3 },
//   { name: 'task4', priority: 4 },
//   { name: 'task7', priority: 7 }
// ]


 //question ----------------

 ////Problem: Prevent overbooking for a room with 10 available slots. If a booking request exceeds the available slots, return an error.

//  function bookSlots(requestedSlots, availableSlots) {
//     if (requestedSlots > availableSlots) {
//         return "Error: Not enough slots available.";
//     }
//     return "Booking successful!";
// }

// // Example usage:
// const availableSlots = 10;
// const requestedSlots = 12;
// console.log(bookSlots(requestedSlots, availableSlots));
// // Output: "Error: Not enough slots available."

 
 // QUESTION------------

 //Problem: Update the total price when items are added or their prices are updated.
  
//  function  UpdatedTotalPrice(cart,updatedItem){
//     const item = cart.find(i => i.name  === updatedItem.name)
    
//     if(item){
//         item.price = updatedItem.price
//     }else{
//         cart.push(updatedItem)
//     }
    
//     // case -1
//     return cart.reduce((total ,item)=> total+item.price , 0)
    
//     // case -2
    
//    //  let total=0;
//    //  for(let i=0 ; i<cart.length ; i++){
//    //      total+= cart[i].price
//    //  }
//    //  return total
    
// }

// const cart = [
//    {name: "Item 1", price: 10},
//    {name: "Item 2", price: 20}
// ];
// const updatedItem = {name: "Item 8", price: 45};
// const result =  UpdatedTotalPrice(cart , updatedItem)
// console.log(result)//75
// console.log(cart)
// //
// [
//  { name: 'Item 1', price: 10 },
//  { name: 'Item 2', price: 20 },
//  { name: 'Item 8', price: 45 }
// ]


//QUESTION----------------

//Problem: Schedule notifications for events that are 30 minutes from the current time.