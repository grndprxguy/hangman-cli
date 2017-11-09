var checkWord = require('./word.js');
var randomizeWord = require('./game.js');
var inquirer = require('inquirer');

var startGame = function() {
    gameover = false;
    found = false;
    guesses = [];
    tries = 10;
    var word = new randomizeWord();
    randomWord = word.wordSelect;
    console.log("Hangman");
    console.log("\nTries remaining:", tries);
    currentWord = new checkWord(randomWord);
    currentWord.hideWord();
    console.log("\n" + currentWord.showWord() + "\n");
    userPrompt();
};

var retry = function() {
    if (gameover) {
        if (tries < 1) {
            console.log("\nGame Over!\n");
        } else {
            console.log("\nYou Win!\n");
        }
        inquirer.prompt([{
            type: "confirm",
            name: "retry",
            message: "Would you like to play again?"
        }]).then(function(restart) {
            if (restart.retry) {
                console.log("New Game!");
                startGame();
            } else {
                console.log("\nThe End.\n");
            }
        });
    }
};

var userPrompt = function() {
    currentWord.wordFound();
    if (tries < 1 || found) {
        gameover = true;
        retry();
    } else {
        inquirer.prompt([{
            name: "guess",
            message: "Please type a letter."
        }]).then(function(resp) {
            if (guesses.find(function(item) {
                    return item === resp.guess.toUpperCase();
                })) {
                console.log("\nYou already guessed that letter, silly. Try again.\n");
                userPrompt();
            } else {
                guesses.push(resp.guess.toUpperCase());
                console.log("\nYour Guesses: " + guesses);
                letFound = currentWord.check(resp.guess);
                console.log("\nTries remaining:", tries);
                console.log("\n" + currentWord.showWord() + "\n");
                userPrompt();
            }
        });
    }
};

startGame();