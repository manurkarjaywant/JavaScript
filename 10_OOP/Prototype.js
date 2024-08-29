// let myName = "jaywant     "
// let mychannel = "youtube     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.jaywant = function(){
    console.log(`jaywant is present in all objects`);
}

Array.prototype.heyJaywant = function(){
    console.log(`Jaywant says hello`);
}

// heroPower.jaywant()
// myHeros.jaywant()
// myHeros.heyJaywant()
// heroPower.heyJaywant()

// inheritance

const User = {
    name: "youtube",
    email: "youtube@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "youtubeJavascript     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"jaywant".trueLength()
"iceTea".trueLength()