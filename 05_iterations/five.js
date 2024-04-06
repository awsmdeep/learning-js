const coding=["js","cpp","java","python"]

// coding.forEach( function(item){
//     console.log(item);

// })

// coding.forEach( (item)=>{
//     console.log(item);
// })


// function printme(item){
//     console.log(item);

// }

// coding.forEach(printme)


// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);

// })


const myarr=[
    {
        langaugeName:"javascript",
        filename:"js"
    },
    {
        langaugeName:"java",
        filename:"java"
    },
    {
        langaugeName:"c++ langauge",
        filename:"cpp"
    }
]

myarr.forEach( (item)=>{

    console.log(item.filename);
})