// parent class account - 1. has credit card account - 2. saving account
class Account {
    _id = 101;
    _name = "";
    _type = "";
    constructor(id, name, type) {
        this._id = id
        this._name = name
        this._type = type
    }
    get accountDetail () {
        return `ID: ${this._id}, Name: ${this._name}, Type: ${this._type}`
    }
    static accountFees() {
        return 15
    }
}
class CreditCardAccount extends Account{
    constructor() {
        super()
    }
    set id(cusID) {
        this._id = cusID;
    }
    set name(cusName) {
        this._name = cusName;
    }
    set type(cusType) {
        this._type = cusType;
    }
}
let creditCardAccountOne = new CreditCardAccount(102, "Jon", "Credit Card")
creditCardAccountOne.id = 102
creditCardAccountOne.name = "Jon"
creditCardAccountOne.type = "Credit Card"
console.log(creditCardAccountOne);