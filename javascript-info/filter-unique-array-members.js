/* 
Filter unique array members
importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  //
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
*/



// Solution 1
function unique(array) {
    const uniqueItemsArray= [];
    array.forEach(item => {
        if (!uniqueItemsArray.includes(item)) {
            uniqueItemsArray.push(item);
        }
    });

    return uniqueItemsArray;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(strings) ); // Hare, Krishna, :-O



  // The solution provided by the website
  function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(strings) ); // Hare, Krishna, :-O

  /* Javascript Sets, a collection of unique values, can improve performance and are preferred.*/