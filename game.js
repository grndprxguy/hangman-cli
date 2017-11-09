
var wordBank =["ARCHES","ACADIA","BADLANDS","BISCAYNE","BRYCE","CANYONLANDS","CARLSBAD CAVERNS","CHANNEL ISLANDS","CONGAREE","CRATER LAKE","DENALI","EVERGLADES","GLACIER","OLYMPIC","PINNACLES","REDWOOD","YELLOWSTONE","YOSEMITE","ZION"]
  
var randomWord = function(wordSelect) {
    this.wordSelect = wordBank[Math.floor(Math.random() * wordBank.length)];
   return this.wordSelect
};

module.exports = randomWord;
 