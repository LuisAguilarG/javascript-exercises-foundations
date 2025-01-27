const fibonacci = function(totalTerms) {
    let penultimateFibNumber = 0;
    let lastFibNumber = 1;
    let currentFibNumber = 0;

    if (totalTerms < 0) {
        return "OOPS";
    }

    for (let term = 1; term <= totalTerms; term++) {
        if (term == 1) {
            currentFibNumber = 1;
        } else if (term > 1) {
            currentFibNumber = penultimateFibNumber + lastFibNumber;
            penultimateFibNumber = lastFibNumber;
            lastFibNumber = currentFibNumber;
        }
    }
    return currentFibNumber;
};


// Do not edit below this line
module.exports = fibonacci;
