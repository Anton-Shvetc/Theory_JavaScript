// Promise

// Обещание — это асинхронное действие, которое может завершиться в какой-то
// момент и произвести значение. Оно может уведомить любой заинтересованный
// объект о том, что такое значение доступно.

// Основная идея обещаний проста: когда вы вызываете асинхронную функцию на базе
// обещания, она возвращает экземпляр объекта Promise. При создании, обещание
// находится в ожидании (pending). Далее с ним могут случиться только две вещи: оно
// может быть выполнено (fulfilled) (в случае успеха) или отклонено (rejected) (в
// случае неудачи).

// Создание Promise
let products = [];
let order = new Promise(function cook(resolve, reject) {
  if (products.length > 0) {
    setTimeout(() => resolve("Complete!"), 3000);
  } else {
    setTimeout(() => reject(new Error("No ingredients")), 1000);
  }
});

// then
order.then((msg) => console.log(`${msg} Eating...`));

// then + catch
order
  .then((msg) => console.log(`${msg} Eating...`))
  .catch((error) => console.log(`Sorry... ${error.message}`));

// then + catch + finally

order
  .then((msg) => console.log(`${msg} Eating...`))
  .catch((error) => console.log(`Sorry... ${error.message}`))
  .finally(() => products.push("cheese", "bread")); // Выполняется независимо от результата

// Цепочка промисов

let cnt = new Promise((resolve) => setTimeout(() => resolve(1), 500));

cnt
  .then(function (result) {
    console.log(result++);
    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 500);
    });
  })
  .then(function (result) {
    console.log(result++);
    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 500);
    });
  })
  .then((result) => console.log(result));

// Руководство 42

    const countOfwater = 19;
new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve(console.log("Turn on coffee machine..."));
  }, 1000);
})
  .then(() => {
    return new Promise((resolve, reject) => {
      if (countOfwater > 100) {
        setTimeout(() => resolve(console.log("Take your coffee!")), 5000);
      } else {
        setTimeout(() => reject( new Error ("No water")), 5000);
      }
    });
  })
  .finally(() => {
    setTimeout(() => {
      console.log("Switch off coffee machine...");
    }, 1000);
  });



 