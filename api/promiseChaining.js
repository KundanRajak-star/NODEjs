/**
 * ASSIGNMENT-Create 5 function as callback chaining where: 
f1- will take one string as input from user. 
f2- will convert f1 result to all lower case 
f3- will remove any white spaces. 
F4- will remove any numeric characters. 
F5- will find return the Count All Palindrome Sub-Strings in the String 
 */

/**
 * command line input with argv
 */
var userInput = process.argv[2];
mypromise = CheckInput(userInput);
/**
 * promise Chaining
 */
mypromise
  .then(function (data) {
    console.log("Promise--user input\t", data);
    return convertToLower(data);
  })

  .then(function (data) {
    console.log("Promise--To lowercase\t", data);
    return removeSpace(data);
  })

  .then(function (data) {
    console.log("Promise--space removed\t", data);
    return removeNumber(data);
  })

  .then(function (data) {
    console.log("Promise--number removed\t", data);
    return countPalondrome(data);
  })

  .then((data) => {
    console.log("Promise--palindrome:\t", data);
  })

  .catch((error) => {
    return console.log("Promise--Error caught::\t", error);
  });

const asyncfunction = async function (userInput) {
  try {
    let data = await CheckInput(userInput);
    console.log("aysnc--user input\t", data);
    data = await convertToLower(data);
    console.log("aysnc--Lower case\t", data);
    data = await removeSpace(data);
    console.log("aysnc--whitspace \t", data);
    data = await removeNumber(data);
    console.log("aysnc--number removed\t", data);
    data = await countPalondrome(data);
    console.log("aysnc--palindrome\t", data);
  } catch (error) {
    console.log("\terror\t", error);
  }
};
asyncfunction(userInput);

/**
 * checks for empty user input
 * @param {any:string} userInput
 * @returns resolve if input !=null , else reject
 */
function CheckInput(userInput) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (userInput) {
        resolve(userInput);
      } else {
        reject("please enter a string");
      }
    }, 2000);
  });
}
/**
 * converts user input string to lower case
 * @param {any:string} userString
 * @returns lowercase string if any
 */
function convertToLower(userString) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let lowerString = "";
      for (char of userInput) {
        if (isUpperCase(char)) {
          lowerString += toLowerCase(char);
        } else {
          lowerString += char;
        }
      }
      if (userString) {
        resolve(lowerString);
      } else {
        reject("empty string");
      }
    }, 1000);
  });
}
/**
 * remove whitespace from input string
 * @param {any:string} input
 * @returns string without witespace
 */
function removeSpace(input) {
  return new Promise((resolve, reject) => {
    let WhiteSpaceRemoved = "";
    for (char of input) {
      if (char != " ") {
        WhiteSpaceRemoved += char;
      }
    }

    if (WhiteSpaceRemoved) {
      resolve(WhiteSpaceRemoved);
    } else {
      reject("string with whitespace only");
    }
  });
}
/**
 * remove any numeric value from string
 * @param {any:string} input
 * @returns string without number if any
 */
function removeNumber(input) {
  return new Promise((resolve, reject) => {
    let numericRemoved = "";
    for (char of input) {
      if (isNaN(char)) {
        numericRemoved += char;
      }
    }
    if (numericRemoved) {
      resolve(numericRemoved);
    } else {
      reject("string doesnt have alphabetic character");
    }
  });
}
/**
 * counts the number of palindrome
 * @param {string:any} userString
 * @returns palindrome list
 */
function countPalondrome(userString) {
  var palindromeList = [];

  let pointer = 1,
    pLength = 1;
  return new Promise((resolve, reject) => {
    while (pointer != userString.length - 1) {
      while (
        pointer - pLength > -1 &&
        pointer + pLength + 1 <= userString.length
      ) {
        palindromeList = checkForPalindrome(
          userString.substring(pointer - pLength, pointer + pLength + 1),
          palindromeList
        );
        palindromeList = checkForPalindrome(
          userString.substring(pointer - pLength, pointer + pLength),
          palindromeList
        );
        palindromeList = checkForPalindrome(
          userString.substring(pointer - pLength + 1, pointer + pLength + 1),
          palindromeList
        );
        pLength += 1;
      }
      pLength = 1;

      pointer += 1;
    }
    if (palindromeList.length != 0) {
      resolve(palindromeList);
    } else {
      reject("string doesnt have any palindrome");
    }
  });
}
/**
 *
 * @param {alphabetic character} char
 * @returns 1 if alphabet , otherwise 0
 */
const isUpperCase = (char) => {
  if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
    return 1;
  } else {
    return 0;
  }
};
const toLowerCase = (char) => {
  let unicodeValue = char.charCodeAt() + 32;

  return String.fromCharCode(unicodeValue);
};
/**
 * checks if a string is palindrome or not
 * @param {string combination} input
 * @param {list of palindrome } palindromeList
 * @returns palindrome list
 */
const checkForPalindrome = (input, palindromeList) => {
  let ispalindrome = true;
  if (input.length > 2) {
    for (let i = 0; i < input.length / 2; i++) {
      if (input[i] != input[input.length - 1 - i]) {
        ispalindrome = false;
      }
    }
    if (ispalindrome && !palindromeList.find((ele) => ele == input)) {
      palindromeList.push(input);
    }
  }

  return palindromeList;
};
