// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
// function generateSentence(desc, arr) {
//     for ( i = 0; i < arr.length; i++ ) {
//         console.log(`The ${arr.length} ${desc} are ${arr}`)
//         // In template literals, if you use an entire array in a string it 
//         // just converts it to a string value, which is why you do not see brackets
//         // in the code.
//     }
// }

const countries = ["China", "India", "USA"];
const fruits = ["Apples", "Bananas"];

const countriesDesc = "largest countries"
const fruitsDesc = "best fruits"

//This is the right way to do it.  The other way does work too though (I guess).
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    for (i = 0; i < arr.length; i++) {
        if ( i < arr.length - 1 ) {
        baseString += arr[i] + ", "
        }
        else {
            baseString += arr[i]
        }
    }
    return baseString;
}

console.log(generateSentence(countriesDesc, countries));
console.log(generateSentence(fruitsDesc, fruits));