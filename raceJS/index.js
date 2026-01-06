// Setting up the race 

// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }

// countdown();
// This tells the countdown() function to run!

// function winner() {
//     console.log('And the winner is: #42!');
// }

// winner();

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapAdder () {
//     console.log(lap1 + lap2 + lap3);
// }

// Note: if you were to write a variable inside of the function, you could not use that variable outside of that function

// lapAdder();

let lapsCompleted = 0;
//Create a function that increments the laps completed with 1 and run it 3 times.

function lapIncrementer() {
    lapsCompleted = lapsCompleted + 1;
}

lapIncrementer()

console.log(lapsCompleted);

