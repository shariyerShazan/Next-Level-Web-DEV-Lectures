type Vehicle = {
    Bike: string ;
     Car: string ;
     Cycle: string;
}
type CheckVehicle<T> = T extends keyof Vehicle  ? true : false

type hasBike = CheckVehicle<"Bike">//? hasBike = true


//! need to learn map type lates !!!! please ----------------------------------->



// utility type :=>

type User = {
    id: number ;
    name : string ;
    age : number ;
    email : string ;
    isMarried: boolean
}




//! Omit type
type OmitUser2 = Omit<User , "id" | "isMarried">;
// type IUser2 = {
//     name: string;
//     age: number;
//     email: string;
// }




//! Pick type
type PickUser = Pick<User , "age" | "email" | "name" >
// type IUser = {
//     name: string;
//     age: number;
//     email: string;
// }



//! optional / partial type.. 
type OptionalUser = Partial<User>
// type OptionalUser = {
//     id?: number;
//     name?: string;
//     age?: number;
//     email?: string;
//     isMarried?: boolean;
// }



type ReadOnlyUser = Readonly<User>
// type ReadOnlyUser = {
//     readonly id: number;
//     readonly name: string;
//     readonly age: number;
//     readonly email: string;
//     readonly isMarried: boolean;
// }
const user : ReadOnlyUser = {
    name: "ok",
    email: "ok",
    id: 1 ,
    age: 22 ,
    isMarried: false
}
// user.age = 12 //! cant change.. because it's readOnly