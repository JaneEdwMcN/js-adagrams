const Adagrams = {

  drawLetters() {
    const letterPool = [
      'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
      'B', 'B',
      'C', 'C',
      'D', 'D', 'D', 'D',
      'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
      'F', 'F',
      'G', 'G', 'G',
      'H', 'H',
      'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
      'J',
      'K',
      'L', 'L', 'L', 'L',
      'M', 'M',
      'N', 'N', 'N', 'N', 'N', 'N',
      'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
      'P', 'P',
      'Q',
      'R', 'R', 'R', 'R', 'R', 'R',
      'S', 'S', 'S', 'S',
      'T', 'T', 'T', 'T', 'T', 'T',
      'U', 'U', 'U', 'U',
      'V', 'V',
      'W', 'W',
      'X',
      'Y', 'Y',
      'Z'
    ];

    let pool = []
    let indexes = []
    while (pool.length != 10) {
      let index = Math.floor(Math.random() * 99);
      if (!(indexes.includes(index))){ // if index is not already in the index array
        pool.push(letterPool[index]);
        indexes.push(index);
      }
    }
    return pool;
  },

  // NOTES FOR REGEX
  // const drawn = ['D', 'O', 'G', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
  // const word = 'GOOD';
  // Must match the letters
  // Can repeat if the letter is repeated
  // Can't repeat if the letter is only there once

  usesAvailableLetters(input, lettersInHand) {
    const inputArray = input.split('');
    let lettersInHandCopy = lettersInHand.slice();
    let result = true;
    inputArray.forEach(function(letter) {
      if (lettersInHandCopy.includes(letter)){
        lettersInHandCopy.splice(letter, 1);
      } else {
        result = false;
      }
    });
    return result;
  },

  scoreWord(word) {
    const scoreChart = {
      1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"	],
      2: ["D", "G"],
      3: ["B", "C", "M", "P"],
      4: ["F", "H", "V", "W", "Y"],
      5: ["K"],
      8: ["J", "X"],
      10: ["Q", "Z"]
    }
    let score = 0;

    if (word.length > 6) score = 8;

    word.toUpperCase().split("").forEach(function(letter) {
      for (const property in scoreChart) {
        if (scoreChart[property].includes(letter)) return score += +property
      }
    });
    return score;
  },

  highestScoreFrom(words) {
    const highScore = {
      word: null,
      score: 0
    };
    words.sort(function(a, b){return a.length-b.length});
    words.forEach((word) => {
      let score = this.scoreWord(word);
      if (score > highScore.score) {
        highScore.score = score;
        highScore.word = word;
      } else if (score === highScore.score && word.length === 10 && highScore.word.length < 10) {
        highScore.score = score;
        highScore.word = word;
      }
    });
    return highScore;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
