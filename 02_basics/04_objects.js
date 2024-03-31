
// const tinder=new Object();

const tinderapp={}

tinderapp.id="123abc"
tinderapp.name="awsmdeep"
tinderapp.isLoggedIn= false


// console.log(tinderapp);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        username:{
            firstname:"deepak",
            lastname:"das"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1 ,...obj2}
console.log(obj3);


const user=[
    {
        id:1,
        email:"d@gmail.com"
    },
    {
        id:1,
        email:"d@gmail.com"
    },
    {
        id:1,
        email:"d@gmail.com"
    }
]

// console.log(user[1]);

// console.log(Object.keys(tinderapp));
// console.log(Object.values(tinderapp));
// console.log(Object.entries(tinderapp));

// console.log(tinderapp.hasOwnProperty('isloggedin'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"deep"
}

const {courseinstructor}=course
console.log(courseinstructor);


// {
//     "name" :"deepak",
//     "cousre": "js in hindi",
//     "price":"free"
// }

