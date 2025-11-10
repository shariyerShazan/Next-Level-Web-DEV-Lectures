// Types -> object



// const user = {
//    fullName : "shariyer shazan",
//    email : "shariyer shazan",
//    age : 22 ,
//    maritalStatus : false ,
// }
// const user: {
//     fullName: string;
//     email: string;
//     age: number;
//     maritalStatus: boolean;
// }   //! make this type automaticly


// const user : {
//     fullName: string ,
//     email: string ,
//     age: number ,
//     maritalStatus: boolean,
// } = {
//    fullName : "shariyer shazan",
//    email : "shariyer shazan",
//    age : 22 ,
//    maritalStatus : false ,
// } //? it's run googly



// const user : {
//     fullName: string ,
//     email: string ,
//     age: number ,
//     maritalStatus: boolean,
// } = {
//    fullName : "shariyer shazan",
//    email : "shariyer shazan",
//    age : 22 ,
//    maritalStatus : "no" ,
// }
//! getting error -> because marital status can be only boolean, never string
//? Type 'string' is not assignable to type 'boolean'
//? The expected type comes from property 'maritalStatus' which is declared here on type '{ fullName: string; email: string; age: number; maritalStatus: boolean; }'
//? (property) maritalStatus: boolean



