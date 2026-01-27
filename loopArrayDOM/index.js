let sentence = ["Hello", "my", "name", "is", "Daniel"];
let greetingEl = document.querySelector("#greeting-el");

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " ";
    console.log(sentence[i]);
}

// greetingEl.textContent has a += operator to append each word to the existing content.
// An equal sign (=) alone would overwrite the content each time, resulting in only the last word being displayed.