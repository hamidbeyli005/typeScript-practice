var unknown_str = "Test";
// Casting with <>
// console.log(unknown_str.length)              Property 'length' does not exist on type 'unknown'
console.log(unknown_str.length); // 4
// Casting with as
console.log(unknown_str.length); // 4
// Force casting
var x = 'Test';
// console.log(((x as unknown) as number).length)  Property 'length' does not exist on type 'number'
