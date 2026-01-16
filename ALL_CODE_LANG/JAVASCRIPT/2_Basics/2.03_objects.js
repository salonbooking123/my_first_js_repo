// const mySym=Symbol("nice")            // symbol must be pre-defined before creating attribute in an object
// const JsUser={
//     //key:value
//     //string:any_data-type    // the key can/not be in inverted commas, the system assumes the key value to be string by default
//     name:"rishab",
//     'age':45,
//     "class":"5th",
//     6:16,
//     "my val":"nice",
//     loggedIn:false,
//     lastDay:["monday",60],
//     [mySym]:"good boy"         // this is the way of defining symbol keyword, and the value here overwrites the old value of the symbol, if there.
// }

// console.log(JsUser.lastDay)
// console.log(JsUser.name)
// console.log(JsUser.6)   // shows error sometimes if accessed by dots, so, we must prefer to access through the big brackets.
// console.log(JsUser.my key)  // shows error sometimes if accessed by dots, so, we must prefer to access through the big brackets.
// console.log(JsUser["lastDay"])
// console.log(JsUser["name"])
// console.log(JsUser["6"])
// console.log(JsUser["my key"])
// console.log(JsUser[mySym])

// Object.freeze(JsUser)           // applys a lock to the object so that no one can change the data of the object.
// JsUser.name="amit"              // no change committed bcoz object is freezed.
// console.log(JsUser)

// defining fuctions:
// JsUser.func1=function(){
//     console.log(`hello mr. ${this.name}`)
// }
// JsUser.func2=function(){
//     console.log(`to kaise hain aaplog !`)
// }
// JsUser.func1()
// JsUser.func2()
