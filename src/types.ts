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

//arrow function with return type

let getReturn = (s: string):string => {
    return ("str1");
}

//knowing the type depending on the context
const str = ["str1", "str2", "str3"];
const num = [1, 2, 3];

//st is by default a string, don't need to specify the type
let newStr = str.map((st):string => {
    return `string is ${st} `
})

//num is by default a number, don't need to specify the type
let newNum = num.map((nm):number => {
    return (nm + 1)
})

console.log(newStr)
console.log(newNum)


//Error Handling
function consoleError(errMsg: string): void{
    console.log(errMsg);
}

//never: throws exception or terminates the execution of a program
function handleError(errMsg: string): never{
    throw new Error(errMsg);
}