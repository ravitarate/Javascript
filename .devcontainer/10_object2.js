// const tinderUser = new Object()
const tinderUser = {}
tinderUse.id = "123abc"
tinderUse.name = "Sammy"
tinderUse.isLoggedIn = false 

const regularUser = {
    email: "rvaitarate.gmail",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {
    1:"a",
    2:"b",
   
}
const obj2 = {
     3:"c",
    4:"d"
}
const obj3 = {
    obj1,obj2
}
const obj4 = {...obj1, ...obj2}
console.log(obj3)

const users = [
    {
        id:1,
        email: "ravitarte"
    },
    {
        id:2,
        email: "ravitarte"
    },
    {
        id:3,
        email: "ravitarte"
    },
    {
        id:4,
        email: "ravitarte"
    }
]
// users[1].email
// console.log(Object.keys(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedin'));
