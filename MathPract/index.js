// let randomNumber = Math.random();
// console.log(randomNumber);

// Shows decimal values between 0 and 1 (not including 1)
// Example output: 0.482374923847

let randomNumber = rollDice();
console.log(randomNumber);
//From 0 up to (but not including) 6

// let flooredNumber = Math.floor(5.734);
// console.log(flooredNumber);

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}