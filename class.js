class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
    this.subject = ["java programming", "javascript"];
  }
  getSubject(index) {
    return this.subject[index];
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
    this.subject = ["java programming", "javascript"];
    this.grade = ["A", "B", "C", "D"];
  }
  getSubject(index) {
    return this.subject[index];
  }
  getGrade(value) {
    if (value >= 80) return this.grade[0];
    else if (value >= 70) return this.grade[1];
    else if (value >= 60) return this.grade[2];
    else if (value >= 50) return this.grade[3];
  }
}

const teacher = new Teacher("Fiqry", 22);
const student = new Student("Feby", 22);

console.log({ student }, student.getGrade(100));
console.log({ teacher }, student.getSubject(0));
