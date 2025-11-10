const user = {
    id: "1a2b",
    name: {
        firstName : "shariyer",
        lastName: "shazna"
    },
    age : 22 ,
    favHero: ["vijay" , "nani" , "ntr" ],
    favSinger: ["habib" , "kishore kumar" , "kumar sanu" , "udit narayan"]
}
const {id , name , age , favHero , favSinger} = user //* distructure for better code
console.log(id , name , age , favHero , favSinger)

const {favSinger :singers} = user //* chnage by the name... 
console.log(singers)


const girl = ["purnima" , "priya" , "riya sen"]
const [, myLove , ] = girl //* skip index by ","
console.log(myLove)