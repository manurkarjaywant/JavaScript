/*
const user = {
    username: "jaywant",
    price: 999,
    
    welcomMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
user.welcomMessage()
user.username = "sam"
user.welcomMessage()
console.log(this);
*/

/*
function chai() {
    let username = "jaywant"
    console.log(this);      // output shows everything stored in "this"
    console.log(this.username); // output shows "undefined". "this" keyword can be used like this in objects and not the functions.
}
chai()
*/

/*
const chai = function chai() {
    let username = "jaywant"
    console.log(this.username);
}
chai()
*/

/*
const chai = () => {
    let username = "jaywant"
    console.log(this); // output => {} 
    console.log(this.username); // output => undefined // this keyword in functions behave like this.
}
chai()
*/

// *************** syntax for arrow function ******************************
/* when there are multiple lines of code to be written

const variableName = (param_1, param_2,......,param_n) => {
    ........ logic........
    return some_thing
    }
*/

/* when there is only one line of code to be written

const variableName = (param_1, param_2,......,param_n) => logic
*/

/*
const addTwoNumbers = (num1, num2)=> {
    // console.log(num1+num2);
    return num1+num2
}
// addTwoNumbers(2,3);
console.log(addTwoNumbers(2,3));
*/


// const addTwoNumbers = (num1, num2) => { return num1 + num2 }
// console.log(addTwoNumbers(3,4));
/* this will give output as return keyword is used with {curly braces}.*/

// const addTwoNumbers = (num1, num2) => { num1 + num2 }
// console.log(addTwoNumbers(3,4));
/* this will give output as "undefined" because return keyword is not used with {curly braces}.*/

// const addTwoNumbers = (num1, num2) => ( num1 + num2 )
// console.log(addTwoNumbers(3,4));
/* this will give output as only (parenthisis) is used and return keyword as well as {curly braces} are not used.*/

// when returning an object (it will be used in react many times)
// const addTwoNumbers = (num1, num2) => ( {username:"jaywant", age:32} )
// console.log(addTwoNumbers(3,4));

/*
Note:
when using {curly braces} return keyword is must.
*/