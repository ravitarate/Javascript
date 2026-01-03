

const JsUser = {

    name : "Ravi",
    "full name": "Ravi Tarate",
    age : 20,
    location: "pune",
    email: "ravitarate9009@gmail.com",
    isLoggedIn: false,
    lastLoggedIn:["Monday","saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])

JsUser.email = "ravitaratechatgpt.com"
//Object.freeze(JsUser) 
JsUser.email = "ravitaratechatgpt.com"
console.log(JsUser)


//

JsUser.greeting = function(){
    console.log("hello js ")
}

console.log(JsUser.greeting())