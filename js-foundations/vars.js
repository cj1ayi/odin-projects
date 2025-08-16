let num = 5
let a = 2 
let b = 8
let str = "bANANA"

function add7(num) {return num + 7;}


function multiply(a, b) {return a * b;}

function capitalize(str)
{
    if (str.length === 0)
        return "String is empty"
    return str.charAt(0).toUpperCase()
}

function lastLetter(str)
{
    if (str.length === 0)
    return "String is empty"
    return str.charAt(str.length - 1)
}


console.log(add7(5));           // 12
console.log(multiply(2, 8));    // 16
console.log(capitalize("bANANA")); // "B"
console.log(lastLetter("abcd"));   // "d"