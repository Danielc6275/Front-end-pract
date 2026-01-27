// let experience = [
//     "Check out my business card!",
//     "My birthday card site is cool too!",
//     "I am also a medical scribe and have experience with EMR software.",
//     "I am learning to be a full stack developer.",
//     "I have a certification in BLS."
// ]

// console.log(experience[3])
// console.log(experience[0])
// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[4])

//Next exercise:
// let aboutMe = [
//     "My name is Daniel Cooney.",
//     22,
//     "Do I like pizza? " + true,
// ]

//Next exercsise: arrray.push() and array.pop()
// let cards = [7,4]
// cards.push(6)
// console.log(cards)

//The push function adds an element to the end of an array.

//New exercise: 
let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here.",
    "Great to hear!",
    "Likewise!"
]

// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)
// messages.pop()
// console.log(messages)

// The pop function removes the last element of an array.

// DRY - Don't Repeat Yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])

for (i = 0; i < messages.length; i += 1) {
    console.log(messages[i]);
}