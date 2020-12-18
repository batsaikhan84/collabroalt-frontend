// Arrays 
let names = ["JS", "Java", "HTML", "CSS", "SQL"]
const arrPush = () => {
    names.push("Python")
    document.writeln(names)
}
const arrPop = () => {
    names.pop()
    document.writeln(names)
}
const arrShift = () => {
    names.shift()
    document.writeln(names)
}
const arrUnshift = () => {
    names.unshift("Python")
    document.writeln(names)
}
// NOTE: Array.foreach(function args...);
const colors = ['blue', 'green', 'white']
for(let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}
colors.forEach(iterate)
function iterate (colors) {
    console.log(colors);
}
colors.forEach((color, index) => { console.log(color + " " + index) })

// var obj = {a: 1, b: 2, c: 3};

// for (const prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`);
// }

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

class Unique {
    constructor (item) {
        this.item = item;
    }
    // not allowed to use function, let and const, var
    appendColor() {
        colors.forEach(function (newColor) {
            if (!this.item.includes(newColor)) {
                this.item.push(newColor)
            }
        }, this);
    }
}

const unuqColor = new Unique(['blue', 'Orange'])
console.log(unuqColor.item)
unuqColor.appendColor('red', 'blue', '')
console.log(unuqColor.item)

let users = [{id:1, name: "John"}, {id:2, name: "Pete"}, {id:3, name: "Mary"}]

let user = users.filter(item => item.id === 1)

const numbers = [11, 22, 33, 44, 55]
const results = numbers.map(element =>  element * 10)
console.log(results)

let numList = [1, 4, 9]
const roots = numList.map(function(e) {
    return Math.sqrt(e)
})