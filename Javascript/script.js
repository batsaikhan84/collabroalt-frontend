arr = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
let currentPlayer = 'x'

function userClick(e) {
    e.preventDefault();
    let index = parseInt(e.target.id.slice(-1))
    if (isOccupied(index) === false) {
        arr[index - 1] = currentPlayer
        userRotation()
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
for (let i = 1; i <= arr.length; i++) {
    let box = document.getElementById('box' + i.toString())
    console.log(box)
}



// function test(e) {
//     currentPlayer = 'x'
//     e.preventDefault();
//     const box1 = document.getElementById('box1')
//     let p = document.createElement('p')
//     p.id = 'box-value-color'
//     p.innerHTML = arr[0]
//     box1.appendChild(p)
// }




