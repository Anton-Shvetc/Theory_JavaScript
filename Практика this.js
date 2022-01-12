function Calculator() {
  this.a = 5;
  this.b = 6;
  this.read = function (a, b) {
    this.a = a;
    this.b = b;
  };
  this.sum = function () {
    console.log(this.a + this.b);
  };
  this.mul = function () {
    console.log(this.a * this.b);
  };
}

let calculator = new Calculator();

console.log(calculator);

calculator.read(4, 3);

console.log(calculator);

calculator.sum();
calculator.mul();

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// Практика 25

function Article(author, name, num) {
  this.author = author;
  this.name = name;
  this.countofwords = num;
  this.changeCountogwords = function (a) {
    return (this.countofwords = a);
  };
  this.toString = function () {
    console.log(
      "author: " + this.author + ", ",
      "name: " + this.name + ", ",
      "countofwords: " + this.countofwords
    );
  };
}

let article1 = new Article("Ali Haiderh", "String concatenation", 5129);

// console.log(article1.changeCountogwords(5));
// console.log(article1);
article1.toString();

let article2 = new Article(" Name 2", "Book name ", 1233);
let article3 = new Article(" Name 3 ", "Text something", 2323);

article2.toString();
article3.toString();

// Практика 26

function Article(author, name, num) {
  this.author = author;
  this.name = name;
  this.countofwords = num;
  this.changeCountogwords = function (a) {
    return (this.countofwords = a);
  };
  // this.toString = function () {
  //   console.log(
  //     "author: " + this.author + ", ",
  //     "name: " + this.name + ", ",
  //     "countofwords: " + this.countofwords + ", "
  //   );
  // };
  this.addMethodToObject = function (func, name) {
    if (typeof func !== "function") {
      console.log("Error: func is not a function");
    }

    this[name] = func;
    console.log(`Sucsess: method ${name} wad added to the obj`);
  };
}

let article1 = new Article("Ali Haiderh", undefined, 5129);
let getPropertyValue = function (propertyName) {
  // if (propertyName in this) {
  if (this.hasOwnProperty(propertyName)) {
    return this[propertyName];
  }
  return `Error ${propertyName} is not a part of this object`;
};
console.log(article1);

article1.addMethodToObject(getPropertyValue, "getPropertyValue");

console.log(article1.getPropertyValue("author"));

console.log(article1);

console.log(article1.getPropertyValue("author"));
console.log(article1.getPropertyValue("someName"));

console.log(article1.toString());
article1.toString();

let article2 = new Article(" Name 2", "Book name ", 1233);
let article3 = new Article(" Name 3 ", "Text something", 2323);

article2.toString();
article3.toString();

// Практика 27

const Morse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": " ",
};

function Encoder(message) {
  this.message = message.toUpperCase();
  this.encodeMorse = function (obj) {
    return this.message
      .split("")
      .map(function (item) {
        for (let key of Object.keys(obj)) {
          if (item === key) {
            return (item = obj[key]);
          }
        }
      })
      .join(" ");
  };
}

let encoder = new Encoder("Hello Denis");

console.log(encoder.message);
console.log(encoder.encodeMorse(Morse));

// Руководство 19

function LoyaltyCard(owner) {
  this.owner = owner;
  this.purchasesCount = 1;
  this.discount = 0;
  this.makePurchase = function () {
    console.log((this.purchasesCount = this.purchasesCount + 1));
  };
  this.toString = function () {
    for (let key of Object.keys(this)) {
      if (typeof this[key] !== "function") {
        console.log(key + ": " + this[key]);
      }
    }
  };
}

let card1 = new LoyaltyCard("Baron Bogan");
let card2 = new LoyaltyCard("Name Bogan");

card1.makePurchase();
card1.toString();
card2.toString();

//Руководство 20

//Руководство 21
