
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let delay = 3000; 
let timeLeft = delay / 1000; 

console.log(`Generating random number after ${timeLeft} seconds...`);


function displayProgress() {
    if (timeLeft > 0) {
        console.log(`Time remaining: ${timeLeft} seconds...`);
        timeLeft--;
        setTimeout(displayProgress, 1000);
    } else {
        const randomNumber = generateRandomNumber(1, 100); 
        console.log(`Random number generated: ${randomNumber}`);
    }
}


setTimeout(displayProgress, 1000); 
