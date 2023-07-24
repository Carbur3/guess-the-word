const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

const guessedLetters = [];

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }

    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innterText = "";
    const guess = letterInput.value;
    //console.log(guess);
    const goodGuess = validateInput(guess);

        if (goodGuess) {
            makeGuess(guess);
        }

    letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    
    }   else if (input.length > 1) {
        message.innerText = "Please enter one letter.";
    }
        else if (!input.match(acceptedLetter)) {
            message.innerText = "Please enter a letter from A-Z.";
    }   else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUppercase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You've already guessed that letter. Try again.";
    }   else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};