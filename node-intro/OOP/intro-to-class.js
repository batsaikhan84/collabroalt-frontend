class User {
    constructor(name) {
        this.name = name
    }
    sayHello = () => {
        console.log(`Hello ${this.name}`)
    }
}

let userOne = new User("Jon")
console.log(userOne.name)
userOne.sayHello()