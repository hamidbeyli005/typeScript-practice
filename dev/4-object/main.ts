const car: { model: string, speed: number, year: number } = {
    model: "Tucson",
    speed: 260,
    year: 2016
};


const car2 = {
    model: "Tucson"
}
car2.model = "Prado"
// car2.model= 999;             Type 'number' is not assignable to type 'string'
// car2.model = true;           Type 'boolean' is not assignable to type 'string'


// const car3: { model: string, speed: number, year: number } = {
//     model: "Tucson",
//     speed: 260,
// };
// Property 'year' is missing in type '{ model: string; speed: number; }' but required in type '{ model: string; speed: number; year: number; }'


const car4: { model: string, speed?: number } = {
    model: "Hyundai"            //No Error
}


const name_age: { [index: string]: number } = {};
name_age.hamid = 20;
name_age.mark = 36;
// name_age.jack = "25"         Type 'string' is not assignable to type 'number'



