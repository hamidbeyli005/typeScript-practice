var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classes
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = "Hamid";
console.log(person.name); // Hamid
// Classes
// Access Modifiers
var Person2 = /** @class */ (function () {
    function Person2(model) {
        this._model = model;
    }
    Person2.prototype.getModel = function () {
        return this._model;
    };
    return Person2;
}());
var person2 = new Person2("Hamid2");
// person2._model = 'Hamid2';   // Property '_model' is private and only accessible within class 'Person2'.
console.log(person2.getModel()); // Hamid2
// Access Modifiers
// Access Modifiers with Constructor Parameters
var Person3 = /** @class */ (function () {
    function Person3(_model) {
        this._model = _model;
    }
    Person3.prototype.getModel = function () {
        return this._model;
    };
    return Person3;
}());
var person3 = new Person3("Hamid3");
// person3._model = 'Hamid3';   // Property '_model' is private and only accessible within class 'Person3'.
console.log(person3.getModel()); // Hamid3
// Access Modifiers with Constructor Parameters
// Readonly Modifier
var Person4 = /** @class */ (function () {
    function Person4(model) {
        this._model = model;
    }
    Person4.prototype.getModel = function () {
        return this._model;
    };
    Person4.prototype.setModel = function (model) {
        // this._model = model;   // Cannot assign to '_model' because it is a read-only property.
    };
    return Person4;
}());
var person4 = new Person4("Hamid4");
console.log(person4.getModel()); // Hamid4
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var rectangle = new Rectangle(10, 20);
console.log(rectangle.getPerimeter()); // 60
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = _super.call(this, side, side) || this;
        _this.side = side;
        return _this;
    }
    return Square;
}(Rectangle));
var square = new Square(10);
console.log(square.getPerimeter()); // 40
// Inheritance and Overriding
