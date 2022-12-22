let number;
let startButtun = document.querySelector("#start-button");
let numberChosen = document.querySelector("#number-chosen");
let submitButtun = document.querySelector("#submit");
let game = document.querySelector("#game");
let restart = document.querySelector("#restart");
let circle = document.querySelector("#circle");

let numberOfAttempt = 1;

startButtun.addEventListener('click', guessTheNumber);

console.log(startButtun);


function guessTheNumber() {
    startButtun.style.display = "none";
    game.style.display = "block";
    number = Math.floor(Math.random() * 10 + 1);
    console.log(number);
}



function result(event) {
    event.preventDefault();
    numberOfAttempt += 1;
    let numberChoosen = document.getElementById("number-chosen").value;
    
    if (numberChoosen == number) {
        console.log("You win!")
    } else if (numberChoosen > number){
        console.log("Too big!")
    } else if (numberChoosen < number){
        console.log("Too small!")
    }
    console.log(`The number is: ${number}`)

    if (numberOfAttempt < 3) {
        console.log(`Hai ancora ${numberOfAttempt} prova ancora!`)
    } else {
        console.log("You loose!")
        restart.style.display = "block";
        submitButtun.disabled = true;
    }
}