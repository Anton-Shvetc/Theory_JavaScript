let names = ["Anton", "Names", "name", "ilya"];

if (names.indexOf("Anton") || names.indexOf("Anton") === 0) {
  console.log("Нашли: ");
} else {
  console.log("Не нашли");
}

// Тема - Массивы, split, filter, join

// Практическое занятие 11

let string1 = "Aquamarine Black Blue Brown Chocolate";
let string2 = "Green Lime Olive Orange Purpure";
let string3 = "Red Tomato Violete white Yellow";

let color = string1.concat(" ", string2, " ", string3);

let words = color.split(/[ ]/); // В квадратных скобках указывается Separator
let newWords = words.filter((elem) => elem.length >= 6);
let newColor = newWords.join(", ");

console.log(color);
console.log(words.length);
console.log(newWords);
console.log(newColor.toLowerCase());

// Пратическое занятие 12

let arr = ["455", 87.15, true, undefined, null, "false", [], {}];

for (let item of arr) {
  console.log(typeof item);

  item = item + 6;

  console.log(item);
}

// Практическое задание 13

let numbers = [2, 3, 6, 12, 24, 44, 87, 54, 1, 11];

let sum = numbers.reduce((a, b) => a + b, 0);

numbers.push(sum);

numbers.pop();

numbers.unshift(numbers.reduce((a, b) => (a < b ? a : b))); // Перебор каждого элемента с сохраненим промежуточного варианта

// numbers.unshift(Math.min(...numbers)); // 2-й вариант

let newNumbers = numbers.filter((n) => n % 2 > 0);

newNumbers.shift();

newNumbers.sort((a, b) => a - b);

console.log(newNumbers.filter((n) => n % 3 === 0));

// Руководство 7

let nameOfPresident = "Abraham Lincoln",
  startYear = 1861,
  endYear = 1865,
  description =
    "He was an American statesman and lawyer who served as the 16th president of the United States";

let article = nameOfPresident.concat(
  "\n",
  startYear,
  "\n",
  endYear,
  "\n",
  description
);

console.log(article);

article = article.replace(/He/i, "Abraham");
console.log(article.toLocaleUpperCase());

// Руководство 8

// Попробовать через объект

let numbers = [];

function getRandomIntInclusive(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);

  for (let i = 0; i < 8; i++) {
    numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  //Максимум и минимум включаются
}
getRandomIntInclusive(0, 10);

console.log(numbers);
