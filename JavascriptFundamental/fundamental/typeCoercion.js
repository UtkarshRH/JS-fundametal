/*
Type Coercion & Conversion:
type coercion & conversion are both way to change value from one data type to another.
Javascript automatically convert type when needed
*/

// Automatically convert type by javascript 

console.log(2 + "2")  // Output: "22"
console.log(2 - "2") // Output: 0
console.log(2 * "2") // Output: 4
console.log(2 / "2") // Output: 1
console.log(2 % "2") // Output: 0
console.log(2 + true) // Output: 3
console.log(2 + false) // Output: 2
console.log(2 + null) // Output: 2
console.log(2 + undefined) // Output: NaN
console.log(2 + NaN) // Output: NaN
console.log(2 + Infinity) // Output: Infinity


// Type conversion manually 
console.log(Number("123")) // Output: 123
console.log(String(123)) // Output: "123"
console.log(Boolean(0)) // Output: false
console.log(Boolean(1)) // Output: true
console.log(Boolean(-1)) // Output: true
console.log(Boolean("0")) // Output: true

/*
Note : 
Avoid relying on coercion always convert type explicitely
*/



