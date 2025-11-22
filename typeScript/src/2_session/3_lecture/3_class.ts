// // static counter

// class Counter {
//      count: number = 0
//     increment() {
//         return (this.count = this.count + 1)
//     }
//     decrement() {
//         return (this.count = this.count + 1)
//     }
// }
// const counterOne = new Counter()
// counterOne.increment()
// counterOne.increment()
// counterOne.increment()
// counterOne.increment()
// console.log(counterOne.count) //! output -> 4


// const counter2 = new Counter()
// counter2.increment()
// counter2.increment()
// console.log(counter2.count)  //! output -> 2





class Counter {
    static count: number = 0
    increment() {
        return (Counter.count = Counter.count + 1)
    }
    decrement() {
        return (Counter.count = Counter.count + 1)
    }
}
const counterOne = new Counter()
counterOne.increment()
counterOne.increment()
counterOne.increment()
counterOne.increment()
console.log(Counter.count) //! output -> 4


const counter2 = new Counter()
counter2.increment()
counter2.increment()
console.log(Counter.count)  //! output -> 6