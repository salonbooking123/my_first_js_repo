// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {console.log("5 is best number");}
//     console.log (element); 
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let myArray = ["flash", "batman", "superman"]
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i]; 
//     console. log (element) ; 
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let score = 6
// do {
// console.log( `Score is ${score}`);
// score++
// } while (score <= 2);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {             //like auto of c++ 
//     console.log (num);
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const greetings = "Hello world!" 
// for (const greet of greetings) { 
//     console.log( `Each char is ${greet}`)
// } 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Maps
// const mp = new Map()
// mp.set('IN', "India")
// mp.set('USA', "United States of America")
// mp.set('Fr', "France")
// mp.set('IN', "India")
// console.table(mp);
// for (const [key, value] of mp) { 
//     console.log(key, ':-', value); 
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const myObject = { 
//     js: 'javascript', 
//     cpp: 'C++', 
//     rb: "ruby", 
//     swift: "swift by apple" 
// } 
// for (const myKey in myObject) { 
//     console.log( `${myKey} shortcut is for ${myObject[myKey]}`); 
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const programming = ["js", "rb", "py", "Java", "cpp"]
// for (const key in programming) {
//     console. log (`itr ${key} contains ${programming [key]}`) ;
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const arr = ["js", "ruby", "java", "python", "cpp"]
//method->1
// arr.forEach( function (Myval){
//     console.log (Myval);
// })
//method->2
// arr.forEach( (Myitem) => {
//     console.log(Myitem);
// })
//method->3
// function printMe(item){
//     console.log (item);
// }
// arr.forEach (printMe)
//way->1
// arr. forEach((material, index, arr)=> {
//     console.log(material, index, arr);
// })
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const myCoding = [ 
//     {languageName: "javascript",languageFileName: "js"},
//     {languageName: "java", languageFileName: "java"},
//     {languageName: "python",languageFileName: "py"}
// ]
// console.log(myCoding)
// myCoding.forEach( (content) => {
//     console.log(content.languageName)
// }) 