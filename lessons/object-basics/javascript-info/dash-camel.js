/* 
Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.


*/


// My solution
function camelize(str) {
    return str
        .split("-")
        .map((word, index) => {
            if (index == 0) {
                return word;
            } else {
                let upperCaseWord = word.split("");
                upperCaseWord.splice(0, 1, upperCaseWord[0].toUpperCase());
                return upperCaseWord.join("");
            }
        })
        .join("");
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');


// The solution provided by the website
function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }

  console.log(camelize("background-color") == 'backgroundColor');
  console.log(camelize("list-style-image") == 'listStyleImage');
  console.log(camelize("-webkit-transition") == 'WebkitTransition');
