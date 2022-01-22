let number = new Promise((resolve, reject) => {
  let n = 1;
  setTimeout(() => {
    console.log(n);

    try {
      n.toUpperCase();
      resolve(n);
    } catch (err) {
      reject(err);
    }
  }, 2000);
})
  .then((result) => {
    console.log(++result);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("finally");
  });

console.log(2300);

let b = 10;
setTimeout(() => {
  console.log(b);

  setTimeout(() => {
    console.log(++b);

    setTimeout(() => {
      console.log(++b);
    }, 500);
  }, 1000);
}, 2000);

new Promise((resolve, reject) => {
  let c = 100;
  setTimeout(() => {
    console.log(c);
    resolve(c);
  }, 1000);
})
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(++result);
        resolve(result);
      }, 1000);
    });
  })
  .then((result) => {
    setTimeout(() => {
      console.log(++result);
    }, 500);
  });

let all = Promise.all([
  new Promise((res) => {
    console.log(1);
    res("Promise 1");
  }),
  new Promise((res) => {
    setTimeout(() => {
      console.log(2);
      res("Promise 2");
    }, 1000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log(3);
      rej(new Error("Promise 3"));
    }, 500);
  }),
])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });

Promise.race([
  //   new Promise((res) => {
  //     console.log(1);
  //     res("Promise 1");
  //   }),
  new Promise((res) => {
    setTimeout(() => {
      console.log(2);
      res("Promise 2");
    }, 1000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log(3);
      rej(new Error("Promise 3 Error"));
    }, 500);
  }),
])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });
