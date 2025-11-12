// generic function


let userId = 0
const createStudent = <T>(studentInfo : T)=>{
    userId++
    return {
        id: userId,
       ...studentInfo
    }
}
const studentOne = createStudent({ // we can give every data.. if email and name is need to required. this process never work
    // name: "shazan" ,
    email: "shazan@gmail.com" ,
    hobby: "coding"
})
const studentTwo = createStudent({
    name: "shazan" ,
    email: "shazan@gmail.com" ,
    hobby: "coding"
})
console.log(studentOne)
console.log(studentTwo)



//! right process

type User = {
    name : string ;
    email: string
}


let userId1 = 0
const createStudent1 = <T extends User>(studentInfo : T)=>{
    userId1++
    return {
        id: userId1,
       ...studentInfo
    }
}
const student1 = createStudent1({
    name: "shazan" ,
    email: "shazan@gmail.com" ,
    isMarried: false
})
// const student2 = createStudent1({ //! giving error.. that's name is missing here.. name is required
//     // name: "shazan" ,
//     email: "shazan@gmail.com" ,
// })
console.log(student1)
// console.log(student2) //! error