// Практическое задание 47

const DAYS_OF_WEEK = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

// Руководство 41

let i = 1;
let btn = document.querySelector("#btn");
let box = document.getElementById("box");

function pastHtml() {
  box.insertAdjacentHTML("beforeend", ` ${i++}`);
}

let numberID = setInterval(() => pastHtml(), 1000);

btn.addEventListener("click", () => clearInterval(numberID));
