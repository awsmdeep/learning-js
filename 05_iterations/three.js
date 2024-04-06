//for of


const arr=[1,3,5,56,7,7]

for (const nums of arr) {

    // console.log(nums);
    
}

const greetings="hello world"
for (const greet of greetings) {

// console.log(`each character ${greet}`);
    
}

//map

const map= new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("Fr","France")

// console.log(map);

for (const [key,Value] of map) {
    console.log(key, ":-",Value);
}