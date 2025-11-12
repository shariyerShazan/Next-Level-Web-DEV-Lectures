// object generic

type User = {
    name: string ;
    email: string ;
    age: number
}

const getPropertyFromObj = (obj: User , key: keyof User ) => {
    return obj[key]
}

const user : User= {
    name : "shazan" ,
    email : "shazan@gmail.com" ,
    age: 22
}
const getAge = getPropertyFromObj(user, "age")
console.log(getAge) // output -> 22





//! totally generic way
//? best approx to defined types..
//! =====>
const getPropertyFromObjj = <T>(obj: T , key: keyof T ) => {
    return obj[key]
}
const mobile = {
    name: "mobile phone" ,
    brand: "apple",
    price: 1200 ,
    model: "iPhone 12"
}
const getBrand = getPropertyFromObjj(mobile , "brand")
console.log(getBrand) // output -> apple