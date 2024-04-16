const promiseOne= new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async is complete');
        resolve()
    },1000);
})

promiseOne.then(function(){
    console.log("promised consumed");
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
        
    }, 1000);
}).then(function(){
    console.log("promise 2");
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"deepak",email:"deepak@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false
        if(!error){
            resolve({username:"das",email:"das@gmail.com"})
        }else{
            reject("error occured plz resolve it")
        }
    }, 1000);
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("finally it is completed");
})


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true
        if(!error){
            resolve({username:"javscript",email:"das@gmail.com"})
        }else{
            reject("error occured int javascript plz resolve it")
        }
    }, 1000);
})

async function consumePromiseFive(){
  try{
    const resolve=await(promiseFive)
    console.log(resolve);

  }catch{
    console.log("error occured");

  }

}
consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
//     }catch (error){
//         console.log("some error occured");
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()

}).then(function(data){
    console.log(data);
}).catch(function(e){
    console.log(e);
})