/*
Инструкция throw используется, чтобы выбросить исключение, а инструкция
try...catch, чтобы его обработать. В данном примере в блоке throw было
сгенерировано исключения, и управление немедленно было передано из блока try в
блок catch.
*/

// function StandartException() {
//   this.name = "Error occured";
// }
// try {
//   throw new StandartException();
//   console.log("Hello");
// } catch (err) {
//   console.log(err.name);
// }

/* Когда в программе возникает ошибка,
JavaScript генерирует объект, содержащий её детали. 
В данном примере, вручную была создана
ошибка StandartException. Созданный
объект ошибки передается как
аргумент в блок catch.*/

// Практическое задание 44

// Руководство 38

let num = prompt("Введите положительное целое число?", 35);

function InvalidCastError(value) {
  this.name = `InvalidCastError: can not convert ${value} to number`;
}

InvalidCastError.prototype = Error.prototype;

function fib(n) {
  if (num <= 0 || isNaN(+num)) {
    throw new InvalidCastError(num);
  }
  return alert(num);
}

try {
  result = fib(num);
} catch (e) {
  alert(e.name);
}

// Практическое задание 45
