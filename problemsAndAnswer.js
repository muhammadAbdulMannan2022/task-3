// task 1: DONE
function reverse(str) {
  const strElementArray = str.split("");
  const reversedArray = [];
  for (let i = strElementArray.length - 1; i >= 0; i--) {
    reversedArray.push(strElementArray[i]);
  }
  return reversedArray.join("");
}
const reversedStr = reverse("hello world");
// console.log(reversedStr);

// task 2: Done

function sumOfPositiveNumber(numbersArray) {
  let sum = 0;
  numbersArray.map((number) => {
    number >= 0 ? (sum += number) : "";
  });
  return sum;
}

const sum = sumOfPositiveNumber([2, -5, 10, -3, 7]);
// console.log(sum);

// task 3:

function mostFrequentElement(array) {
  let frequentElement = {};
  for (let i = 0; i < array.length; i++) {
    if (!frequentElement.hasOwnProperty(array[i])) {
      frequentElement[array[i]] = 1;
    } else {
      frequentElement[array[i]] = Number(frequentElement[array[i]]) + 1;
    }
  }
  let mostFrequentValue;
  let highestFrequency = 0;

  for (let key in frequentElement) {
    if (frequentElement[key] > highestFrequency) {
      mostFrequentValue = key;
      highestFrequency = frequentElement[key];
    }
  }

  return +mostFrequentValue;
}
let frequentcy = mostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]);
// console.log(frequentcy);

// task 4: done
function findTwoNumbersWithSum(array, targetValue) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex < rightIndex) {
    let sumOfTwo = array[leftIndex] + array[rightIndex];
    if (sumOfTwo === targetValue) {
      return [leftIndex, rightIndex];
    } else if (sum < targetValue) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }
  return [];
}
let theIndexAre = findTwoNumbersWithSum([1, 3, 6, 8, 11, 15], 9);
// 9 can be 8+1=9 and 3+6=9
// console.log(theIndexAre);

// task 5: done

function calculator(number1, number2, oparator) {
  switch (oparator) {
    case "+":
      return number1 + number2;

    case "-":
      return number1 - number2;

    case "*":
      return number1 * number2;

    case "/" && number2 != 0:
      return number1 / number2;

    default:
      return "invalid operator or division by zero.";
  }
}
// give the oprator in string like "+","-","*","/"
let answer = calculator(1, 2);
// console.log(answer);

// task 6: done
function passwordGenerator(length) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const spCharacters = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`.split("");
  const allChracters = [
    ...letters,
    ...numbers,
    ...spCharacters,
    ...letters.join("").toLocaleUpperCase().split(""),
  ];
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChracters.length);
    password += allChracters.join("").charAt(randomIndex);
  }

  return password;
}

let password = passwordGenerator(10);
// console.log(password);

// task 7: don
function romanToInteger(romanNumeral) {
  romanNumeral = romanNumeral.toUpperCase();
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    const currentSymbolValue = romanNumerals[romanNumeral[i]];
    const nextSymbolValue = romanNumerals[romanNumeral[i + 1]];

    if (nextSymbolValue > currentSymbolValue) {
      result -= currentSymbolValue;
    } else {
      result += currentSymbolValue;
    }
  }
  return result;
}

const integerValue = romanToInteger("IX");
// console.log(integerValue);

// task 8: done
function findSecondSmallest(array) {
  const sortedArray = array.sort((a, b) => a - b);
  return sortedArray[1];
}
let secondSmallestElement = findSecondSmallest([5, 0, 1, 6, 2, 4, 3, -5]);
// console.log(secondSmallestElement);
