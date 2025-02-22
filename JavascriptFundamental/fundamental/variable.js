// 1.1 Variable

/*
Variable are used to store data. In javascript there are three ways to declare variable.
Example : 
1: var 
2: let
3: const
*/

//1) var

var a = "Utkarsh";
console.log(a);  // o/p : Utkarsh

var a = "Harshe"; // We can redeclare 
console.log(a);     // o/p :Harshe

a = "Developer" // we can reassign the value
console.log(a); // o/p :Harshe

/*
Problem of var: 
    It does not have block scope 
    It can be redeclared which can cause problem in large project
    It can be reassigned
*/

// 2) let

/*
let is ised to store the variable which can be reassign but not redeclare
*/

let age = 25;
console.log(age); // Output: 25

age = 30; // Allowed (Reassignment)
console.log(age); // Output: 30


// 2) Const

/*
 Const is used to store variable which can neither be redeclared nor reassigned
*/

const country = "India";
console.log(country); // Output: India