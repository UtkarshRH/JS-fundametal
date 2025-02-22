/*
    1) What is prototype?
    -> Every Javascript object has a hidden reference to a prototype object called prototype.
    Ex:- inheriting superpower from a superhero parent
*/

const person = {
    name: 'Utkarsh',
    greet : function(){
        return `Hello ${this.name}`
    }
}
console.log(person.greet());
console.log(person.toString());

/*  wait , where is the toString() method coming from?
    It comes from object prototype! Every object in javascript inherite from prototype
*/

// Prototype chain in Action : 

const Animal = {
    eat : true
};

const dog = Object.create(Animal);
dog.bark = true;

console.log(dog.eat);
console.log(dog.bark);

/*
    In above example, dog is inheriting eat property from Animal prototype
    Javascript first check dog for the property, if not found it moves up the chain to Animal prototype
*/

