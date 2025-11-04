const number = [43, 54, 329 , 569 , 393 , 202 ,344 , 60 ,93 , 930]
const strings = ["Apple" , "banana" , "komola" , "Cherry" , "Mango" ]

const sortedNum = number.sort((a,b)=> a-b)
const sortedStr = strings.sort((a,b)=> a.localeCompare(b))

console.log(sortedNum) // output -> [ 43,  54,  60,  93, 202, 329, 344, 393, 569, 930]
console.log(sortedStr) // output -> [ 'Apple', 'banana', 'Cherry', 'komola', 'Mango' ]
 
const arr = [1,2, 3, [ 4, 5, 6, 7, [ 10 , 23 ,45 , 33 ,44, [ 21 , 56 , [34 , 90]]]]]

console.log(arr.flat(Infinity))
// output -> [ 1,  2,  3,  4,  5,  6, 7, 10, 23, 45, 33, 44,21, 56, 34, 90 ]



const skils = [
    ["java" , "pythone" , "node" , "react"],
    ["express" , "node" , "java"] ,
    ["javascript" , "pythone" , "typescript" , "java"],
    ["react" , "next"]
]

const filterSkill = [...new Set(skils.flat(Infinity))]

console.log(filterSkill)  //['java', 'pythone','node',  'react',  'express', 'javascript', 'typescript',   'next']