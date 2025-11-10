// array, object


// let fruit = ["apple" , "bannana" , "pineapple" , "mango"] //? let fruit: string[] , type define automaticly


// let fruit : string[] = ["apple" , "bannana" , "pineapple" , "mango"] 
//? type defined only for 
//!sting array


// let fruit = ["apple" , "bannana" , "pineapple" , "mango"]
// fruit.push(true) //? Argument of type 'boolean' is not assignable to parameter of type 'string'.
// fruit.push(1234) //? Argument of type 'number' is not assignable to parameter of type 'string'.


// in array i need to mix arr with //! number | string
// let data = ["apple" , 5 , "banana" , 10 , "mango" , 21] //? let fruit: string[] | number[] , type define automaticly
// data.push("pineapple") // not error
// data.push(12) // not error
// data.push(true) //?Argument of type 'boolean' is not assignable to parameter of type 'string | number'.


let data : (string | number)[] = ["apple" , 5 , "banana" , 10 , "mango" , 21]
//? type defined only for 
//! sting | number array


