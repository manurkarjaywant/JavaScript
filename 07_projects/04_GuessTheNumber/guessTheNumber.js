let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#guessSubmit')
const userInput = document.querySelector('#guessField')
const guessesArray = document.querySelector('#guessesArray')
const remainingGuesses = document.querySelector('#remainingGuesses')
const lowOrHigh = document.querySelector('#lowOrHigh')
const startOver = document.querySelector('#resultParas')

const p = document.createElement('p')

let playGame = true;
let numOfGuesses = 0;
let previousGuesses = [];

if (playGame) {
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);   // its a method call
    });
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert("please enter a valid number")
    } else if (guess < 1) {
        alert("please enter a number greater than 1")
    } else if (guess > 100) {
        alert("please enter a number smaller than 100")
    } else {
        previousGuesses.push(guess);
        if (numOfGuesses === 9) {
            displayGuess(guess);   // its a method call
            displayMessage(`Game Over. Random Number was ${randomNumber}`);   // its a method call
            endGame();   // its a method call
        } else {
            displayGuess(guess);   // its a method call
            checkGuess(guess);   // its a method call
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right.`);
        endGame();
    } else if (guess < randomNumber){
        displayMessage(`Your Number is low`);
    } else if (guess > randomNumber){
        displayMessage(`your Number is high`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessesArray.innerHTML += `${guess},  `;
    numOfGuesses++;
    remainingGuesses.innerHTML = `${10 - numOfGuesses}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 type="button" id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame () {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuesses = [];
        numOfGuesses = 1;
        submit.value = `Submitt Guess`
        guessesArray.innerHTML = '';
        remainingGuesses.innerHTML = `${10 - numOfGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}