// Classes
class Person {
  name: string;
}

const person = new Person();
person.name = "Hamid";
console.log(person.name); // Hamid
// Classes



// Access Modifiers
class Person2 {
  private _model: string;

  public constructor(model: string) {
    this._model = model;
  }

  public getModel(): string {
    return this._model;
  }
}

const person2 = new Person2("Hamid2");
// person2._model = 'Hamid2';   // Property '_model' is private and only accessible within class 'Person2'.
console.log(person2.getModel()); // Hamid2
// Access Modifiers



// Access Modifiers with Constructor Parameters
class Person3 {
  constructor(private _model: string) {}

  public getModel(): string {
    return this._model;
  }
}

const person3 = new Person3("Hamid3");
// person3._model = 'Hamid3';   // Property '_model' is private and only accessible within class 'Person3'.
console.log(person3.getModel()); // Hamid3
// Access Modifiers with Constructor Parameters



// Readonly Modifier
class Person4 {
  private readonly _model: string;

  constructor(model: string) {
    this._model = model;
  }

  public getModel(): string {
    return this._model;
  }

  public setModel(model: string): void {
    // this._model = model;   // Cannot assign to '_model' because it is a read-only property.
  }
}

const person4 = new Person4("Hamid4");
console.log(person4.getModel()); // Hamid4
// Readonly Modifier



// Inheritance and Overriding
interface Shape {
  getPerimeter(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.getPerimeter()); // 60

class Square extends Rectangle {
  constructor(private side: number) {
    super(side, side);
  }
}
const square = new Square(10);
console.log(square.getPerimeter()); // 40
// Inheritance and Overriding