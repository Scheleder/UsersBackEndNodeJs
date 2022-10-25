class Person{
    constructor(name){
        this.name = name;
    }

    sayMyName(){
        return `Hello World ${this.name}!`;
    }
}

module.exports = {
    Person
};