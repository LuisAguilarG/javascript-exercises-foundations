
/* Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. */

// Solution 1
function isEmpty(obj) {

  for (let property in obj) {
    return false;
  }

  return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

