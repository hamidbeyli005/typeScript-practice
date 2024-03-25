interface Point {
    x: number;
    y: number;
    z: number;
  }
  
  let point: Partial<Point> = {}; 
  point.x = 5;
  point.z = 10
//   point.t = 20       // Error: Property 't' does not exist on type 'Partial<Point>'.


interface Car4 {
    model: string;
    mileage?: number;
  }
  
  let myCar: Required<Car4> = {
    model: 'Tayota',
    mileage: 11000 
  };


  const nameAge:Record<string,number>={
    Hamid:20,
    Ali:30,
    Reza:40
  }
    console.log(nameAge); // { Hamid: 20, Ali: 30, Reza: 40 }