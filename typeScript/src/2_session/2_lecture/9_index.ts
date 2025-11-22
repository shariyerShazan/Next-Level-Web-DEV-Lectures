//! better approx for enum

const userRole = {
    Admin : "admin" ,
    User : "user" ,
    Guest: "guest"
}  as const //! as const cnat be re assign..
// userRole.Admin = "user" //! gettign error.. can't change

const canAceess = (role : keyof typeof userRole)=>{
    if (role === "Admin") {  // keyof is give like "Kye"
        return "you can access it"
    } else if (role === "User") {
        return "Can't access this.. you are a user"
    } else if (role === "Guest") {
        return "Can't access this.. you are a guest"
    } else {
        return "Invalid role!"
    }
}
console.log(canAceess("User")) // output -> "Can't access this.. you are a user"