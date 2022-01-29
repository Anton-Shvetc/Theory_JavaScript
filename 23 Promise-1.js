// Практическое задание 49

new Promise((resolve, reject) => {
  function selfRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setTimeout(() => {
    let number = selfRandom(1, 6);
    console.log(number);
    resolve(number);
  }, 2000);
})
  .then((result) => {
    return new Promise((resolve, reject) => {
      if (1 < result && result < 5) {
        console.log("start");
        resolve(result);
      } else {
        console.log("Ошибка");
        reject("Exit");
      }
    });
  })

  .then(function (result) {
    if (result === 1) {
      console.log("Stay here");
    } else {
      console.log(`Go ${result} steps`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
//   .then((result) => {
//     setTimeout(() => {
//       console.log(++result);
//     }, 500);
//   });

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

//  Руководство 43

const URL = `http://api.dataatwork.org/v1/jobs/`;
function sendRequest(id) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", URL + id);
  xhr.send();
  return xhr;
}
let xhr1 = sendRequest(`26bc4486dfd0f60b3bb0d8d64e001800`);
xhr1.onload = function () {
  let parentId = JSON.parse(xhr1.response).parent_uuid;
  let xhr2 = sendRequest(parentId);
  xhr2.onload = function () {
    let relatedId = JSON.parse(xhr2.response).related_job_titles[0].uuid;
    let xhr3 = sendRequest(relatedId);
    xhr3.onload = function () {
      console.log(JSON.parse(xhr3.response).title);
    };
  };
};
