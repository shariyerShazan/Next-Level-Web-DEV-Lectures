const startTime = performance.now()

for(let i = 0 ; i <= 500 ; i++){
    console.log(i)
}

const endTime = performance.now()
console.log(`This code take time to run: ${endTime-startTime} miliSecond`)

