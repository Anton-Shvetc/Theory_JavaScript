/*
Инструкция throw используется, чтобы выбросить исключение, а инструкция
try...catch, чтобы его обработать. В данном примере в блоке throw было
сгенерировано исключения, и управление немедленно было передано из блока try в
блок catch.
*/

function StandartException() {
  this.name = "Error occured";
}
try {
  throw new StandartException();
  console.log("Hello");
} catch (err) {
  console.log(err.name);
}
/* Когда в программе возникает ошибка,
JavaScript генерирует объект, содержащий её детали. 
В данном примере, вручную была создана
ошибка StandartException. Созданный
объект ошибки передается как
аргумент в блок catch.*/


