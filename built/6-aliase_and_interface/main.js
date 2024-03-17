var str = "Test";
var hamid = {
    name: "Hamid",
    surname: "Hamidbayli",
    age: 20
    // age:"20"                Type 'string' is not assignable to type 'number'
};
var emp = {
    name: "Hamid",
    surname: "Hamidbayli",
    age: 20,
    salary: 9999
};
console.log(emp.name); // Hamid
console.log(emp.surname); // Hamidbayli
console.log(emp.age); // 20
console.log(emp.salary); // 9999
