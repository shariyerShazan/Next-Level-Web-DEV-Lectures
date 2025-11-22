//  stateless //! function is stateless
const stateLess = (ammount) => {
  let add = 0;
  add += ammount;
  return add;
};
console.log(stateLess(5)); // output -> 5
console.log(stateLess(7)); // output -> 7

// statefull  //! object is statefull
const counter = {
  count: 0,
  add(ammo) {
    this.count += ammo;
  },
  print() {
    console.log(this.count);
  },
};
counter.add(5);
counter.add(12);
counter.print(); // output -> 17

// statefull function

var count = 0;
const add = (taka) => {
  count += taka;
  return count;
};
add(12);
add(13);
console.log(count); // output -> 25

//make counter
const createCounter = () => {
  let count = 0;
  return (ammount) => {
    count += ammount;
    return count;
  };
};
const counterN = createCounter()
console.log(counterN(4)) // output -> 4
console.log(counterN(6)) // output -> 10