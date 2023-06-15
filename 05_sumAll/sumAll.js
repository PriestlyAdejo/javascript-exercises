const sumAll = function(integer1, integer2) {
    if ((integer1 < 0) || (integer2 < 0)) {
        return "ERROR"
    } else if ((typeof integer1 != "number") ||
               (typeof integer2 != "number")) {
        return "ERROR"
    } else if (integer1 < integer2) {
        return sumAllForInteger(integer1, integer2)
    }
    return sumAllForInteger(integer2, integer1)
};

const sumAllForInteger = function(integer1, integer2) {
    let runningTotal = 0;
    for (let i = integer1; i<=integer2; i++) {
        runningTotal += i
    }
    return runningTotal
}

// Do not edit below this line
module.exports = sumAll;
