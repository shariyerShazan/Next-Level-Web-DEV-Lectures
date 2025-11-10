const set = new Set()

set.add("Shazan")
set.add("Vijay")
set.add("Priya")
set.add("Priya") // no effect in dublicate set.. output -> Set(3) { 'Shazan', 'Vijay', 'Priya' }

console.log(set)
console.log(set.size) // output -> 3

