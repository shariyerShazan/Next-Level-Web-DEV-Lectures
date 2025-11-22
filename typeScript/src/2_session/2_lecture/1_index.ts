//? # type assertion 


let amount : any
amount = 125;
(amount as number) //* after dot(.) -> here will be suggest the method of number only


// const KgToGMConvert = (num : string | number) : number | undefined=>{ //! return types defined here
//     if(typeof num === "number"){
//          const gm =  num * 1000
//         return gm
        
//     } else if (typeof num === "string"){
//          const gm = Number(num.split(" ")[0]) * 1000
//         return  gm
//     } else {
//         return undefined
//     }
// }
// console.log(KgToGMConvert(20)) // output -> 22000
// console.log(KgToGMConvert("22 kg")) // output -> 22000
// console.log(KgToGMConvert(true)) // output -> undefined






//! type assertion 
const KgToGMConvert = (num : string | number | boolean)=>{
    if(typeof num === "number"){
         const gm =  num * 1000
        return gm
        
    } else if (typeof num === "string"){
         const gm = Number(num.split(" ")[0]) * 1000
        return  gm
    } else {
        return undefined
    }
}
console.log(KgToGMConvert(20) as number) // output -> 22000 //! return type define here
console.log(KgToGMConvert("22 kg") as number) // output -> 22000 //! return type define here
console.log(KgToGMConvert(true) as undefined) // output -> undefined //! return type define here