// Generics
function identity(arg) {
    return arg;
}
var output = identity("myString");
console.log(output); // myString
// Generics with Arrays
var PersonG = /** @class */ (function () {
    function PersonG(name, age) {
        this.name = name;
        this.age = age;
    }
    PersonG.prototype.getDetails = function () {
        return [this.name, this.age];
    };
    return PersonG;
}());
var personG = new PersonG("Hamid", 25);
console.log(personG.getDetails()); // [ 'Hamid', 25 ]
