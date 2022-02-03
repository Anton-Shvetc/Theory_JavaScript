// Некоторые основные типы TS:
// примитивы - string, number и т.п.
// any - любой тип
// unknown - неизвестный на данный момент тип
// never - тип значения, которого никогда не будет
// void - тип для возвращаемого значения функции, если она ничего не возвращает
var num = 123;
// console.log(num);
var sayHello = function (name, age) {
    return "Hi ".concat(name, ", ").concat(age, " old");
};
console.log(sayHello("Victor", 12));
