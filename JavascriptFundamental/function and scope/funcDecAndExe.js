/*
function in javascript are used to group code into reusable block of code
*/

// 1) Function Declration vs Function Expression 

/*
There are two way to define function in javascript

1) Function Declaration
2) Function Expression
*/

// 1) Function Declaration :  It can be hoisted 
// A Function Expression is named funtion that can be used before its definined of hoisting.

console.log(greet()); // This will work due to hoisting 

function greet(){
    return "Hello"
}

console.log(greet()) // O/p : Hello

// 2) Function Expression : It can't be hoisted
// Because: function expression is assign to a variable and cannot be called before its definition

// console.log(sayHello) // this will not work :  Cannot access sayHello before initialization


const sayHello = function (){
    return "Hello";
}

console.log(sayHello)



// Note : Function declaration is hoisted while function expression is not hoisted.