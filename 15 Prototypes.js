// Руководство 27

const share = {
  getPerimeter: function () {
    console.log("No arguments");
  },
};

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = share;

let triangle = new Triangle(4, 4, 4);

triangle.getPerimeter = function () {
  console.log(this.a + this.b + this.c);
};

let square = Object.create(share);
square["a"] = 4;

square.getPerimeter = function () {
  console.log(this.a * 4);
};

share.getPerimeter();
triangle.getPerimeter();
square.getPerimeter();

let car = { color: "black" };
let bmw = { model: "X5" };
bmw.__proto__ = car;

bmw.color = "white";
console.log(bmw.color); // White
console.log(car.color); // Black

let audi = Object.create(car);
audi["model"] = "Q5";

console.log(audi.color); // black

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

// Практическое задание 34

const student = {
  firstName: "name",
  lastName: "lastname",
  avarageScore: 4,
  getFullName: function () {
    console.log(`${this.firstName} ${this.lastName} `);
  },
  isScholarshipHolder: function () {
    console.log(this.avarageScore >= 4);
  },
};

// student.isScholarshipHolder();

function Aspirant(dissertationTopic) {
  this.dissertationTopic = dissertationTopic;
  this.isDissertationComplete = true;
}

Aspirant.prototype = student;

let aspirant = new Aspirant("topic");
aspirant.isScholarshipHolder = function () {
  console.log(this.avarageScore >= 4.5 && this.isDissertationComplete === true);
}; // Переопределили только для aspirant , если переопределить Aspirannt, то изменится и метод student

let aspirant2 = new Aspirant("something");

student.isScholarshipHolder();
aspirant.isScholarshipHolder();
aspirant2.isScholarshipHolder();
