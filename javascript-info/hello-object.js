
/* 
Write the code, one line for each action:

1 Create an empty object user.
2 Add the property name with the value John.
3 Add the property surname with the value Smith.
4 Change the value of the name to Pete.
5 Remove the property name from the object.
*/


// Solution 1
const user = {
    
};

user['name'] = 'John'; // Alternative: user.name = "John"
user['surname'] = 'Smith'; // Alternative: user.surname = "Smith"
user['name'] = 'Pete'; // Alternative: user.name = "Pete"
delete user['name']; // Alternative: delete user.name

console.log(user['name']);
console.log(user['surname']);
console.log(user);


// Test: https://playcode.io/javascript