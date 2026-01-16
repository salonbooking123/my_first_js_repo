"use strict"            // it treats all the js codes as modern version of js(not the older versions)
const accountId=144553
let accountEmail="shekhar@gmail.com";
var accountPassword="sudhanshu@123"   // usually avoid var keyword due to its function scope and block scope confusion i.e. use let instead of var
accountCity="jaipur";
// accountId=42                      // constant variable cannot be changed
accountEmail="dubey@gmail.com"
accountPassword="goodboy@123"
accountCity="delhi"                  // global variable can be declared without var, let or const keywords  (without any data type) i.e. not a good practice
let accountState;
// console.log("accountId is: ",accountId);
// console.log("accountEmail is: ",accountEmail)
// console.log("accountPassword is: ",accountPassword)
// console.log("accountCity is: ",accountCity)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
