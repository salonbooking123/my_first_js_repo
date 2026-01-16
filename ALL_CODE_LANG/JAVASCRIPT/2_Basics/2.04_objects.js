// const tinderUser1=new Object()       // singleton object created using constructor
// const tinderUser={                 // non-singleton object created without constructor
//     id:4746,
//     name:"rishu"
// }
// tinderUser.email="rishu@gmail.com"
// tinderUser.roll=2302025

// console.log(Object.keys(tinderUser))        // all key names printed                    ..vvi
// console.log(Object.values(tinderUser))      // all key corresponding values printed     ..vvi
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('roll')) //true or false
// console.log(tinderUser)

// const school={
//     schName:'vms',
//     schID:2744,
//     fullName:{
//         schFull:"vivekanand mission school",
//         userFullNames:{
//             student1:"rishabh",
//             student2:'amit'
//         }
//     }
// }
// console.log(school.fullName.userFullNames.student2)
// console.log(school.fullName)

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// const obj3 = {5: "e", 6: "f"}
// const obj4 = Object.assign ({}, obj1, obj2, obj3)     // curly braces is optional,if not applied, all objs. concat and replace everything inside obj1. if curly braces given(good practice), a new obj is created, without touching others.
// const obj5={...obj1,...obj2[3],...obj3}
// console.table(obj1);
// console.table(obj4);
// console.table(obj5);

// const course={
//     name:"sst",
//     courseFaculty:"hitesh",
//     courseTime:"4 months"
// }
// // object de-structuring 
// const {courseFaculty:teacher}=course
// console.log(course.courseFaculty)        // write full length to print
// console.log(courseFaculty)               // not writing (course.) every time i.e. easiness due to line 43
// console.log(teacher)                     // takes a reference name i.e. easiness due to line 43