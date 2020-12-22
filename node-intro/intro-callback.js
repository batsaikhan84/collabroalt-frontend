// const employees = [
//     {id: 101, name: "Jason", dept: "IT"}, 
//     {id: 102, name: "Harry", dept: "RD"}, 
//     {id: 103, name: "David", dept: "Finance"}
// ]
// const newEmployee = {id: 104, name: "Jon", dept: "Marketing"}

// function getEmployees() {
//     employees.forEach((emp) => {
//         console.log(emp.name)
//     })
// }
// function addEmployee(emp, callback) {
//     employees.push(emp)
//     callback();
// }
// addEmployee(newEmployee, getEmployees)


// function add(a, b, callback) {
//     setTimeout(() => {
//         console.log(a + b);
//         callback();
//     }, 5000);
    
// }

// add(5, 5, () => console.log("This is callback"))

// let isDBOnline = false;

// let connectDB = new Promise(function(resolve, reject) {
//     if (isDBOnline) {
//         let dbConnect = {
//             userName: "user",
//             password: "admin"
//         }
//         resolve(dbConnect)
//     } else {
//         let dbOffLine = new Error("DB server is down..")
//         reject(dbOffLine)
//     }
// })
// connectDB.then((result) => {
//     console.log(result);
// }).catch((result) => {
//     console.log(result);
// })


// let abc = new Promise((pass, fail) => {

// })
// new Promise(() => {});

// Promise.all([
//     new Promise((pass, fail) => {
//         setTimeout(() => {
//             pass("First promise")
//         }, 3000)
//     }),
//     new Promise((pass, fail) => {
//         setTimeout(() => {
//             pass("Second promise")
//         }, 2000)
//     }),
//     new Promise((pass, fail) => {
//         setTimeout(() => {
//             pass("Third promise")
//         }, 1000);
//     })
// ]).then((result) => {console.log(result)})

// const animals = ['Dog', 'Cat', 'Rabbit']

// Async Call

async function getNumbers(numbers) {
    return numbers
}


getNumbers(20).
then(result => {
    console.log(result);
}).catch(error => {
    console.log(error)
})

const getInfo = async (info) => {
    return info
}