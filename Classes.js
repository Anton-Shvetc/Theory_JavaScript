// function UserService(userName, password) {
//   this.userName = userName;
//   this.password = password;
//   this.isLoggedIn = false;
// }

// UserService.prototype.login = function (userName, password) {
//   if (this.userName === userName && this.password === password) {
//     this.isLoggedIn = true;
//     console.log("Logged in!");
//   }
// };

class UserService {
  constructor(userName, password) {
    // if (!UserService.isValidUserName(userName)) {
    //   try {
    //     throw "Error";
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   return;
    // }

    this.userName = userName || "default";
    this.password = password;
    this.isLoggedIn = false;
  }
  login(userName, password) {
    if (this.userName === userName && this.password === password) {
      this.isLoggedIn = true;
      console.log("Logged in!");
    }
  }
  //   static isValidUserName(userName) {
  //     return userName.length >= 6;
  //   }
}
// let service = new UserService("abc", "abc");
// service.login("abc", "abc");

// console.log(UserService.isValidUserName("qwerty"));

class Logger extends UserService {
  constructor() {
    super("zxy", "zxu");
    this.password = "abc";
    this.buffer = [];
  }
  addToBuffer(info) {
    this.buffer.push(info);
  }
}
let logger = new Logger();
console.log(logger.login("zxy", "abc"));

// for (let key in service) {
//   console.log(`${key}: ${service[key]}`);
// }
