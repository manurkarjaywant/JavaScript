// ******************* ARRAY SPECIFIC LOOPS *************************
// ********************* for of *************************************

// ["", "", ""]
// [{}, {}, {}]

/*
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(num);
}
*/
// -------------------------------------------------------------
/*
const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
*/
// -------------------------------------------------------------
// **************** Maps ************************
/*
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")      // duplicate keys are not allowed // it will not give any error
map.set('PK', 'India')      // duplicate values are allowed

console.log(map);           // it will give output as => Map(no. of keys){'key1' => 'value1', ......'key_n' => 'value_n'}

for (const [key, value] of map) {   // this will give only keys and values as an output
    console.log(key+ " :- " +value);
}
*/
// ----------------------------------------------------------------------------------------------
/*
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObject) {      // it will give error as objects are not iterable with the help of for of loop
    console.log(key+ " :- " +value);
}
*/