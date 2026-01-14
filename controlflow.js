// const isUserloggedIn = true
// const temperature = 51
// if(temperature < 50 ){
//        console.log("less than 50");
// }else{
//       console.log("temperatre greater  than 50")
// }
// const score = 200 
// if(score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`)
// }
//    console.log(`user power: ${power}`)

// == equal to    , 3 != 2 , === its type (data type )

// const balance = 1000
//if(balance > 500) console.log("test"), console.log("test2")

//nesting 

// if(balance > 500) {
//     console.log("less than");
// }else if(balance < 750){
// console.log("less ta 750")
// }else{
//     console.log("less than 1200");
// }

const isUserloggedIn = true 
const debitcard = true
const loggedIFromeGoogle = false 
const loggedInEmail = true

if(isUserloggedIn && debitcard){
    console.log("allow to by course")
}

if(loggedIFromeGoogle || loggedInEmail){
    console.log("user logged in ")
}