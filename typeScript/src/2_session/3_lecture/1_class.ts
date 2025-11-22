// class -> object

// class Animal {
//     name: string ;
//     sepcies: string ;
//     sound: string;
//     constructor(name: string , species: string , sound: string){
//         this.name = name ,
//         this.sepcies = species ,
//         this.sound = sound
//     }
//     makeSound (){
//         console.log(`The animal is making sound: ${this.sound}`)
//     }
// }

// const dog = new Animal("dogesh bhai" , "dog" , "gheu gheu")
// console.log(dog) //? Animal { name: 'dogesh bhai', sepcies: 'dog', sound: 'gheu gheu' }
// dog.makeSound() //?  The animal is making sound: gheu gheu






//! parametar properties

class Animal {
  constructor(public name: string, public species: string, public sound: string) {}
  makeSound() {
    console.log(`The animal is making sound: ${this.sound}`);
  }
}

const dog = new Animal("dogesh bhai", "dog", "gheu gheu");
console.log(dog); //? Animal { name: 'dogesh bhai', sepcies: 'dog', sound: 'gheu gheu' }
dog.makeSound(); //?  The animal is making sound: gheu gheu
