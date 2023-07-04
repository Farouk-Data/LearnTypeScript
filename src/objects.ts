const user = {
    name: "str",
    email: "str@str",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){

}

createUser({name: "fech", isPaid: false});

//store object in var if function expects less params
let newUser = {name: "fech", isPaid: false, email: "str@str"};
createUser(newUser);

//function that return an object
function returnObj():{name: string, val: number}{

    return ({name: "str", val: 69});
}

//type alias => create types (like typedef struct)
type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createTypeObj(user: User): User{

    return ({name: "", email: "", isActive: true})
}

createTypeObj({name: "", email: "", isActive: true})

type newObj = {
    usr ?: User
    readonly _id: string,
    val: number,
    //third param optional
    additionalVal ?: number
}

let myObj: newObj = {
    _id: "str",
    val: 5,
}

myObj.val = 69;
//can't do this
// myObj._id = "new";

//mix previous types to create a new one
type homogen = User & newObj & { newElem: number};

