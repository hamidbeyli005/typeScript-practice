// Generics
function identity<T>(arg:T):T{
    return arg;
}

let output = identity("myString");
console.log(output); // myString



// Generics with Arrays
class PersonG<T , G>{
    constructor(public name:T, public age:G){}

    getDetails():[T, G]{
        return [this.name, this.age];
    }
}

let personG = new PersonG<string, number>("Hamid", 25);
console.log(personG.getDetails()); // [ 'Hamid', 25 ]