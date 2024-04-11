const myNum=[1,2,3,4,5,6,7,8,9,10]


// const newNum=myNum.map( (num)=> num*10)
const newNum=myNum.map( (num)=>{

 return num*10})

// console.log(newNum);

const newNums=myNum
               .map((num) => num*100)
               .map((num)=> num+10 )
               .filter((num) => num>30)

console.log(newNums);