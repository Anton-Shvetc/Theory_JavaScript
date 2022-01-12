let obj = {
  id: 1,
};

Object.defineProperty(obj, "key", {
  enumerable: false,
  configurable: false,
  writable: true,
  value: "static",
});

// delete obj.key;
console.log(obj.key);

let str = "";

console.log(str.toLowerCase());
// String.fromCharCode(65, 66, 67)
console.log(String.fromCharCode(65, 66, 67));
Math.sqrt(64);
