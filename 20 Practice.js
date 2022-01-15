// Практическое задание 44

// Напишите программу на JavaScript, которая сохраняет информацию о произошедшем
//исключении в массиве logs.

function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
}

ValidationError.prototype = Error.prototype;

try {
  throw new ValidationError();
} catch (err) {
  console.log(err.name + " is error: " + (err instanceof Error));
}
