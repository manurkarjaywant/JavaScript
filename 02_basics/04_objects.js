/*
const tinderUser = new Object() // this is a singleton object
// const tinderUser = {} // this is a non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);
*/

/*
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jaywant",
            lastname: "Manurkar"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
*/

// ----------------------------------------------------------------------

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// const obj3= { obj1, obj2} // it will not give merged output
// const obj3 = Object.assign(obj1, obj2) // it will give merged output //======================== Type 1
/*
in above code obj2 values will be added into obj1 and those values will be stored in obj3
thats why obj1 and obj3 will be equal. i.e. obj1===obj3 will give output as true
*/
// console.log(obj3);

// const obj3 = Object.assign( {}, obj1, obj2) //======================== Type 2
/*
in above code obj1 and obj2 values will be added into an empty object {} and those values will be stored in obj3.
in above line of code {} is called as target and everything after that is called source.
*/
// console.log(obj3);

// const obj3 = {...obj1, ...obj2} //======================== Type 3
/*
spread operator will work same as above example. it will merge all the values.
it is the most recommended practice to merge objects.
*/
// console.log(obj3);

//-------------------------------------------------------------------------------------
/*
const users = [      // this is how data comes from the database. it is an array of objects
    {
        id: 1,
        email: "j@gmail.com",
        "full name": "uzumaki naruto"
    },
    {
        id: 2,
        email: "g@gmail.com",
        "full name": "uchiha sasuka"
    },
    {
        id: 3,
        email: "m@gmail.com",
        "full name": "haruno sakura"
    }
]
console.log(users[1].email) // if key has only one word
console.log(users[1]["full name"])  // if key has more than one words // this is how values will be accessed from the data received from the database
*/

//--------------------------------------------------------------------------

/*
const tinderUser = {
id : "123abc",
name : "Sammy",
isLoggedIn : false
}
// console.log(tinderUser); // output => { id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser)); // output => [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // output => [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // output => [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check whether the mentioned property exists in an object.
*/

//---------------------------------------------------------------------------------------

// const course = {
//     coursename: "js",
//     price: 999,
//     courseInstructor: "Jaywant"
// }

// course.courseInstructor
/* we can access values like above.
but when property name is lengthy we can give an alias to it as shown below.
*/

// const {courseInstructor: instructor} = course // this is called destructuring
// console.log(instructor);

//-------------------------------------------------------------------

// json
// {
//     "name": "jaywant",
//     "surname": "manurkar",
//     "age": 32
// }
// this is how json looks. it is mandatory to mention all the keys in "".

// for sample api search on google "randomuser me api".
// to understand it better copy the api and paste it into "jason formatter" tool.
// search it on google.
