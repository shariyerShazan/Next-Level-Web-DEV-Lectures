const name = ["Shazan" , "Vijay" , "Priya" , "Shethe" , "Shazan"]

const set = new Set(name)

set.add("Vikram")

console.log(set) // output -> Set(4) { 'Shazan', 'Vijay', 'Pirya', 'Shethe' }

const nameArr = Array.from(set)

console.log(nameArr) //  output -> [ 'Shazan', 'Vijay', 'Pirya', 'Shethe', 'Vikram' ]



nameArr.push("Nani")
console.log("After push" ,nameArr) //  output -> After push [ 'Shazan', 'Vijay', 'Pirya', 'Shethe', 'Vikram', 'Nani' ]