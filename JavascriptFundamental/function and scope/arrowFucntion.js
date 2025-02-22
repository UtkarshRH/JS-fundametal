/*
Arrow function are shorter way to write a function in javascript. 
They were introduce in ES6 and make the code more concise 
*/

//Basic syntax of arrow function 

const add = (a,b) => a + b;
console.log(add(5,6)); 

// Here add is an arrow function that takes two parameter a and b and return there sum.


/* Example of arrow function  
    1) Arrow function with one parameter (No parantheses needed)
    if function having the one parameter then () it is an optional
*/

const square = x => x * x;
console.log(square(5))


/*
    2) Arrow function with No parameter (Use Empty parantheses):
    If there is no parameter then () is used.
*/

const greet = () => "Hello";
console.log(greet())


/*
    3) Arrow function with Multiple Line use{}: 
    if the function conatain multiple line then use {} and return keyword
*/

const multiply = (a,b) =>{
    let result = a * b;
    return result;
};

console.log(multiply(4,3));
