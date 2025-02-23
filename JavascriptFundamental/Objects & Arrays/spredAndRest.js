/*
    ✨ Spread and Rest Operators -- The Magic Dots
    1) Spread Operator ( ... )
    -> It takes an array , object and string and spread its element in new array or object.
       Spread (...) → EXPANDS elements
    2) Rest Operator ( ... )
    -> It takes an array or object and rest its element in new array or object
       Rest (...) → COLLECTS elements
*/

// 1) Spread Operator ( ... ) : Expand array and object used to copy or merge array and object
// 1)Example of array

const arr1 = [1,2,3,4];
const arr2 = [...arr1,5,6,7,8];
console.log(arr2); // [1,2,3,4,5,6,7,8]

// 2)Example of object 
const obj1 = {
    fname: "Utkarsh",
    lname: "Harshe",
    age: 25
}
const obj2 = {
    ...obj1,
    city : "Sakoli",
    skill : "Software development" 
}

console.log(obj2)


// 2) Rest Operator ( ... ) : Pack value into an array Used to collect remaining arguments
// 1)Example of array

function sum(...number){
    return number.reduce((accu, num)=> accu + num,0);
}

console.log("Value is Rest : ",sum(1,2,3,4,5,6,7));

// Example of object 

const personObj = {
    name : 'Utkarsh',
    age : 23,
    city : 'Sakoli',
    skill : 'Software Development'
}

const {name,age,...rest} = personObj;
console.log("Person Obj Example : ",personObj);
console.log('Example of Rest',personObj);

