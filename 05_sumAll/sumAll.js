const sumAll = function(number1, number2) {
    let sum = 0;
    let smallestNumber;
    let largestNumber;
    const isNumber = typeof number1 === 'number' &&  typeof number2 === 'number';
    const isPositive = number1 >= 0 && number2 >= 0;

    if (isNumber && isPositive) {
        smallestNumber = Math.min(number1, number2);
        largestNumber = Math.max(number1, number2);

        for (let tempNumber = smallestNumber; tempNumber <= largestNumber; tempNumber++) {
            sum += tempNumber;
        }

        return sum;
    } else {

        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
