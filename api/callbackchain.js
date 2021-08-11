
const f1 = function (userInput, callback) {
    if (userInput) {
        console.log("user string:\t", userInput);
        callback(userInput);
    } else {
        return console.log("enter a string");
    }
};
const f2 = (userInput, callback) => {
    var lowerString = "";
    for (charIndex in userInput) {
        let char = userInput[charIndex];

        if (isUpperCase(char)) {
            lowerString += toLowerCase(char);
        } else {
            lowerString += char;
        }
    }
    console.log("lower case\t", lowerString);
    callback(lowerString);
};
const f3 = (input, callback) => {
    if (input.length == 0) {
        return console.log("no string remained for further process");
    }
    let WhiteSpaceRemoved = "";
    for (char of input) {
        if (char != " ") {
            WhiteSpaceRemoved += char;
        }
    }
    console.log('whitespace\t', WhiteSpaceRemoved);
    callback(WhiteSpaceRemoved);
};
const f4 = (input, callback) => {
    if (input.length == 0) {
        return console.log("no string remained for further process");
    }
    let numericRemoved = "";
    for (char of input) {
        if (isNaN(char)) {
            numericRemoved += char;
        }
    }
    console.log("number removed\t", numericRemoved);
    callback(numericRemoved);
};

const f5 = (input, callback) => {
    var palindromeList = [];
    if (input.length <1) {
        return console.log("string length is not sufficient");
    }
    else if(input.length==1){
        return console.log("count:1");
    }
    else if(input.length==2){
        count=checkForPalindrome(input,palindromeList)
        console.log("count:",count);
    }

    let userString = input;
    

    let pointer = 1,
        pLength = 1;
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
    // console.log(palindromeList);
    console.log("Total no of palingdrome\t", palindromeList);
    callback(palindromeList.length);
};
const checkForPalindrome = (input, palindromeList) => {
    let ispalindrome = true;
    if (input.length > 1) {
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

// const isLowerCase = (char) => {
//     if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
//         return 1;
//     } else {
//         return 0;
//     }
// };
const toLowerCase = (char) => {
    let unicodeValue = char.charCodeAt() + 32;

    return String.fromCharCode(unicodeValue);
};
const isUpperCase = (char) => {
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
        return 1;
    } else {
        return 0;
    }
};

// module.exports = {
//     f1, f2, f3, f4, f5

// }
var Input = process.argv[2];
console.log(" user Input");
f1(Input, (userInput) => {
    f2(userInput, (loweredcasedata) => {
        f3(loweredcasedata, (spaceremoved) => {
            f4(spaceremoved, (numberremoved) => {
                f5(numberremoved, (pelingdrom) => {
                    console.log(pelingdrom);
                });
            });
        });
    });
});


// palingdrom
// const palingdrom=function(s){
//     let res =" ";
//     if (!s) return res;
//     for(let i=0;i<s.length;i++){
//         for(let j=0;j<2;j++){

//             let left =i;
//             let right=i+j;
//             while(left>=0 && right<=s.length&& s[length]==s[right]){
//                 left--;
//                 right++

//             }
//             let start =left+1;
//             let end=right;
//             let subString=S.slice(start,end);
//             if (res.length<subString.length){
//                 res=subString
//         }
//     }
// }
// return res;
// };