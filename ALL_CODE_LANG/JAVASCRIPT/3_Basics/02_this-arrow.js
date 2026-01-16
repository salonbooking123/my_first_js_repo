// // (this.) is generally accessed inside the object not inside the function
// const user={
//     username:"rishabh",
//     price:400,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to nit patna.`)
//         console.log(this)                                         //prints everything about the object created.
//     }
// }
// user.welcomeMessage();
// user.username="babu rao"
// user.welcomeMessage()
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const chaiWala = function() {                  // it is a normal function as usual.
//     let username = "hitesh"
//     console.log(this.username);               // this will not work here bcoz it is inside a function
// }
// chaiWala()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const chai = () => {                               //here , it is an arrow function/expression stored inside a variable.
//     let username = "hitesh"
//     console.log(this.username);    
// }
// chai()
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// no return need to be written if return statement written inside parenthesis() & assumed as oneliner return called "IMPLICIT RETURN "
//but if curly braces used{}, we must use return keyword.
const addTwo=(num1,num2)=>(num1+num2)              //it is arrow function/expression stored inside a variable.
console.log(addTwo(4,10))

const customer=()=>({username:"rishabh"})          //it is an arrow function/expression ,returning object through implicit return.
console.log(customer())
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
