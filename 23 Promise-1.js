// Руководство 42

new Promise((resolve, reject) => {
  let water = 32;

  setTimeout(() => {
    console.log("Turn on coffee machine...");
    resolve(water);
  }, 2000);
})
  .then((result) => {
    return new Promise((resolve, reject) => {
      if (result > 100) {
        setTimeout(() => {
          resolve("Take your coffee");
        }, 5000);
      } else {
        setTimeout(() => {
          reject("Water less than 100 ml ");
        }, 5000);
      }
    });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Switch off coffee machine...");
  });

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

//  Руководство 43
// let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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

// Практическое задание 50

function sendRequest(url) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  return xhr;
}
const DEFAULT_REQUEST = "https://rickandmortyapi.com/api/character/1";
let xhr1 = sendRequest(DEFAULT_REQUEST);
xhr1.onload = function () {
  let location = JSON.parse(xhr1.response).location;
  let xhr2 = sendRequest(location.url);
  xhr2.onload = function () {
    let firstResident = JSON.parse(xhr2.response).residents[0];
    let xhr3 = sendRequest(firstResident);
    xhr3.onload = function () {
      console.log(JSON.parse(xhr3.response).name);
    };
  };
};
