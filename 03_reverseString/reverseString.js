const reverseString = function(inputString) {
    let reversedString = "";

    while (inputString.length > 0) {

        reversedString += inputString[inputString.length - 1]
        inputString = inputString.substring(0, inputString.length - 1)
        console.log(reversedString);
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
