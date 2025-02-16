/*
1) Basic Async/Await:
Write an async function that simulates fetching user details from an API. 
The function should return a promise that resolves after 2 seconds with a user object { id: 1, name: "John Doe" }. 
Call this function using await and log the result.
*/

async function userData() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                id : 1,
                name : "John Doe",
            })
        },2000)
    })
}

async function getUserData() {
    console.log("fetching data...")
    let data = await userData();
    console.log("Data fetched : ",data);
}
// getUserData()

/*
2) Error Handling:
Modify the above function to randomly reject the promise with an error message "Failed to fetch user data!". 
Handle the error using try-catch.
*/

async function randomUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = Math.random() > 0.5;
            if(!error){
                resolve({
                    id:1, 
                    username:"Utkarsh"
                })
            }else{
                reject("Failed to fetch data!")
            }
        },2000)
    })
}


async function getRandomUserData() {
    try {
        console.log("fetching data...")
        let data = await randomUserData();
        console.log("data fetched : ",data)
    } catch (error) {
        console.log(error)
    }
}

// getRandomUserData();

/*
3) Fetching Data from API:
Fetch data from https://jsonplaceholder.typicode.com/todos/1 using fetch and await. 
Print the response in a structured format.
*/

async function fechDataAPI() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        let data = await res.json();
        console.log("data", data)
    } catch (error) {
        console.log(error)
    }
}
// fechDataAPI()


/*
4) Multiple API Calls (Promise.all):
Fetch data from two different endpoints:
https://jsonplaceholder.typicode.com/users/1
https://jsonplaceholder.typicode.com/posts/1
Use Promise.all to execute both requests concurrently and display the results.
*/

async function allData() {
    try {
        let [user,post] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1").then(res=>res.json()),
            fetch("https://jsonplaceholder.typicode.com/posts/1").then(res=>res.json())
        ])
        console.log("User", user);
        console.log("Post", post);
    } catch (error) {
        console.log("Error : ",error)
    }
}

// allData();

/*
5) Chaining Async Calls:
First, fetch user details from https://jsonplaceholder.typicode.com/users/1. Then, using the id from the user data, 
fetch the first post of that user from https://jsonplaceholder.typicode.com/posts?userId=1.
*/

async function userDataFetch() {
    try {
        let userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let user = await userRes.json();
        
        let postRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        let post = await postRes.json();

        console.log("User : ",user)
        console.log("User first post : ",post[0])
    } catch (error) {
        console.log(error)
    }
}
userDataFetch()