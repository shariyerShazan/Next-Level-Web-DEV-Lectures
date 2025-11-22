const fs = require("fs")

const document1 = "this is document one sync"
const document2 = "this is document two async"

try {
    fs.writeFileSync("./write.txt" , document1)
    console.log("file written") // and file is change // output -> file written
} catch (error) {
    console.log(error)
}

fs.writeFile("./writeAsync.txt" , document2 , (error )=> {
    if(error){
        console.log(error)
    }
    console.log("file written") // and file is change // output -> file written
})