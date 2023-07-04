//prefer to use union than using any => expecting different types but not ANY type

let hold: number | string | boolean = 4;
let hold1: number | string | boolean = "str";
let hold2: number | string | boolean = true;

//unions in funtions

function getId(id: number | string)
{
    console.log(`id is ${id}`);
    //condition to check the type
    if (typeof id === "string") {
        //operations on strings
        id.toLowerCase();
    }
    if (typeof id === "number") {
        //operations on numbers
        id++;
    }
}

//return different datatypes
function returnData(id: number | string): (string | number)
{
    if (typeof id === "string") {
        return "str"
    }
    return (69);
}

getId(4);
getId("4");

//unions in arrays
//arrays that can hold either all strings or all numbers not a mix
const arr: string[] | number[] = [1, 3, 5]; 
const arr2: string[] | number[] = ["1", "3", "5"];

//array that can mix types
const arr3: (string | number | boolean)[] = ["1", 3, "5", 69, true];

//force strict values (can use this instead of an if else)
let valu: "str" | 69;
//not possible
// value = 3


