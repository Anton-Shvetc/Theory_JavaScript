function StudentStore() {
  this.students = [
    { name: "Kate Green", group: "PR_1", marks: [4, 5, 4, 3] },
    { name: "Patrik Giang", group: "PR_1", marks: [5, 5, 5, 5] },
    { name: "John Giang", group: "PR_2", marks: [3, 2, 2, 2] },
    { name: "Mary Li", group: "PR_2", marks: [5, 5, 5, 5] },
  ];
  this.addNewstudent = function (name, group, marks) {
    this.students.push({ name: name, group: group, marks: marks });
  };
  this.getTheBestStudents = function () {
    // console.log(
    //   this.students.reduce((sum, a) => (sum.marks >= a.marks ? sum : a))[`name`]
    // );
    let result = [];
    this.students.forEach((student) => {});

    // let bestSt = [];
    // this.students.forEach((item) => {
    //   let result = item.marks.reduce((a, b) => a + b);
    //   return bestSt.push(result);
    // });

    // console.log(bestSt);
  };
}

let studetentStore = new StudentStore();
// studetentStore.addNewstudent("ivan", "PR_2", [2, 3, 4]);
// studetentStore.addNewstudent("Ivan Ivanov", "PR_2", [4, 3, 4, 3]);
console.log(studetentStore);

studetentStore.getTheBestStudents();

let arr = [10, 1, 0, 500, 6, 500, 7];
let res = [arr[0]];
arr.forEach((element, i) => {
  if (i === 0) {
    return;
  }
  if (element > res[0]) {
    res = [element];
  } else if (element === res[0]) {
    res.push(element);
  }
});

console.log(res);
