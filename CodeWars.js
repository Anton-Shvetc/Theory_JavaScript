//  Calculating with Functions

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

function zero(func) {
  return func ? func(0) : 0;
}
function one(func) {
  return func ? func(1) : 1;
}
function two(func) {
  return func ? func(2) : 2;
}
function three(func) {
  return func ? func(3) : 3;
}
function four(func) {
  return func ? func(4) : 4;
}
function five(func) {
  return func ? func(5) : 5;
}
function six(func) {
  return func ? func(6) : 6;
}
function seven(func) {
  return func ? func(7) : 7;
}
function eight(func) {
  return func ? func(8) : 8;
}
function nine(func) {
  return func ? func(9) : 9;
}

function plus(b) {
  return function (a) {
    return a + b;
  };
}
function minus(b) {
  return function (a) {
    return a - b;
  };
}
function times(b) {
  return function (a) {
    return a * b;
  };
}
function dividedBy(b) {
  return function (a) {
    return a / b;
  };
}

function isPalindrome(str) {
  // var strLen = str.length,
  let strReverse = str.split("").reverse().join(""); //Разбиваем строку посимвольно  и превращаем ее в массив с помощью split(''), потом применяем к нему метод reverse() и собираем все символы в строку с помощью join('')
  if (strElem.trim() == str.trim()) {
    console.log(strReverse);
    return "yes";
  } else {
    return "no";
  }
}

test = isPalindrome("eye");
test2 = isPalindrome("never odd or even");

console.log(test);

test2 = "never odd or even";

console.log(test2.trim());
console.log(test2);

var orig = "  never odd or even  ";
console.log(orig.trim()); // 'foo'

let ra = ["  1", " ", "c  "];

let test = ra.map((item) => item.trim());
console.log(test);

function solution(x) {
  if (x === x.split("").reverse().join("")) {
    // проверяет палиндром или нет
    return true;
  }
  for (let i = 0; i < x.length; i++) {
    //тут думаю надо поменять местами элементы и проверять заново,но как не знаю (
  }
}

console.log(solution("never odd or even")); // true
console.log(solution("cabdefg")); // false
console.log(solution("aaabbaaa")); // true
console.log(solution("zaa")); // true

function isPalindrome(str) {
  str = str.toLowerCase().replace(/\W+|_/g, "");
  return str == str.split("").reverse().join("");
}
console.log(isPalindrome("never odd or even"));
