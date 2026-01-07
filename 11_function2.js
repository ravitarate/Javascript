function calculateCartPrice(val1,val2,...num1){
          return num1
}

console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "ravi",
    price:999
}

function handleobject(anyobj){
    console.log(`username ${anyobj.username} and price is ${anyobj.price}`)
}

handleobject({
    username: "ravi",
    price:399
})

const arr = [200,300,400,500]
function returnSecoundArray(getArray){
    return getArray[1]
}
console.log(returnSecoundArray(arr))
console.log(returnSecoundArray())