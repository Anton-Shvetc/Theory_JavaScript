function Toyota(modelName) {
  this.model = modelName;
}
let car = { color: "white" };
Toyota.prototype = car;

let toyota = new Toyota("Camry");
console.log(toyota.color);
toyota.color = "black";
console.log(car.color);
console.log(toyota.color); // white

class Car1 {
  constructor(color) {
    this.color = color;
  }
}

let car = new Car1("black");

class Toyota1 extends Car1 {
  constructor(modelName, color) {
    super(color);
    this.model = modelName;
  }
}

let toyota = new Toyota1("toyota", "red");

console.log(toyota.color);
