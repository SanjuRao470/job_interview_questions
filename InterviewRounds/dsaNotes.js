

//  function FirstPromise(){
//     return new Promise((resolve ,reject)=>{
// const status = true;
// setTimeout(()=>{
// if(status){
//   resolve("promise is resolved")  
// }else{
// reject("promise is reject")  
//}
//},2000)
//})
//}
//  FirstPromise()
//  .then(result => console.log("result"))
//   .catch(error => console.log("error"))



//  function CallByValue(a){
//       a =10;
//       console.log(a);//10
//  }

//  const num = 20;
//  CallByValue(num)//20



//  function CallByReference(Obj){
//      Obj.name ='alice';
//      console.log(obj.name)//Bob
//  }
//  const user = {name:'Bob'}

//  CallByReference(user.name)//Bob



// function Step1(callback){
//     setTimeout(()=>{
// console.log("step1 callBack")
//     },1000)
// }
// function Step2(callback){
//     setTimeout(()=>{
// console.log("step2 callBack")
//     },2000)
// }
// function Step3(callback){
//     setTimeout(()=>{
// console.log("step3 callBack")
//     },2000)
// }
// function Step4(callback){
//     setTimeout(()=>{
// console.log("step4 callBack")
//     },3000)
// }
// function Step5(callback){
//     setTimeout(()=>{
// console.log("step5 callBack")
//     },2000)
// }


// Step1(()=>{
//     Step2(()=>{
//     Step3(()=>{
//     Step4(()=>{
//     Step5(()=>{
//     console.log("all callback are completed")
//       })
//          })
//            })
//     })
// })



//  export default function ControlledComponent(){
// const [data, setData] = useState('');

// // const handlerSubmit = (e) =>{
// // setData(e.target.value)
// // }


// return(
//     <>
//      <input
//      type='text'
//      placeholder='type here.......'
//       value={data}
// onChange={(e)=>setData(e.target.value)} 
//      />
   
//     </>
// )
// }

// import React,{TextField} from  '@mui'

// export default function UnControlledComponent(){
//     const inputRef = useRef()

//     const handlerSubmit = () =>{
// console.log(inputRef.current.value)
//     }
//     return(
//         <>
       
//         <TextField  inputRef={inputRef} label='type here'/>
//         <Button onClick={handlerSubmit}></Button>
//         </>
//     )
// } 

// const initialState = {
//     salary:25000,
// }

// const salarySlice = createSlice({
// name:'salary',
// initialState,

// reducers:{
//     SalaryUpdate: (state,action)=>{
//   state.salary= action.payload
//     },
// }
// })
// export const  {SalaryUpdate} = salarySlice.action
// export default salarySlice.reducer

// {
//     type:'salary/SalaryUpdate';
//     payload: 60000;
// }
