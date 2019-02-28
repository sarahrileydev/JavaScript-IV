// CODE here for your Lambda Classes

class Person {
  constructor(att) {
    this.name = att.name;
    this.age = att.age;
    this.location = att.location;
    this.gender = att.gender;
  }
  speak() {
    return `Hello my name is ${this.name}. I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(att) {
    super(att);
    this.specialty = att.specialty;
    this.favLanguage = att.favLanguage;
    this.catchPhrase = att.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(att) {
    super(att);
    this.previousBackground = att.previousBackground;
    this.className = att.className;
    this.favSubjects = att.favSubjects;
  }

  listsSubjects() {
    return `${this.favSubjects}`;
  }

  PRAssignment(subject) {
    return `${student.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${student.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(att) {
    super(att);
    this.gradClassName = att.gradClassName;
    this.favInstructor = att.favInstructor;
  }

  standUp(channel) {
    return  `${name} announces to ${channel}, @channel standy times!​​​​​`;
  }

  debugsCode(student, subject) {
    return `${name} debugs ${student.name}'s code on ${subject}`;
  }
}