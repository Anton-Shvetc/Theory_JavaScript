// 1
let arr = [1, 2, 3, 2, 2];
// delete arr[1];
console.log(arr.length);
// arr.splice(1, 1);
console.log(arr.slice(1, 4));
console.log(arr);
console.log(
  arr.filter((e) => {
    return e != 2;
  })
);

// 2
let colors = ["red", "green", "blue"];
colors.splice(1, 1);
console.log(colors);

// 3
let str = "a,b,c";
let result = str.split(",");
console.log(result);

// 4
console.log(phrase);

let phrase = "Hello!";
console.log(phrase);

// 5
function numberGenerator() {
  let num = 1;

  function showNumber() {
    console.log(num);
  }

  num++;

  return showNumber;
}

let number = numberGenerator();
number();

//6

const getObject = function () {
  let _value = null;
  return {
    // _value: null,
    getValue() {
      return _value;
    },
    setValue(value) {
      _value = value;
    },
  };
};

let object = getObject();
console.log(object);
object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство, а не должны уметь обращаться к нему
// 73
console.log(object);
console.log(object.getValue());

// 7

let arr = [1, 2, 3, 2, 2];
delete arr[1];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
[...Array(50)].forEach((e, i) => {
  console.log(i);
});
