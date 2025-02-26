/* 
        instructions for making the game:
1:  generate a random number
2:  
3:
    
*/


let randomNumber = Math.floor(Math.random() * 100) + 50

//save the references to each paragraph

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

guessField.focus();

let userGuess = Number(guessField.value);

function checkGuess() {
    let userGuess = Number(guessField.value);

    if(guessCount === 1){
    guesses.textContent = "intentos Anteriores";}

guesses.textContent += userGuess + " ";

    if(userGuess === randomNumber){
    lastResult.textContent = "Felicidades hhas acertado!"
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
    }
    else if(guessCount === 10) {
    lastResult.textContent = "GAME OVER";
    setGameOver();
    }
    else {
        lastResult.textContent = "incorrect";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber){
            lowOrHi.textContent = "el numero es BIGGER"
        }
        else if (userGuess > randomNumber) {
            lowOrHi.textContent = "el numero es SMALLER"
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}   

guessSubmit.addEventListener("click", checkGuess);


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement("button");
    resetButton.textContent = "Reinitiate the game";

    document.body.append(resetButton);

    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll (".resultParas p");
    for(let i=0;i<resetParas.length; i++){
        resetParas[i].textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    lastResult.style.backgroundColor = "black";
    randomNumber = Math.floor(Math.random() * 100) +1;
}