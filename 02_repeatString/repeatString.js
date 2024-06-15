const repeatString = function(givenString, times) {
    let result = '';

    if (times >= 0) {
        for (let i = 0; i < times; i++) {
            result += givenString;
        }
        
        return result;
    } 

    return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
