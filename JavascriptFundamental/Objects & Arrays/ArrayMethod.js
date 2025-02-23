/*
Javascript Array Methods - The Superpower of array 
Array Method:  Imagin an array as magic box where you can add, remove, find, modify, element in many ways. 
        Lets explore some cool array method!
*/

// 1) Push : Add to the end like shopping Cart

const arr = ["mango","Apple"];
arr.push("Banana");
console.log(arr); // ["mango", "Apple", "Banana"]

// 2) pop : Remove from end (last in first out)

let arr1 = ["Book1","Book2","Book3"]
arr1.pop();
console.log(arr1);

// 3) shift : Remove from the start like Queue

let arr2 = [1,2,3,4,5,6];

arr2.shift();
console.log(arr2);

// 4) unShift : Add to start 

let arr3 = [2,3,4,5];

arr3.unshift(1);
console.log(arr3);

// 5) Map : It is used to iterate over the array and return new array;

const arr4 = [1,2,3,4,5];

const mapArr = arr4.map((num)=> num * 2);
console.log(mapArr);

// 6) filter :  It creates the new array with all element that passes the condition;

const arr5 = [1,2,3,4,5,6];

const filterArr = arr5.filter((num)=> num >= 4);
console.log(filterArr);

// 7) Reduce : It reduces the array to the single value
const arr6 = [1,2,3,4,5,6];

const reduceArr = arr6.reduce((accu,num)=> accu + num , 0);
console.log(reduceArr);

// 8) find : It is used to get the first match
const arr7 = [{name : "Utkarsh", age : 23},{ name :"Prajwal" , age : 25}]
const findArr = arr7.find((p)=> p.age > 24);

console.log(findArr);

// 9) forEach : It is used to iterate over the each element of the array
            // It is like cheking the contact list and calling every one and saying Hey
const arr8 = ["Utkarsh","Prajwal","Pratik"];
const forEachArr = arr8.forEach((frd)=>{
    console.log(`Hey ${frd}`);
});

// 10) sort : It is used to sort element alphabetically and neumerically;

const arr9 = [2,4,6,5,3,1];
arr9.sort((a,b)=> a - b );
console.log(arr9);

// 11) splice : splice(index, deleteCount, ...items) – Modify the Array

const arr10 = ["Red","Blue","Green"];
arr10.splice(1,1,"Yellow");
console.log(arr10);

// 12) slice : slice(start,end) Copy the part of array

let sliceArr = arr10.slice(0,2);
console.log(sliceArr);