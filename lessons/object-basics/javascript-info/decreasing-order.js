/* 
Sort in decreasing order
importance: 4
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10
*/


// Solution 1
let arr = [5, 2, 1, -10, 8, 10];
console.log("Before: " + arr ); // 5, 2, 1, -10, 8, 10
arr.sort((number1, number2) => number1 - number2).reverse();
console.log("After: " + arr ); // 10, 8, 5, 2, 1, -10

// Solution 2
arr = [5, 2, 1, -10, 8, 10];
console.log("Before: " + arr ); // 5, 2, 1, -10, 8, 10
arr.sort((number1, number2) => number2 - number1);
console.log("After: " + arr ); // 10, 8, 5, 2, 1, -10
