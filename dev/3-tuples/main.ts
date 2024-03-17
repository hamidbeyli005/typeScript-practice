let tuple:[number, string, boolean]
tuple = [1,"Hamid",true];
// tuple = ["Hamid",1,true];        Type 'string' is not assignable to type 'number'
// tuple.push(2)                    No type safety

let tuple2:readonly[number,string,boolean] = [2,"Hamid", true];

let tuple3:[x:number, y:string] = [3,"Test"];
tuple3 = [1,"Hamid"]
// tuple3 = [1,"Hamid",2]           Type '[number, string, number]' is not assignable to type '[x: number, y: string]'.
                                    // Source has 3 element(s) but target allows only 2

let tuple4: [number,boolean] = [4,true];
tuple4 = [1,false]
// tuple4 = [1,"false"]             Type 'string' is not assignable to type 'boolean'
