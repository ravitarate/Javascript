// Immediately invoked Function Expression (IIFE)

// (function chai(){
//     console.log("DB Connected")
// })()


(function (){
    let x = 10;
    console.log(x);
})();

//console.log(x);


(function (name){
    console.log("Hello"+name);
})("ravi");