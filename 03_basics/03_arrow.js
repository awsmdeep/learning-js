const user={
    username:"deepak",
    price:199,


    welcomeMessage:function(){

        // console.log(`welcome ${this.username} `);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="ankit"
// user.welcomeMessage()
// console.log(this);


// function chai(){
//     let username="deepak"

//     console.log(this.username);
// }



// const chai=function(){
//     let username="deepak"
//     console.log(this.username);
// }



// const chai=()=>{
//     let username="deepak"
//     console.log(this);
// }

// chai()


// const addtwo=(num1,num2)=>{
//     return num1+num2
// }


// const addtwo=(num1,num2)=>num1+num2
// const addtwo=(num1,num2)=>num1+num2

// const addtwo=(num1,num2)=>(num1+num2)

const addtwo=(num1,num2)=>({username:"deepak"})



console.log(addtwo(2,0))