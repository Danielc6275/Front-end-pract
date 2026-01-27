// let person = {
//     name: "Daniel ",
//     age: 22,
//     city: "Clermont, FL"
// }

// function logData() {
//     return person.name + "is " + person.age + " years old " + "and lives in " + person.city
// }

// console.log(logData())

// let age = 23

// if (age < 6) {
//     console.log("You get to ride free!")
// } else if (age < 18) {
//     console.log("You get the child discount!")
// } else if (age < 27) {
//     console.log("You get the student discount!")
// } else if (age < 66) {
//     console.log("You pay full price!")
// } else {
//     console.log("You get the senior discount!")
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// largeCountries.shift()
// largeCountries.unshift("China")
// largeCountries.pop()
// largeCountries.push("Pakistan")

// console.log("The 5 largest countries in the world:")

// for (i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }

// let dayOfMonth = 13
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("😱")
// }

// let hands = ["rock", "paper", "scissors"]

// function getRandomHand() {
//     let randomNum = Math.floor(Math.random() * 3)
//     return hands[randomNum]
// }

// console.log(getRandomHand())

// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player}  got  ${points}  points and won the  ${game}  game!`)
} else {
    console.log(`The winner is  ${opponent} !  ${player}  lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

//Exercise: 
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logArray(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

logArray(myCourses);