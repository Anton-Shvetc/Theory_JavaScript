// Руководство 23

function Datehelper() {
  this.creationDate = new Date();
  this.getCreationDateAsString = function () {
    let day = this.creationDate.getDate() + this.day,
      month = this.creationDate.getMonth() + 1,
      year = this.creationDate.getFullYear(),
      message = day + ":" + month + ":" + year;

    console.log(message);
  };
  this.addDays = function (a) {
    return (this.day = a);
  };
}

let datehelper = new Datehelper();

console.log(datehelper.creationDate);
datehelper.addDays(3);
datehelper.getCreationDateAsString();

// Руководство 24
function StudentStore() {
  this.students = [
    { name: "Kate Green", group: "PR_1", marks: [4, 5, 4, 3] },
    { name: "Patrik Giang", group: "PR_1", marks: [5, 5, 5, 5] },
    { name: "John Giang", group: "PR_2", marks: [3, 2, 2, 2] },
    { name: "Mary Li", group: "PR_2", marks: [5, 5, 5, 5] },
  ];
  this.addNewstudent = function (name, group, marks) {
    this.students.push({ name: name, group: group, marks: marks });
  };
  this.getTheBestStudents = function () {
    let bestSt = [];
    this.students.forEach((item) => {
      let result = item.marks.reduce((a, b) => a + b);
      return bestSt.push(result);
    });

    console.log(bestSt);
  };
}

// Второй вариант поиска максимальных оценок
//  console.log(
//    this.students.reduce((acc, v) => (acc.marks >= v.marks ? acc : v))[`marks`]
//  );

let studentstore = new StudentStore();

studentstore.getTheBestStudents();

// Практическое задание 29
// Практическое задание 30

function TemperatureConverter(celsiusTemperature) {
  this.celsiusTemperature = celsiusTemperature;
  this.temperature = celsiusTemperature;
  this.measure = "Celsius";
  this.convertToKelvin = function () {
    this.temperature = this.celsiusTemperature + 274;
    this.measure = "Kelvin";
  };
  this.convertToFahrenheit = function () {
    this.temperature = this.celsiusTemperature * 1.8 + 32;
    this.measure = "Fahrenheit";
  };
}

let temperatureConverter = new TemperatureConverter(25);

temperatureConverter.celsiusTemperature;

temperatureConverter.convertToKelvin();
console.log(temperatureConverter.temperature);

console.log(temperatureConverter.measure);

temperatureConverter.convertToFahrenheit();
console.log(temperatureConverter.temperature);

// Практическое задание 31

function TemperatureConverter(celsiusTemperature, measure) {
  // debugger;
  this.celsiusTemperature = celsiusTemperature;
  this.temperature = celsiusTemperature;
  this.measure = measure;
  this.convertToKelvin = function () {
    this.temperature = this.celsiusTemperature + 274;
    this.measure = "Kelvin";
  };
  this.convertToFahrenheit = function () {
    this.temperature = this.celsiusTemperature * 1.8 + 32;
    this.measure = "Fahrenheit";
  };
  this.increaseTemperature = function (celsiusDegrees) {
    if (!Number.isInteger(celsiusDegrees)) {
      console.log("Incorrect format of celsiusDegrees argument");
    } else {
      this.temperature = this.celsiusTemperature + celsiusDegrees;
      console.log(this.temperature);
      if (this.measure === "Kelvin") {
        this.convertToKelvin();
      } else if (this.measure === "Fahrenheit") {
        this.convertToFahrenheit();
      }
    }
  };
  this.isBoiled = function () {
    console.log(this.temperature >= 100);
  };
}

while (true) {}

setTimeout(() => {
  console.log(12);
}, 10000);

// let temperatureConverter = new TemperatureConverter(90, "Kelvin");
// console.log(temperatureConverter);

// temperatureConverter.increaseTemperature(10);

// temperatureConverter.isBoiled();
// console.log(temperatureConverter.temperature);
