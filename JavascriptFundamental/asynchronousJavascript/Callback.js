/*
    Javascript is single threaded meaning it execute one line of code at a time. It can handle 
    asynchronous task(like fetching data, making API call,runnig timer) using Pomise , async/await, callbacks etc.
*/

// 1) Callback : Callback is a function that pass as a argument to another function and execute later
// This is old way to handling asynchronous operation in javascript

/*
Here in below example we passed goodNight as callback to greet
*/

function greet(name,callback){
    console.log("Hey",name);
    callback();
}

function goodNight(){
    console.log("Good Night!");
}

// greet("Utkarsh",goodNight);


/*
    Callback in asynchronous function 
    Ex: Simulating a server request
*/

function fetchData(callback){
    console.log("fetching you data...");

    setTimeout(()=>{
        console.log("Data fetch succesfully!");
        callback("lo be data lo jaldi");
    },2000)
}

function processingData(data){
    console.log("Here is your data: ", data)
}

// fetchData(processingData)


/* 2) Callback Hell: When multiple callback are nested inside each other, code becomes difficult to read and maintain
    Example of callback (Pyramid of Doom)
    Problem : This code looks ugly and hard to manage
*/

function step1(callback){
    setTimeout(()=>{
        // console.log("Step 1 is completed")
        callback();
    },1000)
}

function step2(callback){
    setTimeout(()=>{
        // console.log("Step 2 is completed")
        callback();
    })
}

function step3(callback){
    setTimeout(()=>{
        // console.log("Step 3 is completed")
        callback();
    })
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            // console.log("All step are completed!");
        })
    })
})


/* 2) Callback Hell: When multiple callback are nested it leads to callback hell,
    making code hard to read and manage  
*/

// Example: 

// console.log("Start")

setTimeout(()=>{
    // console.log("step 1");
    setTimeout(()=>{
        // console.log("step 2");
        setTimeout(()=>{
            // console.log("step 3");
        },1000);
    },1000);
},1000);

// console.log("End")

// Hard to manage deeply nested callbacks.


/*
🧩 Callback Function Challenges – Solve These! 🚀
Here are some real-world JavaScript problems that will test your understanding of callbacks. 
Try solving them before checking the hints! 😎
*/

/*
🛠️ 1. Delayed Greeting (Easy)
👉 Write a function delayedGreet(name, callback) that greets a person after 2 seconds using a callback.
*/

function delayedGreet(name,callback){
   setTimeout(()=>{
    console.log("Heyy",name);
    callback();
   },2000)
}

function goodDay(){
        console.log("Have a Good day!")
}

// delayedGreet("Utkarsh",goodDay)

/*
🛠️ 2. Fetch User Data (Medium)
👉 Create a function fetchUser(id, callback) that simulates fetching user data after 3 seconds 
    and returns a user object.
*/

function fetchUserData(id,callback){
    console.log("fetching user data...");

    setTimeout(()=>{
        const user = {id : id , name : "Utkarsh", age : 25}
        callback(user);
    },3000)
}

function showUser(user){
    console.log(`User : ${user.id} , ${user.name} , ${user.age}`);
}

fetchUserData(101,showUser);


/*
🛠️ 3. Simple Calculator with Callbacks (Medium)
👉 Implement a calculator(a, b, operation) function where:

operation is a callback that performs the calculation.
*/

