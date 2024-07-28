// ********** Immediately Invoked Function Expression (IIFE) *************

function chai1 () { // this is how normal functions are made and called
    console.log(`DB CONNECTED`)
}
chai1();

// we can write IIFE as below
// 1st type of writing IIFE
(function chai () {  // this is named IIFE
    console.log(`DB CONNECTED`)
}) ();

// 2nd type of writing IIFE
( () => {  // this is anonymous IIFE
    console.log(`DB CONNECTED`)
}) ();

// 3rd type of writing IIFE with arguments and parameters
( (param1, param2) => {  // parameters
    console.log(param1);
    console.log(param2);
}) (5, 7); // arguments

// =====================================================================================


