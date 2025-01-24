/* 
Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/


// Solution 1
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

function copySorted(array) {
    const copyArray = [];
    array.forEach(element => copyArray.push(element));

    return copyArray.sort();
}

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)


// The solution provided by the website
arr = ["HTML", "JavaScript", "CSS"];
sorted = copySorted(arr);

function copySorted(array) {
    return array.slice().sort();
}

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)
