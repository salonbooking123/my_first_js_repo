//immediately invoked function expression
//(Parameters IN)(arguments passed if there).......-> ()();  //We must end the IIFE  statements with semicolon(;), to end it.

//method-1->>
(function chai(){                        // named iife bcoz it has a name: chai
    console.log("hello IIFE")  
})();         // to immediately execute any statement,IIFE is used(don't forget to end with semicolon(;))

//method-2->>
((myname)=>{                             // un-named iife bcoz it has no name.
    console.log(`my name is: ${myname}`)  
})('sudhanshu');         // to immediately execute any statement,IIFE is used(don't forget to end with semicolon(;)), and sudhanshu is used as argument sent usually through the calling statement.

