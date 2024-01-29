let obj1 = {
    name: "Jhon",
    age: 21,
    getInfo: function () {
      console.log(`${this.name} is ${this.age} years old `);
    },
  };
  
  let obj2 = {
    name: "Atom",
    age: 22,
  };
  
  obj2.__proto__ = obj1;
  
  console.log(obj2.name);
  console.log(obj2.age);
  obj1.getInfo();
  
  // console.log(obj2);
  // console.log(obj2.hasOwnProperty("name"));
  // console.log(obj2.hasOwnProperty("age"));