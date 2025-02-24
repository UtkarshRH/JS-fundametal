/*
    Que : What is promise in javascript?
     -> Promise is an object representing the eventual completion or failure of asynchronous operation.
        it helps handle asynchronous code in more redable and cleaner way compaired to callback.

     There are three states : 
     1) Pending
     2) fullfill (Resolve)
     3) Reject
*/

/*
    Que : Create a function that return a promise that resolve after 2 sec
*/

function after2Sec(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Promise resolve")
            }else{
                reject("Promise reject Something went wrong!")
            }
        },2000)
    })
}

// after2Sec()
// .then((resolve)=> console.log(resolve))
// .catch((reject)=> console.log(reject));


/*
    Que : Chain multiple Promises together (e.g., fetching user data, then fetching posts).
*/ 

function fetchUser(){
    return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res)=> res.json());
}

function fetchUserPost(userId){
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res)=>res.json());
}

// fetchUser()
// .then((user)=>{
//     console.log("User Data",user)
//     return fetchUserPost(user.id);
// })
// .then((post)=>{
//     console.log("User Post",post)
// })
// .catch((error)=>{
//     console.log(error)
// })


/*
    Que: Use Promise.all() to execute multiple Promises in parallel.
*/ 

const myPromise1 =  new Promise((resolve,reject)=>{
    setTimeout(resolve,200,"Promise 1 resolve")
})

const myPromise2 =  new Promise((resolve,reject)=>{
    setTimeout(resolve,100,"Promise 2 resolve")
})

// Promise.all([myPromise1,myPromise2]).then((res)=>{console.log(res)})

/*
    Que: Use Promise.race() to return the first resolved/rejected Promise.
*/ 

Promise.race([myPromise1,myPromise2]).then((data)=>console.log(data));

