const reverseString = function(givenString) {
    let result = '';

    for (let i = givenString.length - 1; i >= 0; i--) {
        result += givenString[i];
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
