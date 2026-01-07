//nested scope 

// function one(){
//     const username = "ravi"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     //console.log(website);
//     two()
// }
//one()
// if(true){
//     const username= "ravi"
//     if(username==="ravi"){
//         const website = "youtube "
//         console.log(username + website)
//     }
//     console.log(website) //error
// }


//  interesting 
addone(5)
function addone(num){
    return num+1
}

// here we can use addtwo function here 
const addtwo = function(num){
    return num+2
}
addtwo(5)