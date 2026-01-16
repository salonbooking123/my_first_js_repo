// Q1: find the sum of two numbers.
// function func(num1,num2){
//     // console.log(num1+num2)
//     return num1+num2
// }
// console.log(`the sum is: ${func(4,6)}`)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q2:-> check who logged in to the account.
// function func2(name='anonymous person'){
//     if(!name){console.log("please enter the username: "); return}
//     return `${name} just logged in.`
// }
// console.log(func2('sudhanshu'))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q3:-> print multiple values taken through the function.
// function calculateTheCounts(...num1){          // spread operator
//     return num1
// }
// console. log(calculateTheCounts (2,6,6,1))
//or
// function calculateCartPrice(vall, val2, ...num1){        // the already written variables take the corresponding values, rest go to the num1 variable.
//     return num1             // i.e. 500,2000
// }
// console. log(calculateCartPrice (200, 400, 500, 2000))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q4:-> print the prices and the product names of various products.
// function handleObject(n,...anyObject){
//     if(!n){return ;}
//     console.log(`Product is: ${anyObject[n-1].ProdName} and its price is: ${anyObject[n-1].price}`)
//     handleObject(n-1,...anyObject)
// }
// handleObject(2,{ProdName:"Laptop",price:300},{ProdName:"mobile",price:400})        // function called
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q5:-> declaring a function 
// console.log(addone(5))              //this can be anywhere either above or below the function,,,,,no error
// function addone(num){
//     return num + 1 
// } 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q6:-> declaring a function in another way i.e. treating a function like a variable......these functions are called expressions
// const addTwo = function (num) {
//     return num + 2
// } 
// console.log(addTwo (5))              //this can't be declared above the function or the expression(like Q5), otherwise shows error

