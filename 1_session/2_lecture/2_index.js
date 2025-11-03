const course1 = {name: "Programming her"}
const course2 = {name: "Next level web development"}

const map = new Map()

map.set(course1, {courseId : "Level 1"})
map.set(course2, {courseId : "Level 2"})

console.log(map) // output -> Map(2) {{ name: 'Programming her' } => { courseId: 'Level 1' },  { name: 'Next level web development' } => { courseId: 'Level 2' }}


// map.clear() //! clear map
// map.delete(course1) //! delete object from map


map.forEach((value , key)=> (console.log(`Key: ${key} , Value: ${value}`)))