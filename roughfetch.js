function fetchData(url, callback) {
    // Simulate an asynchronous API call with setTimeout
    setTimeout(function() {
      // Simulated data returned from the server
      const data = { user: 'Alice', age: 25 };
      // Execute the callback function with the fetched data
      callback(data);
    }, 2000); // 2000 milliseconds delay simulating network latency
  }
  
  // Using the fetchData function with a callback
  fetchData('https://api.example.com/user', function(data) {
    console.log("Received data:", data);
    // You can now update the UI or perform further operations with the data
  });
  


/*
<button id "clickMe">Click Me<button>


button.addeventListener("click",function(){
  console.log("button was clicked");
})
*/

/*Write addition function with rest operator*/

function add(a,b,c){
    return a + b + c;
}

const num = [1,2,3];

console.log(add(...num))

const s = num.reduce((ac, cu) => ac + cu,0);
console.log(s);

let a = [1,2,3,4];
let b = [5,6,7];
let c = [...a,...b];
console.log(c);


/*
    Give me the example of IIFE
*/

const apiData = (async function(){
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((res)=> res.json());
    // console.log("Data from IIFE : ",data);
    return data;
})();

apiData.then((res)=>console.log("Data from api : ",res));



/*
    Give me the example of clouser
*/

function outer(){
    let count = 0;
    return function inner(){
        count++;
        console.log("Clouser Counter : ",count)
    }
}

const counter = outer();

counter();


/*
    Find the even and odd from the array
*/

const n = [1,2,3,4,5,6,7];
const even  = n.filter((arr)=>arr % 2 === 0)
const odd = n.filter((arr)=> arr % 2 !== 0);
console.log("Even : ",even);
console.log("Odd : ",odd);

/*
    Find even and odd without using the pre define methods
*/

const evenNum = ((num)=>{
    if(num % 2 === 0){
        console.log("This is even : " , num);
    }else{
        console.log("This is Odd : ", num);
    }
});

evenNum(1)

/*
    find Odd even from array without pre-define method
*/

const arr = [1,2,3,4,5,6,7,8];

const evenN = [];
const oddN = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        evenN[evenN.length] = arr[i];
    }else{
        oddN[oddN.length] = arr[i];
    }
}

console.log("Even number from arr :",evenN);
console.log("Odd number from arr :",oddN);


/*How to remove duplicate from array*/

const arr2 = [1,2,3,4,5,5,6,7,7,8,9];

const unique = [...new Set(arr2)];
console.log("Unique value : ", unique);

/*
    Use for loop and indexOf for this
*/
const arr3 = [1,2,2,3,3,4,5,6,7];
const uniqueArr = [];

for(let i = 0;i<arr3.length;i++){
    if(uniqueArr.indexOf(arr3[i]) === -1){
        uniqueArr.push(arr3[i])
    }
}

console.log("This is the unique arr : ",uniqueArr)

/*
    Find second largest number from array
*/

const oArr = [1,2,3,4,5,6,7];
let large = -Infinity;
let secLarge = -Infinity;

for(let i = 0; i< oArr.length; i++){
    if(oArr[i] > large){
        secLarge = large;
        large = oArr[i];
    }else if(oArr[i] > secLarge && oArr[i] < large){
        secLarge = oArr[i];
    }
}

console.log("The second largest number is : ",secLarge);
console.log("The largest number is : ",large);


/*
    Check if the string is palindrom or not
*/

const str = "radar";
const rev = str.split("").reverse().join("");
const isPalin = str == rev;
console.log("String check : ",isPalin);

/*
    Check if the number is palindrom or not
*/

const  numb = 121;
const numCheck = numb.toString().split("").reverse().join("");
const checkPalin = numCheck == numb;

console.log("Number check : ",checkPalin);