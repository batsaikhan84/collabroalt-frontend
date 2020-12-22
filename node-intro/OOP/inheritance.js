class Car {
    constructor(carName, speed) {
        this.carName = carName
        this.speed = speed
    }
    run() {
        console.log(`${this.name} is moving speed of ${this.speed}`)
    }
}
class Sedan extends Car {
    constructor() {
        super()
    }

}

class Demo {
    // _ makes variable private
    _names = "Name value"
    static demoName = "About Javascript Class"
    static readNumber() {
        return [1,2,3,4,5]
    }
    someNames = "This is some names value"
    readName() {
        return ['a', 'b', 'c']
    }
}

//static call
console.log(Demo.demoName)
console.log(Demo.readNumber())

//non-static or instance call
let demoOne = new Demo()
console.log(demoOne.someNames)
console.log(demoOne.readName())
