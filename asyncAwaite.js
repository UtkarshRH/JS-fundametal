// async / await is used to handle asynchronous code in js making it look like more synchronous code .
// 1) async makes a function return promise 
// 2) await pause the execution of code untill promise resolves

async function  fetchData() {
    return "Data fetched"
}

// console.log(fetchData()); // this return promise

// fetchData().then(console.log);


function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data loaded")
        },2000)
    })
}

async function getData() {
    console.log("fetching Data.......");
    let data = await fetchData();
    console.log(data);
}

// getData();


// async await with error handling (try - catch)

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = false
            if(!error){
                resolve("Success!")
            }else{
                reject("Error while fetching data")
            }
        },2000)
    })
}

async function getData(){
    try {
        console.log("fetching data...")
        let data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log("Error : ",error)
    }
}

// getData()


// await with fetch() API
async function fechingData() {
 try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    let data = await res.json()
    console.log(data);
 } catch (error) {
    console.log(error)
 }   
}

// fechingData()


function fData(){
    return new Promise(async(resolve,reject)=>{
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users/1")
            if(!res.ok){
                throw new Error("Faild to fetch data!")
            }
            let data = await res.json();
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}


async function getFData() {
    try {
        console.log("fetching data...")
        let data = await fData()
        console.log("Data fetched : ", data)
    } catch (error) {
        console.log("Error : ",error)
    }
}

// getFData()


// Executing multiple asyc calls(Promise.all)

async function myPromise(){
    let[user,post] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
        fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json())
    ])

    console.log("User",user)
    console.log("Post",post)
}

myPromise()