// const userEmail = []
// if (userEmail) {
// console.log("Got user email");
// } else {
// console.log ("Don't have user email");
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// falsy values      i.e. they are considered false if written under if condition
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values      i.e. they are considered true if written under if condition
// "0", 'false', " ", [], {}, function(){}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const userEmail = []
// if (userEmail.length === 0) {
//     console.log ("Array is empty");
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Nullish Coalescing Operator (??): null undefined || to check if null is o/p, the first value is  assigned.
// let val1; 
// val1= 5 ?? 10 
// val2= null ?? 10 
// val3 = undefined ?? 15 
// val4 = null ?? 10 ?? 20 
// console.log(val1)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Terniary Operator
// condition ? true : false 
const iceTeaPrice = 100 
iceTeaPrice >=180 ? console.log("less than 80") : console.log("more than 80") 