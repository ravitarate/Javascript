const userEmail = " ravitarate.ai"
if(userEmail){
    console.log("got user email")
}else{
    console.log("don't have user email");
}

//falsy values

// false, 0, -0 consider as falsy value , "", null , undefined , NaN, BigInt 0n,


// truethy value 

// "0", 'false',[],{}, fnctio(){}

if(userEmail.length === 0){
    console.log("Array is Empty")
}


const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish coalescing Operator (??): null undefined
//let val1 = 5 ?? 10


//val1 = null ?? 10
//val1 = undefined  ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// ternary operator 

// condition ? true : false
const iceteaPrice = 100
iceteaPrice >= 80 ? console.log("less than 80") : console.log("more than 808")