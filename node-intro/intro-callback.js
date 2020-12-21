const employees = [
    {id: 101, name: "Jason", dept: "IT"}, 
    {id: 102, name: "Harry", dept: "RD"}, 
    {id: 103, name: "David", dept: "Finance"}
]
const newEmployee = {id: 101, name: "Jason", dept: "IT"}

function getEmployees() {
    employees.forEach((emp) => {
        console.log(emp.name)
    })
}
getEmployees();

function addEmployee(emp) {
    employees.push(emp)
}
addEmployee()


console.log(employees.length)