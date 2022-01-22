const a = 5;

try {
  console.log(a);
} catch (err) {
  console.error(err);
}

const myError = new Error("please improve your code");
console.log(myError.message); // please improve your code

const a = 5;

try {
  console.log(a);
  throw new Error("something went wrong");
} catch (err) {
  console.error(err);
}

myAsyncFunc(someInput, (err, result) => {
  if (err) return console.error(err);
  console.log(result);
});
