//! interfaces

type User = {
    fullName : string ;
    email : string ;
    age : number
}
//! extends types with interface and add some types propertyes
interface UserWithRole extends User {
    role : "admin" | "user" | "guest"
}

const userOne : UserWithRole = {
    fullName : "shariyer shazan" ,
    email : "shariyer@gmail.com" ,
    age: 22 ,
    role : "admin"
}




//! interface in function
type Add= (numOne: number , numTwo: number) => number

const add : Add = (numOne , numTwo) => {
  return  numOne + numTwo
}
// add(12, "12") //! getting error.. because add takes number only
add(12, 12)  // run well




//! array types with index num

type IndexArr = {
    [index: number] : string //! index always number
}
const fruits1 : IndexArr = ["banana" , "apple" , "mango"] // run well
// const fruits2 : IndexArr = ["banana" , "apple" , "mango" , 22] //! getting errro