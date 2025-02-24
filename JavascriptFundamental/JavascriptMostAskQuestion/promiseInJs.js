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
                reject("Promise reject : Something went wrong")
            }
        },2000)
    })
}

after2Sec()
.then((res)=>console.log(res))
.catch((error)=> console.log(error))
