arr = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
let currentPlayer = 'x'


// for (let i = 1; i <= arr.length; i++) {
//     let box = document.getElementById('box' + i.toString())
//     let p = document.createElement('p')
//     p.id = 'box-value-color'
//     p.innerHTML = arr[i-1]
//     box.appendChild(p)
// }
function userClick(e) {
    e.preventDefault();
    let index = parseInt(e.target.id.slice(-1))
    if (isOccupied(index) === false) {
        arr[index - 1] = currentPlayer
        userRotation()
        let box = document.getElementById('box' + (index).toString())
        let p = document.createElement('p')
        p.id = 'box-value-color'
        p.innerHTML = arr[index-1]
        box.appendChild(p)
        
    } else {
        alert("Please choose different box")
    }
    console.log(arr) 
}
function userRotation() {
    if (currentPlayer === 'x') {
        currentPlayer = 'o'
    } else {
        currentPlayer = 'x'
    }
}
function isOccupied(index) {
    if (arr[index-1] === " ") {
        return false
    } else {
        return true
    }
}
document.onclick = userClick




