// Некоторые основные типы TS:
// примитивы - string, number и т.п.
// any - любой тип
// unknown - неизвестный на данный момент тип
// never - тип значения, которого никогда не будет
// void - тип для возвращаемого значения функции, если она ничего не возвращает

const num: number = 123;

// console.log(num);

const sayHello = (name: string, age: number): string => {
  return `Hi ${name}, ${age} old`;
};

console.log(sayHello("Victor", 12));

// Создание собственного типа

type Name = string;

const Test = (name: Name): string => {
  return `hi ${name}`;
};

console.log(Test("Victor"));

type Person = {
  name: string;
};

type Course = {
  id: number;
};

type CourseStudent = Person & Course; // создаваемый тип будет содержать поля name и id

type Name2 = string; // создаем тип Name, эквивалентный типу string

type Language = "js" | "ts"; // создаем юнион - данный тип может
// принимать значение или 'js', или 'ts'

type Person2 = {
  // типизируем объект
  name: Name;
  age: number;
  projects: string[]; // типизируем массив
};

type Programmer = {
  // типизируем еще один объект
  favouriteLanguage: Language;
};

type FrontendDeveloper = Person2 & Programmer; // создаем пересечение - данный тип получит
// все поля типа Person и поля типа Programmer

enum MethodsEnum {
  GET = "GET",
  POST = "POST",
}

interface IApiRequest {
  method: MethodsEnum.GET;
  url: string;
  formData?: boolean;
  readonly apiDomain: string;
}

const request: IApiRequest = {
  method: MethodsEnum.GET,
  url: "user/get",
  apiDomain: "https://kts.studio",
};

interface IUserApiRequest extends IApiRequest {
  userId: number;
}

const request: IUserApiRequest = {
  userId: 123,
  method: MethodsEnum.GET,
  url: "user/get",
  apiDomain: "https://kts.studio",
};

class UserApirequest implements IUserApiRequest {
  //созданный класс содержит все поля интерфейса
  method: MethodsEnum.GET;
  url: string;
  formData?: boolean;
  readonly apiDomain: string;
  userId: number;

  getApiDomain(): string {
    return this.apiDomain;
  }
}

// Шаблонизатор
