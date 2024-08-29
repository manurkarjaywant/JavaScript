// =============== Learning Promises ============================

// const promiseOne = new Promise(function (resolve, reject) {
//     // do an async task
//     // DB calls, cryptography, network
//     setTimeout(function (){
//         console.log('Async task is complete');
//         resolve()
//     }, 1000)
// })
// promiseOne.then(function () {
//     console.log('promise consumed');
// })
// // ==========================================================================================

// ==========================================================================================
/*
this can be done without storing a promise in a variable
*/

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     }, 2000)
// }).then(function(){
//     console.log('Async 2 resolved');
// })
// // ==========================================================================================

// ==========================================================================================
/*
sending arguments from resolve(arg1) and catching parameters in then(function(param1){})
*/

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function (){
//         resolve({username: "jaywant", email:"jaywant@example.com"})
//     }, 1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })
// // ==========================================================================================

// ==========================================================================================
/*
Learning reject, catch and finally
resolve => then()
reject => catch()
finally => in both cases i.e resolve and reject.
*/

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout( function(){
//         // let error = true
//         let error = false
//         if(!error){
//             resolve({username:"jaywant", password:"123"})
//         }else {
//             reject('ERROR: Something went wrong')
//         }
//     } ,1000)
// })
// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);    
// })
// .catch((error)=>{
//     console.log(error);    
// })
// .finally(()=>{
//     console.log('The promise is either resolved or rejected');    
// })
// // ==========================================================================================

// ==========================================================================================
/*
we can also use try catch in async await instead of then() and catch(). both can be used for same purpose.
whichever syntax seems easy we are free to use it
*/

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // let error = true
//         let error = false
//         if (!error) {
//             resolve({username:"javascript", password:"123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);        
//     }
// }
// consumePromiseFive()
// // ==========================================================================================

// ==========================================================================================
/*
fetch() with then() and catch()
*/

// fetch('http://jsonplaceholder.typicode.com/users')
// .then((response)=>{                 // response from url comes as string object
//     return response.json()          // converting it to json object
// })
// .then((data)=>{
//     console.log(data);
// })
// // ==========================================================================================

// ==========================================================================================
/*
fetch() with async await
*/

async function getAllUsers() {
    try {
        const response = await fetch('http://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }    
}
getAllUsers()
// ==========================================================================================