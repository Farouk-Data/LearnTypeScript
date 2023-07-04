// export {};

//arrays 

let arrNum: number[] = [1, 3, 5, 7];

let arrStr: Array<string> = ["str1", "str2"];

let arrPush: number[] = [];

arrPush.push(2);
arrPush.push(4);
arrPush.push(6);

console.log(arrNum[2]);
console.log(arrStr[1]);
console.log(arrPush[0]);

//functions

function getNumber(): number
{
    return (42);
}

//types are optional in vars, mandatory in functions

//Anonymous functions
let myAdd = function(x, y) { return (x+y);};

//Can be called like that 
console.log(myAdd(5, 10));

//More common like that
console.log((function(x, y) {
    return (x + y);
})(5, 10))

//regular functions vs arrow functions
const names = ["str1", "str2", "str3"];

//regular functions
names.forEach(function(s) {
    console.log(s.toUpperCase());
});

//arrow functions
names.forEach((s) => {
    console.log(s.toUpperCase());
});


function signUpUser(name: string, email: string, isPaid: boolean){

}
//we can see what kind of params the functions needs
signUpUser("str", "str@str", false);

//functions assigned to a variables 
let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}
//pass specific args
loginUser("str", "str@str");

//function returns problems
function addTwo(num: number): number {
    return (num + 2);

    //if we specify the return value of the function, we are not allowed to do this
    // return "str";
}

let myVal = addTwo(5);
