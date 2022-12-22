let number;
let startButtun = document.querySelector("#start-button");
let numberChosen = document.querySelector("#number-chosen");
let submitButtun = document.querySelector("#submit");
let game = document.querySelector("#game");
let restart = document.querySelector("#restart");
let circle = document.querySelector("#circle");
let message = document.createElement('p');

let numberOfAttempt = 0;

startButtun.addEventListener('click', guessTheNumber);
submitButtun.addEventListener('click', result);
restart.addEventListener('click', guessTheNumber);

console.log(startButtun);


function guessTheNumber() {
    message.innerText = "";
    numberChosen.value = "";
    restart.style.display = "none";
    submitButtun.style.display = "block";
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
        message.innerText = "Congratulation, you win!"
        message.style.color = 'green';
        game.appendChild(message);
        submitButtun.style.display = "none";
        restart.style.display = "block";
        
        return;
    } else if (numberChoosen > number){
        message.innerText = "Too big!"
        message.style.color = 'red';
        game.appendChild(message);
        console.log("Too big!")
    } else if (numberChoosen < number){
        message.innerText = "Too small!"
        message.style.color = 'red';
        game.appendChild(message);
        console.log("Too small!")
    }
    

    if (numberOfAttempt < 3) {
        console.log(`3 - ${numberOfAttempt} = ${3 - numberOfAttempt}`)
        console.log(`You have ${3 - numberOfAttempt} attempts yet, prova ancora!`)
    } else {
        message.innerText = "You lose!"
        message.style.color = 'red';
        submitButtun.style.display = "none";
        restart.style.display = "block";
    }
}