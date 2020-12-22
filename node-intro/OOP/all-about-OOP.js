class NetIncome {
    // constructor() {
    // }
    set grossIncome(amount) {
        this._grossIncome = amount
    }
    get grossIncome() {
        return this._grossIncome
    }
    
}

let empOneIncome = new NetIncome()
empOneIncome.grossIncome = 1200
console.log(empOneIncome.grossIncome);

