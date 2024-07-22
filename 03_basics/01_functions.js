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

const user = {
    username: "jaywant",
    price: 199
}

function handleObject(){}