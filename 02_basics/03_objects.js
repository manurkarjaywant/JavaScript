// singleton
// Object.create

//===========================================================================

// object literals

const mySym = Symbol("key1") // this is how symbol is created

const JsUser = {
    name: "Jaywant",
    "full name": "Jaywant Manurkar", // if key has white spaces in between then we should do this
    [mySym]: "mykey1", // this is how symbol is used as a key in an object
    age: 32,
    location: "thane",
    email: "jaywant@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"] // this is how array is created in an object
}

// console.log(JsUser.email); // allowed and recommended
// console.log(JsUser["email"]); // allowed
// console.log(JsUser["full name"]); // when a key has white spaces we have no other option but to use it like this 
// console.log(JsUser[mySym]); // this is how the syntax goes for symbol

JsUser.email = "jaywant@chatgpt.com"
//Object.freeze(JsUser) // this is used to freeze the object. no error will be shown but no changes will be made in the object after this point.
JsUser.email = "jaywant@microsoft.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // using string interpolation. if the object is same use "this" keyword
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//-----------------------------------------------------------------



