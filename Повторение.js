// Практическое задание 28

// 1 Какой будет результат выполнения этого кода?
let x = 10;

console.log(x++); // 10

// 2 В чем разница == и ===?
// 3 Чему равно выражение:

console.log([] + false - null + true); // NaN

// 4 В чем разница между переменными, созданными при помощи let , var и const ?

// 5 Какой будет результат выполнения этого кода?

console.log([] + 1 + 5); //  15

// 6 Какой будет результат выполнения этого кода?

console.log("1"[0]); // 1

// 7 Какой будет результат выполнения этого кода?

console.log(5 && 2 && undefined && 0); // undefined

// 8 Есть ли разница между выражениями: !!(x && y) и (x && y) ?

console.log(!!(5 && 7) === (5 && 7)); // Есть разница

// 9 Какой будет результат выполнения этого кода?

console.log(null || (2 && 3));

// 10 Правда ли что arr1 == arr2 ?

arr1 = [10, 100, 1000];
arr2 = [10, 100, 1000];
console.log("Нет", arr1 == arr2);

// 11 Какой будет результат выполнения этого кода?

console.log(+"Infinity"); //Infinity

// 12 Какой будет результат выполнения этого кода?
function addBase(base) {
  return function (num) {
    return base + num;
  };
}
let addOne = addBase(1);

console.log(addOne(5) + addOne(3)); //10

// 13 Какой будет результат выполнения этого кода?

let showNum = (value) => (value ? console.log(1) : console.log(0));
showNum("false"); // 1 // 45px

// 14 Чему равно выражение:

console.log(4 + 5 + "px"); // 9px

// 15 Какой будет результат выполнения этого кода?

let x = 3;
console.log(x / y);
let y = 10; // Error
