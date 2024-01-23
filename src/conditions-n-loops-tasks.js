/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number + number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let result;
  if (a > b) {
    result = a;
  } else if (b > c) {
    result = b;
  } else {
    result = c;
  }
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const { x, y } = queen;
  let newX = x;
  let newY = y;
  for (let i = 0; i < 8; i += 1) {
    newX += 1;
    if (newX === king.x && newY === king.y) {
      return true;
    }
  }
  newX = x;
  newY = y;
  for (let i = 0; i < 8; i += 1) {
    newY += 1;
    if (newX === king.x && newY === king.y) {
      return true;
    }
  }
  newX = x;
  newY = y;
  for (let i = 0; i < 8; i += 1) {
    newX += 1;
    newY += 1;
    if (newX === king.x && newY === king.y) {
      return true;
    }
  }
  newX = x;
  newY = y;
  for (let i = 0; i < 8; i += 1) {
    newX -= 1;
    newY -= 1;
    if (newX === king.x && newY === king.y) {
      return true;
    }
  }
  newX = x;
  newY = y;
  for (let i = 0; i < 8; i += 1) {
    newX += 1;
    newY -= 1;
    if (newX === king.x && newY === king.y) {
      return true;
    }
  }
  newX = x;
  newY = y;
  for (let i = 0; i < 8; i += 1) {
    newX -= 1;
    newY += 1;
    if (newX === king.x && newY === king.y) {
      return true;
    }
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let newA;
  let newB;
  let newC;
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  if (a === b) {
    newA = a;
    newB = b;
    newC = c;
  } else if (b === c) {
    newA = c;
    newB = b;
    newC = a;
  } else if (a === c) {
    newA = a;
    newB = c;
    newC = b;
  } else {
    return false;
  }
  if (newA + newB > newC) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let firstDigit = 0;
  let secondDigit = 0;
  let firstRomanDigit = '';
  let secondRomanDigit = '';
  let countDigit;
  if (num >= 10) {
    firstDigit = Math.floor(num / 10);
    secondDigit = num % 10;
    countDigit = 2;
  } else {
    firstDigit = num;
    countDigit = 1;
  }

  if (countDigit === 2) {
    if (firstDigit === 1) {
      firstRomanDigit = 'X';
    } else if (firstDigit === 2) {
      firstRomanDigit = 'XX';
    } else if (firstDigit === 3) {
      firstRomanDigit = 'XXX';
    }
  } else {
    secondDigit = firstDigit;
    firstRomanDigit = '';
  }

  if (secondDigit === 1) {
    secondRomanDigit = 'I';
  } else if (secondDigit === 2) {
    secondRomanDigit = 'II';
  } else if (secondDigit === 3) {
    secondRomanDigit = 'III';
  } else if (secondDigit === 4) {
    secondRomanDigit = 'IV';
  } else if (secondDigit === 5) {
    secondRomanDigit = 'V';
  } else if (secondDigit === 6) {
    secondRomanDigit = 'VI';
  } else if (secondDigit === 7) {
    secondRomanDigit = 'VII';
  } else if (secondDigit === 8) {
    secondRomanDigit = 'VIII';
  } else if (secondDigit === 9) {
    secondRomanDigit = 'IX';
  } else {
    secondRomanDigit = '';
  }
  return firstRomanDigit + secondRomanDigit;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let resultString = '';
  const iLength = numberStr.length;
  for (let i = 0; i < iLength; i += 1) {
    switch (numberStr[i]) {
      case '-':
        resultString += 'minus';
        break;
      case '0':
        resultString += 'zero';
        break;
      case '1':
        resultString += 'one';
        break;
      case '2':
        resultString += 'two';
        break;
      case '3':
        resultString += 'three';
        break;
      case '4':
        resultString += 'four';
        break;
      case '5':
        resultString += 'five';
        break;
      case '6':
        resultString += 'six';
        break;
      case '7':
        resultString += 'seven';
        break;
      case '8':
        resultString += 'eight';
        break;
      case '9':
        resultString += 'nine';
        break;
      default:
        resultString += 'point';
        break;
    }
    if (i < iLength - 1) {
      resultString += ' ';
    }
  }
  return resultString;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reverseString = '';
  for (let i = 0; i <= str.length; i += 1) {
    if (str[str.length - i]) {
      reverseString += str[str.length - i];
    }
  }
  if (reverseString === str) {
    return true;
  }
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let currentDigit = 0;
  let remainingNum = num;
  while (remainingNum > 0) {
    currentDigit = remainingNum % 10;
    if (currentDigit === digit) {
      return true;
    }
    remainingNum = Math.floor(remainingNum / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let a = null;
  let b = 0;
  let index = 0;
  while (a !== b && index !== arr.length) {
    index += 1;
    a = 0;
    b = 0;
    for (let i = 0; i < index; i += 1) {
      a += arr[i];
    }
    for (let i = index + 1; i < arr.length; i += 1) {
      b += arr[i];
    }
  }
  if (index === arr.length) {
    return -1;
  }
  return index;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(/* size */) {
  throw new Error('Not implemented');
  // let rotate = 'r';
  // let count = 0;
  // let countMax = size;
  // let resultArr = [];
  // let numberForArr = 0;
  // let y = 0;
  // let x = 0;
  // for (let i = 0; i < size; i += 1) {
  //   let arr = [];
  //   resultArr[i] = arr;
  // }
  // for (let i = 0; i < size * size; i += 1) {
  //     numberForArr += 1;
  //     console.log(numberForArr)
  //     if (rotate === 'r') {
  //         resultArr[y][x] = numberForArr;
  //         x += 1;
  //     } else if (rotate === 'd') {
  //         y += 1;
  //         resultArr[y][x] = numberForArr;
  //     } else if (rotate === 'l') {
  //         x -= 1;
  //         resultArr[y][x] = numberForArr;
  //     } else if (rotate === 'u') {
  //         y -= 1;
  //         resultArr[y][x] = numberForArr;
  //         x += 1;
  //     }
  //     count +=1;
  //   //   if (i === (size * size) - 1) {
  //   //       break;
  //   //   }
  //     if (count === countMax) {
  //         count = 0;
  //         if (rotate === 'r') {
  //             countMax -= 1;
  //            rotate = 'd';
  //            x = countMax;
  //         } else if (rotate === 'd') {
  //             rotate = 'l';
  //         } else if (rotate === 'l') {
  //             rotate = 'u';
  //             countMax -= 1;
  //         } else {
  //             rotate = 'r';
  //         }
  //         console.log('rotate:', rotate)
  //         console.log('x:', x, 'y:', y)
  //     }
  // }
  // console.log('end')
  // return resultArr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iterations */) {
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
