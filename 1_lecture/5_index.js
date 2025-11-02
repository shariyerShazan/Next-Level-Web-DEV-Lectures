const name = ["Shazan" , "Vijay" , "Priya" , "Shethe" , "Shazan" , "Priya"]

const removeDupArr = (arr)=>{
    const newArr = []
     arr.forEach(element => {
          if(!newArr.includes(element)){
            newArr.push(element)
          }
     });
     return newArr
}

console.log(removeDupArr(name)) // output -> [ 'Shazan', 'Vijay', 'Priya', 'Shethe' ]

