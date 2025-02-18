/*
Data Type : 
Javascript has two main type of dataType
1) Primitive Data Type
2) Non-Primitive Data Type (Refrence dataType)
=====================================
*/

/*
Primitive datatype are stored directly in memory
1)String : "Hello"
2)Number : 123
3)Boolean : true/false
4)Null : null (Intentionally Empty value)
5)Undefine : undefine (Declared but not assign)
6)Symbol : Symbol("id") (for unique value)
7)BigInt : 12345678901234567890n (for large number)
*/

let str = "Utkarsh" //String 
let num = 123 //Number
let isJavascriptFun = true //Boolean
let empty = null //Null
let notDefine = undefined //Undefine
let unique = Symbol("id") //Symbol
let bigNumber = 12345678901234567890n; //BigInt


/*
Non-Primitive DataType (Refrence)
1) Object : { name : "Utkarsh", age : 25}
2) Array : [1,2,3,4,5,6]
3) Function : function(){}
*/

// 1) Object :
let Obj = {
    name : "Utkarsh",
    age: 25
}

// 2) Array :
let arr = [1,2,3,4,5,6,7]

//function

function greet(){
    return "Welcome to my repository"
}


/* 
Note :
Primitive value store value directly 
Non-primitive value store memory addresses
*/
