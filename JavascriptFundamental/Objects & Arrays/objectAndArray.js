    //1) Object Creation ( {} vs new Object() )

/*

    1) What is an object in Javascript? 
    -> Objet in javascript is a collection of key-value pairs, where key is a string (or symbol) and value can be anything (String,Number,boolean,function ,array,etc)
*/

// let's think of an object like real-world entity, such as car:

const car = {
    brand : "Tesla",
    model : "Model s",
    year : 2020
};

// here in above code, brand,model,year are keys and "Tesla","Model s",2020 are values

/*
    Two ways to create object in javascript
    1) Object literal ({})- The Shortcut
    2) new Object() - Constructor
*/

// 1) Object Literal( {} )

const myObj1 = {
    name : "Utkarsh",
    age : 23,
    isDeveloper : true
}
console.log(myObj1);

/*
    2) Object Literal
    Use this when you want to create object dynamically
*/

const myObj2 = new Object();
myObj2.name = "Utkarsh",
myObj2.age = 23,
myObj2.isDeveloper = true;

console.log(myObj2);

/*
    Which one is better: 
    -> Object Literal is better -> {}
    -> new Object() is used when you want to create object dynamically
*/

// 2) Object Methods:
        /* 1) Object.keys()
           2) Object.values()
           3) Object.entries()
           4) Object.assign() -> use to merge two objects
           5) Object.create() -> use to create new object
           6) Object.getOwnPropertyNames() -> use to get all properties of object
           7) Object.getOwnPropertySymbols() -> use to get all symbols of object
           8) Object.isExtensible() -> use to check if object is extensible
           9) Object.isSealed() -> use to check if object is sealed
           10) Object.isFrozen() -> use to check if object is frozen
           11) Object.seal() -> use to seal object
           12) Object.freeze() -> use to freeze object
           13) Object.preventExtensions() -> use to prevent object from being extended
           14) Object.getOwnPropertyDescriptor() -> use to get property descriptor
           15) Object.getOwnPropertyDescriptors() -> use to get all property descriptors
        */

const obj = {
    fname : "Utkarsh",
    lname : "Harshe",
    role : "Developer",
    age : "23"
}

/* 1) Object.keys()
    Return an array of all property name in the object 
*/
console.log(Object.keys(obj)); // ['fname', 'lname', 'role', 'age']

/* 2) Object.values()
    Return an array of all value in object
*/
console.log(Object.values(obj)); // ['Utkarsh', 'Harshe', 'Developer', '23']

/* 3) Object.entries()
    Return an array of arrays, where each array contains a key-value pair
*/
console.log(Object.entries(obj)); // [['fname', 'Utkarsh'], ['lname', 'Harshe'], ['role', 'Developer'], ['age', '23']

