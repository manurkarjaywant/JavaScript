// const tinderUser = new Object() // this is a singleton object
const tinderUser = {} // this is a non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jaywant",
            lastname: "Manurkar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3= { obj1, obj2} // it will not give merged output
// const obj3 = Object.assign(obj1, obj2) // it will give merged output
/*
in above code obj2 values will be added into obj1 and those values will be stored in obj3
thats why obj1 and obj3 will be equal. i.e. obj1===obj3 will give output as true
*/
// console.log(obj3);

// const obj3 = Object.assign( {}, obj1, obj2)
/*
in above code obj1 and obj2 values will be added into an epty object {} and those values will be stored in obj3.
in above line of code {} is called as target and everything after that is called source.
*/
// console.log(obj3);

// const obj3 = {...obj1, ...obj2}
/*
spread operator will work same as above example. it will merge all the values.
it is the most recommended to merge objects.
*/
// console.log(obj3);
//-------------------------------------------------------------------------------------

const users = [      // this is how data comes from the database. it is an array of objects
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 2,
        email: "g@gmail.com"
    },
    {
        id: 3,
        email: "m@gmail.com"
    }
]

// console.log(users[1].email) // this is how values will be accessed from the data received from the database
//--------------------------------------------------------------------------

// console.log(tinderUser); // output => { id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser)); // output => [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // output => [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // output => [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check whether the mentioned property exists in an object.