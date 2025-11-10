type UserRole = "admin" | "user" | "guest"

const findDashboard = (userRole: UserRole) =>{
    if( userRole === "admin") {
        return "admin dashboard"
    }else if (userRole === "user"){
        return "user dashboard"
    } else if(userRole === "guest"){
        return "guest dashboard"
    } else {
        return "enter a valid role"
    }
}
findDashboard("user")



type User = {
    name: string;
    age : number;
    userDashboard: boolean
}
type Admin = {
    adminDashboard : boolean,
    access: boolean
}
type AdminAndUser = Admin & User

const isAdmin : AdminAndUser = {
    name: "shariyer shazan" ,
    age: 22 ,
    adminDashboard: true ,
    userDashboard: true ,
    access: true
} //! all of the filed of type User and Admin


