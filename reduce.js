const myNums = [1,2,3]
//  const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and Currval ${currval}`)
//     return acc + currval
//  },3)


const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName : "js Course",
        price:2999
    },
    {
        itemName : "mobile dev  Course",
        price:6999
    },
    {
        itemName : "data science  Course",
        price:3999
    },
    {
        itemName : "AI  Course",
        price:1999
    },
]

const pricetopay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(pricetopay)