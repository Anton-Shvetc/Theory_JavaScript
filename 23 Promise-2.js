// Начальный вариант

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://www.mocky.io/v2/5944e07213000038025b6f30", true);
// xhr.send();

// xhr.onreadystatechange = function () {
//   if (xhr.readyState != 4) {
//     return;
//   }

//   if (xhr.status === 200) {
//     console.log("result", xhr.responseText);
//   } else {
//     console.log("err", xhr.responseText);
//   }
// };

let test = document.querySelector("#test");

const fetchData = () => {
  fetch("http://www.mocky.io/v2/5944e07213000038025b6f30")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((element) => {
        for (key in element) {
          console.log(key);
          console.log(element[key]);
          test.insertAdjacentHTML(
            "beforeend",
            `<div><b>${key}:</b> ${element[key]}</div>`
          );
        }
      });
    })
    .catch((err) => {
      test.insertAdjacentHTML("beforeend", `<b>Ошибка:</b> ${err}`);
    });
};
fetchData();
