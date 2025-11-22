console.log("node version" , process.version) // output -> node version v24.11.0

const args = process.argv 

// "process.arg[0] = node path "
// "process.arg[1] = file path "
// "process.arg[2] = first actual argument "

const name = args[2]
console.log(name) // if i run "node 1_class.js shazan" then output is -> //! shazan