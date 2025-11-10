const name = ["Shazan" , "Vijay" , "Priya" , "Shethe" , "Shazan" , "Priya"]

const removeDupArrBySet = (arr)=>{
    const set = new Set(arr)

    return Array.from(set)
}
 
console.log("Delete duplicate by set: " , removeDupArrBySet(name)) // output -> Delete duplicate by set:  [ 'Shazan', 'Vijay', 'Priya', 'Shethe' ]