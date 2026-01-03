const arr = [1,2,3,4,5]
console.log(arr[1])

// array method 
arr.push(6)
console.log(arr.includes(91))

const newarr = arr.join()
console.log(arr)
console.log( typeof newarr)

// slice , splice 

console.log("A",arr);
const myn1 = arr.slice(1,3)
console.log(myn1)
console.log("B",arr)

const myn2 = arr.splice(1,3)
console.log("c",arr);
console.log(myn2)