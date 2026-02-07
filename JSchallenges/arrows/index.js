// const getSpendAlert = function(amount) {
//     return `Warning! You just spent $${amount}!`
// }

const getSpendAlert = (name, amount) => {
    return `Warning! Hey ${name}!  You just spent $${amount}!`
}
// Curly braces are not necessary if there is at least one parameter (?)
// The curly braces are required if the function has no parameters!!!

console.log(getSpendAlert('Daniel', 150))