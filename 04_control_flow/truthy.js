// const userEmail = "h@jaywant.ai" // try with empty strings ""," ", []

// if (userEmail) {
//     console.log("got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values
// false, 0, -0, bigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// const userEmail = []
// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

// const emptyObject = {}
// if (Object.keys(emptyObject).length === 0) {
//     console.log("object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 15
// val1 = undefined ?? 20
// val1 = null ?? 10 ?? 20

// console.log(val1);

// **************************** Terniary Operator ***************************************

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")