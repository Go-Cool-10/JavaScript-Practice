let person_1 = {
    name: "John",
    age: 20,
    sayHello: function () {
        console.log(`${this.name} is ${this.age}`)
    }
}

let person_2 = {
    name: "Smith",
    age: 20
}

person_1.sayHello()
person_1.sayHello.call(person_2)