//IIFE
//Immediately Invoked Function Expression
//is a js design pattern where the function is 
//created and executed immediately after its created.

//the primary purpose of IIFE
//to create a private scope for var and functions, 
//preventing them from polluting the global namespace

//KEY uses and benefits

//Encapsulation
//the var and code  inside the IIFE are private

(function Sid(){

    //codes and var inside the IIFE are private
   const sid = "siddhant"
    console.log(sid) 
})() 
