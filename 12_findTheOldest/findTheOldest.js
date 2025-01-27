const findTheOldest = function (peopleArray) {
    return peopleArray.reduce((oldestPerson, currentPerson) => {
        const ageOldestPerson = "yearOfDeath" in oldestPerson ? (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) : (new Date().getFullYear() - oldestPerson.yearOfBirth);
        const ageCurrentPerson = "yearOfDeath" in currentPerson ? (currentPerson.yearOfDeath - currentPerson.yearOfBirth) : (new Date().getFullYear() - currentPerson.yearOfBirth);
        
        /* 
        console.log("Comparison -------");
        console.log(oldestPerson.name + ": " + ageOldestPerson);
        console.log(currentPerson.name + ": " + ageCurrentPerson);
         */

        return ageOldestPerson > ageCurrentPerson ? oldestPerson : currentPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
