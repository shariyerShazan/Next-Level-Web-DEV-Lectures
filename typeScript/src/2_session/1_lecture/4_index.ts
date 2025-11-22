// array, object



// let fruit = ["apple" , "bannana" , "pineapple" , "mango"] //? let fruit: string[] , type define automaticly



// let fruit : string[] = ["apple" , "bannana" , "pineapple" , "mango"] 
//? type defined only for 
//! sting array



// let fruit = ["apple" , "bannana" , "pineapple" , "mango"]
// fruit.push(true) //? Argument of type 'boolean' is not assignable to parameter of type 'string'.
// fruit.push(1234) //? Argument of type 'number' is not assignable to parameter of type 'string'.



// in array i need to mix arr with //! number | string
// let data = ["apple" , 5 , "banana" , 10 , "mango" , 21] //? let fruit: string[] | number[] , type define automaticly
// data.push("pineapple") // not error
// data.push(12) // not error
// data.push(true) //?Argument of type 'boolean' is not assignable to parameter of type 'string | number'.



// let data : (string | number)[] = ["apple" , 5 , "banana" , 10 , "mango" , 21]
//? type defined only for 
//! sting | number array



// let cordinate : [number , number] = [20 , 30 , 20]
//? 'cordinate' is declared but its value is never read.ts(6133)
//?  Type '[number, number, number]' is not assignable to type '[number, number]'.
//? Source has 3 element(s) but target allows only 2.



// let cordinate : [number , number] = [20 , 30 ] //TODO=>  no error



// let nameAndRoll : [string , number] = ["shazan" , 29] //TODO=>  no error
// let nameAndRoll : [string , number] = ["shazan" , "29"] //? Type 'string' is not assignable to type 'number'.



// let nameAndRoll : [string , number][] = [["shazan" , 29 ], ["priya" , 34]] //TODO=>  no error



// let nameAndRoll : [string , number] = ["shazan" , 29 , "priya" , 34]
//?  Type '[string, number, string, number]' is not assignable to type '[string, number]'.
//?  Source has 4 element(s) but target allows only 2.



// let threeD : [number , number , number] = [5 , 7, 3] //TODO=>  no error
// let threeD : [number , number , number] = ["shazan" , 7, 3] //! Type 'string' is not assignable to type 'number'