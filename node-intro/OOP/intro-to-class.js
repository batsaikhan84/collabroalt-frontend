// class Employee {
//     constructor(name) {
//         this.name = name
//     }
//     set name(value) {
//         if (value.length < 4) {
//             console.log("Employeee name is too short!")
//             return;
//         }
//         this.employeeName = value
//     }
//     get name() {
//         return this.employeeName
//     }
// }

// let employeeOne = new Employee("Michael")
// console.log(employeeOne.name)


class Car {
    constructor() {}
    get model() {
        return this.carModel
    }
    set model(model) {
        this.carModel = model
    }
}
let carOne = new Car()
carOne.carModel = "SUV"
console.log(carOne.carModel)