//! 1. "?" is for ternary operator =>  condition? true res : false res
//! 2. "??" nullish coalescing operator -> only work for {null and undefined}
//! 3. "?." optional chaining


//? 1 =>
const isAdult  = (age : number): boolean =>{
    return age > 18 ? true : false // ternary operator
}
console.log(isAdult(19)) // output -> true



//? 1 =>
const theme = undefined

const selectedTheme = theme ?? "Default theme"  
console.log(selectedTheme) // output -> "Default theme" 




//? 3 =>
type user = {
    name : string ,
    age? : number //* optional
}
 const userOne: user = {
    name: "shariyer shazan" ,
 }
 console.log("age" , userOne.age , 'name' ,  userOne.name) // output -> undefined shariyer shazan
 console.log("age" , userOne?.age , 'name' ,  userOne.name) // output -> undefined shariyer shazan




 const firstStep = true
 const secondStep = true
 const thirdStep = false
 console.log(
   firstStep && secondStep && thirdStep && "You finish all step" ||
   firstStep && secondStep && "You finish two step" || //! output -> You finish two step
   firstStep && "You finish one step" ||
   "You finish no step"
 )
 