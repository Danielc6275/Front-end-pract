// let hasCompletedCourse = true
// let givesCertificate = true

// function generateCertificate() {
//     console.log("Generating certificate...")
// }

// if (hasCompletedCourse === true) {
//     if (givesCertificate === true) {
//         generateCertificate()
//     }
// }

// You could also do:
// if (hasCompletedCourse === true && givesCertificate === true ) {
//     generateCertificate()
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// function showSolution() {
//     console.log("Showing the solution...")
// }

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }

let likesDocumentaries = true
let likesStartups = false

function recommendMovie() {
    console.log("Hey, check out this film we think you will like!")
}

if ( likesDocumentaries === true || likesStartups === true ) {
    recommendMovie();
}