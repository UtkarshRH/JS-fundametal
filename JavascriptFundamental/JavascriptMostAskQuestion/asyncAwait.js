/*
    Que : What is async/await in JavaScript?
    -> Async await is more optimize way to handle asynchronous operation 
       it makes code more redable that .then with promise

        Coding Question: 
*/ 

// 1) Write a function that fetch data from API using async await

async function fetchData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!res.ok){
            throw new Error(`HttpError ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

// fetchData();

/*
    Que: Implement a delay function that waits for a given time before executing.
*/

function delay(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms))
}

async function delayedFunction(){
    console.log("Start");
    await delay(3000);
    console.log("Executed function after 3 second")
}

// delayedFunction();


/*
    Que: Use async/await to execute multiple API calls sequentially and in parallel.
*/

async function fetchDataSequencially(){
    try {
        const res1 = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        if(!res1.ok){
            throw new Error(`HttpError ${res1.status}`)
        }
        const data1 = await res1.json();
        console.log('Data from 1st API : ',data1)

        const res2 = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        if(!res2.ok){
            throw new Error("HttpError", res2.status);
        }
        const data2 = await res2.json();
        console.log(data2);
    } catch (error) {
        console.log(Error);
    }
}

// fetchDataSequencially()

// Using Promise.all

async function fetchDataApi(){
    try {
        console.log("fetching data sequentially")
        const [res1,res2] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts/1"),
            fetch("https://jsonplaceholder.typicode.com/posts/1")
        ])

        const data = res1.json()
        const data1 = res2.json()

        console.log(data)
    } catch (error) {
        
    }
}


/*
    Que: Handle errors properly using try/catch in async functions.
*/ 

async function apiErrorHandler(params) {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!res.ok){
            throw new Error("HttpError", res.status)
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.Error(error);
    }
}


/*
    Que : Convert a function that uses .then() into one that uses async/await. 
*/

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

// lets covert the above code in async await

async function covertDotThen(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        if(!res.ok){
            throw new Error(`An HttpError ${res.status}`)
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

covertDotThen();