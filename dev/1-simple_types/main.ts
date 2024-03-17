let a:number = 10;
let b:string = "Hamid";
let c:boolean = true;
let d:undefined = undefined;
let e:null = null;

console.log(typeof a); // "number"
console.log(typeof b); // "string"
console.log(typeof c); // "boolean"
console.log(typeof d); // "undefined"
console.log(typeof e); // "object"

// a = "test"           Type 'string' is not assignable to type 'number'
// b = 10               Type 'number' is not assignable to type 'string'
// c = "hello"          Type 'string' is not assignable to type 'boolean'
// d = 999              Type '999' is not assignable to type 'undefined'
// e = 111              Type '111' is not assignable to type 'null'


