// class Student {
//   name: string;
//   age: number;
//   adress: string;
//   constructor(name: string, age: number, adress: string) {
//     (this.name = name), (this.adress = adress), (this.age = age);
//   }
//   getSleep(sleepTime : number){
//     console.log(`${this.name} ${sleepTime} ghonta ghumai`)
//   }
// }

// const student1 = new Student("shariyer" , 23 , "Dhaka")
// student1.getSleep(6) //? output - shariyer 6 ghonta ghumai




class Parents {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
  }
  
  class Student extends Parents {
    constructor(
      public name: string,      
      public age: number,      
      public address: string,   
      public studentId: number,
      public department: string
    ) {
      super(name, age, address);
    }
  }
  
  const student1 = new Student("Shariyer", 23, "Dhaka", 101, "CSE");
  console.log(student1);
  