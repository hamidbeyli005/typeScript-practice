type car_model = string;
type car_year = number
type car_speed = number

type Car = {
    model: car_model,
    year: car_year,
    speed: car_speed
}


type string_alias = string
const a: string_alias = "Test"

interface Human {
    name: string,
    surname: string,
    age: number
}

const hamid: Human = {
    name: "Hamid",
    surname: "Hamidbayli",
    age: 20
    // age:"20"                Type 'string' is not assignable to type 'number'
}


interface Employee extends Human {
    salary: number
}

const emp: Employee = {
    name: "Hamid",
    surname: "Hamidbayli",
    age: 20,
    salary: 9999
}

console.log(emp.name)       // Hamid
console.log(emp.surname)    // Hamidbayli
console.log(emp.age)        // 20
console.log(emp.salary)     // 9999