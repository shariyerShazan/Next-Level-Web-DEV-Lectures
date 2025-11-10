//! nullable types

const getUser = (userId: string | null) => {
  if (userId !== "" && userId !== null) {
    console.log(`User found! and his/her id is ${userId}`);
  } else {
    console.log("User not found");
  }
};

getUser("SHAZAN") // output -> User found! and his/her id is SHAZAN
getUser(null) // output -> User not found




//! unknown types

const isAdult = (age :unknown): boolean | null =>{
    if(typeof age === "number"){
        return age > 18 ? true : false
    } else if (typeof age === "string"){
        return Number(age) > 18 ? true : false
    } else {
        return null
    }
}
console.log(isAdult(19)) // output -> ture
console.log(isAdult("17")) // output -> false
console.log(isAdult(null)) // output -> null




//! never type

const throwError = (msg: string): never=>{ //! it's haven't return .. so it's never return. and the type is never...
    throw new Error(msg);  
}
throwError("error...")