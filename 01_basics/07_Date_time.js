// Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate= new Date(2030, 0,5)
// let myCreatedDate= new Date(2030, 0,23,5,6)
let myCreatedDate= new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let timeStamp= Date.now()
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);

newDate.toLocaleString("default",{
    weekday:"long"

})