/*
    Write a function that fetches data from an API using async/await.
*/ 

async function fetchData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if(!res.ok){
            throw new Error("HttpError ",res.status);
        }
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

// (async ()=>{
//     const data = await fetchData();
//     console.log(data?.id);
// })();


/*
    Que : Implement a delay function that waits for a given time before executing.
*/ 


function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    })
}

async function delayFunExe() {
    console.log("Fetching Data from API");
    await delay(2000);
    console.log("Here is you data")
}

// delayFunExe()


/*
    Use async/await to execute multiple API calls sequentially and in parallel.
*/ 

async function executeSequential() {
    try {
        const res1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if(!res1.ok){
            throw new Error("HttpError : ",res1.status);
        }
        const data1 = await res1.json();
        console.log(data1);

        const res2 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if(!res2.ok){
            throw new Error("HttpError : ",res1.statu)
        }
        const data2 = await res2.json();
        console.log(data2);

    } catch (error) {
        console.log(error)
    }
}

// executeSequential();


/*
    Handle errors properly using try/catch in async functions.
*/ 

async function getData(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if(!res.ok){
            throw new Error("HttpError",res.status)
        }
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(Error);
    }
}

// getData()


/*
Function that are using the .then() method
    function fetchDataThen() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json()) // Convert response to JSON
        .then(data => console.log("Data:", data)) // Log data
        .catch(error => console.error("Error:", error)); // Handle errors
}

fetchDataThen(); // Call the function
*/

async function convertAsync() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!res.ok){
            throw new Error("HttpError",res.status);
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// convertAsync();

/*
    Create a function that resolve a promise which resolve after 2 sec
*/

function myPormise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("promise resolve");
            }else{
                reject("promise reject");
            }
        })
    })
}

myPormise()
.then((resolve)=>console.log(resolve))
.catch((reject)=>console.log(reject))

/*
    Chain multiple Promises together (e.g., fetching user data, then fetching posts).
*/

function userData(){
    return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res)=>res.json());
}

function userPostData(userId){
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res)=>res.json());
}

userData()
.then((data)=>{
    // console.log("User Data: ",data);
    return userPostData(data.id);
})
.then((post)=>{
    // console.log("User Post data: ",post)
})


/*
    Use Promise.all() to execute multiple Promises in parallel.
*/
const myPromise1 = new Promise((resolve)=>{
    setTimeout(resolve,200,"Pormise 1 resolve");
});

const myPromise2 = new Promise((resolve)=>{
    setTimeout(resolve,200,"Pormise 2 resolve");
});


// Promise.all([myPromise1,myPromise2]).then((res)=>console.log("All promise resolved: ",res));


/*
    Use Promise.race() to return the first resolved/rejected Promise.
*/

    const Promise1 = new Promise((resolve)=>{
        setTimeout(resolve,2000,"Promise one resolve")
    })

    const Promise2 = new Promise((resolve)=>{
        setTimeout(resolve,2000,"Promise one resolve")
    })

    Promise.race([Promise1,Promise2]).then((resolve)=>{
        console.log(resolve);
    })


