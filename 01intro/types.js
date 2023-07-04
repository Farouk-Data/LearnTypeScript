// export {};
//arrays 
var arrNum = [1, 3, 5, 7];
var arrStr = ["str1", "str2"];
var arrPush = [];
arrPush.push(2);
arrPush.push(4);
arrPush.push(6);
console.log(arrNum[2]);
console.log(arrStr[1]);
console.log(arrPush[0]);
//functions
function getNumber() {
    return (42);
}
//types are optional in vars, mandatory in functions
//Anonymous functions
var myAdd = function (x, y) { return (x + y); };
//Can be called like that 
console.log(myAdd(5, 10));
//More common like that
console.log((function (x, y) {
    return (x + y);
})(5, 10));
//regular functions vs arrow functions
var names = ["str1", "str2", "str3"];
//regular functions
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
//arrow functions
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
function signUpUser(name, email, isPaid) {
}
//we can see what kind of params the functions needs
signUpUser("str", "str@str", false);
//functions assigned to a variables 
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
//pass specific args
loginUser("str", "str@str");
//function returns problems
function addTwo(num) {
    return (num + 2);
    //if we specify the return value of the function, we are not allowed to do this
    // return "str";
}
var myVal = addTwo(5);
