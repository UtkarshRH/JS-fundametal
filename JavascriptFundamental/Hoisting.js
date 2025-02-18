/*
Hoisting: Hoisting is feature that moves the variable and function to the top of there scope before code is executed
there are three types of hoisting 
1) variable hoisting 
2) function hoisting 
3) let and const hoisting
*/


// variable hoisting

console.log(x); // Output: undefined (var is hoisted but not initialized)
var x = 10;

// With let and const, hoisting occurs but they remain in a "temporal dead zone":

console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 20;

// Functiona Hoisting 

greet();

function greet(){
    console.log("Hello");   
}
// Output: Hello

// Function declarations are fully hoisted, 

// but function expressions are not.

sayHello(); // ❌ ReferenceError
var sayHello = function() {
  console.log("Hello!");
};







/*
Conclusion
You now understand JavaScript Fundamentals, including: ✅ Variables (var, let, const)
✅ Data Types (Primitive & Reference)
✅ Type Coercion & Conversion
✅ Operators (Arithmetic, Comparison, Logical)
✅ Template Literals
✅ Hoisting

Next, do you want to continue with Functions & Scope?

*/