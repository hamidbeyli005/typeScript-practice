var tuple;
tuple = [1, "Hamid", true];
// tuple = ["Hamid",1,true];        Type 'string' is not assignable to type 'number'
// tuple.push(2)                    No type safety
var tuple2 = [2, "Hamid", true];
var tuple3 = [3, "Test"];
tuple3 = [1, "Hamid"];
// tuple3 = [1,"Hamid",2]           Type '[number, string, number]' is not assignable to type '[x: number, y: string]'.
// Source has 3 element(s) but target allows only 2
var tuple4 = [4, true];
tuple4 = [1, false];
// tuple4 = [1,"false"]             Type 'string' is not assignable to type 'boolean'
