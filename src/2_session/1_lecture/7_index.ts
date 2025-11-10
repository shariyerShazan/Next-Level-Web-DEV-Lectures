const family = ["shethe" , "shahana" , "khairul"]
const myFamily = ["shazan" , "priya" , "priyoti"]
const grandF = ["shahjahan" , "rajia" , "nazma" , "rashel" , "raju"]
// family.push(myFamily) //! there is an error -> Argument of type 'string[]' is not assignable to parameter of type 'string'.ts(2345) // in JS we understand this error after run the code.. but in TS we can get error on writing code
family.push(...myFamily) //* if i use ... oparator/ spread oparator.. then the code run.. and no error



// spread oparator...
const user1Basic : {name: string , phoneNumber: string} = {
    name :"shariyer shazan" ,
    phoneNumber : "+88000000000024" ,
    
}
const user1Others: {age : number , email: string} = {
    age: 22 ,
    email: "shariyershazan1@gmail.com"
}
const user = {...user1Basic , ...user1Others}
console.log(user)



const printName = (...names : string[])=>{
    names.forEach((name: string)=> {
       return console.log(name)
    })
}
printName("shazan" , "priya" , "shethe")
