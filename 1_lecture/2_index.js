// const startTime = performance.now()

const firstArr  = []
const secondArr = []

for(let i =0 ; i< 5000 ; i++){
    if(i< 2500) {
        firstArr.push(i)
    }else{
        secondArr.push(i)
    }
}

// const endTime = performance.now()


console.log(`First array length: ${firstArr.length}`)
console.log(`First array length: ${secondArr.length}`)
// console.log(`This code take time to run: ${endTime-startTime} miliSecond`)



console.time("firstArr")
const firstList = firstArr.map((idx)=>({userId: idx}))
console.timeEnd("firstArr")




console.time("secondArr")
const secondList = secondArr.map((idx)=>({userId: idx}))
console.timeEnd("secondArr")