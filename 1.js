// 1
let object = { id: 1, name: "apple" };
let array = [1, "apple"];

console.log(array.toString());
Array.prototype.toString = function () {
  let message = "";
  for (let key in this) {
    message += ` ${key}, `;
  }
  return message;
};
console.log(array.toString());
console.log({ x: 5 }.toString());

// 2
let person = Object.create({ passport: "XZ1111" });
person.id = "12";
console.log(person);
console.log(person.__proto__);
Object.values(person).forEach((element) => {
  //Предпочтительный способ перебора свойств объекта
  console.log(element);
});

for (let key of Object.keys(person)) {
  //   if (person.hasOwnProperty(key)) {
  console.log(person[key]);
  // }
}

// 3
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
let person = new Person("Ivan", "Ivanov");

function Student() {
  this.firstName = "TEST";
  this.say = () => {
    console.log(`I am student, my name is ${this.firstName} ${this.lastName}`);
  };
}
Student.prototype = person;

let student = Student();
console.log(student.__proto__);
student.say();

student.__proto__ = { firstName: "Petr", lastName: "Petrov" };
console.log(student);
student.say();

function TEST() {
  this.id = 1;
}
console.log(new TEST());
