function printStatus(code) {
    console.log("Http status code is: ".concat(code));
}
printStatus(200); // Http status code is: 200
printStatus("200"); // Http status code is: 200
// function printStatus2(code: number | string) {
//     console.log(`Http status code is: ${code.toUpperCase()}`)
// }
// Error : Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
