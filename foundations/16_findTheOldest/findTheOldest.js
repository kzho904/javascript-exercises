const findTheOldest = function(people) {
  oldest = people.reduce((oldest, current) => {
    const currentYear = new Date().getFullYear();
    let age;
    let maxAge;
    if (oldest == 0) {
      return current;
    }
    if (current.yearOfDeath === undefined) {
      age = currentYear - current.yearOfBirth;
    } else {
      age = current.yearOfDeath - current.yearOfBirth;
    }
    if (oldest.yearOfDeath === undefined) {
      maxAge = currentYear - oldest.yearOfBirth;
    } else {
      maxAge = oldest.yearOfDeath - oldest.yearOfBirth;
    }
    if (age > maxAge) {
      return current;
    }
    return oldest;
  }, 0)
  return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
