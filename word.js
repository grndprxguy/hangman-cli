var hideWord = require('./letter.js');

var checkWord = function(word, input) {
    this.word = word;
    this.letters = [];
    this.splitWord = word.split('');
    this.input = input; 
};

checkWord.prototype.showWord = function() {
    return this.letters.join(' ');
};

checkWord.prototype.wordFound = function() {
    if (this.letters.join('') === this.word) {
        found = true;
    } else {
    }
};

 checkWord.prototype.hideWord = function() {
    for (var i = 0; i < this.word.length; i++) {
        var newLet = new hideWord(this.word[i]);
        if (this.word[i].valueOf() !== " ") {
            this.letters.push(newLet.blank());
        } else {
            this.letters.push(newLet.space());
        }
    }
};

checkWord.prototype.check = function(guessedLetter) {
    var lower = guessedLetter.toLowerCase();
    var upper = guessedLetter.toUpperCase();
    for (var i = 0; i < this.letters.length; i++) {
        if (this.word[i].valueOf() === lower || this.word[i].valueOf() === upper) {
            this.letters[i] = this.word[i].valueOf();
        }
    }
    var w = (this.word.indexOf(lower));
    if (w === -1) {
        tries--;
    }
};

module.exports = checkWord;