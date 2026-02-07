function logAnswer(answer, points) {
    console.log(`
        The answer is ${answer} of course! If you got that right, 
        give yourself ${points} points.`)
}

const quitTimer = setTimeout(logAnswer, 3000, 'Lima', 10)

const stopBtn = document.getElementById('stop-btn')

stopBtn.addEventListener('click', function () {
    clearTimeout(quitTimer);
    console.log('Cancelling...')
})