

// function debounce(fn,delay){
// let timer;

// return function(...arg){
//   clearTimeout(timer)
//   timer= setTimeout(() => {
//     fn(...args)
//   }, delay);
// }
// }


// function Greet({name}){
//   console.log("---", name)
// }


// const generatedDebounce = debounce(Greet,1000)
// console.log('mohan')
// console.log('alice')
// console.log('john')



// function demoPromise(){
//   return Promise((resolve,reject)=>{
//     console.log("--- promise pending")
// const status = true
// setTimeout(() => {
//   if(status){
//     resolve("promise resolved---")
//   }else{
//     reject("promise resolved---")
//   }
// }, 1000);
//   })
// }
// demoPromise()
// .then((result) =>console.log(result))
// .catch((error) =>console.log(error))




// function closureFn(){
//   let count=0;

// return function(){
// count++
// console.log(count)
// }
// }
// const counter = closureFn()
// counter()
// counter()
// counter()


// function  memoryLeakage(){
//   let timer = [];


//   function Start(){
//     for(let i=0; i<=6; i++){
//     const id = setTimeout(() => {
//       console.log(i)
//     }, 1000);
//     timer.push(id)
// }
// }


// function Stop(){
//   for(let i=0; i<=6; i++){
//  timer.forEach(()=> clearTimeout(id))
//  timer = 0
// }
// }

// }

// const logger =  memoryLeakage()
// logger.start()




// function delayFn(){
//   let timer;

//   function Start(){
//         for(let i=0; i<8; i++){
// timer =setTimeout(()=>{
// console.log(i)
// }, 2000)
//   }

//   }
//   return {Start}
// }
// const logger = delayFn()
// logger.Start()






// function curryingFn(a){
//   return function(b){
//     return function(c){
//       return c*b-a;
//       }
//   }
// }

// console.log(curryingFn(1)(2)(4))




 
// function demoIIFE(){
//   for(var i=0; i<5; i++){
//      (function(i){
//            setTimeout(()=>{
//        console.log(i)
//    },1000)
// })(i)
   
//   }
// }
// demoIIFE()



// //-------------------

// function demoNOIIFE(){
//   for(var i=0; i<=7; i++){
//        setTimeout(()=>{
//        console.log(i)
//    },1000)
//  }
// }
// demoNOIIFE()



// //-------------------------------
// function demoFnIIFE(){
//   for(let i=0; i<=3; i++){
//   setTimeout(()=>{
//        console.log(i)
//    },1000)
//   }

// }
// demoFnIIFE()



// function demoCallback(callback){
  
//   setTimeout(()=>{
// const data = {name:'alice' , age:45}
// callback(data);
//   },1000)

// }
// demoCallback((received) => console.log('---',received))



// function Step1(callback){
//  console.log("step1---")
//   callback()
// }

// function Step2(callback){
//   console.log("step2---")
//     callback()
// }

// function Step3(callback){
//   console.log("step3---")
//    callback()
// }

// function Step4(callback){
//   console.log("step4---")
//     callback()
// }

// function Step5(callback){
//   console.log("step5---")
//     callback()
// }

// Step1(()=>{
//   Step2(()=>{
//     Step3(()=>{
//       Step4(()=>{
//         Step5(()=>{
//   console.log("all collection callback-----")
//         })
//       })
//     })
//   })
// })






