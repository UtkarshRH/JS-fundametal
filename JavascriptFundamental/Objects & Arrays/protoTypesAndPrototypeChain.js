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

const animal = {
    eat : true
}

const dog = Object.create(animal);

dog.bark = true;

console.log(animal.eat);
console.log(dog.eat)


/*
    In above example, dog is inheriting eat property from Animal prototype
    Javascript first check dog for the property, if not found it moves up the chain to Animal prototype
*/

