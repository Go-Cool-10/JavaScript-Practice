function Person(name, age, gender, city) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city;
  }
  
  Person.prototype.displayContent = function () {
    console.log(`${this.name} ${this.age} ${this.gender} ${this.city}`);
  };
  
  let person1 = new Person("Jhon", 21, "M", "Chennai");
  let person2 = new Person("Jhames", 23, "M", "Chennai");
  
  console.log(person1.__proto__);
  person1.displayContent();
  person2.displayContent();
  
  function Student(name, age, gender, city, grade) {
    Person.call(this, name, age, gender, city);
    this.grade = grade;
  }
  
  Student.prototype = Object.create(Person.prototype);
  
  Student.prototype.displayGrade = function () {
    console.log(`Grade is ${this.grade}`);
  };
  
  let student1 = new Student("karthick", 21, "M", "Chennai", "A");
  
  console.log(student1.__proto__);
  student1.displayContent();
  student1.displayGrade();