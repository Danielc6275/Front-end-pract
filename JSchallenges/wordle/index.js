const playerGuess = 7
const correctAnswer = 6

const message = playerGuess === correctAnswer ? 'Correct' 
    : playerGuess > correctAnswer ? 'Too high!' 
    : 'Too low!'

console.log(message)