// ************************* Array *************************************
/*
const myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray[1]);

const myHeros = ["shaktimaan", "naagraj"]
console.log(myHeros[1]);

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[1]);
*/

//************************* Array methods ****************************

// const myArr = [0, 1, 2, 3, 4, 5]
// myArr.push(6)       //  [0, 1, 2, 3, 4, 5, 6]
// myArr.push(7)       //  [0, 1, 2, 3, 4, 5, 6, 7]
// myArr.pop()       //  [0, 1, 2, 3, 4, 5, 6]
// console.log(myArr); // output =>    [0, 1, 2, 3, 4, 5, 6]

// myArr.unshift(9)
// console.log(myArr); // output =>    [9, 0, 1, 2, 3, 4, 5, 6]
// myArr.shift()
// console.log(myArr); // output =>    [0, 1, 2, 3, 4, 5, 6]


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// ******************** slice, splice *******************************

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3) // (1,3) => includes "first index" to "last index -1" => no change in original array
// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3) // (1,3) => includes "first index" to "last index" => removes those elements from original array
// console.log(myn2);
// console.log("C ", myArr)

/* 
******************************* Note ***************************************
slice(first_index, last_index) does not change original array and inclues elements till last index -1
splice(first_index, last_index) changes original array and removes elements till last index mentioned from the original array
*/
