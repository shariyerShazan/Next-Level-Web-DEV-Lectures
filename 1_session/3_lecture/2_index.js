class Counter {
  constructor(count) {
    this.count = count;
  }

  add(amount) {
    this.count += amount;
  }
  print() {
    console.log(this.count);
  }
}

const counter1 = new Counter(5) 
counter1.add(5) 
counter1.print() // output -> 10


const counter2 = new Counter(0)
counter2.add(10)
counter2.add(15)
counter2.print() // output -> 25