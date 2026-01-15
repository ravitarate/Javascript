const user = {
    username: "ravi",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`)
    }
}
user.welcomeMessage()
user.username = "SAM"
user.welcomeMessage()

console.log(this)

function chai() {
    let username = "ravi"
    console.log(this)
}
chai()

const chai = () => {
    let username = "ravi"
    console.log(this.username)
}
chai()


const addtwo = (num1, num2) => (num1 + num2)

console.log(addtwo(3, 4))


// explicit  use return 
// implicit not need to  write return  
const addtwo1 = (num1, num2) => ({ username: "ravi" })
console.log(addtwo1(3, 4))

