// Rest and Spread operator
function addNumber(...numbers) {
    let sum = 0
    for (const number of numbers) {
        sum += number
    }
    return sum
}
console.log(addNumber(2,5,4,8))

let arrOne = [1, 2, 3]
let arrTwo = [4, 5]
let arr = arrOne.concat(arrTwo)
console.log(arr)
let arrOneTwo = [...arrOne, ...arrTwo]
console.log(arrOneTwo);
