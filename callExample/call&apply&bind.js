function calculateSalary(deduction, bonus) {
    this.salary = (this.salary - deduction) + bonus
}

function displayEmployee() {
    console.log(`${this.name} ${this.age} ${this.salary}`)
}

let employee_1 = {
    name: "Smith",
    age: 20,
    salary: 10000
}

let employee_2 = {
    name: "John",
    age: 20,
    salary: 20000
}

// Call
displayEmployee.call(employee_1)
calculateSalary.call(employee_1, 1000, 2000)
console.log("After deduction and bonus")
displayEmployee.call(employee_1)

console.log()

// Apply
displayEmployee.apply(employee_2)
calculateSalary.apply(employee_2, [1000, 4000])
console.log("After deduction and bonus")
displayEmployee.apply(employee_2)

console.log()

// Bind
let bindDisplayEmp = displayEmployee.bind(employee_1)
// bindDisplayEmp = function displayEmployee() {console.log(`${this.name} ${this.age} ${this.salary}`)}
bindDisplayEmp()

let bindCalculateSal = calculateSalary.bind(employee_1)
bindCalculateSal(3000, 5000)
bindDisplayEmp()