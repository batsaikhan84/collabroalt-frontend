const employees = [
    {id: 101, name: "Jason", dept: "IT"}, 
    {id: 102, name: "Harry", dept: "RD"}, 
    {id: 103, name: "David", dept: "Finance"}
]
const newEmployee = {id: 104, name: "Jon", dept: "Marketing"}

function getEmployees() {
    employees.forEach((emp) => {
        console.log(emp.name)
    })
}
function addEmployee(emp, callback) {
    employees.push(emp)
    callback();
}
addEmployee(newEmployee, getEmployees)