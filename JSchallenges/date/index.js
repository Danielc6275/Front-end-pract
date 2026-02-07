const dateSnapshot = new Date()
console.log(`Copyright ${dateSnapshot.getFullYear().toString()} all rights reserved.`)

let num = 0

function addANumber() {
    return ++num
}

console.log(addANumber())
console.log(addANumber())
console.log(addANumber())