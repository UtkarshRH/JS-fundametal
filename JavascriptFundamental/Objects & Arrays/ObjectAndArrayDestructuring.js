/*
    Destructuring – Extract Values Like a Pro
    1) Object Destructuring
    2) Array Destructuring
*/

// 1) Object Destructuring: Extract values from an object

const person = {
    name : "Utkarsh",
    age : 25
}

const {name,age} = person;

console.log(name,age);

// 2) Array Destructuring

const arrayDes = [1,2,3,4,5];
const [first,second] = arrayDes
console.log(first,second);