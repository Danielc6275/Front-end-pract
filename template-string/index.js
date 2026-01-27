// template strings/literals

const recipient = "James"
const sender = "Daniel Cooney"

// Refactor the email string to use template strings
const email = `
    Hey ${recipient}! How is it going? 
    
    Cheers, 
    ${sender}
`
console.log(email)