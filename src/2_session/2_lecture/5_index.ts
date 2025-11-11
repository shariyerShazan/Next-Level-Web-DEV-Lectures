const numArray : Array<number> = [12 , 15 , 54 , 35 ,75]
// const numArray2 : Array<number> = [12 , 15 , 54 , 35 ,75 , "shazan"] //! getting erro.. it's just a number array


const nameArray : Array<string> = ["shazan" , "shariyer" , "vijay" ]
// const nameArray2 : Array<string> = ["shazan" , "shariyer" , "vijay" , true ] //! gettig error.. it's just a string array


const isTrueArray : Array<boolean> = [true , false , true , false ] 
// const isTrueArray2 : Array<boolean> = [true , false , true , false , "shazan" , 23 ] //! getting error..it's just take boolean data



//? generic array
type GenericArray<Value> = Array<Value>
const numArray3 : GenericArray<number> = [12 , 15 , 54 , 35 ,75] //? run by gerenric array
const nameArray3 : Array<string> = ["shazan" , "shariyer" , "vijay" ] //? run by gerenric array
const isTrueArray3 : Array<boolean> = [true , false , true , false ]  //? run by gerenric array




type NameAge<X , Y> = [X, Y]
const nameAgeArr: NameAge<string , number>[] = [["shazan" , 22 ], ["priya" , 23] , ["shethe" , 18]]
const ageNameArr : NameAge<number, string>[] =  [[22  , "shazan"], [23 , "priya" ] , [18 ,"shethe" ]]




type User<T> = {
    fullName : string ;
    age : T;
} 
const userOne : User<string> = {
    fullName: "shariyer shazan",
    age: "22"
}
// const userOne2 : User<string> = {
//     fullName: "shariyer shazan",
//     age: 22, //! getting error.. generic type is sting
// }

const userTwo : User<number> = {
    fullName: "shariyer shazan",
    age: 22
}




type Items<T> = {
    name: string ;
    price: number;
    details:T
}
const watchOne :Items<{category: string , subcategory: string[]}> = {
    name: "Skemei",
    price: 2200 ,
    details: {
        category: "watch",
        subcategory: ["watchOne" , "watchTwo"]
    }
}