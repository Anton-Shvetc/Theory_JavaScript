let str = new String("abc");
console.log(str.__proto__);

let str2 = String(5);
console.log(typeof str2);

// 2
var isCorrect = Boolean(false);
if (isCorrect) {
  console.log("True");
} else {
  console.log("False");
}
