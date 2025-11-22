const fs = require("fs")


//! syncronus file reading
const data = fs.readFileSync("./text.txt")
console.log(data) // output -> <Buffer 73 68 61 72 69 79 65 72 20 73 68 61 7a 61 6e>

try {
    const data2 = fs.readFileSync("./text.txt" , "utf-8")
    console.log("sync data: ",data2) // output -> sync data:  shariyer shazan
} catch (error) {
    console.log(error)
}


//! asyncronuss file reading

fs.readFile("./text.txt", "utf-8" , (error , data)=> {
    if(error){
        console.error(error)
    } 
    console.log("async data: " ,data) // output -> async data:  shariyer shazan
})