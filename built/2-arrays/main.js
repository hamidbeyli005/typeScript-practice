var arr = [];
arr.push(1);
arr.push(2);
// arr.push("test")         Argument of type 'string' is not assignable to parameter of type 'number'
// arr.push(true);          Argument of type 'boolean' is not assignable to parameter of type 'number'
var arr2 = [];
arr2.push("Hamid");
arr2.push("Hamidbayli");
// arr2.push(1);            Argument of type 'number' is not assignable to parameter of type 'string'
var arr3 = [];
arr3.push(true);
arr3.push(false);
arr3.shift();
// arr3.push(3);            Argument of type 'number' is not assignable to parameter of type 'boolean'
// arr3.push("test")        Argument of type 'string' is not assignable to parameter of type 'boolean'
var arr4 = [];
// arr4.push("Test")        Property 'push' does not exist on type 'readonly string[]'
var arr5 = [1, 2, 3, 4];
arr5.push(5);
// arr5.push("6");          Argument of type 'string' is not assignable to parameter of type 'number'
