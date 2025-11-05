const cartItems = [
    {id: 1 , name: "mobile" , price: 5430 , quantity: 2},
    {id: 2 , name: "mobile" , price: 3240 , quantity: 4},
    {id: 3 , name: "mobile" , price: 6629 , quantity: 5},
    {id: 4 , name: "mobile" , price: 9540 , quantity: 6}
]

const totalPrice = cartItems.reduce((subTotal , item)=> {
    console.log(subTotal , item)
    return  subTotal + item.price * item.quantity
},0)
console.log(totalPrice) // output -> 114205



const runCount = [
    {name:"shazan" , score: 45},
    {name:"priya" , score: 67},
    {name:"shethe" , score: 95},
    {name:"khairul" , score: 46},
    {name:"shahana" , score: 92},
]

const bestScore = runCount.reduce((bestPlayer , player)=> {
    if(bestPlayer.score > player.score){
        return bestPlayer
    }
    return player
}, runCount[0])
console.log(bestScore) // output -> { name: 'shethe', score: 95 }