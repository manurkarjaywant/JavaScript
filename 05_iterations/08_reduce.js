// ******************************* reduce ************************************
// *********** syntax **************
/*
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;     // this value will be stored in accumulator
const sumWithInitial = array1.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue,);

// currentValue will be taken from the array on which reduce method is applied
// initialValue will be stored inside accumulator at the start of iteration
// after the first iteration the sum of accumulator and currentValue will be stored inside accumulator


console.log(sumWithInitial);
// Expected output: 10
*/
// ------------------------------------------------------------------------
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);