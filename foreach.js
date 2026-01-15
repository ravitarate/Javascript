const coding = ["js","ruby", "java", "cpp","python"]
// coding.forEach( function (item,array, index){
//     console.log(item)
// })

// coding.forEach( (val) =>{
//         console.log(val)
// })

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)


const myCoding = [
    {
        languageName:"javascript",
        languageFilename: "js"
    }
]

myCoding.forEach( (item) => {
   console.log(item.languageName)
})