const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
    people.forEach(person => {
        const yearOfDeath = person.yearOfDeath || new Date().getFullYear();
        const personAge = yearOfDeath - person.yearOfBirth;
        person.age = personAge;
    });

    people.sort((a, b) => b.age - a.age);
    return people[0];
};

console.log(findTheOldest(people));


// Do not edit below this line
module.exports = findTheOldest;
