const removeFromArray = function(array, ...removedElements) { // Rest parameter
    
    return array.filter(arrayElement => !removedElements.includes(arrayElement)); // Arrow function expression. Filter() identifies different types of data.
}
// Do not edit below this line
module.exports = removeFromArray;
