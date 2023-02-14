let name  ="ppp"
let lastName= "yadav"

console.log(!!name)

let intro = "my name is " +name+ " " + lastName 

let newIntro = `my name is ${name ? name : "kumar"} ${lastName}`
console.log(newIntro)

if(!name){
    console.log("pppppppppppp")
}

if(undefined){
    console.log("poooooooouuuurrr")
}