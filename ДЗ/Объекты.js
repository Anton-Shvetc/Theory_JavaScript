let pnt = {
  x: 1,
  y: 1,
  info: { title: "points" },
  getPoint() {
    return this.x + this.y;
  },
  z: null,
};

// Create copy of pnt object

// let a = 10,
//   b = a;
function deepCopy(obj) {
  let copyPnt = {};

  for (let key of Object.keys(obj)) {
    // console.log(key, obj[key]);
    if (typeof obj[key] !== "object" || obj[key] === null) {
      copyPnt[key] = obj[key];
    } else {
      copyPnt[key] = deepCopy(obj[key]); //Глубокое копирование через рекурсию
      console.log(obj[key]);
    }
  }
  return copyPnt;
}

let test = deepCopy(pnt);
pnt.x = 10;

console.log(test.getPoint());
