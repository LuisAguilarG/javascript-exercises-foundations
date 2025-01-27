const palindromes = function (rawString) {
    const string = rawString.replace(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    const reverseString = string.split("").reverse().join("");

    return string.localeCompare(reverseString, undefined, {sensitivity: "base"}) === 0;
};

// Do not edit below this line
module.exports = palindromes;
