const myNum=[1,2,3]

const total=myNum.reduce(function(acc,currval){
    // console.log(`accur value ${acc} and currvalue ${currval}`);
    return acc+currval

},0)

// console.log(total);


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

const totalbill= shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(totalbill);