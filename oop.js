function User(username, loginCount, isLogIn){
    this.username = username;
    this.loginCount=loginCount;
    this.isLogIn=isLogIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("Utkarsh",12,true);
// console.log(userOne)
// userOne.greeting()
const userTwo = new User("Developer",10,false);
console.log(userTwo)