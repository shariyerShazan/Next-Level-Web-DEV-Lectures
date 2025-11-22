// function types =>



//? normal function =>



// function add(num1 , num2){
//     return num1 + num2
// }  //! getting error -> Parameter 'num2' implicitly has an 'any' type. // because not define types



// function add(num1: number , num2 : number){
//     return num1 + num2
// }
// add(2, 5) //* not getting error ..
// add(5 , "7") //! gettig error -> Argument of type 'string' is not assignable to parameter of type 'number'.



// function add(num1: number , num2 : number) : number{
//     return num1 + num2
// }  //? we give the return type
// add(2, 5) //* not getting error ..
// add(5 , "7") //! gettig error -> Argument of type 'string' is not assignable to parameter of type 'number'.



// function add(num1: number , num2 : string) : number{
//     return num1 + num2
// } //! getting error because (number + string = string. but return type is number)



// function add(num1: number , num2 : string) : string{
//     return num1 + num2
// } //* not getting error.. because (number + string = string. and return type is string)



// function add(num1: number , num2 : string) : number{
//     return num1 + Number(num2)
// } //* we typecast the num2 from string to number.. and return the number.. and not getting eror



// function add(num1: number , num2 : string) : number{
//     return num1 + Number(num2)
// }
// add(12 , "12") // ouptut -> 24 //* not getting error -> because first perameter type is number and second perameter type is string and return type is number..  but out argument is number and string
// add(12, 12) //! getting error -> because we define two argument is  number and number.. but we declear number and string




//? arrow function 



// Arrow function with types
// const add = (num1: number, num2: string): number => {
//     return num1 + Number(num2); 
// }
// Example usage
// add(12, "12"); // output -> 24
// add(12, 12); //! error -> Argument of type 'number' is not assignable to parameter of type 'string'.


// const add = (num1: number, num2: string): number => num1 + Number(num2);
// add(12, "12"); // 24





//? onject function => method =>



// const poorUser ={
//     name : "shazan" ,
//     balance: 0 ,
//     addBalance(amount: number): number {
//        return this.balance + amount
//     }
// }
// poorUser.addBalance(100) //* not erroring
// poorUser.addBalance("100")// getting erro.. //! addBalance is take number only



const nums: number[] = [1 , 2, 3, 4, 5, 6, 7, 8]
const sqrNumber : number[] = nums.map((num : number): number=> num*num)
//? number array..and we squre the every element of nums array.. and it's make by mapFunction.. it's parametar is number.. return type is number.. and thats' sqrNumber type is number[] mean -> number array




// const poorUser ={
//     name : "shazan" ,
//     balance: 0 ,
//     addBalance(amount: number): number {
//        return this.balance + amount
//     }
// }