// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

/*const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
*/

/*
const bigNumber = 54435433548546631546543n  // put n after the number and it will be converted into BigInt
console.log(typeof bigNumber);
*/

// ************************* Reference type / Non-Primitive **************************

// ************************** Array, Objects, Functions ******************************

/*const heros = ["shaktimaan", "naagraj", "doga"]

let myObject = {
    name: "jaywant",
    age: 32,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof heros);
console.log(typeof myObject);
console.log(typeof myFunction);
*/

// typeof non premitive datatypes will always be "object" and typeof function will be "function" but it is called as "object function".
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// ************************ Memories **********************************

// Stack (Primitive) , Heap (Non-Primitive)

/*
let myYouTubename = "JaywantManurkar";
let anotherName = myYouTubename;
anotherName = "ManurkarJaywant";

console.log(myYouTubename);
console.log(anotherName);
*/


let userone = {
    email: "user1@google.com",
    upi: "user1@ybl"
}

let usertwo = {
    email: "user2@google.com",
    upi: "user2@ybl"
}
usertwo = userone;

console.log(userone.email);
console.log(usertwo.email);
