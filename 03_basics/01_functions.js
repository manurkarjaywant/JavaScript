function sayMyName () {
    console.log("J");
    console.log("A");
    console.log("Y");
    console.log("W");
    console.log("A");
    console.log("N");
    console.log("T");
}

// sayMyName();

// function addTwoNumbers (number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers (number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,4);

// console.log(`Result : ${result}`);


function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
        return `${username} just logged in`
}

// console.log(loginUserMessage("jaywant"))

/*
 "..." is know as "rest operator" as well as "spread operator" depending on its usage
*/

// function calculateCartPrice(...num1){ // output =>[ 200, 400, 500, 2000 ] => here num1 will take all the arguments passed
//     return num1
// }

// function calculateCartPrice(val1, val2, ...num1){ // output =>[ 500, 2000 ] => here val1 and val2 will take 200 and 400. rest everything will be taken by num1.
//     return num1
// }

// console.log(calculateCartPrice(200,400,500,2000));
// ----------------------------------------------------------------------------

// ****************** Passing object into the function **************************
const user = {
    username: "jaywant",
    price: 199
}

function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) // we can pass the object into function like this
handleObject({         // we can pass the object into function like this also
    username: "jaywant",
    price: 399
})

// ********************** passing an array into the function ***************************

const myNewArray = [100, 200, 300, 400]

function returnSecondValue (getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));// we can pass an array into function like this
console.log(returnSecondValue([100, 200, 300, 400]));// we can pass an array into function like this also