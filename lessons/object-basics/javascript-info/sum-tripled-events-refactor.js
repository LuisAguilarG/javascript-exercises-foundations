/* 
Rewrite the sumOfTripledEvens(array) function using these three methods (filter, map, reduce).

function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}
*/


// Solution 1
const array = [1, 2, 3, 4, 5];

function sumOfTripledEvens(array) {
    let sum = array
        .filter((element) => element % 2 === 0)
        .map((element) => element * 3)
        .reduce((total, element) => total + element);

    return sum;
}


console.log("Array: " + array);
console.log("Sum of tripled evens: " + sumOfTripledEvens(array));
console.log("All methods used here create a new array and do not modify the original array.");
