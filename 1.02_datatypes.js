"use strict"
// alert("hello sudhanshu shekhar")       // it shows an alert box(popup) with given message  i.e. only for browser environment not for vs code
// let name="dubey"                           // string datatype
// let age=24                                // number datatype
// let isLoggedIn=false                      // boolean datatype
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof null);              // null i.e. something which is empty or has no value
// console.log(typeof undefined);        // undefined i.e. something which is not defined
// console.table([typeof name,typeof age,typeof null,typeof isLoggedIn,typeof undefined]);
// let score1=34.61
// let score2="24"
// let score3="36ab"
// let t1=Number(score2)
// let t2=Number(score3)                       // it will convert string to number if possible otherwise it will return NaN(type : Not a Number and  value: of t2)
// console.log(t2);
// console.table([typeof score1,typeof score2,typeof score3,typeof t1,typeof t2]);
// console.log(typeof(null))
// console.log(Number(null))                  // it will convert null to 0
// console.log(typeof(undefined))
// console.log(Number(undefined))             // it will convert undefined to NaN

// let isLoggedIn
// isLoggedIn = Boolean(3)           // non zero number is converted to true
// isLoggedIn = Boolean(-1)          // non zero number is converted to true   
// isLoggedIn = Boolean(0)           // zero is converted to false
// isLoggedIn = Boolean("")          // empty string is converted to false
// isLoggedIn = Boolean(" ")         // string with space is converted to true
// isLoggedIn = Boolean("hitesh")    // non empty string is converted to true
// console.log(isLoggedIn);

// let num=33
// let str=String(num)            // it will convert number to string
// console.log(typeof str);
// console.log(str);

// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
// const id = Symbol('123"')
// const anotherId = Symbol('123"')
// console.log(id === anotherId);
// const bigNumber = 3456543576654356754n      // n at the end is used to represent bigInt datatype
// console.log(typeof bigNumber);
// console.log(typeof id);

// Reference (Non primitive) :-> Array, Objects, Functions
//array
// const heros = ["shaktiman", "naagraj", "doga"];
//object
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }
//function
// const myFunction = function(){
//     console.log ("Hello world");
// }
// myFunction();
// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// Stack (Primitive), Heap (Non-Primitive)
// primitive type (stack memory)
// let myYoutubename = "hiteshchoudharydotcom"
// let anothername = myYoutubename     // a copy of myYoutubename is stored in anothername  i.e. both are stored in different memory locations, myYoutubename is not affected if anothername is changed
// anothername = "chaiaurcode"
// console.log(myYoutubename);
// console.log(anothername);

// reference type(non-primitive i.e. heap memory)
// let userOne = {
//     email: "user@google.com",
//     upi: "user@ybl"
// }
// let userTwo = userOne
// both userOne and userTwo point to same memory location to the same data.
// userTwo.email = "hitesh@google.com"
// console.log(userOne.email);
// console.log(userTwo.email);
