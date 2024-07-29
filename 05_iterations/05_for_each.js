// ********************* for each *************************************

const coding = ["js", "ruby", "java", "python", "cpp"]
// 1st pattern
// coding.forEach( function (val){
//     console.log(val);
// } )

// 2nd pattern
// coding.forEach( (item) => {
//     console.log(item);
// } )

// by passing a function in foreach
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

/*
const myCoding = [      // data comes in this format from the database most of the times
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {      // this will be used multiple times when data is fetched from the database
    
    console.log(item.languageName);
} )
*/