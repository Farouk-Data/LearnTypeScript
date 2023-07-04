//prefer to use union than using any => expecting different types but not ANY type
var hold = 4;
var hold1 = "str";
var hold2 = true;
//unions in funtions
function getId(id) {
    console.log("id is ".concat(id));
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
function returnData(id) {
    if (typeof id === "string") {
        return "str";
    }
    return (69);
}
getId(4);
getId("4");
//unions in arrays
//arrays that can hold either all strings or all numbers not a mix
var arr = [1, 3, 5];
var arr2 = ["1", "3", "5"];
//array that can mix types
var arr3 = ["1", 3, "5", 69, true];
