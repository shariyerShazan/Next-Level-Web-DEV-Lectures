//! generic function



const createArryWithString = (value : string)=> { //? every types need a apecific function
    return value
}
createArryWithString("ok")
const createArryWithNumber = (value : number)=> { //? every types need a apecific function
    return value
}
createArryWithNumber(20)





const createArrWithGeneric = <T>(value: T) => {//! no need specific function . one function and multiple types
    return [value];
  }
// const res = createArrWithGeneric("string") //! const res: string[]




const createArr = <X , Y>(value1 : X , value2: Y) => { //! no need specific function . one function and multiple types
      return [value1 , value2]
}
// let res = createArr("shazan" , 22) //! let res: (string | number)[]