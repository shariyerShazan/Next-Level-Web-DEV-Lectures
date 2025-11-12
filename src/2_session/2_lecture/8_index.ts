//? emun use without define enum

const isAccess = (role: "admin" | "user") => {
    if(role === "admin"){
        return "you can access it"
    } else if (role === "user"){
        return "Can't aceess this.. you are a user"
    } else {
        return "Invalid role!"
    }
}
console.log(isAccess("admin"))


//! enum with defined 

enum Role {
    Admin = "admin" ,
    User = "user" ,
    Guest = "guest"
}

const canAceess = (role : Role)=>{
    if(role === Role.Admin){
        return "you can access it"
    } else if (role === Role.User){
        return "Can't aceess this.. you are a user"
    }
    else if (role === Role.Guest){
        return "Can't aceess this.. you are a guest"
     } else {
        return "Invalid role!"
    }
}
console.log(canAceess(Role.User))// output ->