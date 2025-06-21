// Iteration 1 | Find the Maximum
const maxOfTwoNumbers = (num1, num2) => num1 > num2 ? num1 : num2;

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

const findLongestWord = (wordsArray1) => {
  if (wordsArray1.length === 0) return null;
  return wordsArray1.reduce((longest, current) => 
    current.length > longest.length ? current : longest, ""
  );
};

findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const sumNumbers = (numArray1) => {
  if (numArray1.length === 0) return 0;
  return numArray1.reduce((sum, current) => sum + current, 0);
};

sumNumbers(numbers);

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

const averageNumbers = (numArray2) => {
  if (numArray2.length === 0) return 0;
  const sum = numArray2.reduce((acc, current) => acc + current, 0);
  return sum / numArray2.length;
};

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

const doesWordExist = (wordsArray2, word) => {
  if (wordsArray2.length === 0) return null;
  return wordsArray2.reduce((exists, current) => {
    if (current === word) {
      exists = true;
    }
    return exists;
  }, false);
};

doesWordExist(words2);
