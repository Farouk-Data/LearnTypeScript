var user = {
    name: "str",
    email: "str@str",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "fech", isPaid: false });
//store object in var if function expects less params
var newUser = { name: "fech", isPaid: false, email: "str@str" };
createUser(newUser);
//function that return an object
function returnObj() {
    return ({ name: "str", val: 69 });
}
function createTypeObj(user) {
    return ({ name: "", email: "", isActive: true });
}
createTypeObj({ name: "", email: "", isActive: true });
var myObj = {
    _id: "str",
    val: 5,
};
myObj.val = 69;
