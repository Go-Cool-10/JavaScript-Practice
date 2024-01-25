function person(name, age, gender) {
  return {
    name: name,
    age: age,
    gender: gender,
    welcome: function () {
      console.log(`Hello! ${this.name} ${this.age} ${this.gender}`);
    },
  };
}
const person1 = person("GoCool", 22, "M");
person1.welcome();

const person2 = person("Shyam", 23, "M");
person2.welcome();

const person3 = person("Karthick", 21, "LGBQT+");
person3.welcome();
