// Замыкание

// Замыкание — это способность функции запоминать свою лексическую область видимости и обращаться к ней,
// даже когда функция вызывается за пределами своей лексической области видимости.
// В JavaScript замыкания создаются каждый раз во время создания функции.

// Практическое задание 32

function createCallDetails() {
  let details = [];

  function analyze(...x) {
    if (x.length >= 1) {
      details.push({
        dateOfCall: "date",
        args: [...x],
      });
      console.log(details);
      //   console.log(...x);
    } else {
      console.log(details);
    }
  }

  return analyze;
}

let analyze = createCallDetails();

analyze();

analyze(1, "cake", undefined);
analyze(false);
console.log(analyze());

// Практическое задание 33

function signUp(userName, password) {
  this.name = userName;
  this.password = password;
  this.signIn = function (password) {
    if (this.password === password) {
      console.log(`Sign in success for ${this.name}`);
    } else {
      console.log("Password is incorrect");
    }
  };
}

let user = new signUp("billy", "qwerty");
user.signIn("a");
user.signIn("qwerty");

// Руководство 25

function createBuffer() {
  let text = "";
  return function buffer(x) {
    if (x != undefined) {
      return (text += x);
    } else {
      return text;
    }
  };
}

let buffer = createBuffer();
buffer("A");

buffer("XYZ");
console.log(buffer());

// Руководство 26

function secretWord(secret) {
  this.guessWord = function (word) {
    if (word === secret) {
      return true;
    } else {
      return false;
    }
  };
}

let game = secretWord("cat");
console.log(game.guessWord("dog"));
console.log(game.guessWord("cat"));
