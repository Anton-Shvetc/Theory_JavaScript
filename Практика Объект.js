// Практика 22

let triangle = {
  a: 10,
  b: 10,
  c: 10,
  p: triangleP,
  t: isTriangle,
};

triangle.a = 5;

function triangleP() {
  console.log(this.a + this.b + this.c);
}

function isTriangle() {
  if (this.a === this.b && this.a === this.c) {
    console.log(true);
  } else {
    console.log(false);
  }
}

for (let key in triangle) {
  if (typeof triangle[key] !== "function") {
    let value = triangle[key];
    console.log(value);
  } else {
    triangle[key]();
  }
}

// Практическое задание 23

let biography = {
  firstName: "Имя",
  lastName: "Фамилия",
  age: 18,
  description: "text",
  isMarried: true,
  func: cleanData,
};

console.log(biography);

function cleanData(obj) {
  for (let key of Object.keys(obj)) {
    // console.log(biography[key]);
    if (typeof obj[key] === "string") {
      obj[key] = " ";
      console.log(key + ":" + obj[key]);
    } else if (typeof obj[key] === "number") {
      obj[key] = 0;
      console.log(key + ":" + obj[key]);
    }
  }
}

biography.func(biography);

// Практика 24

let seller = {
  name: "Steven Baker",
  rating: 4.5,
};

let customer = Object.assign({}, seller);
customer.name = "Dave Boyle";
customer.rating = 5;

let order = {
  description: "big something",
  price: 1000,
};

let receipt = {
  status: "Pending",
};

receipt = Object.assign(receipt, { seller, customer, order });

function deepCopy(obj) {
  let receiptCopy = {};

  for (let key of Object.keys(obj)) {
    if (typeof obj[key] !== "object" || obj[key] === null) {
      receiptCopy[key] = obj[key];
    } else {
      receiptCopy[key] = deepCopy(obj[key]); //Глубокое копирование через рекурсию
    }
  }
  return receiptCopy;
}

let test = deepCopy(receipt);
delete test.seller.rating;
test.status = "Completed";
console.log(receipt);
console.log(test);

// Руководство 17

let square = {
  sideLength: 5,
  Perimeter() {
    return calcSquare(true, this.sideLength);
  },
  Area() {
    return calcSquare(false, this.sideLength);
  },
};

let squareCopy = Object.assign({}, square);

squareCopy.sideLength = "text";

function calcSquare(isPerimeter, sideLength) {
  if (typeof sideLength !== "number") {
    return "Incorrect format: sideLength should be a number";
  }
  if (isPerimeter) {
    return 4 * sideLength;
  }
  return sideLength ** 2;
}

function ShowR(obj) {
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] !== "function") {
      console.log(key + ":" + obj[key]);
    } else {
      let result = obj[key]();
      console.log(`${key}():${result}`);
    }
  }
}
ShowR(squareCopy);

let obj = {
  test: function () {
    // console.log(this);
    let Y = () => {
      console.log(this);
    };
    return Y();
  },
  x: 1,
};
obj.test();

function test(...args) {
  console.log(args.reduce((a, b) => (a += b)));
  console.log(this);
}
// test();

let bindTest = test.bind({ id: 3 }); //Второй способ привязать контекст, вызывает новую функцию
bindTest(5, 5);

test.call({ id: 1 }, 3, 3); //
test.apply({ id: 2 }, [1, 2, 7]);

function args(a, b) {
  let array = Array.from(arguments); // Перевод массивоподобного объекта в массив
  console.log(array);
}
args(2, 5, 5, 3, 2);
