// function sayHello():string{
//     return 12345        Error: Type 'number' is not assignable to type 'string'.
// }
function sayHello() {
    return "Hello";
}
var hello = sayHello();
console.log(hello + " world");
console.log("-----------");
function print_message(msg) {
    console.log(msg);
    // return msg               Error :Type 'string' is not assignable to type 'void'
}
print_message("Hello World");
function add(a, b) {
    return a + b;
}
// console.log(add("3",5))      Argument of type 'string' is not assignable to parameter of type 'number'
console.log("-----------");
console.log(add(3, 5)); // 8
function multiply_add() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, num) { return acc + num; }, 0);
}
var negative_func = function (num) { return num * -1; };
// console.log(negative_func("12"))         Argument of type 'string' is not assignable to parameter of type 'number'
console.log(negative_func(12)); // -12   
