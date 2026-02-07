// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const containerEl = document.getElementById("container")

function renderImg(arr) {
    let imgVar = ""
    for (i = 0; i < arr.length; i++) {
         imgVar += `
        <img alt="Company employee" class="team-img" src="${arr[i]}">
        `
    }
    // Using a variable instead of containerEl.innerHTML is cost effective because 
    // the DOM is only used once instead of multiple times to render images.
    containerEl.innerHTML = imgVar
}

renderImg(imgs)