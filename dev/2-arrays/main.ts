let arr: number[] = [];
arr.push(1);
arr.push(2);
// arr.push("test")         Argument of type 'string' is not assignable to parameter of type 'number'
// arr.push(true);          Argument of type 'boolean' is not assignable to parameter of type 'number'

let arr2: string[] = []
arr2.push("Hamid");
arr2.push("Hamidbayli");
// arr2.push(1);            Argument of type 'number' is not assignable to parameter of type 'string'

let arr3: Array<boolean> = [];
arr3.push(true);
arr3.push(false);
arr3.shift();
// arr3.push(3);            Argument of type 'number' is not assignable to parameter of type 'boolean'
// arr3.push("test")        Argument of type 'string' is not assignable to parameter of type 'boolean'


let arr4: readonly string[] = [];
// arr4.push("Test")        Property 'push' does not exist on type 'readonly string[]'


const arr5 = [1, 2, 3, 4];
arr5.push(5);
// arr5.push("6");          Argument of type 'string' is not assignable to parameter of type 'number'
