const welcomeEl = document.getElementById("welcome-el")

let greet = "Hey! Good to see you";
let myName = "Daniel Cooney";
let attitude = "👋"
// Give the function a parameter, greeting, that replaces "Welcome back"

//.      parameters are created and only used within the function.
function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `
    ${greeting}, ${name} ${emoji}
    `;
};

attitude = "🥂"

//        These are arguments because 
//        they were declared outside of the function to begin with
greetUser(greet, myName, attitude);
// You can have as many parameters as you want!

function add(num1, num2) {
    return num1 + num2;
}
//.           arguments are created outside of the function.
// console.log( add(3,4) );
// console.log( add(9,102) );

//Exercise: 
// What are greeting and name? --> Parameters
// What are "Howdy" and "Daniel Cooney"? --> arguments
// What are num1 and num2?  --> Parameters
// What are 3 and 4? --> arguments

//Exercise: 
// Create a function, getFirst(arr), that returns the first item in the array.

// Call it with an array as an argument to verify that it works.

function getFirst(arr) {
    return arr[0];
};

let favShows = ["Monk", "Psych"];

welcomeEl.textContent += `
    Your favorite show is: ${getFirst(favShows)}
    `;
