/*
Higher Order function is a function that either:
1) Takes another function as a parameter.
2) Return another function as a result.

The function allow for better code reuse and modularity.
*/

// 1) Function as a parameter

/*
In below code processUserInput function takes another function as a parameter and call it with arguments 2 and 4.
*/

function mul(a,b){
    return a * b;
}

function processUserInput(cb){
    console.log("Multipled Value: ",cb(2,4))
}
processUserInput(mul)


/*
2) Function returning another function 
Here in below code multiplier return a function that multiplies a number by given factor
*/

function multiplier(factor){
    return num => num * factor;
}

const double = multiplier(5);
console.log(double(2))



// 3) Closure:

/*
    Define : Closure is a fucntion that "Remember" a variable even after outer function has finished execution. 
*/

function outerFunction(outerVariable){
    return function innerFunction(innerFunction){
        console.log(`A full time ${outerVariable} ${innerFunction}`)
    }
}

const newFunction = outerFunction("Java")
newFunction("Developer")

// o/p : A full time Java Developer

/*
Even though outerFunction has finish execution,innerFunction till have access of outerVariable.
    Closure are userfull for:
    1) Creating a private variable
    2) Data encapsulation
    3) Maintaining state in Javascript application
*/


// 4) Callback function

/*
Callback function is a function that pass as an argument to another function and used for asynchronous operation 

    Callback are heavily used in : 
    1) API call
    2) Event Handling 
    3) Timers (setTimeout, setInterval)
*/


function fetchData(cb){
    setTimeout(()=>{
        console.log("Data fetch!");
        cb();
    },2000)
}

function processData(){
    console.log("Processing data...");
}

fetchData(processData);


// QUE : Write a function to fetch data from API using callback function

function getData(cb){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        cb(null, data);
    })
    .catch((error)=>{
        cb(error,null)
    })
}

// Calling the function and handling the function

function handleRes(error,result){
    if(error){
        console.log(error);
    }else{
        console.log(result);
    }
}

getData(handleRes);



/*
5) IIFE (Immediatly Invoked Function Expression)
Define: Immediatly invoke function is function that runs as soon as it define
*/

// Example of IIFE

(function(){
    console.log("This is an IIFE")
})();


// Arrow Function IFFE

(()=>{
    console.log("This is arrow function with IFFE")
})();

/*
Use case:
1) To prevent global scope 
2) Execute code immediatly 
3) Preventing variable hoisting issue
4) asynchronous Code Execution 
*/

// 1) Preventing global scope

(function(){
    var x = 10;
    console.log("Inside the scope : ",x);
})();
// console.log("Outside the scope : ",x); --> This will throw an error because x is not defined

// 4) Asynchronous Code Execution

(async function(){
    const getData = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const res = await getData.json();
    console.log("Respone : ",res);
})();


/*
6) this : this keyword refering the object that executing the function.
*/ 

// 1) this in Gloabl Scope(Refers to window object)

console.log("This keyword refers to :",this);


// 2) this inside an object (Refers to the object)

const person = {    
    name : "Utkarsh",
    greet : function(){
        console.log("Hello my name is",this.name);
    }
};

(person.greet());



// this inside the arrow function (not bound to the object)

const me = {
    name : "Utkarsh",
    namaste : ()=>{
        console.log("Arrow function : ",this.name) // undefine
    }
}

// me.namaste(); Arrow function do not bind this they inherit it form there surrounding scope.