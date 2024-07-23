if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); // not available outside the scope
// console.log(b); // not available outside the scope
// console.log(c); // available outside the scope

/*
global scope when executed through browser is different and 
global scope when executed through node is different.
*/

function one() {
    const username = "jaywant"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two() 
 
}

// one()

if (true) {
    const username = "jaywant"
    if (username === "jaywant") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username)

// ***************** interesting ***********************

addOne(5)
function addOne(num) {
    return num + 1
}
/*
in above example addOne is a function name and it is called before it is defined.
no errors were occured
*/

addTwo(5)
const addTwo = function (num) {
    return num + 2    
}
/*
in above example addTwo is a variable name in which a functione is stored.
error was occured as variable is used before it is initialized.
*/