//TYPE alias


// many time define same kinds of types: it's name alias ->
const user1 : {
    id: number,
    name: {
        firstName: string ,
        lastName: string
    } ,
    gender: "male" | "female" ,
    age : number ,
    isMarried: boolean
} = {
   id: 11 ,
   name: {
    firstName: "shariyer",
    lastName: "shazan"
   },
   gender: "male" ,
   age:  22 ,
   isMarried: false
}
const user2 : {
    id: number,
    name: {
        firstName: string ,
        lastName: string
    } ,
    gender: "male" | "female" ,
    age : number ,
    isMarried: boolean
} = {
   id: 12 ,
   name: {
    firstName: "atiya",
    lastName: "priya"
   },
   gender: "female" ,
   age:  23 ,
   isMarried: false
}





// type define one time.. : it's type alias->
type user = {
    id: number,
    name: {
        firstName: string ,
        lastName: string
    } ,
    gender: "male" | "female" ,
    age : number ,
    isMarried: boolean
}


const user3 : user ={
    id: 13 ,
    name : {
        firstName: "shinthiya",
        lastName: "shethe"
    },
    gender: "female",
    age: 18 ,
    isMarried: false
}