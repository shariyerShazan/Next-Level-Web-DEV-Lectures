// Types -> object



// const user = {
//    fullName : "shariyer shazan",
//    email : "shariyer shazan",
//    age : 22 ,
//    isMarried : false ,
// }
// const user: {
//     fullName: string;
//     email: string;
//     age: number;
//     isMarried: boolean;
// }   //! make this type automaticly



// const user : {
//     fullName: string ,
//     email: string ,
//     age: number ,
//     isMarried: boolean,
// } = {
//    fullName : "shariyer shazan",
//    email : "shariyer shazan",
//    age : 22 ,
//    isMarried : false ,
// } //? it's run googly



// const user : {
//     fullName: string ,
//     email: string ,
//     age: number ,
//     isMarried: boolean,
// } = {
//    fullName : "shariyer shazan",
//    email : "shariyer shazan",
//    age : 22 ,
//    isMarried : "no" ,
// }
//! getting error -> because marital status can be only boolean, never string
//? Type 'string' is not assignable to type 'boolean'
//? The expected type comes from property 'isMarried' which is declared here on type '{ fullName: string; email: string; age: number; isMarried: boolean; }'
//? (property) isMarried: boolean



// const user : {
//     firstName: string ,
//     lastName: string ,
//     email: string ,
//     age: number ,
//     isMarried: boolean,
// } = {
//    firstName : "shariyer shazan",
//    email : "shariyer shazan",
//    age : 22 ,
//    isMarried : false ,
// } //! getting error, because we init to lastName in type , but don't use that



// const user : {
//     firstName: string ,
//     lastName?: string , //! it's is optional 
//     email: string ,
//     age: number ,
//     isMarried: boolean,
// } = {
//    firstName : "shariyer shazan",
//    email : "shariyer shazan",
//    age : 22 ,
//    isMarried : false ,
// } //? not getting error .. because we use optional type for lastName



// const user : {
//     firstName: string ,
//     lastName?: string , 
//     email: string ,
//     age: number ,
//     isMarried: boolean,
// } = {
//    firstName : "shariyer shazan",
//    email : "shariyer shazan",
//    age : 22 ,
//    isMarried : false ,
// }
// user.age 
// user.email
// user.firstName
// user.isMarried
// user.lastName
// user.age = 45 //* no error, because age is number
// user.age = "22" //! getting error, because age is number
//? every property of user is giving suggestion -> that's i decliear in types




// const user : {
//     firstName: string ,
//     lastName?: string , 
//     email: string ,
//     readonly age: number , //? make it readOnly. it's can't change | it's access modifires
//     isMarried?: boolean,
// } = {
//    firstName : "shariyer shazan",
//    email : "shariyershazan",
//    age : 22 ,
//    isMarried : false ,
// }
// user.email = "shazan@gmail.com" //TODO=> no error
// user.age = 23  //! Cannot assign to 'age' because it is a read-only property

