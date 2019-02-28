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

const adam = new Person({
  name: 'Adam',
  location: 'Amsterdam',
  age: 37,
  gender: 'male',
});

const betsy = new Person({
  name: 'Betsy',
  location: 'Bloomington',
  age: 30,
  gender: 'female',
});

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const caitlin = new Instructor({
  name: 'Caitlin',
  location: 'Castlerock',
  age: 45,
  gender: 'female',
  favLanguage: 'C#',
  specialty: 'Back-end',
  catchPhrase: `Just do it`
});

const devin = new Student({
  name: 'Devin',
  location: 'Detroit',
  age: 27,
  gender: 'male',
  className: 'CS132',
  favSubjects: ['Html', 'CSS', 'JavaScript']
});

const evelyn = new Student({
  name: 'Evelyn',
  location: 'Egypt',
  age: 23,
  gender: 'female',
  className: 'CS132',
  favSubjects: ['Html', 'CSS', 'JavaScript']
});

const gretchen = new ProjectManager({
  name: 'Gretchen',
  location: 'Grayson',
  age: 42,
  gender: 'female',
  gradClassName: 'CS1',
  favInstructor: 'Sean'
});

const henry = new ProjectManager({
  name: 'Henry',
  location: 'Hillsdale',
  age: 46,
  gender: 'male',
  gradClassName: 'CS12',
  favInstructor: 'Seanie'
});