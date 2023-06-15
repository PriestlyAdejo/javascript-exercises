const repeatString = function(userInput, repeatFor) {
    let userString = userInput.toString();
    let outputString = "";

    if (repeatFor == 0) {
        return outputString
    } else if (repeatFor < 0) {
        return "ERROR"
    } else if (userInput.length == 0) {
        return outputString
    }
    for (let i=0; i<repeatFor; i++) {
        outputString += userString
    }
    return outputString
};

// Do not edit below this line
module.exports = repeatString;
