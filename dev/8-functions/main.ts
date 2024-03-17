// function sayHello():string{
//     return 12345        Error: Type 'number' is not assignable to type 'string'.
// }


function sayHello(): string {
    return "Hello"
}

const hello = sayHello()
console.log(hello + " world")
console.log("-----------")


function print_message(msg: string): void {
    console.log(msg)
    // return msg               Error :Type 'string' is not assignable to type 'void'
}

print_message("Hello World")


function add(a: number, b: number): number {
    return a + b
}
// console.log(add("3",5))      Argument of type 'string' is not assignable to parameter of type 'number'
console.log("-----------")
console.log(add(3, 5))           // 8


function multiply_add(...nums: number[]): number {
    return nums.reduce((acc, num) => acc + num, 0)
}




type Negative = (num: number) => number

const negative_func: Negative = (num) => num * -1

// console.log(negative_func("12"))         Argument of type 'string' is not assignable to parameter of type 'number'
console.log(negative_func(12))              // -12   