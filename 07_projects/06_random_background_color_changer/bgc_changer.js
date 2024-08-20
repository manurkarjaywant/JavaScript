const randomColor = function(){
    const hex = "0123456789ABCDEF";     // color is represented in hex values ie from 0 to 9 and A to F
    let color = "#";                    // hex values of color start from # ie "#12D6T" etc 

    for (let i = 0; i < 6; i++) { // to generate the random string of 6 values from string "0123456789ABCDEF"
        color += hex[Math.floor(Math.random() * 16)]    
    }
    return color;
};
// console.log(randomColor()); // to check the values of color

/*
// ================== code without Optimization =======================
let setInt;
const startChangingColor = function () {
    setInt = setInterval(changebgc,1000);

    function changebgc () {
        document.body.style.backgroundColor = randomColor()
    }
};

const stopChangingColor = function () {
        clearInterval(setInt)
};

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)
//==========================================================================
*/

// ================== code with Optimization =======================
let setInt;
const startChangingColor = function () {
    if(setInt == null) {// set the value of setInt only if it is null that is kept once the operation stopped
        setInt = setInterval(changebgc,1000);
    }

    function changebgc () {
        document.body.style.backgroundColor = randomColor()
    }
};

const stopChangingColor = function () {
        clearInterval(setInt)
        setInt = null;      // to clear the memory once operation is stopped
};

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)