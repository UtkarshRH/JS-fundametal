// HOF
/* Higher order function is a function that eighter : 
    1) Takes another function as paraameter 
    2) Return another function as result
*/


// 1) Takes another function as parameter
function mul(a,b){
    return a * b;
}

function multiplier(cb){
    console.log("Takes param ans : ", cb(2,4))
}

multiplier(mul)

// 2) Return another function as result

function multi(fact){
    return num => num * fact;
}
const res = multi(4)
console.log("Return function res : " ,res(2))


// 3)  Clouser

function outerFun(outerVariable){
    return function innerFun(innerVariable){
        console.log(`I am full time ${outerVariable} ${innerVariable}`)
    }
}

const newFunc = outerFun("Software")
newFunc("Developer");


/* Callback function 
A callback function is a function that passed as parameter to another function and used for asynchronous operation

Callback used for : 
1) API call
2) Event Handling 
3) Timer
*/


function fetchData(cb){
    setTimeout(()=>{
        console.log("Data fetch!")
    },2000)
}


function processData(){
    console.log("Processing data...")
}

fetchData(processData())


// Que : WAF to fetch data from API using callback function

function getData(cb){
   const intervalId = setInterval(()=>{
     fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res=>res.json())
    .then((data)=>cb(null,data))
    .catch((error)=>cb(error,null))
    },1000)
    
return intervalId
}


function errorHandler(error,result){
    if(error){
        console.log("Error Occured",error)
    }else{
        console.log("Data Fetched",result)
    }
}

getData(errorHandler)


/*Create the callbak funtion */ 

function greet(name ,cb){
    console.log(`Js : Hello ${name}`);
    cb();
}

function sayHii(){
    console.log("Utkarsh : Hii Js");
}

greet("Utkarsh",sayHii);


