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

getRandomUserData();