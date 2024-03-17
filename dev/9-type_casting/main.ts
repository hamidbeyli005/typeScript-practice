const unknown_str: unknown = "Test";


// Casting with <>

// console.log(unknown_str.length)              Property 'length' does not exist on type 'unknown'
console.log((<string>unknown_str).length);      // 4



// Casting with as
console.log((unknown_str as string).length)     // 4


// Force casting
let x = 'Test';
// console.log(((x as unknown) as number).length)  Property 'length' does not exist on type 'number'